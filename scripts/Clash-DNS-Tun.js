function main(config) {
  const fixed = {
    "mixed-port": 7890,
    "allow-lan": false,
    "bind-address": "*",
    "mode": "rule",
    "log-level": "info",
    "external-controller": "127.0.0.1:9090",
    "unified-delay": true,
    "tcp-concurrent": true,
    "ipv6": false,

    "tun": {
      "enable": true,
      "stack": "gvisor",
      "auto-route": true,
      "auto-detect-interface": true,
      "strict-route": true,
      "dns-hijack": [
        "any:53"
      ]
    },

    "dns": {
      "enable": true,
      "respect-rules": true,
      "ipv6": false,
      "prefer-h3": false,
      "enhanced-mode": "fake-ip",
      "fake-ip-range": "198.18.0.1/16",

      "default-nameserver": [
        "223.5.5.5",
        "119.29.29.29"
      ],

      "nameserver": [
        "https://dns.cloudflare.com/dns-query",
        "https://dns.google/dns-query"
      ],

      "proxy-server-nameserver": [
        "https://dns.alidns.com/dns-query",
        "https://doh.pub/dns-query"
      ],

      "direct-nameserver": [
        "https://dns.alidns.com/dns-query",
        "https://doh.pub/dns-query"
      ],

      "nameserver-policy": {
        "dns.cloudflare.com": [
          "1.1.1.1",
          "1.0.0.1"
        ],

        "dns.google": [
          "8.8.8.8",
          "8.8.4.4"
        ],

        "dns.quad9.net": [
          "9.9.9.9",
          "149.112.112.112"
        ],

        "dns.alidns.com": [
          "223.5.5.5",
          "223.6.6.6"
        ],

        "doh.pub": [
          "1.12.12.12",
          "120.53.53.53"
        ],

        "geosite:geolocation-!cn": [
          "https://dns.cloudflare.com/dns-query",
          "https://dns.google/dns-query"
        ],

        "geosite:cn": [
          "https://dns.alidns.com/dns-query",
          "https://doh.pub/dns-query"
        ]
      },

      "fallback": [
        "https://anycast.uncensoreddns.org/dns-query"
      ],

      "fallback-filter": {
        "geoip": true,
        "geoip-code": "CN",
        "ipcidr": [
          "240.0.0.0/4",
          "127.0.0.0/8",
          "0.0.0.0/32"
        ]
      },

      "fake-ip-filter": [
        "*.lan",
        "*.local",
        "localhost",
        "*.msftconnecttest.com",
        "*.msftncsi.com",
        "*.msidentity.com",
        "captive.apple.com",
        "*.push.apple.com",
        "stun.*",
        "+.stun.*.*",
        "+.stun.*.*.*",
        "+.stun.*.*.*.*",
        "+.stun.*.*.*.*.*",
        "+.weixin.com",
        "+.wechat.com",
        "+.qq.com",
        "+.tencent.com",
        "speedtest.net"
      ]
    },

    "profile": {
      "store-selected": true,
      "store-fake-ip": true
    }
  };

  return {
    ...config,
    ...fixed
  };
}
