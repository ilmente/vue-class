<template>
    <Layout>
        <Markdown>
            # Todo

            The goal of this exercise is to recreate a simple checkout step 
            (well, something close to it), known to many: *the billing address*.

            Given a `shipping` address and a `billing` address datasets:

            1. display the shipping adresses as text;
            2. display the billing adresses as text, right below the shipping one;
            3. show a checkbox saying "Billing same as shipping" right below the addresses.

            The **checkbox is selected** by default.

            When the **checkbox is unselected**, show a prefilled form containaing the
            billing address fields. As you type into the form, the address displyed 
            in point 2 should update accordingly.

            When the **checkbox is selected again**, the form disappears again and the 
            billing address is reset to the initial state: being the same as the 
            shipping one.

            ## Code structure (suggested)

            ```
            |Layout
            |   AddressDisplay for shipping/
            |   AddressDisplay for billing/
            |   Checkbox/
            |
            |   Input for billing.name/
            |   Input for billing.lastName/
            |   Input for .../
            |/Layout
            ```

            ## Screenshots

            ![](/assets/exercise/01-1.png)
            ![](/assets/exercise/01-2.png)
        </Markdown>

        <InitialStateViewer />
    </Layout>
</template>

<script>
    import Layout from 'components/Layout';
    import Markdown from 'components/Markdown';
    import InitialStateViewer from 'components/InitialStateViewer';

    export default {
        components: {
            Layout,
            Markdown,
            InitialStateViewer,
        },
    }
</script>
