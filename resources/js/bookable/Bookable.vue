<template>
    <div class="row">
        
            <div class="col-md-8 pb-4">
                <div class="card">
                    <div class="card-body">
                        <div v-if="!loading">
                            <h2>{{bookable.title}}</h2>
                            <hr>
                            <article>{{bookable.description}}</article>
                        </div>
                    </div>
                </div>
                <ReviewList :bookable-id="this.$route.params.id"></ReviewList>

            </div>
            <div class="col-md-4 pb-4">
                <Availability :bookable-id="this.$route.params.id"></Availability>
            </div>
        
    </div>
</template>

<script>
import Availability from './Availability';
import ReviewList from './ReviewList';
export default {
    data() {
        return {
            bookable: null,
            loading: false
        }
    },
    created(){
        this.loading = true;
        axios.get(`/api/bookables/${this.$route.params.id}`)
        .then(response => {
            this.bookable = response.data.data;
            this.loading = false;
        })
        .catch(response => console.log('Error'));
    },
    components: {
        Availability,
        ReviewList,
    }
}
</script>