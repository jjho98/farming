export default function () {
  return {
    // name (Tab's name props)
    selectedMenu: {},
    selectedCategory: {},
    product: {
      Options: {},
    },
    isShowingBottomTab: false,
    selectedOptions: [],
    selectedFilter: {
      label: '판매순',
      name: 'orderCount',
      order: 'DESC',
    },
  }
}
