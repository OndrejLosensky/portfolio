import { Resend } from 'resend';

import { SpaceJellyLoginCodeEmail } from '@/app/emails/login';

const resend = new Resend('re_EXyo2Cpd_LFcRQpPsu12C9fDZZmnTrRmj');

export async function POST(request: Request) {
  const { validationCode } = await request.json();

  const results = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'losenskyondrej@gmail.com',
    subject: 'Ondřej Losenský - novinky',
    react: SpaceJellyLoginCodeEmail({
      validationCode
    })
  });

  return Response.json({
    data: results
  });
}