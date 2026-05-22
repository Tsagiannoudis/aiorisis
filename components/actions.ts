'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(formData: FormData) {
  try {
    // Λήψη των δεδομένων από το formData
    const fullname = formData.get('fullname') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    // Βασικό validation
    if (!fullname || !email || !message) {
      return { success: false, error: 'Παρακαλώ συμπληρώστε τα υποχρεωτικά πεδία (Όνομα, Email, Μήνυμα).' };
    }

    const { data, error } = await resend.emails.send({
      from: 'Aiorisis Web <onboarding@resend.dev>', // Αργότερα βάλε το δικό σου domain
      to: 'info@aiorisis.gr', // Το email που θα λάβει το μήνυμα
      reply_to: email, // Για να μπορείς να πατήσεις "Απάντηση" απευθείας στον χρήστη
      subject: `Νέα επικοινωνία: ${subject}`,
      html: `
        <h2>Νέο μήνυμα από τη φόρμα επικοινωνίας</h2>
        <p><strong>Όνομα:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Τηλέφωνο:</strong> ${phone || 'Δεν δόθηκε'}</p>
        <p><strong>Θέμα:</strong> ${subject}</p>
        <p><strong>Μήνυμα:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    return { success: false, error: 'Κάτι πήγε στραβά.' };
  }
}
