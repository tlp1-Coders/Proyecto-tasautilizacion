import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const resendEmail = async (email, token) => {
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Hello World',
    //    html: ` <p>${token.token}</p>`
        html: ` <p>Click <a href="${process.env.FRONTEND_URL}updatePassword?token=${token.token}">here</a> to reset your password</p>`
    })
    if (!resend) {
        return false;
    }
    return true
};
