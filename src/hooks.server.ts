import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import { GOOGLE_OAUTH_CLIENT_ID, GOOGLE_OAUTH_CLIENT_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
  providers: [
    Google({ clientId: GOOGLE_OAUTH_CLIENT_ID, clientSecret: GOOGLE_OAUTH_CLIENT_SECRET })
  ]
});
