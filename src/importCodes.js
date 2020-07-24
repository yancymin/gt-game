/**
 * 批量加载帧图片
 * @param {Function} context - require.context 创建的函数
 * @returns {Array<string>} 返回的所有图片
 */
function loadFrames(context) {
    const frames = []
    context.keys().forEach(k => {
        frames.push(context(k))
    })
    return frames
}