import { createSelector, createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
    addresses: [],
    id: null,
  },
  reducers: {
    setAddress: (address, action) => {
      address.addresses = action.payload;
    },
    addAddress: (address, action) => {
      address.addresses.push(action.payload);
    },
    removeAddress: (address, action) => {
      const filtredAddress = address.addresses.filter(
        (item, index) => action.payload != item.id
      );
      address.addresses = filtredAddress;
    },
    getAddressId: (address, action) => {
      address.id = action.payload;
    },
    getAddressById: (address, action) => {
      address.addresses.filter((item) => item.id == action.payload);
    },
  },
});
// export const getAddressById = (addressId) =>
//   createSelector(
//     (state) => state.address.addresses,
//     (address) => console.log(address)
//   );
export const {
  setAddress,
  addAddress,
  removeAddress,
  getAddressId,
  getAddressById,
} = addressSlice.actions;
export default addressSlice.reducer;
