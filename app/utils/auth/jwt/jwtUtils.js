import jwt from 'jsonwebtoken';
import config from '../../../config.js'


 const singToken = (user) => {
    const payload = {
        sub: user.id,
        role: user.role,
        campaignId: user.campaignId,
    }
    return jwt.sign(payload, config.jwtSecret, {
      expiresIn: '24h'
    });
 };

 export {
    singToken
 }