<template>
    <div id="app">
        <Layout>
            <header></header>
            <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1">
                    <span>快速排序</span>
                    </MenuItem>
                </Menu>
                <div slot="trigger"></div>
            </Sider>
            <Layout>
                <Header class="layout-header-bar"></Header>
                <Content>
                    Content
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {},
        data() {
            return {
                isCollapsed: false
            }
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }

</script>

<style <style lang="less" scoped>
* {
    padding: 0px;
    margin: 0px;
}
header {
    height: 60px;
}
</style>
