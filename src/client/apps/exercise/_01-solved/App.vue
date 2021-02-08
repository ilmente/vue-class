<template>
    <Layout>
        <InitialStateViewer />
        
        <h1>Billing address</h1>

        <div class="columns">
            <div class="column is-third">
                <AddressDisplay 
                    type="Shipping" 
                    :address="shipping" />
                <AddressDisplay 
                    type="Billing"
                    :address="billing" 
                    :class="isBillingSameAsShipping ? 'has-text-grey-lighter' : ''" />
                <label>
                    <input 
                        class="checkbox" 
                        type="checkbox" 
                        v-model="isBillingSameAsShipping" />
                    Billing same as shipping
                </label>
            </div>
            <div class="column" v-if="!isBillingSameAsShipping">
                <div class="columns is-multiline">
                    <Field 
                        class="column is-half" 
                        label="Name"
                        v-model="billing.name">
                    </Field>
                    <Field 
                        class="column is-half" 
                        label="Last name"
                        v-model="billing.lastName">
                    </Field>
                    <Field 
                        class="column is-two-thirds" 
                        label="Street"
                        v-model="billing.street">
                    </Field>
                    <Field 
                        class="column is-one-third" 
                        label="House number"
                        v-model="billing.houseNumber">
                    </Field>
                    <Field 
                        class="column is-one-third" 
                        label="Zip code"
                        v-model="billing.zipCode">
                    </Field>
                    <Field 
                        class="column is-one-third" 
                        label="City"
                        v-model="billing.city">
                    </Field>
                    <Field 
                        class="column is-one-third" 
                        label="Country">
                        <div class="select">
                            <select v-model="billing.country">
                                <option>US</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </Field>
                    <Field 
                        class="column is-full" 
                        label="Notes">
                        <template #default="label">
                            <textarea 
                                class="textarea" 
                                :placeholder="label" 
                                v-model="billing.notes">
                            </textarea>
                        </template>
                    </Field>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
    import Layout from 'components/Layout';
    import InitialStateViewer from 'components/InitialStateViewer';
    import AddressDisplay from './AddressDisplay';
    import Field from './Field';

    export default {
        components: {
            Layout,
            InitialStateViewer,
            AddressDisplay,
            Field
        },

        watch: {
            isBillingSameAsShipping(isBillingSameAsShipping) {
                if (isBillingSameAsShipping) {
                    this.billing = this.shipping;
                }
            }
        },

        data() {
            return {
                shipping: window.__INITIAL_STATE__.shipping,
                billing: window.__INITIAL_STATE__.billing,
                isBillingSameAsShipping: true,
            }
        },
    }
</script>
