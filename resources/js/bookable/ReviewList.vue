<template>
    <div id="review-placeholder">
        <h6 class="text-uppercase text-secondary font-weight-bolder pt-4">Review List</h6>
        <div class="border-bottom pt-4 d-none d-md-block" v-for="number in 3" :key="number">
            <div class="row">
                <div class="col-md-6">Henry Abayan</div>
                <div class="col-md-6 d-flex justify-content-end">Star Rating</div>
            </div>
            <div class="row">
                <div class="col-md-12">Added 5 mins ago</div>
            </div>
            <div class="row pt-4 pb-4">
                <div class="col-md-12">
                    Content
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#review-placeholder{
    padding: 1.25rem;
}
</style>