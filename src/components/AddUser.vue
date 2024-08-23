<template>
    <button
      type="button"
      class="btn16"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add User
    </button>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <!-- <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="user ID"
                  v-model="payload.userID"
                />
              </div> -->
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="first name"
                  v-model="payload.firstName"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="last name"
                  v-model="payload.lastName"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="user age"
                  v-model="payload.userAge"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="gender"
                  v-model="payload.Gender"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="user role"
                  v-model="payload.userRole"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="email address"
                  v-model="payload.emailAdd"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="user password"
                  v-model="payload.userPass"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="user profile"
                  v-model="payload.userProfile"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  @click.prevent="addingUser"
                  class="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "addProduct",
    data() {
      return {
        payload: {
        //   userID: null,
          firstName: "",
          lastName: "",
          userAge: "",
          Gender: "",
          userRole: "",
          emailAdd: "",
          userPass: "",
          userProfile: "https://codjoelmayer.github.io/projectImages/images/profile-Image.png",
        },
      };
    },
    methods: {
      addingUser() {
        try {
          this.$store.dispatch("register", this.payload);
          // location.reload()
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
.btn16{
  background-color:#162052 ;
  color: orange;
  border-radius: 10%;
}
.btn16:hover{
  background-color:orange ;
  color: #162052;
}
</style>