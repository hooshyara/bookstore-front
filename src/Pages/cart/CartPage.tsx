import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  type Cart,
  type CartItem,
  clearCart,
  getCart,
  getCurrentUserId,
  removeCartItem,
} from "../../Utils/api";
import { buildImageUrl } from "../../Utils/api";
import styles from "./cartPage.module.css";

const toNumber = (v: number | string | null | undefined): number | null => {
  if (v == null || v === "") return null;
  const n = Number(v);
  return Number.isNaN(n) ? null : n;
};

const getItemUnitPrice = (item: CartItem): number | null => {
  const b = item.book;
  if (!b) return null;
  const price = toNumber(b.price);
  const discount = toNumber(b.discountPrice);
  if (discount != null && price != null && discount < price) return discount;
  return price;
};

export default function CartPage() {
  const navigate = useNavigate();
  const userId = getCurrentUserId();

  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busyItemId, setBusyItemId] = useState<number | null>(null);
  const [clearing, setClearing] = useState(false);

  const load = useCallback(async () => {
    if (!userId) {
      setError("برای مشاهده‌ی سبد خرید وارد حساب خود شوید");
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const data = await getCart(userId);
      setCart(data);
      setError(null);
    } catch {
      setError("خطا در دریافت سبد خرید");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    const fetchData = async () => {
      await load();
    };
    fetchData();
  }, [load]);

  const handleRemove = async (itemId: number) => {
    try {
      setBusyItemId(itemId);
      await removeCartItem(itemId);
      await load();
    } catch {
      alert("خطا در حذف آیتم");
    } finally {
      setBusyItemId(null);
    }
  };

  const handleClear = async () => {
    if (!window.confirm("سبد خرید خالی شود؟")) return;
    try {
      setClearing(true);
      await clearCart();
      await load();
    } catch {
      alert("خطا در خالی کردن سبد");
    } finally {
      setClearing(false);
    }
  };

  const items = cart?.items ?? [];
  const totalQuantity = items.reduce(
    (sum, item) => sum + (toNumber(item.quantity) ?? 0),
    0,
  );
  const total = items.reduce((sum, item) => {
    const unit = getItemUnitPrice(item);
    const qty = toNumber(item.quantity) ?? 0;
    return sum + (unit != null ? unit * qty : 0);
  }, 0);

  return (
    <div style={{ backgroundColor: "#F7F8FA", minHeight: "100vh" }}>
      <div className="container py-4">
        <div className={styles.header}>
          <h1 className={styles.title}>سبد خرید</h1>
          {!loading && !error && items.length > 0 && (
            <button
              className={styles.clearBtn}
              onClick={handleClear}
              disabled={clearing}
            >
              {clearing ? "در حال خالی کردن..." : "خالی کردن سبد"}
            </button>
          )}
        </div>

        {loading && (
          <div className={styles.empty}>
            <p className={styles.emptyText}>در حال بارگذاری...</p>
          </div>
        )}

        {!loading && error && (
          <div className={styles.empty}>
            <p className={styles.emptyText} style={{ color: "#dc2626" }}>
              {error}
            </p>
            {!userId && (
              <Link to="/login" className={styles.shopBtn}>
                ورود به حساب
              </Link>
            )}
          </div>
        )}

        {!loading && !error && items.length === 0 && (
          <div className={styles.empty}>
            <div className={styles.emptyIcon} aria-hidden="true">
              🛒
            </div>
            <p className={styles.emptyText}>سبد خرید شما خالی است</p>
            <Link to="/books" className={styles.shopBtn}>
              مشاهده‌ی کتاب‌ها
            </Link>
          </div>
        )}

        {!loading && !error && items.length > 0 && (
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <div className={styles.list}>
                {items.map((item) => {
                  const b = item.book;
                  const unit = getItemUnitPrice(item);
                  const qty = toNumber(item.quantity) ?? 1;
                  const image = buildImageUrl(b?.imageUrl);
                  const isBusy = busyItemId === item.id;

                  return (
                    <div key={item.id} className={styles.itemCard}>
                      <Link
                        to={b ? `/books/${b.id}` : "#"}
                        className={styles.itemImageLink}
                      >
                        {image ? (
                          <img
                            src={image}
                            alt={b?.title ?? ""}
                            className={styles.itemImage}
                            onError={(e) => {
                              (
                                e.currentTarget as HTMLImageElement
                              ).style.display = "none";
                            }}
                          />
                        ) : (
                          <span className={styles.itemImagePlaceholder}>—</span>
                        )}
                      </Link>

                      <div className={styles.itemInfo}>
                        <Link
                          to={b ? `/books/${b.id}` : "#"}
                          className={styles.itemTitle}
                        >
                          {b?.title ?? "کتاب"}
                        </Link>
                        {b?.author && (
                          <p className={styles.itemAuthor}>{b.author}</p>
                        )}

                        <div className={styles.itemMeta}>
                          <span className={styles.qty}>تعداد: {qty}</span>
                          {unit != null && (
                            <span className={styles.unitPrice}>
                              {unit.toLocaleString("fa-IR")} تومان
                            </span>
                          )}
                        </div>
                      </div>

                      <div className={styles.itemActions}>
                        <div className={styles.itemPrice}>
                          {unit != null
                            ? (unit * qty).toLocaleString("fa-IR")
                            : "—"}
                          <span className={styles.itemPriceCurrency}>
                            {" "}
                            تومان
                          </span>
                        </div>
                        <button
                          className={styles.removeBtn}
                          onClick={() => handleRemove(item.id)}
                          disabled={isBusy}
                        >
                          {isBusy ? "..." : "حذف"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className={styles.summary}>
                <h2 className={styles.summaryTitle}>خلاصه سفارش</h2>
                <div className={styles.summaryRow}>
                  <span>تعداد اقلام</span>
                  <span>{totalQuantity.toLocaleString("fa-IR")}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>مجموع</span>
                  <span>{total.toLocaleString("fa-IR")} تومان</span>
                </div>
                <div className={styles.summaryDivider} />
                <div className={styles.summaryTotal}>
                  <span>مبلغ قابل پرداخت</span>
                  <span>{total.toLocaleString("fa-IR")} تومان</span>
                </div>
                <button
                  className={styles.checkoutBtn}
                  onClick={() => navigate("/checkout")}
                  disabled={total === 0}
                >
                  ادامه‌ی خرید
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
