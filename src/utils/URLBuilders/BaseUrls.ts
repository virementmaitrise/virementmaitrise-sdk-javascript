/**
 * Base URL constants
 *
 * @class BaseUrls
 */

import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

export class BaseUrls {
    public static readonly FINTECTUREOAUTHURL_SBX: string =
        process.env.FINTECTUREOAUTHURL_DEV || '%%OAUTH_URL_DEV%%';
    public static readonly FINTECTUREAPIURL_SBX: string =
        process.env.FINTECTUREAPIURL_DEV || 'https://api.sandbox.virementmaitrise.societegenerale.eu';
    public static readonly FINTECTUREOAUTHURL_PRD: string =
        process.env.FINTECTUREOAUTHURL_DEV || 'https://oauth.virementmaitrise.societegenerale.eu';
    public static readonly FINTECTUREAPIURL_PRD: string =
        process.env.FINTECTUREAPIURL_DEV || 'https://api.virementmaitrise.societegenerale.eu';
}
