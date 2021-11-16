<template>
    
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <div class="container-fluid">
                <a href="###" class="navbar-brand">profiles</a>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-item-text" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-item-text"  to="/Profile">Profile</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-item-text"  to="/Posts">Posts</router-link>
                    </li>
                </ul>
            </div>
            
        </nav>
    
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
nav{
    width: 100%;
}
.containter{
    width: 100%;
}
.navbar{
    width: 100%;
}

.navbar-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-item{
    padding: 10px;
    color: white;
    text-decoration: none;
}

.nav-item-text{
    text-decoration: none;
    text-emphasis: none;
    color: white;
}
</style>