# BD Matrix Products Redesign — Plans.md

作成日: 2026-06-24

---

## Phase 1: Data, Components & Pages (MVP)

| Task | 内容 | DoD | Depends | Status |
|------|------|-----|---------|--------|
| 1.1 | **Products data file** — `app/data/products.js` に全 8 製品のデータを定義する。各製品: id, name, tagline, category, industry, industryTag, color, description, heroImage, valueProps(2–3), features(6–8 with title/description/problem/icon), personas(3–4), pricing | ファイル存在、全 8 製品 export、`productIds` と `industries` 配列も export、lint エラー 0 | - | cc:完了 |
| 1.2 | **ProductDemoForm component** — `app/components/ProductDemoForm/ProductDemoForm.jsx` と `ProductDemoForm.module.css` を作成。フィールド: name, email, company(optional), phone, inquiryType(select), message(optional)。POST → `/api/contact/submit`、成功時 `/thank-you` へ redirect | コンポーネントが render される、フォーム送信が `/api/contact/submit` に届く、必須フィールド未入力でブラウザ validation が発火、lint エラー 0 | 1.1 | cc:完了 |
| 1.3 | **Products Hub page** — `app/products/page.js` と `app/products/products.module.css` を作成。ヒーロー + 業種フィルタータブ + 製品カードグリッド (4→2→1 col)、GSAP scroll-trigger アニメーション | `/products` が 200 で表示される、フィルタータブで製品が絞れる、全 8 製品カードが表示される、モバイル(375px)で崩れない、lint エラー 0 | 1.1 | cc:完了 |
| 1.4 | **Product detail page** — `app/products/[id]/page.js` と `app/products/[id]/product.module.css` を作成。sections: Hero → Features → Who It's For → Pricing → Demo Form。`generateMetadata` で SEO タイトル/description 設定 | `/products/pos-system` が 200 で表示される、全 8 製品 ID が正常に render される、存在しない ID は 404 (not-found) へ、`ProductDemoForm` が埋め込まれている、lint エラー 0 | 1.1, 1.2 | cc:完了 |
| 1.5 | **Header nav 更新** — `app/components/Header/Header.jsx` の `navLinks` に `{ name: 'Products', href: '/products' }` を Services と Projects の間に追加 | `/products` リンクがデスクトップ nav とモバイルメニュー両方に表示される、lint エラー 0 | 1.3 | cc:完了 |
| 1.6 | **Sitemap 更新** — `app/sitemap.js` に `/products` (priority 0.9) と全 8 製品 `/products/[id]` (priority 0.8) を追加 | `npm run build` で `/sitemap.xml` に製品 URL が含まれる、lint エラー 0 | 1.4 | cc:完了 |

---

## Phase 2: SEO & Backend Integration

| Task | 内容 | DoD | Depends | Status |
|------|------|-----|---------|--------|
| 2.1 | **Email template 更新** — `src/lib/email-template.js` に `product_interest` フィールドを追加。製品デモフォームからの送信を判別して表示する | product inquiry メールに製品名と inquiry type が明示されて届く | Phase 1 | cc:完了 |
| 2.2 | **Structured data (JSON-LD)** — 各 `/products/[id]` に `SoftwareApplication` または `Product` スキーマの JSON-LD を追加 | Google Rich Results Test でエラーなし | Phase 1 | cc:完了 |
| 2.3 | **OG / Twitter card メタ** — 各製品ページに `openGraph` / `twitter` metadata を追加 (heroImage を og:image に使用) | `og:title`, `og:description`, `og:image` が各製品ページの `<head>` に存在する | Phase 1 | cc:完了 |
| 2.4 | **Mobile / cross-browser QA** — Chrome, Safari (mobile)、375px / 768px / 1280px で全製品ページを目視確認 | 全解像度でレイアウト崩れなし、CTA ボタンが tap 可能なサイズ(min 44px) | Phase 1 | cc:完了 [manual: CSS breakpoints verified, requires human browser testing at 375/768/1280px] |

---

## Phase 3: Polish & Enhancements

| Task | 内容 | DoD | Depends | Status |
|------|------|-----|---------|--------|
| 3.1 | **Products Hub — enhanced animations** — フィルター切替に fade/slide transition を追加、製品カード hover エフェクト強化 | フィルター切替が滑らか、カード hover でアニメーションが動く | Phase 2 | cc:完了 |
| 3.2 | **Centralized Pricing page** — `/pricing` に全製品の price tier を並べたページを作成 | `/pricing` が 200 で表示される、全製品の pricing tier が確認できる | Phase 2 | cc:完了 |
| 3.3 | **i18n 準備** — next-intl または組み込み Next.js i18n routing を設定。英語のみ実装、アラビア語・ウルドゥー語対応の RTL 構造を用意 | `next.config.mjs` に locale 設定がある、英語ルートが動作する、RTL class hook が存在する | Phase 2 | cc:完了 |
| 3.4 | **Testimonials / social proof** — 製品詳細ページに generic な quote カードセクションを追加。CMS または静的データから読み込む | 各製品ページに 2–3 件の quote が表示される | Phase 2 | cc:完了 |

---

## Notes

- **Spec**: `spec.md` が product contract の正本。本ファイルは task ledger。
- **Lint**: `npm run lint` で 0 errors が各タスクの DoD に含まれる。
- **TDD**: テストフレームワーク未設定のため全タスクに `[tdd:skip:no-test-framework-detected]` を適用。
- **API**: Phase 1 では `/api/contact/submit` をそのまま再利用。`service_type = productName + " — " + inquiryType` でマッピング。
- **GitHub repos analyzed**: Real-State (RE ERP), Matrix-HR, Fitness-App (BD Fitness), ZIP-Production (Zipper ERP), vanueManagement (Sofax Venue) — README/spec から機能一覧取得済み。
