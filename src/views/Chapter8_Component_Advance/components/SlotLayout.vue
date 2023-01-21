<template>
    <div class="slot-container">
        <header style="background: yellow">
            <p>header start</p>
            <slot name="header"></slot>
            <p>header end</p>
        </header>
        <main style="background: skyblue">
            <p>main start</p>
            <slot></slot>
            <p>main end</p>
        </main>
        <footer style="background: pink">
            <p>footer start</p>
            <slot name="footer"></slot>
            <p>footer end</p>
        </footer>
    </div>
</template>
