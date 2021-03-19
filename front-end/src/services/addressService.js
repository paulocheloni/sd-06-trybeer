export function handleAddressInput(event, field, address, setAddress) {
  const { value } = evente.target;
  setAddress({
    ...address,
    [field]: value;
  });
}