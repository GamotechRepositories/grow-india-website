import { jsPDF } from 'jspdf';
import { auditSections, ratingScale, overallHealthOptions, calculateScore, getTopPriorityAreas } from '../data/freeAuditData';
import { contactDetails } from '../data/contact';

/**
 * Generates an official, high-resolution, multi-page vector PDF
 * matching the GROW Free Business Health Audit Questionnaire design.
 */
export const generateAuditPDF = async (formData, ratings, comments, overallHealth) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 10;
  const contentWidth = pageWidth - margin * 2;

  // Colors
  const navyDark = [10, 17, 40];
  const goldPrimary = [197, 155, 39];
  const goldLight = [247, 235, 199];
  const slateDark = [30, 41, 59];
  const slateGray = [100, 116, 139];
  const slateLight = [241, 245, 249];
  const borderGray = [203, 213, 225];

  const scoreData = calculateScore(ratings);
  const priorityAreas = getTopPriorityAreas(ratings);

  // Helper for drawing header on page
  const drawPageHeader = (pageNumber, totalPages) => {
    // Top navy block
    doc.setFillColor(...navyDark);
    doc.rect(0, 0, pageWidth, 28, 'F');

    // Gold accent top bar
    doc.setFillColor(...goldPrimary);
    doc.rect(0, 0, pageWidth, 2, 'F');

    // GROW emblem text / branding
    doc.setTextColor(255, 215, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('GROW', margin, 9);

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.text('GOVIND RAADHAA ORGANIZATIONAL WONDERS', margin + 20, 7.5);

    doc.setTextColor(203, 213, 225);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6);
    doc.text('BUSINESS GROWTH AND SYSTEMS PARTNER INDIA  |  GRC • Transformation • SOP • KRA', margin + 20, 11);

    // Title on right/center
    doc.setTextColor(255, 215, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('GROW FREE AUDIT QUESTIONNAIRE', pageWidth - margin, 8.5, { align: 'right' });

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.text('ORGANIZATIONAL HEALTH CHECK', pageWidth - margin, 13, { align: 'right' });

    // Sub-banner with Applicable categories
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(margin, 16.5, contentWidth, 9.5, 1.5, 1.5, 'F');

    doc.setTextColor(...navyDark);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.text('A SHORT SELF-ASSESSMENT TOOL FOR ORGANIZATIONS', margin + 3, 20.5);

    doc.setTextColor(...goldPrimary);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6);
    doc.text('Identify Strengths. Detect Gaps. Improve Systems. Drive Growth.', margin + 3, 24);

    doc.setTextColor(...slateGray);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.2);
    doc.text('CORPORATE • MSME • START-UP • NGO • TRUST • INSTITUTION • GOVT / PSU', pageWidth - margin - 3, 22, { align: 'right' });
  };

  // Helper for footer on every page
  const drawPageFooter = (pageNumber, totalPages) => {
    const footerY = pageHeight - 12;

    doc.setFillColor(...navyDark);
    doc.rect(0, footerY, pageWidth, 12, 'F');

    doc.setFillColor(...goldPrimary);
    doc.rect(0, footerY, pageWidth, 0.8, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.8);

    const contactLine1 = `WhatsApp / Phone: +91 94057 51665   |   Email: ${contactDetails.email}   |   Web: grow-india-website.onrender.com/about`;
    const contactLine2 = `Instagram: @growbusinesspartner   |   Facebook: /GROWIndia   |   LinkedIn: /Govind Raadhaa Organizational Wonders`;

    doc.text(contactLine1, pageWidth / 2, footerY + 4.5, { align: 'center' });
    doc.text(contactLine2, pageWidth / 2, footerY + 8.5, { align: 'center' });

    doc.setTextColor(...goldPrimary);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6);
    doc.text(`Page ${pageNumber} of ${totalPages}`, pageWidth - margin, footerY + 6.5, { align: 'right' });
  };

  // ==========================================
  // PAGE 1: Header, Org Details, Instructions, Questions 1 - 7
  // ==========================================
  drawPageHeader(1, 2);

  let currentY = 29;

  // Organization Details Card
  doc.setFillColor(...slateLight);
  doc.setDrawColor(...borderGray);
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, currentY, contentWidth, 31, 1.5, 1.5, 'FD');

  doc.setFillColor(...navyDark);
  doc.rect(margin, currentY, contentWidth, 5, 'F');
  doc.setTextColor(255, 215, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.8);
  doc.text('ORGANIZATION DETAILS & BASIC INFORMATION', margin + 3, currentY + 3.6);

  currentY += 7;

  // Details fields grid (2 columns)
  const col1X = margin + 3;
  const col2X = margin + (contentWidth / 2) + 2;
  const labelWidth = 32;

  const renderField = (x, y, label, value) => {
    doc.setTextColor(...slateDark);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.2);
    doc.text(`${label}:`, x, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(15, 23, 42);
    const safeVal = value || '—';
    doc.text(doc.splitTextToSize(String(safeVal), 56)[0] || '—', x + labelWidth, y);
  };

  renderField(col1X, currentY + 2, 'Organization Name', formData.organizationName);
  renderField(col2X, currentY + 2, 'Nature of Org.', formData.natureOfOrganization);

  renderField(col1X, currentY + 7, 'Address / Location', `${formData.address ? formData.address + ', ' : ''}${formData.city || ''}, ${formData.state || ''}`);
  renderField(col2X, currentY + 7, 'Contact Person', formData.contactPerson);

  renderField(col1X, currentY + 12, 'Email Address', formData.email);
  renderField(col2X, currentY + 12, 'Designation', formData.designation);

  renderField(col1X, currentY + 17, 'Mobile / Phone', formData.mobilePhone);
  renderField(col2X, currentY + 17, 'Est. Year / Team', `${formData.yearOfEstablishment || '—'} | ${formData.noOfEmployees ? formData.noOfEmployees + ' Employees' : '—'}`);

  renderField(col1X, currentY + 22, 'Approx Turnover', formData.turnover);
  renderField(col2X, currentY + 22, 'Date Submitted', new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }));

  currentY += 27;

  // Instructions & Rating Options Bar
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(...borderGray);
  doc.roundedRect(margin, currentY, contentWidth, 13.5, 1, 1, 'FD');

  doc.setTextColor(...navyDark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.5);
  doc.text('INSTRUCTIONS:', margin + 3, currentY + 4);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(5.8);
  doc.setTextColor(...slateDark);
  doc.text('Please review each function and select the rating option (A / B / C / D) that best describes current status:', margin + 3, currentY + 8);

  // Rating key badges
  const ratingKeys = [
    { code: 'A', text: 'Fully Established' },
    { code: 'B', text: 'Partially Established' },
    { code: 'C', text: 'Not Established' },
    { code: 'D', text: 'Not Applicable' }
  ];

  let rX = margin + 3;
  ratingKeys.forEach((rk) => {
    doc.setFillColor(...slateLight);
    doc.roundedRect(rX, currentY + 9.2, 44, 3.5, 0.5, 0.5, 'F');
    doc.setTextColor(...navyDark);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    doc.text(rk.code, rX + 1.5, currentY + 11.8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...slateDark);
    doc.text(`— ${rk.text}`, rX + 5.5, currentY + 11.8);
    rX += 46.5;
  });

  currentY += 15.5;

  // Table Header
  // Table Header
  const colNoW = 8;
  const colAreaW = 38;
  const colQuestW = 78;
  const colRatingW = 32;
  const colCommentW = contentWidth - colNoW - colAreaW - colQuestW - colRatingW;

  const drawTableHeader = (y) => {
    doc.setFillColor(...navyDark);
    doc.rect(margin, y, contentWidth, 6, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);

    doc.text('NO.', margin + 1.5, y + 4.2);
    doc.text('FUNCTION / AREA', margin + colNoW + 2, y + 4.2);
    doc.text('KEY QUESTIONS (2 PER DEPT)', margin + colNoW + colAreaW + 2, y + 4.2);
    doc.text('RATINGS (A / B / C / D)', margin + colNoW + colAreaW + colQuestW + 2, y + 4.2);
    doc.text('COMMENTS', margin + colNoW + colAreaW + colQuestW + colRatingW + 2, y + 4.2);
  };

  drawTableHeader(currentY);
  currentY += 6;

  // Render Rows 1 to 7 on Page 1
  const renderRow = (sec, isLastOnPage) => {
    const rowHeight = 23;
    const isEven = sec.id % 2 === 0;

    doc.setFillColor(isEven ? 255 : 248, isEven ? 255 : 250, isEven ? 255 : 252);
    doc.setDrawColor(...borderGray);
    doc.setLineWidth(0.2);
    doc.rect(margin, currentY, contentWidth, rowHeight, 'FD');

    // Number
    doc.setTextColor(...navyDark);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.text(sec.number, margin + 2.5, currentY + 5);

    // Area Name
    doc.setTextColor(...slateDark);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.2);
    const areaLines = doc.splitTextToSize(sec.name, colAreaW - 4);
    doc.text(areaLines, margin + colNoW + 2, currentY + 5);

    // Question 1 and Question 2 Text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.2);
    doc.setTextColor(51, 65, 85);
    const q1Text = `1. ${sec.questions[0]}`;
    const q2Text = `2. ${sec.questions[1]}`;
    const q1Lines = doc.splitTextToSize(q1Text, colQuestW - 4);
    const q2Lines = doc.splitTextToSize(q2Text, colQuestW - 4);

    const q1Y = currentY + 4.5;
    const q2Y = currentY + 14.5;

    doc.text(q1Lines, margin + colNoW + colAreaW + 2, q1Y);
    doc.text(q2Lines, margin + colNoW + colAreaW + 2, q2Y);

    // Helper to draw A B C D checkboxes
    const ratingStartX = margin + colNoW + colAreaW + colQuestW + 2;
    const drawCheckboxGroup = (selectedRating, startY, label) => {
      doc.setTextColor(...slateDark);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(4.8);
      doc.text(label, ratingStartX, startY - 0.5);

      ['A', 'B', 'C', 'D'].forEach((opt, idx) => {
        const optX = ratingStartX + idx * 7;
        const optY = startY + 0.5;
        const isSelected = selectedRating === opt;

        doc.setDrawColor(...borderGray);
        doc.setFillColor(isSelected ? 10 : 255, isSelected ? 17 : 255, isSelected ? 40 : 255);
        doc.roundedRect(optX, optY, 4.5, 4.2, 0.5, 0.5, isSelected ? 'FD' : 'D');

        doc.setTextColor(isSelected ? 255 : 30, isSelected ? 215 : 41, isSelected ? 0 : 59);
        doc.setFont('helvetica', isSelected ? 'bold' : 'normal');
        doc.setFontSize(5);
        doc.text(opt, optX + 1.3, optY + 3.1);

        if (isSelected) {
          doc.setFillColor(...goldPrimary);
          doc.circle(optX + 2.25, optY + 5.5, 0.6, 'F');
        }
      });
    };

    // Draw Q1 Checkboxes and Q2 Checkboxes
    const q1Rating = ratings[`${sec.id}_1`];
    const q2Rating = ratings[`${sec.id}_2`];

    drawCheckboxGroup(q1Rating, currentY + 2.5, 'Q1:');
    drawCheckboxGroup(q2Rating, currentY + 12.5, 'Q2:');

    // Comment
    const userComment = comments[sec.id];
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(5);
    doc.setTextColor(...slateGray);
    if (userComment && userComment.trim() !== '') {
      const commentLines = doc.splitTextToSize(`"${userComment}"`, colCommentW - 4);
      doc.text(commentLines, margin + colNoW + colAreaW + colQuestW + colRatingW + 2, currentY + 5);
    } else {
      doc.text('—', margin + colNoW + colAreaW + colQuestW + colRatingW + 2, currentY + 5);
    }

    currentY += rowHeight;
  };

  // Questions 1 to 7 on page 1
  auditSections.slice(0, 7).forEach((sec, idx) => {
    renderRow(sec, idx === 6);
  });

  drawPageFooter(1, 2);

  // ==========================================
  // PAGE 2: Header, Questions 8 - 12, Overall Self-Assessment, Score Box, Return Info & Footer
  // ==========================================
  doc.addPage();
  drawPageHeader(2, 2);

  currentY = 29;

  drawTableHeader(currentY);
  currentY += 6;

  // Questions 8 to 12 on page 2
  auditSections.slice(7, 12).forEach((sec, idx) => {
    renderRow(sec, idx === 4);
  });

  currentY += 3;

  // ----------------------------------------------------
  // Bottom Summary Section: Overall Self Assessment & Score Box
  // ----------------------------------------------------
  const bottomBoxHeight = 44;

  // Left Box: Overall Self-Assessment
  const leftBoxW = 90;
  doc.setFillColor(...slateLight);
  doc.setDrawColor(...borderGray);
  doc.roundedRect(margin, currentY, leftBoxW, bottomBoxHeight, 1.5, 1.5, 'FD');

  doc.setFillColor(...navyDark);
  doc.rect(margin, currentY, leftBoxW, 5, 'F');
  doc.setTextColor(255, 215, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.5);
  doc.text('OVERALL SELF-ASSESSMENT (OPTIONAL)', margin + 3, currentY + 3.6);

  doc.setTextColor(...slateDark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6);
  doc.text('How would you rate your overall organizational health?', margin + 3, currentY + 10);

  // 4 Option badges
  const healthXStart = margin + 3;
  let hY = currentY + 13.5;
  overallHealthOptions.forEach((opt) => {
    const isSelected = overallHealth === opt.code;
    doc.setFillColor(isSelected ? 10 : 255, isSelected ? 17 : 255, isSelected ? 40 : 255);
    doc.setDrawColor(...borderGray);
    doc.roundedRect(healthXStart, hY, leftBoxW - 6, 6, 1, 1, 'FD');

    doc.setTextColor(isSelected ? 255 : 15, isSelected ? 215 : 23, isSelected ? 0 : 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(5.8);
    doc.text(`${opt.code} — ${opt.label}`, healthXStart + 3, hY + 4.2);

    if (isSelected) {
      doc.setTextColor(203, 213, 225);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(5);
      doc.text('(Selected by Client)', healthXStart + leftBoxW - 32, hY + 4.2);
    }

    hY += 7;
  });

  // Right Box: FOR GROW USE ONLY / SCORE / TOP 5 PRIORITY AREAS
  const rightBoxX = margin + leftBoxW + 4;
  const rightBoxW = contentWidth - leftBoxW - 4;

  doc.setFillColor(254, 252, 232); // Amber light tint
  doc.setDrawColor(...goldPrimary);
  doc.setLineWidth(0.4);
  doc.roundedRect(rightBoxX, currentY, rightBoxW, bottomBoxHeight, 1.5, 1.5, 'FD');

  doc.setFillColor(...goldPrimary);
  doc.rect(rightBoxX, currentY, rightBoxW, 5, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.5);
  doc.text('FOR GROW USE ONLY  •  SYSTEMS AUDIT SCORE', rightBoxX + 3, currentY + 3.6);

  // Score display
  doc.setTextColor(...navyDark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('SYSTEMS SCORE:', rightBoxX + 3, currentY + 12);

  doc.setTextColor(...goldPrimary);
  doc.setFontSize(15);
  doc.text(`${scoreData.score}`, rightBoxX + 33, currentY + 13.5);

  doc.setTextColor(...slateGray);
  doc.setFontSize(8);
  doc.text(`/ ${scoreData.maxScore}  (${scoreData.percentage}%)`, rightBoxX + 44, currentY + 12);

  // Top 5 Priority Areas
  doc.setTextColor(...navyDark);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6);
  doc.text('TOP 5 PRIORITY INTERVENTION AREAS:', rightBoxX + 3, currentY + 18.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(5.2);
  doc.setTextColor(...slateDark);

  let pY = currentY + 23;
  priorityAreas.forEach((pa, idx) => {
    doc.setTextColor(...slateDark);
    doc.text(`${idx + 1}. ${pa.name}`, rightBoxX + 3, pY);
    doc.setTextColor(...goldPrimary);
    doc.text(`[Avg: ${pa.ratingCode}]`, rightBoxX + rightBoxW - 16, pY);
    pY += 3.8;
  });

  currentY += bottomBoxHeight + 3;

  // ----------------------------------------------------
  // Submission & Return Details + Commitment Box
  // ----------------------------------------------------
  const returnBoxH = 26;
  doc.setFillColor(...navyDark);
  doc.roundedRect(margin, currentY, contentWidth, returnBoxH, 1.5, 1.5, 'F');

  // Left side: Please return
  doc.setTextColor(255, 215, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.8);
  doc.text('PLEASE RETURN THE COMPLETED FORM TO US', margin + 4, currentY + 5);

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(5.8);
  doc.text(`Email: ${contactDetails.email}`, margin + 4, currentY + 9.5);
  doc.text(`WhatsApp: +91 94057 51665`, margin + 4, currentY + 13.5);
  doc.setTextColor(203, 213, 225);
  doc.text('We will analyze and share a summary report with key observations and improvement suggestions.', margin + 4, currentY + 18, {
    maxWidth: 95
  });

  // Middle/Right: Our Commitment
  doc.setFillColor(19, 30, 61);
  doc.roundedRect(margin + 102, currentY + 3, contentWidth - 106, returnBoxH - 6, 1, 1, 'F');

  doc.setTextColor(...goldPrimary);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(6.5);
  doc.text('OUR COMMITMENT & CONFIDENTIALITY', margin + 105, currentY + 7.5);

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(5.5);
  const commitText =
    'Your responses are strictly confidential and will be used only for organizational diagnosis, improvement recommendations, and growth advisory.';
  doc.text(doc.splitTextToSize(commitText, contentWidth - 112), margin + 105, currentY + 12);

  doc.setTextColor(255, 215, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(5.8);
  doc.text('THANK YOU for partnering with GROW in building stronger systems & sustainable growth.', margin + 105, currentY + 20);

  drawPageFooter(2, 2);

  return doc;
};
