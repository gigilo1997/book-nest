<script lang="ts">
    import bookNestLogo from '$assets/app-logo.svg'
    import Button from '../Button.svelte';
</script>

<header>
    <a href="/">
        <img class="logo" src={bookNestLogo} alt="Go to home" />
    </a>
    <nav>
        <ul>
            <li>
                <Button isMenu={true} href="/register">Create account</Button>
            </li>
            <li>
                <Button isMenu={true} isSecondary={true} href="/login">Login</Button>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 4vw;
    }

    ul {
        display: flex;
        column-gap: 24px;
    }

    .logo {
        height: 72px;
    }
</style>