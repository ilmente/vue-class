<template>
    <Layout>
        <AAA />
        <div class="columns">
            <div class="column is-one-quarter">
                <aside class="menu">
                    <p class="menu-label">
                        Basics
                    </p>
                    <ul class="menu-list">
                        <li>
                            <router-link to="/">
                                Home page
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'another', params: { date: Date.now() }}">
                                Another page
                            </router-link>
                        </li>
                    </ul>
                    <p class="menu-label">
                        Nested routes
                    </p>
                    <ul class="menu-list">
                        <li>
                            <router-link :to="{ name: 'parent', params: { date: Date.now() } }">
                                Parent only (fade)
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="`/nested-parent/${Date.now()}/nested-child-1`">
                                Child 1 (fade)
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'child-2', params: { date: Date.now() } }">
                                Child 2 (fade)
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'grandchild-1', params: { date: Date.now() } }">
                                Grandchild 1
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'grandchild-2', params: { date: Date.now() } }">
                                Grandchild 2
                            </router-link>
                        </li>
                    </ul>
                    <p class="menu-label">
                        Navigation guards + meta
                    </p>
                    <ul class="menu-list">
                        <li>
                            <router-link to="/protected">
                                Protected page
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/partially-protected/sub">
                                Nested open page
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/partially-protected/sub-protected">
                                Nested protected page
                            </router-link>
                        </li>
                    </ul>
                </aside>
            </div>
            <div class="column">
                <router-view></router-view>
            </div>
        </div>
    </Layout>
</template>
