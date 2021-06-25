<template>
    <div>
        <h6 class="text-uppercase text-secondary font-weight-bolder">Check Availability
            <span class="text-danger" v-if="noAvailability">(NOT AVAILABLE)</span>
            <span class="text-success" v-if="hasAvailability">(AVAILABLE)</span>
        </h6>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="from">From</label>
                <input
                type="text"
                name="from"
                class="form-control form-control-sm"
                placeholder="Start date" v-model="from" @keyup.enter="check()"
                :class="[{'is-invalid': errorFor('from')}]">
            </div>
            <div class="invalid-feedback" v-for="(error, index) in errorFor('from')" :key="'from'+index">{{error}}</div>
            
            <div class="form-group col-md-6">
                <label for="to">To</label>
                <input
                type="text"
                name="to"
                class="form-control form-control-sm"
                placeholder="End date" v-model="to" @keyup.enter="check()"
                :class="[{'is-invalid': errorFor('to')}]">
            </div>
            
        </div>
        <button class="btn btn-secondary btn-block" @click="check()" :disabled="loading">Check</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            from: null,
            to: null,
            loading: false,
            status: null,
            errors: null
        }
    },
    methods: {
        check(){
            this.loading = true;
            this.errors = null;
            axios.get(`/api/bookables/${this.$route.params.id}/availability?from=${this.from}&to=${this.to}`)
            .then(response => {
                this.status = response.status;
            })
            .catch(error => {
                if(error.response.status == 422){
                    this.errors = error.response.data.errors;
                }
                this.status = error.response.status;
            })
            .then(() => (this.loading = false));

        },
        errorFor(field){
            return this.hasErrors && this.errors[field] ? this.errors[field] : null;
        }
    },
    computed: {
        hasErrors(){
            return this.status == 422 && this.errors != null;
        },
        hasAvailability(){
            return this.status == 200;
        },
        noAvailability(){
            return this.status == 404;
        }
    }
}
</script>

<style scoped>
label{
    font-size: 0.7rem;
    text-transform: uppercase;
    color: grey;
    font-weight: bolder;
}
.is-invalid{
    border-color: #b22222;
    background-image: none;
}
.invalid-feedback{
    color: #b22222;
}
</style>