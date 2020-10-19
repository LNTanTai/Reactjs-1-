import { DELETE_USER, SUMIT_USER, EDIT_USER } from "./constant";

let initialState = {
  userList: [
    {
      id: 1,
      name: "Dinh Phuc Nguyen",
      username: "dpnguyen",
      email: "dpnguyen@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP",
    },
    {
      id: 2,
      name: "hao",
      username: "nguyendp",
      email: "nguyendp@gmail.com",
      phoneNumber: "1123123213",
      type: "VIP",
    },
  ],
  userEdit: null, //userEdit: null => Add; userEdit: != null => Edit
  keyword: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER: {
      console.log(action);
      let userList = [...state.userList];

      userList = userList.filter((user) => {
        return user.id !== action.payload.id;
      });

      state.userList = userList;
      return { ...state };
    }

    case SUMIT_USER: {
      /**
       * 2 huong
       * neu id ton tai => update
       * nguoc lai (id ko ton tai) => Add
       */
      console.log(action);
      const user = { ...action.payload, id: Math.random() };
      let userList = [...state.userList, user];
      state.userList = userList;
      return { ...state };
    }

    case EDIT_USER: {
      state.userEdit = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default userReducer;
