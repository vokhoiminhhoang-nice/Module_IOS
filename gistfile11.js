// ========= ID ========= //
// =======  @mhoang07 ======= // 
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "",
  obj = {};

try {
  obj = JSON.parse($response.body);
} catch (e) {
  obj = {};
}

obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
obj.subscriber = obj.subscriber || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};

var mhoang07 = {
  auto_resume_date: null,
  display_name: "locket_1600_1y",
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  management_url: "https://apps.apple.com/account/subscriptions",
  period_type: "normal",
  price: {
    "amount": 399000.0,
    "currency": "VND"
  },
  expires_date: "9999-01-09T10:10:14Z",
  grace_period_expires_date: null,
  refunded_at: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2007-07-06T10:10:15Z",
  purchase_date: "2007-07-06T10:10:14Z",
  store: "app_store",
  store_transaction_id: "2000001108724193"
};

var locketGold = {
  grace_period_expires_date: null,
  purchase_date: "2007-07-06T10:10:14Z",
  original_purchase_date: "2007-07-06T10:10:15Z",
  product_identifier: "locket_1600_1y",
  expires_date: "9999-01-09T10:10:14Z",
  ownership_type: "PURCHASED",
  store: "app_store",
  is_sandbox: false
};

// Luôn kích hoạt cả Gold, pro, filters để đảm bảo mọi phiên bản Locket đều ăn 100%
obj.subscriber.entitlements["Gold"] = locketGold;
obj.subscriber.entitlements["gold"] = locketGold;
obj.subscriber.entitlements["pro"] = locketGold;
obj.subscriber.entitlements["Pro"] = locketGold;
obj.subscriber.entitlements["filters"] = locketGold;
obj.subscriber.entitlements["Filters"] = locketGold;
obj.subscriber.entitlements["camera_filters"] = locketGold;
obj.subscriber.entitlements["locket_gold"] = locketGold;
obj.subscriber.entitlements["vip"] = locketGold;

obj.subscriber.subscriptions["locket_1600_1y"] = mhoang07;
obj.subscriber.subscriptions["Gold"] = mhoang07;
obj.subscriber.subscriptions["gold"] = mhoang07;
obj.subscriber.subscriptions["pro"] = mhoang07;
obj.subscriber.subscriptions["locket_gold"] = mhoang07;
obj.subscriber.subscriptions["locket_gold_yearly"] = mhoang07;
obj.subscriber.subscriptions["locket_gold_monthly"] = mhoang07;

$done({
  body: JSON.stringify(obj)
});
