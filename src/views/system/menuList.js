/**
 * @param {role: 权限}
 **/
export default {
    mine: {
        name: '二狗子',
        phone: '18755558888'
    },
    menu: [
        {
            id: '1',
            title: '配置系统',
            icon: 'el-icon-setting',
            path: '/noobweb/system',
            role: '权限标示',
            children: [
                {
                    id: '1-1',
                    title: '菜单系统',
                    icon: 'el-icon-setting',
                    path: '/noobweb/system',
                    role: 'menuSystem',
                },
                {
                    id: '1-2',
                    title: '权限系统',
                    icon: 'el-icon-setting',
                    path: '/noobweb/role',
                    role: 'menuSystem',
                },
                {
                    id: '1-3',
                    title: '征婚管理',
                    icon: 'el-icon-setting',
                    path: '/love',
                    role: 'menuSystem',
                }
            ]
        },
        {
            id: '2',
            title: '个人项目',
            icon: 'el-icon-goods',
            path: '/noobweb/family',
            role: '个人项目权限标示',
            children: [
                {
                    id: '2-1',
                    title: '啥都不会',
                    icon: 'el-icon-setting',
                    path: '/noobweb/sdbh',
                    role: '啥都不会权限标示',
                },
                {
                    id: '2-2',
                    title: '西米米',
                    icon: 'el-icon-setting',
                    path: '/noobweb/xmm',
                    role: '西米米权限标示',
                }
            ]
        },
        {
            id: '3',
            title: '其它',
            icon: 'el-icon-document',
            path: '/noobweb/other',
            role: '其它权限标示',
            children: []
        },
    ],
    allJurisdiction: ['其它权限标示', '西米米权限标示', '啥都不会权限标示', '个人项目权限标示', 'menuSystem']
}