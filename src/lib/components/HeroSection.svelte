<script lang="ts">
    import heroImage from "$assets/hero.png";
    import Button from "./Button.svelte";
</script>

<section class="default-margin hero">
    <div class="hero-text">
        <h1>Book Nest</h1>
        <h3>Your personal book library</h3>
        <h4 class="mt-1">
            Create your own digital library where you can keep track of every
            book you own, read and love.
        </h4>
        <h4 class="mb-s">
            Our app offers a beautifully designed, easy-to-use interface that
            makes managing your book collection a joy
        </h4>
        <Button href="">Sign Up</Button>
    </div>
    <img src={heroImage} alt="" class="hero-image" />
</section>

<style>
    .hero {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 100px;
        margin-bottom: 80px;
    }

    .hero-image {
        width: 40%;
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 55%;
        padding-right: 50px;
    }
</style>
