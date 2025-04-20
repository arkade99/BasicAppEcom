# 📘 Basic Tailwind concepts

-For padding-> p{t/l/b/r}-{size}
-For margin-> m{t/l/b/r}-{size}

-text-[size] it will apply custom size. We can pass any custom value using []

---

## 💻 Code Snippet 1

```Basic Html & Tailwind css

<div class="bg-violet-200 h-auto my-4 border-2 border-violet-900 rounded-md p-2 w-full">
<h1 class="text-center font-mono text-[13px] text-black font-extrabold p-[20px] ">Hello World</h1>
</div>
```

## 🖼️ UI Screenshot

## ![Hello World Screenshot](./assets/Screenshot1.png)

## 💻 Flex Snippet

```Basic flex and grid concepts

<h2 class="text-white text-2xl">Flex</h2>
<div class="flex flex-col items-center justify-center mt-6 pb-4 space-y-6 border-b-2 border-white border-dotted">
  <div class="h-16 w-16 bg-red-300 rounded-full"></div>
  <div class="h-16 w-16 bg-green-300 rounded-full"></div>
  <div class="h-16 w-16 bg-orange-500 rounded-full"></div>
</div>
<h2 class="text-white text-2xl">Grid</h2>
<div class="grid grid-cols-2 mt-6 mx-2">
  <div class="h-16  bg-red-300 rounded-full"></div>
  <div class="h-16  bg-green-300 rounded-full"></div>
  <div class="h-16  bg-orange-500 rounded-full"></div>
</div>
```

## 🖼️ UI Screenshot

![Flex, Grid Screenshot](./assets/Screenshot2.png)

---
