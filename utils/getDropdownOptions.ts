export const getDropdownOptions = () => {
  const options = []
  for (let i = 1; i <= 100; i++) {
    options.push({ value: String(i), label: String(i) })
  }

  return options
}