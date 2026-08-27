import { useState } from 'react';
import { 
  ShieldCheck, MessageCircle, X, AlertTriangle, CheckCircle2, RefreshCcw
} from 'lucide-react';
import { generateAuditPDF } from '../../utils/pdfGenerator';
import { getHealthDiagnosis, calculateScore, getTopPriorityAreas, overallHealthOptions } from '../../data/freeAuditData';

export default function AuditResultModal({
  isOpen,
  onClose,
  formData,
  ratings,
  comments,
  overallHealth,
  onReset
}) {
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const scoreData = calculateScore(ratings);
  const diagnosis = getHealthDiagnosis(scoreData.score);
  const priorityAreas = getTopPriorityAreas(ratings);
  const overallObj = overallHealthOptions.find((h) => h.code === overallHealth) || { label: 'Not Selected' };

  // WhatsApp Message Composer
  const priorityListText = priorityAreas.map((p, i) => `${i + 1}. ${p.name} (Rating: ${p.ratingCode})`).join('\n');
  const waMessage = `*GROW FREE ORGANIZATIONAL HEALTH AUDIT SUBMISSION*\n\n` +
    `*Organization:* ${formData.organizationName || 'N/A'}\n` +
    `*Contact Person:* ${formData.contactPerson || 'N/A'} (${formData.designation || 'N/A'})\n` +
    `*Phone:* ${formData.mobilePhone || 'N/A'} | *Email:* ${formData.email || 'N/A'}\n` +
    `*Nature of Org:* ${formData.natureOfOrganization || 'N/A'}\n` +
    `*Team:* ${formData.noOfEmployees || 'N/A'} | *Turnover:* ${formData.turnover || 'N/A'}\n\n` +
    `📊 *DIAGNOSTIC HEALTH SCORE:* ${scoreData.score} / 48 (${scoreData.percentage}% Maturity Index)\n` +
    `🏷️ *Diagnosis Level:* ${diagnosis.level}\n` +
    `⭐ *Self-Assessment:* ${overallObj.label} (${overallHealth || 'N/A'})\n\n` +
    `⚠️ *Top 5 Priority Gap Areas:*\n${priorityListText}\n\n` +
    `📎 *Note:* I have submitted the questionnaire and downloaded the official PDF audit report to share with GROW India.`;

  const waUrl = `https://wa.me/919405751665?text=${encodeURIComponent(waMessage)}`;

  // Single Direct Submit Handler: Generates PDF + Downloads + Opens WhatsApp with payload
  const handleSubmitToWhatsApp = async () => {
    try {
      setSubmitting(true);
      const doc = await generateAuditPDF(formData, ratings, comments, overallHealth);
      const safeOrgName = (formData.organizationName || 'Client').replace(/[^a-zA-Z0-9]/g, '_');
      const filename = `GROW_Business_Health_Audit_${safeOrgName}.pdf`;

      // 1. Download/Save the PDF file
      doc.save(filename);

      const pdfBlob = doc.output('blob');
      const pdfFile = new File([pdfBlob], filename, { type: 'application/pdf' });

      // 2. Try native mobile share (iOS Safari, Android Chrome) with file attached
      if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
        await navigator.share({
          files: [pdfFile],
          title: `GROW Business Health Audit - ${formData.organizationName || 'Client'}`,
          text: waMessage
        });
      } else {
        // Desktop / standard browser: open WhatsApp chat directly
        window.open(waUrl, '_blank');
      }
    } catch (err) {
      console.error('Submission error:', err);
      window.open(waUrl, '_blank');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs p-2 sm:p-4 flex flex-col items-center justify-start sm:justify-center min-h-screen py-4 sm:py-8 animate-in fade-in duration-150">
      
      {/* Light Mode Card */}
      <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl max-w-2xl w-full text-slate-900 shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[88vh] my-auto overflow-hidden relative animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="shrink-0 bg-slate-50 border-b border-slate-200 p-4 sm:p-5 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 rounded-full bg-slate-200/90 hover:bg-slate-300 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="text-center space-y-1 pr-6 sm:pr-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>Assessment Completed</span>
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Business Health <span className="text-amber-600">Diagnostic Scorecard</span>
            </h2>
            <p className="text-xs text-slate-600 truncate max-w-md mx-auto">
              Diagnostic Summary for <strong className="text-slate-900">{formData.organizationName || 'Your Organization'}</strong>
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-white">
          
          {/* Score & Diagnosis Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4">
            
            {/* Score Box */}
            <div className="sm:col-span-5 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center text-center shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block">
                Total Systems Score
              </span>
              
              <div className="flex items-baseline gap-1 my-1">
                <span className="font-display text-4xl sm:text-5xl font-black text-slate-950">
                  {scoreData.score}
                </span>
                <span className="text-lg text-slate-500 font-bold">/ 48</span>
              </div>

              <div className="w-full bg-slate-200 rounded-full h-2.5 mt-1 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    scoreData.score >= 40 ? 'bg-emerald-500' : scoreData.score >= 28 ? 'bg-amber-500' : 'bg-rose-500'
                  }`}
                  style={{ width: `${scoreData.percentage}%` }}
                />
              </div>

              <div className="flex items-center justify-between w-full text-[11px] font-bold text-slate-600 mt-2 px-0.5">
                <span>{scoreData.percentage}% Maturity</span>
                <span className="text-slate-400">12 Vectors Rated</span>
              </div>
            </div>

            {/* Diagnosis Card */}
            <div className="sm:col-span-7 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Health Level
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                  scoreData.score >= 40 
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
                    : scoreData.score >= 28 
                    ? 'bg-amber-50 text-amber-800 border-amber-300' 
                    : 'bg-rose-50 text-rose-800 border-rose-300'
                }`}>
                  {diagnosis.level}
                </span>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed">
                {diagnosis.summary}
              </p>

              <div className="p-2 rounded-xl bg-amber-50/90 border border-amber-200/90 text-[11px] text-amber-950 font-medium leading-snug">
                <strong className="text-amber-800 font-bold">Recommendation:</strong> {diagnosis.recommendation}
              </div>
            </div>

          </div>

          {/* Top 5 Priority Improvement Areas */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Top 5 Priority Improvement Areas</span>
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {priorityAreas.map((pa, idx) => (
                <div 
                  key={pa.id}
                  className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200 text-xs shadow-2xs gap-2"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-800 font-bold text-[11px] flex items-center justify-center shrink-0 border border-slate-200">
                      {idx + 1}
                    </span>
                    <span className="text-slate-800 font-semibold text-xs leading-snug">
                      {pa.name}
                    </span>
                  </div>

                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase shrink-0 border ${
                    pa.ratingCode === 'A' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                    pa.ratingCode === 'B' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                    pa.ratingCode === 'C' ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    Rating {pa.ratingCode}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SINGLE DIRECT SUBMIT BUTTON TO WHATSAPP */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleSubmitToWhatsApp}
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm sm:text-base shadow-lg transition-all transform active:scale-98 cursor-pointer disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <RefreshCcw className="w-5 h-5 animate-spin shrink-0" />
                  <span>Preparing PDF & Opening WhatsApp...</span>
                </>
              ) : (
                <>
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Send PDF on WhatsApp (+91 94057 51665)</span>
                </>
              )}
            </button>
            <p className="text-center text-[11px] text-slate-500 mt-2">
              Automatically generates your official 2-page PDF and sends it directly to GROW (+91 94057 51665).
            </p>
          </div>

        </div>

        {/* Simple Footer */}
        <div className="shrink-0 p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={onReset}
            className="text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
          >
            Retake Audit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
          >
            Edit Answers
          </button>
        </div>

      </div>
    </div>
  );
}
