const updateStorate = (cartItem, id) => {
  const oldStorage = JSON.parse(localStorage.getItem('cart'));
  let newStorage = []
  if (cartItem) {
    console.log('entrou no useEffect e atualizou o storage', cartItem)
    if (!oldStorage) {
      newStorage = [{ ...cartItem }]
      return localStorage.setItem('cart', JSON.stringify(newStorage))
    }
    const isItemInCart = oldStorage.filter(product => product.id === id).length
    if (!isItemInCart) {
      newStorage = [...oldStorage, { ...cartItem }]
      return localStorage.setItem('cart', JSON.stringify(newStorage))
    }
    if (isItemInCart) {
      const oldStorageWithoutItem = oldStorage.filter(product => product.id !== id)
      newStorage = [...oldStorageWithoutItem, { ...cartItem }]
      return localStorage.setItem('cart', JSON.stringify(newStorage))
    }
  }
}
