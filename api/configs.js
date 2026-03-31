// 移除防盗链 + 允许所有域名访问 + 关闭来源限制
export default (req, res) => {
    // 限制请求方法
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // 允许所有域名访问（解除官方防盗链）
    const originalSite = false;

    const envConfigs = {
        map: false,
        ipInfo: false,
        ipChecking: false,
        ip2location: false,
        originalSite,
        cloudFlare: false,
        ipapiis: false,
    };
    
    let result = {};
    for (const key in envConfigs) {
        result[key] = !!envConfigs[key];
    }
    
    res.status(200).json(result);
};
