<template>
  <div class="consult-detail-body" :class="`consult-detail-body--${variant}`">
    <template v-for="(block, index) in content" :key="index">
      <p v-if="block.type === 'paragraph'" class="consult-detail-body__p">
        {{ block.text }}
      </p>
      <h2 v-else-if="block.type === 'heading'" class="consult-detail-body__h2">
        {{ block.text }}
      </h2>
      <h3 v-else-if="block.type === 'subheading'" class="consult-detail-body__h3">
        {{ block.text }}
      </h3>
      <ul v-else-if="block.type === 'bulletList'" class="consult-detail-body__ul">
        <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
      </ul>
      <div v-else-if="block.type === 'table'" class="consult-detail-body__table-wrap">
        <table class="consult-detail-body__table">
          <thead>
            <tr>
              <th v-for="(header, i) in block.headers" :key="i">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, ri) in block.rows" :key="ri">
              <td v-for="(cell, ci) in row" :key="ci">{{ cell }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <pre
        v-else-if="block.type === 'codeBlock'"
        class="consult-detail-body__code"
      ><code>{{ block.text }}</code></pre>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { ContentBlock } from "../data";

defineProps<{
  content: ContentBlock[];
  variant: "pc" | "h5";
}>();
</script>

<style scoped lang="scss">
@use "../../serve/serve-h5" as *;

@mixin body-text-pc {
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.67;
  color: #c2c2c2;
}

@mixin body-text-h5 {
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 400;
  font-size: h5(39);
  line-height: 1.67;
  color: #c2c2c2;
}

.consult-detail-body--pc {
  display: flex;
  flex-direction: column;
  gap: 30px;

  .consult-detail-body__p {
    margin: 0;
    @include body-text-pc;
  }

  .consult-detail-body__h2 {
    margin: 0;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
    color: #ffffff;
  }

  .consult-detail-body__h3 {
    margin: 0;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
    color: #ffffff;
  }

  .consult-detail-body__ul {
    margin: 0;
    padding-left: 1.25em;
    list-style: disc;
    list-style-position: outside;
    @include body-text-pc;

    li {
      display: list-item;
    }

    li + li {
      margin-top: 8px;
    }
  }

  .consult-detail-body__table-wrap {
    overflow-x: auto;
  }

  /* Figma 191:1474 — 背景 #2A2833，圆角 16，字号 24，行高 57.2 */
  .consult-detail-body__code {
    margin: 0;
    padding: 20px;
    border-radius: 16px;
    background: #2a2833;
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-word;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 57.2px;
    color: #ffffff;

    code {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      color: inherit;
    }
  }

  .consult-detail-body__table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid #322e28;
    border-radius: 16px;
    overflow: hidden;
    font-size: 18px;

    th,
    td {
      padding: 16px 20px;
      text-align: left;
      border: 1px solid #322e28;
      vertical-align: top;
    }

    thead th {
      background: #322e28;
      color: #ffffff;
      font-weight: 600;
    }

    tbody td {
      background: #1a1921;
      color: #c2c2c2;
    }
  }
}

.consult-detail-body--h5 {
  display: flex;
  flex-direction: column;
  gap: h5(30);

  .consult-detail-body__p {
    margin: 0;
    @include body-text-h5;
  }

  .consult-detail-body__h2 {
    margin: 0;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    font-size: h5(39);
    line-height: 1.5;
    color: #ffffff;
  }

  .consult-detail-body__h3 {
    margin: 0;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    font-size: h5(39);
    line-height: 1.5;
    color: #ffffff;
  }

  .consult-detail-body__ul {
    margin: 0;
    padding-left: 1.25em;
    list-style: disc;
    list-style-position: outside;
    @include body-text-h5;

    li {
      display: list-item;
    }

    li + li {
      margin-top: h5(12);
    }
  }

  .consult-detail-body__table-wrap {
    overflow-x: auto;
  }

  .consult-detail-body__code {
    margin: 0;
    padding: h5(30);
    border-radius: h5(16);
    background: #2a2833;
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-word;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 400;
    font-size: h5(39);
    line-height: 1.67;
    color: #ffffff;

    code {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      color: inherit;
    }
  }

  .consult-detail-body__table {
    width: 100%;
    min-width: h5(800);
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid #322e28;
    border-radius: h5(16);
    overflow: hidden;
    font-size: h5(33);

    th,
    td {
      padding: h5(20) h5(24);
      text-align: left;
      border: 1px solid #322e28;
      vertical-align: top;
    }

    thead th {
      background: #322e28;
      color: #ffffff;
      font-weight: 600;
    }

    tbody td {
      background: #1a1921;
      color: #c2c2c2;
    }
  }
}
</style>
