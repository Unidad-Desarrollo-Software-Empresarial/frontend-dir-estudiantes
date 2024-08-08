<template>
    <div class="custom-background min-h-screen flex items-center justify-center">
        <div class="min-w-[367px]">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.custom-background {
    background-image: url('/background-img-login.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
}
</style>
