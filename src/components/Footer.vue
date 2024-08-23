<template>
    <div class="container-fluid">
        <div class="row">
            <p class="lead">
                KyYola &copy; <span id="currYear"> {{ displayYear }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterComp",
    data(){
    return {
      currentYear: new Date()
    }
  },
  computed:{
    displayYear(){
      return this.currentYear.getFullYear()
      }
    }
}

</script>

<style scoped></style>