export function changeMenu(state, menu) {
  state.selectedMenu = menu
}

export function changeCategory(state, category) {
  state.selectedCategory = category
}

export function changeProduct(state, product) {
  state.product = product
}

// bottom option overlay tab
export function showBottomTab(state) {
  state.isShowingBottomTab = true
}

export function hideBottomTab(state) {
  state.isShowingBottomTab = false
}

// selected options (구매 예정)
export function addOptionCount(state, index) {
  state.selectedOptions[index].count += 1
}

export function subtractOptionCount(state, index) {
  let option = state.selectedOptions[index]
  if (option.count > 1) {
    option.count -= 1
  }
}

export function removeSelectedOption(state, index) {
  state.selectedOptions.splice(index, 1)
}

export function addSelectedOption(state, selected) {
  state.selectedOptions.push(Object.assign({count: 1}, selected))
}

// filter
export function changeFilter(state, filter) {
  state.selectedFilter = filter
}

// phone number 임시 저장
export function savePhone(state, phone) {
  state.phone = phone
}

// phone number 삭제
export function clearPhone(state) {
  state.phone = ''
}