'use server'
import { Resend } from 'resend';

export async function SendEmail(sendTo:string, subject:string, body:string) {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: [sendTo],
        subject: subject,
        html: body,
    });

    if ( error ) {
        console.log('Error: ', error);
    }

    console.log('Data: ', data);

}