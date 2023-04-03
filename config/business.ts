import type { StaticImageData } from 'next/image';

import bancontactLogo from '@/assets/bancontact.png';
import giropayLogo from '@/assets/giropay.png';
import iDealLogo from '@/assets/iDeal.png';
import paysafeCardLogo from '@/assets/paysafeCard.png';
import pr24Logo from '@/assets/pr24.png';
import sofortLogo from '@/assets/sofort.png';

export const enum PaymentMethod {
    Bancontact = 'bancontact',
    Giropay = 'giropay',
    Ideal = 'ideal',
    Sofort = 'sofort',
    Paysafe = 'paysafe',
    Pr24 = 'pr24',
}

export const paymentMethodToLogoMap = new Map<PaymentMethod, StaticImageData>([
    [PaymentMethod.Bancontact, bancontactLogo],
    [PaymentMethod.Giropay, giropayLogo],
    [PaymentMethod.Ideal, iDealLogo],
    [PaymentMethod.Sofort, sofortLogo],
    [PaymentMethod.Paysafe, paysafeCardLogo],
    [PaymentMethod.Pr24, pr24Logo]
]);
