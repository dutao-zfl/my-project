const userStatus = {
    normal: 0,
    locked: 1,
    deleted: 2
};

export default userStatus;

export const userStatusMap = new Map([
    [userStatus.normal, '正常'],
    [userStatus.locked, '锁定'],
    [userStatus.deleted, '删除']
]);




