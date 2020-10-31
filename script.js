/* 更改所有微博的可见状态
 * from: 原本的可见状态
 * to: 想改成的可见状态
 * 
 * 状态为字符串，可选值为:
 *   - 公开可见   public
 *   - 仅自己可见 private
 *   - 仅好友可见 friend
 *   - 仅粉丝可见 fan
 * 其中，from 可以省略，则转换所有微博
 */
async function changeAllWeiboVisibility(to, from = '') {
    // 公开可见 0
    // 自己可见 1
    // 好友可见 2
    // 粉丝可见 10
    const visibleMap = {
        public: 0,
        private: 1,
        friend: 2,
        fan: 10
    }

    let count = 0

    changeBtnSeletor = (from ? `div[action-data="cur_visible=${visibleMap[from]}"] ` : '') + `a[action-data="visible=${visibleMap[to]}"]`
    let nextBtn
    let changeBtns
    while (true) {
        while ((changeBtns = document.querySelectorAll(changeBtnSeletor)).length) {
            await Promise.all(
                Array.prototype.map.call(
                    changeBtns,
                    (btn, i) => new Promise((resolve, reject) =>
                        setTimeout(() => {
                            btn.click()
                            let checkBtn
                            if (checkBtn = document.querySelector('a[action-type="ok"]')) {
                                checkBtn.click()
                                count++
                                resolve()
                            } else {
                                console.error('no confirm dialog found')
                                reject()
                            }
                        }, 2000 * i))))
        }
        if (nextBtn = document.querySelector('a[class^="page next"]')) {
            nextBtn.click()
            await new Promise(resolve => setTimeout(resolve, 4000))
        } else {
            console.log(`done. ${count} changed.`)
            return
        }
    }
}
