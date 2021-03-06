! function(e) {
    function t(o) {
        if (s[o]) return s[o].exports;
        var i = s[o] = {
            exports: {},
            id: o,
            loaded: !1
        };
        return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var s = {};
    return t.m = e, t.c = s, t.p = "./build/", t(0)
}({
    0: function(e, t, s) {
        ws = s(1404)
    },
    9: function(e, t) {
        e.exports = {
            init: function() {},
            addDevice: function(e, t) {
                try {
                    console.log("lstore addDevice:", e);
                    for (var s = JSON.parse(localStorage.getItem("devices") || "[]"), o = 0, i = s.length; o < i; o++)
                        if (s[o].FILE === e.FILE) return void(JSON.stringify(s[o]) !== JSON.stringify(e) ? (t ? $.extend(s[o], e) : s[o] = e, localStorage.setItem("devices", JSON.stringify(s)), console.log("lstore.addDevice: update device status")) : console.log("lstore.addDevice: same file!"));
                    return console.log("lstore.addDevice: add a new device!"), s.push(e), localStorage.setItem("devices", JSON.stringify(s)), !0
                } catch (e) {
                    console.log(e)
                }
            },
            clearDevice: function() {
                console.log("lstore.clearDevice");
                try {
                    localStorage.setItem("devices", []), this.setActiveDevice({}, {})
                } catch (e) {
                    console.log(e)
                }
            },
            removeDevice: function(e) {
                try {
                    for (var t = JSON.parse(localStorage.getItem("devices") || "[]"), s = 0, o = t.length; s < o; s++)
                        if (t[s].FILE === e.FILE) return console.log("device.FILE", e.FILE), t.splice(s, 1), localStorage.setItem("devices", JSON.stringify(t)), !0;
                    return !1
                } catch (e) {
                    console.log(e)
                }
            },
            getAllDevices: function() {
                try {
                    return JSON.parse(localStorage.getItem("devices") || "[]")
                } catch (e) {
                    console.log(e)
                }
            },
            setActiveDevice: function(e, t) {
                try {
                    console.log("setting active_device", JSON.stringify(e)), localStorage.setItem("active_device", JSON.stringify(e)), this.setActiveDeviceConfig(t)
                } catch (e) {
                    console.log(e)
                }
            },
            setActiveDevice2: function(e) {
                try {
                    console.log("setting active_device", JSON.stringify(e)), localStorage.setItem("active_device", JSON.stringify(e))
                } catch (e) {
                    console.log(e)
                }
            },
            setActiveDeviceConfig: function(e) {
                try {
                    localStorage.setItem("active_device_config", JSON.stringify(e))
                } catch (e) {
                    console.log(e)
                }
            },
            removeActiveDevice: function() {
                try {
                    localStorage.removeItem("active_device"), this.removeActiveDeviceConfig()
                } catch (e) {
                    console.log(e)
                }
            },
            removeActiveDeviceConfig: function(e) {
                try {
                    localStorage.removeItem("active_device_config")
                } catch (e) {
                    console.log(e)
                }
            },
            getActiveDevice: function() {
                try {
                    return JSON.parse(localStorage.getItem("active_device")) || {}
                } catch (e) {
                    console.log(e)
                }
            },
            getActiveDeviceConfig: function() {
                try {
                    return JSON.parse(localStorage.getItem("active_device_config")) || {}
                } catch (e) {
                    console.log(e)
                }
            },
            setActiveFirmware: function(e) {
                localStorage.setItem("active_firmware", JSON.stringify(e))
            },
            getActiveFirmware: function() {
                try {
                    return JSON.parse(localStorage.getItem("active_firmware")) || {}
                } catch (e) {
                    console.log(e)
                }
            },
            setActiveHardware: function(e) {
                localStorage.setItem("active_hardware", JSON.stringify(e))
            },
            getEmail: function() {
                return localStorage.getItem("email") || !1
            },
            setEmail: function(e) {
                localStorage.setItem("email", e)
            },
            clearEmail: function(e) {
                localStorage.removeItem("email")
            },
            getLang: function() {
                var e = localStorage.getItem("locale") || "en";
                return window.ipcRenderer || utils.initElectron(), window.ipcRenderer.send("set-locale", e), e
            },
            setLang: function(e) {
                localStorage.setItem("locale", e), window.ipcRenderer || utils.initElectron(), window.ipcRenderer.send("set-locale", e)
            },
            getDebug: function() {
                return localStorage.getItem("debug") || 0
            },
            setDebug: function(e) {
                localStorage.setItem("debug", e)
            },
            clearDebug: function() {
                try {
                    localStorage.removeItem("debug")
                } catch (e) {
                    console.error("localStorage.removeItem error, funName:clearDebug")
                }
            },
            getDebugEnabled: function() {
                try {
                    return JSON.parse(localStorage.getItem("debug_enabled")) || !1
                } catch (e) {
                    console.log(e)
                }
            },
            setDebugEnabled: function(e) {
                localStorage.setItem("debug_enabled", e)
            },
            getFactoryEnabled: function() {
                try {
                    return JSON.parse(localStorage.getItem("factory_enabled")) || !1
                } catch (e) {
                    console.log(e)
                }
            },
            setFactoryEnabled: function(e) {
                localStorage.setItem("factory_enabled", e || !1)
            },
            getTestServerEnabled: function() {
                try {
                    return JSON.parse(localStorage.getItem("test_server_enabled")) || !1
                } catch (e) {
                    console.log(e)
                }
            },
            setTestServerEnabled: function(e) {
                localStorage.setItem("test_server_enabled", e || !1)
            },
            setbackupdate: function() {
                localStorage.setItem("backupdate", Date.now())
            },
            setbackupdate: function() {
                localStorage.setItem("backupdate", Date.now())
            },
            backup: function(e) {
                localStorage.setItem("backupdate", Date.now()), localStorage.setItem("backup", JSON.stringify(e))
            },
            getbackup: function() {
                try {
                    return JSON.parse(localStorage.getItem("backup")) || {}
                } catch (e) {
                    console.log(e)
                }
            },
            getbackupdate: function() {
                return localStorage.getItem("backupdate") || ""
            },
            getUpgradeStatus: function() {
                try {
                    return localStorage.getItem("upgrade_status") || 0
                } catch (e) {
                    console.log(e)
                }
            },
            setUpgradeStatus: function(e) {
                localStorage.setItem("upgrade_status", e || 0)
            },
            readP4CalibrationTutorial: function() {
                localStorage.setItem("p4_calibration_tutorial_read", "true")
            },
            isP4CalibrationTutorialRead: function() {
                return "true" == localStorage.getItem("p4_calibration_tutorial_read")
            },
            getdownloadPath: function() {
                return localStorage.getItem("downloadPath") || ""
            },
            setdownloadPath: function(e) {
                localStorage.setItem("downloadPath", e)
            },
            getSortRoutesDateFlag: function() {
                return localStorage.getItem("has_sort_routes_date")
            },
            setSortRoutesDateFlag: function(e) {
                return localStorage.setItem("has_sort_routes_date", e)
            },
            getAllRoutes: function() {
                try {
                    var e = JSON.parse(localStorage.getItem("routes")) || !1;
                    return e && e.sort(function(e, t) {
                        return t.last_open - e.last_open
                    }), e
                } catch (e) {
                    console.log(e)
                }
            },
            getRoutesCount: function() {
                try {
                    var e = JSON.parse(localStorage.getItem("routes")) || !1;
                    return Object.keys(e).length
                } catch (e) {
                    console.log(e)
                }
            },
            setRouteInfo: function(e) {
                localStorage.setItem("routes", JSON.stringify(e))
            },
            addRoute: function(e) {
                var t = function() {
                    for (var e = JSON.parse(localStorage.getItem("routes")) || [], t = e.length;;) {
                        for (var s = "route_" + (new Date).getTime() + "_" + Math.round(1e5 * Math.random()), o = !0, i = 0; i < t; i++)
                            if (e[i].id === s) {
                                o = !1;
                                break
                            }
                        if (o) return s
                    }
                };
                try {
                    var s = t();
                    e.id = e.routeId || s;
                    var o = JSON.parse(localStorage.getItem("routes")) || [];
                    return o.unshift(e), localStorage.setItem("routes", JSON.stringify(o)), e.id
                } catch (e) {
                    return console.log(e), !1
                }
            },
            setRoute: function(e, t) {
                console.log("route opt setRoute, ", t);
                try {
                    var s = $.extend(!0, {}, t);
                    delete s.id;
                    for (var o = JSON.parse(localStorage.getItem("routes")) || [], i = 0, r = o.length; i < r; i++)
                        if (o[i].id === e) return $.extend(o[i], s), localStorage.setItem("routes", JSON.stringify(o)), !0;
                    return !1
                } catch (e) {
                    return console.log(e), !1
                }
            },
            removeRoute: function(e) {
                try {
                    var t = JSON.parse(localStorage.getItem("routes")) || [];
                    return t.splice(e, 1) != [] && (localStorage.setItem("routes", JSON.stringify(t)), !0)
                } catch (e) {
                    console.log(e)
                }
            },
            removeRouteById: function(e) {
                try {
                    for (var t = JSON.parse(localStorage.getItem("routes")) || [], s = 0; s < t.length; s++)
                        if (t[s].id == e && t.splice(s, 1) != []) return localStorage.setItem("routes", JSON.stringify(t)), !0;
                    return !1
                } catch (e) {
                    console.log(e)
                }
            },
            getPrevLocation: function() {
                return JSON.parse(localStorage.getItem("prev_latlng")) || !1
            },
            setPrevLocation: function(e) {
                localStorage.setItem("prev_latlng", JSON.stringify(e))
            },
            removeAircraft: function(e) {
                try {
                    var t = JSON.parse(localStorage.getItem("aircraft_map")) || {};
                    return t["aircraft_" + e] && (delete t["aircraft_" + e], localStorage.setItem("aircraft_map", JSON.stringify(t))), !0
                } catch (e) {
                    return console.log(e.message), !1
                }
            },
            setAircraft: function(e, t) {
                try {
                    var s = JSON.parse(localStorage.getItem("aircraft_map")) || {},
                        o = s["aircraft_" + e] || {};
                    return $.extend(o, t), s["aircraft_" + e] = o, localStorage.setItem("aircraft_map", JSON.stringify(s)), !0
                } catch (e) {
                    return console.log(e.message), !1
                }
            },
            getAircraft: function(e) {
                try {
                    var t = JSON.parse(localStorage.getItem("aircraft_map")) || {};
                    return e ? t["aircraft_" + e] || {} : t
                } catch (e) {
                    return console.log(e.message), !1
                }
            },
            getSimParamLatitude: function() {
                return JSON.parse(localStorage.getItem("simParam_Latitude"))
            },
            setSimParamLatitude: function(e) {
                localStorage.setItem("simParam_Latitude", e), console.log("set down!", localStorage.getItem("simParam_Latitude"))
            },
            getSimParamLongitude: function() {
                return JSON.parse(localStorage.getItem("simParam_Longitude"))
            },
            setSimParamLongitude: function(e) {
                localStorage.setItem("simParam_Longitude", e), console.log("set down!", localStorage.getItem("simParam_Longitude"))
            },
            getFirstShowUpgrade: function(e) {
                for (var t = JSON.parse(localStorage.getItem("first_show_upgrate") || "[]"), s = 0, o = t.length; s < o; s++)
                    if (console.log(typeof t[s].deviceId, typeof e), t[s].deviceId === e) return t[s].ifshow;
                return console.log("lstore return true!"), !0
            },
            setFirstShowUpgrade: function(e, t, s) {
                for (var o = JSON.parse(localStorage.getItem("first_show_upgrate") || "[]"), i = 0, r = 0, a = o.length; r < a; r++) o[r].deviceId === e && (o[r].version = t, o[r].ifshow = s, i = 1);
                return i || o.push({
                    deviceId: e,
                    version: t,
                    ifshow: s
                }), localStorage.setItem("first_show_upgrate", JSON.stringify(o)), localStorage.getItem("first_show_upgrate")
            },
            removeFirstShowUpgrade: function(e) {
                for (var t = JSON.parse(localStorage.getItem("first_show_upgrate") || "[]"), s = 0, o = t.length; s < o; s++)
                    if (t[s].deviceId === e) return t.splice(s, 1), void localStorage.setItem("first_show_upgrate", JSON.stringify(t))
            },
            setUpgradeF2Info: function(e, t) {
                try {
                    var s = {
                        name: e,
                        password: t
                    };
                    localStorage.setItem("upgrade_f2", JSON.stringify(s))
                } catch (e) {
                    console.error("localStorage.setItem error, funName:setUpgradeF2Info")
                }
            },
            getUpgradeF2Info: function() {
                try {
                    var e = localStorage.getItem("upgrade_f2");
                    return JSON.parse(e)
                } catch (e) {
                    console.error("localStorage.getItem error, funName:getUpgradeF2Info")
                }
            },
            removeUpgradeF2Info: function() {
                try {
                    localStorage.removeItem("upgrade_f2")
                } catch (e) {
                    console.error("localStorage.removeItem error, funName:removeUpgradeF2Info")
                }
            },
            setCalibrationNotTeachFlag: function(e, t) {
                try {
                    localStorage.setItem("calibration_not_teach_" + e, t)
                } catch (e) {
                    console.error("localStorage.setItem error, funName:setCalibrationNotTeachFlag")
                }
            },
            getCalibrationNotTeachFlag: function(e) {
                try {
                    return localStorage.getItem("calibration_not_teach_" + e)
                } catch (e) {
                    console.error("localStorage.getItem error, funName:getCalibrationNotTeachFlag")
                }
            },
            get_m600_line_no_more_remind: function() {
                try {
                    return localStorage.getItem("m600_line_no_more_remind") || ""
                } catch (e) {
                    console.error("localStorage.getItem error, funName:get_m600_line_no_more_remind")
                }
            },
            set_m600_line_no_more_remind: function(e) {
                try {
                    return localStorage.setItem("m600_line_no_more_remind", e)
                } catch (e) {
                    console.error("localStorage.getItem error, funName:set_m600_line_no_more_remind")
                }
            },
            remove_m600_line_no_more_remind: function() {
                try {
                    return localStorage.removeItem("m600_line_no_more_remind")
                } catch (e) {
                    console.error("localStorage.getItem error, funName:remove_m600_line_no_more_remind")
                }
            },
            get_m600_upgrade_no_more_remind: function(e) {
                try {
                    return localStorage.getItem("m600_upgrade_no_more_remind_" + e) || ""
                } catch (e) {
                    console.error("localStorage.getItem error, funName:m600_upgrade_no_more_remind")
                }
            },
            set_m600_upgrade_no_more_remind: function(e, t) {
                try {
                    return localStorage.setItem("m600_upgrade_no_more_remind_" + e, t)
                } catch (e) {
                    console.error("localStorage.setItem error, funName:m600_upgrade_no_more_remind")
                }
            },
            remove_m600_upgrade_no_more_remind: function(e) {
                try {
                    return localStorage.removeItem("m600_upgrade_no_more_remind_" + e)
                } catch (e) {
                    console.error("localStorage.removeItem error, funName:m600_upgrade_no_more_remind")
                }
            },
            set_video_urls: function(e) {
                try {
                    return localStorage.setItem("video_urls", JSON.stringify(e))
                } catch (e) {
                    console.error("localStorage.setItem error, funName:video_urls")
                }
            },
            get_video_urls: function() {
                try {
                    var e = localStorage.getItem("video_urls");
                    return e ? JSON.parse(e) : null
                } catch (e) {
                    console.error("localStorage.getItem error, funName:video_urls")
                }
            },
            setProjectId: function(e) {
                localStorage.setItem("projectid", e)
            },
            getProjectId: function() {
                return localStorage.getItem("projectid")
            },
            setAtUser: function(e) {
                localStorage.setItem("at_user", JSON.stringify(e))
            },
            getAtUser: function() {
                try {
                    return JSON.parse(localStorage.getItem("at_user")) || !1
                } catch (e) {
                    console.log(e)
                }
            },
            delAtUser: function() {
                localStorage.removeItem("at_user"), localStorage.removeItem("session")
            },
            setCaseListCurPage: function(e, t) {
                localStorage.setItem("case_list_page_" + e, t)
            },
            getCaseListCurPage: function(e) {
                return localStorage.getItem("case_list_page_" + e)
            },
            setSession: function(e) {
                localStorage.setItem("session", e)
            },
            getSession: function() {
                return localStorage.getItem("session")
            },
            setNewCasePath: function(e) {
                localStorage.setItem("new_case_path", e)
            },
            getNewCasePath: function() {
                return localStorage.getItem("new_case_path")
            },
            setAtTemplate: function(e) {
                localStorage.setItem("at_template", JSON.stringify(e))
            },
            getAtTemplate: function() {
                try {
                    return JSON.parse(localStorage.getItem("at_template")) || !1
                } catch (e) {
                    console.log(e)
                }
            },
            setMapInfo: function(e) {
                localStorage.setItem("map_into", JSON.stringify(e))
            },
            getMapInfo: function() {
                return JSON.parse(localStorage.getItem("map_into")) || {}
            },
            _getAircraftRouteMap: function() {
                var e = "aircraft_route_map",
                    t = localStorage.getItem(e);
                if (t) try {
                    t = JSON.parse(t)
                } catch (e) {
                    console.log("setAircraftRoute error, too large, ", e)
                } else t = {};
                return t
            },
            setAircraftRoute: function(e, t) {
                if (e && t) {
                    var s = "aircraft_route_map",
                        o = this._getAircraftRouteMap();
                    o[e] = JSON.stringify(t), localStorage.setItem(s, JSON.stringify(o))
                }
            },
            getAircraftRoute: function(e) {
                if (e) {
                    var t = this._getAircraftRouteMap(),
                        s = t[e];
                    if (s) try {
                        s = JSON.parse(s)
                    } catch (e) {
                        console.log("getAircraftRoute error, ", e)
                    }
                    return s
                }
            },
            getGmca: function() {
                return JSON.parse(localStorage.getItem("gmca")) || !1
            },
            setGmca: function(e) {
                localStorage.setItem("gmca", JSON.stringify(e))
            },
            set_report_cfg_showed: function(e) {
                localStorage.setItem("report_cfg_showed", e)
            },
            get_report_cfg_showed: function() {
                return localStorage.getItem("report_cfg_showed") || 0
            },
            ignore_upgrade_sql: function(e) {
                try {
                    var t = localStorage.getItem("ignore_upgrade_sql") || "{}";
                    return t = JSON.parse(t), t[e] = 1, localStorage.setItem("ignore_upgrade_sql", JSON.stringify(t)), !0
                } catch (e) {
                    return !1
                }
            },
            clear_ignore_upgrade_sql: function() {
                return localStorage.removeItem("ignore_upgrade_sql"), !0
            },
            if_ignore_upgrade_sql: function(e) {
                try {
                    var t = localStorage.getItem("ignore_upgrade_sql") || "{}";
                    return t = JSON.parse(t), t[e] || 0
                } catch (e) {
                    return !1
                }
            },
            set_cali_log_opitons: function(e) {
                localStorage.setItem("cali_log_opitons", JSON.stringify(e))
            },
            get_cali_log_opitons: function() {
                var e = localStorage.getItem("cali_log_opitons");
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return null
                }
            },
            set_ass_version: function(e) {
                localStorage.setItem("ass_version", e)
            },
            get_ass_version: function(e) {
                var t = localStorage.getItem("ass_version");
                return t
            },
            set_system_info: function(e) {
                localStorage.setItem("system_info", JSON.stringify(e))
            },
            get_system_info: function() {
                var e = localStorage.getItem("system_info");
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return null
                }
            },
            get_mobile_bind: function(e) {
                try {
                    var t = localStorage.getItem("mobile_bind"),
                        s = JSON.parse(t) || {};
                    return s[e]
                } catch (e) {
                    return
                }
            },
            update_mobile_bind: function(e, t) {
                try {
                    var s = localStorage.getItem("mobile_bind"),
                        o = JSON.parse(s) || {};
                    o[e] = t, localStorage.setItem("mobile_bind", JSON.stringify(o))
                } catch (e) {}
            }
        }
    },
    739: function(e, t) {
        var s = localStorage.getItem("wsHost") || "localhost";
        e.exports = {
            wsServer: "ws://" + s,
            wsHost: "ws://" + s + ":19870",
            wsHost2: "ws://" + s + ":19871",
            wsHost3: "ws://" + s + ":9999"
        }
    },
    1404: function(e, t, s) {
        var o = s(739),
            i = (s(9), {}),
            r = function() {
                var e = this,
                    t = {},
                    s = function(e) {
                        function t(e, t) {
                            e = unescape(e);
                            for (var s = String.fromCharCode(e.charCodeAt(0) - e.length - (2 * t + 1)), o = 1; o < e.length; o++) s += String.fromCharCode(e.charCodeAt(o) - s.charCodeAt(o - 1));
                            return s
                        }
                        for (var s = e.split("*$"), o = 0; o < s.length; o++) s[o] = t(s[o], o);
                        return e = s.join("")
                    };
                return t.secret_key_enc = s("m%9Dl%99%CB%C9%CA%96*$%3C%97%9Fojfim*$F%9B%C6%9Cj%95%C4%91*$Hq%9C%95din%9E"), t.secret_key_dec = s("n%9Dn%97%C2%C5%C5%94*$%3F%9A%9Cmnlgk*$%3D%92%C3%97h%97%CB%99*$Fi%98%96bjq%9F"), t.develop = !1, e.encrypt = function(e) {
                    var s = utils.getDebug();
                    return t.develop && s ? e : utils.aes_encryption(e, t.secret_key_enc)
                }, e.decrypt = function(e) {
                    var s = utils.getDebug();
                    return t.develop && s ? e : utils.aes_decryption(e, t.secret_key_dec)
                }, e.log = function() {}, e.register = function(t, s, o) {
                    var r = this;
                    if (t = t || "", s = s || [], o = o || t, t) {
                        var a = function(o) {
                            if (o = o || {}, r.ws && 1 != r.ws.readyState) return void(o && o.onFailure("ws not established"));
                            var a = {
                                SEQ: utils.genSeq(Object.keys(i)),
                                CMD: t
                            };
                            for (var n in o) s.indexOf(n) >= 0 && (a[n] = a[n] || o[n]);
                            i[a.SEQ] = o;
                            var l = JSON.stringify(a);
                            l = e.encrypt(l), r.ws.send(l), e.log("send:", JSON.stringify(a))
                        };
                        r[o] = a
                    }
                }, e.getMessageHander = function() {
                    return function(t) {
                        try {
                            var s = t.data;
                            s = e.decrypt(s);
                            var o = JSON.parse(s);
                            if (e.log("recieve:", JSON.stringify(o)), o.EVENT) this.app && this.app[o.EVENT.toLowerCase()] && this.app[o.EVENT.toLowerCase()](o);
                            else if (o.SEQ) {
                                var r = utils.getDebug();
                                r && o.TIP_MSG && alert(o.TIP_MSG);
                                var a = o.SEQ,
                                    n = i[a];
                                o.ERROR && "SUCCESS" === o.ERROR.toUpperCase() ? n && n.onSuccess && n.onSuccess(o) : o.ERROR && "FAILURE" === o.ERROR.toUpperCase() ? n && n.onFailure && n.onFailure(o) : o.ERROR && "TIMEOUT" === o.ERROR.toUpperCase() ? n && n.onTimeout && n.onTimeout(o) : n && n.onFailure && n.onFailure(o), delete i[a]
                            }
                        } catch (e) {
                            console.error(e)
                        }
                    }
                }, e.close = function() {
                    this.ws && this.ws.close && (this.ws.close(), this.app = null)
                }, e
            }(),
            a = {
                general: {
                    url: o.wsHost + "/general",
                    connected: !1,
                    init: function(e) {
                        var t = this;
                        this.app = e, this.ws = new WebSocket(t.url), this.ws.onopen = function() {
                            t.connected = !0, t.onopen && t.onopen()
                        }, this.ws.onclose = this.onclose || function() {}, this.ws.onerror = this.onerror || function() {}, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "auto_upgrade_config", ["DEVICE", "DEVICE_INDEX", "DEVICE_FIRMWARE_TYPE", "FIRMWARE_DATA"]), s.call(this, "OpenDataViewer", ["VALUE"]), s.call(this, "DisableSleep", ["VALUE"]), s.call(this, "get_verify_code", [], "getVerifyCode"), s.call(this, "login_status", [], "login_status"), s.call(this, "login", ["AREA_CODE", "ACCOUNT", "PASSWORD", "VERIF_CODE"]), s.call(this, "logout", [], "logout"), s.call(this, "add_device_prepare", [], "add_device_prepare"), s.call(this, "add_device", ["DEVICE_TYPE", "COM", "BAUD_RATE", "CAN_INDEX", "T_ID", "R_ID"], "add_device")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    },
                    cmd: function(e) {
                        if (!this.ws || 1 == this.ws.readyState) {
                            var t = utils.genSeq(Object.keys(i)),
                                s = {
                                    SEQ: t,
                                    CMD: e.cmd
                                };
                            i[t] = e;
                            var o = JSON.stringify(s);
                            r.log("send:", o), o = r.encrypt(o), this.ws.send(o)
                        }
                    }
                },
                controller: {
                    url: o.wsHost + "/controller/config/user/",
                    app: null,
                    readyState: 0,
                    init: function(e) {
                        var t = this;
                        this.app = e;
                        var s = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + s.FILE), this.ws.onopen = function(e) {
                            t.readyState = e && e.target && e.target.readyState, t.onopen && t.onopen(e)
                        }, this.ws.onclose = function(e) {
                            t.readyState = e && e.target && e.target.readyState, t.onclose && t.onclose(e)
                        }, this.ws.onmessage = r.getMessageHander().bind(this);
                        var o = r.register;
                        o.call(this, "SetParamTable", ["VALUE", "INDEX"]), o.call(this, "GetParamTable", ["INDEX"]), o.call(this, "DoMotorTest", ["INDEX"]), o.call(this, "DoFactoryReset", ["INDEX"]), o.call(this, "SetEscIndex", ["INDEX"]), o.call(this, "GetControllerVer", [], "getControllerVer"), o.call(this, "SendEscDebugParams", ["PARAM0", "PARAM1", "PARAM2", "PARAM3"], "sendEscDebugParams"), o.call(this, "GetEscDebugParams", [], "getEscDebugParams"), o.call(this, "GetControllerSN", [], "getControllerSN"), o.call(this, "GetDeviceSN", [], "getDeviceSN"), o.call(this, "EnterFcSdcard", [], "enterFcSdcard"), o.call(this, "LeaveFcSdcard", [], "leaveFcSdcard"), o.call(this, "get_info", [], "getInfo"), o.call(this, "set_report_cfg", ["USER_NAME", "PASSWORD", "REPORT_CFG", "OP_TYPE", "LOCAL_PATH"]), o.call(this, "start_test", ["TYPE"]), o.call(this, "stop_test", ["TYPE", "RESULT"]), o.call(this, "refresh_dev_connect_status", []), o.call(this, "GetControllerType", [], "getControllerType"), o.call(this, "reset_all_params", [], "reset_all_params"), o.call(this, "SetCtrlInfo", ["LED"]), o.call(this, "GetCtrlInfo", []), o.call(this, "StartDebugMode", [], "startDebugMode"), o.call(this, "StopDebugMode", [], "stopDebugMode"), o.call(this, "GetParam", ["IDLIST"], "getParam"), o.call(this, "SetParam", ["DATA"], "setParam"), o.call(this, "GetFtpInfo", [], "getFtpInfo")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    },
                    onerror: function(e) {
                        utils.directTo("index")
                    },
                    read: function(e) {
                        if (!this.ws || 1 == this.ws.readyState) {
                            var t = utils.genSeq(Object.keys(i)),
                                s = {
                                    SEQ: t,
                                    CMD: "read",
                                    INDEX: e.index
                                };
                            i[t] = e;
                            var o = JSON.stringify(s);
                            r.log("send:", o), o = r.encrypt(o), this.ws.send(o)
                        }
                    },
                    write: function(e) {
                        if (!this.ws || 1 == this.ws.readyState) {
                            var t = utils.genSeq(Object.keys(i)),
                                s = {
                                    SEQ: t,
                                    CMD: "write",
                                    INDEX: e.index,
                                    VALUE: e.value
                                };
                            i[t] = e;
                            var o = JSON.stringify(s);
                            r.log("send:", o), o = r.encrypt(o), this.ws.send(o)
                        }
                    },
                    reset: function(e) {
                        if (!this.ws || 1 == this.ws.readyState) {
                            var t = utils.genSeq(Object.keys(i)),
                                s = {
                                    SEQ: t,
                                    CMD: "reset",
                                    INDEX: e.index
                                };
                            i[t] = e;
                            var o = JSON.stringify(s);
                            r.log("send:", o), o = r.encrypt(o), this.ws.send(o)
                        }
                    },
                    book: function(e) {
                        if (!this.ws || 1 == this.ws.readyState) {
                            var t = utils.genSeq(Object.keys(i)),
                                s = {
                                    SEQ: t,
                                    CMD: "book",
                                    PERIOD: e.period,
                                    INDEX: e.index
                                };
                            i[t] = e;
                            var o = JSON.stringify(s);
                            r.log("send:", o), o = r.encrypt(o), this.ws.send(o)
                        }
                    },
                    command: function(e) {
                        if (!this.ws || 1 == this.ws.readyState) {
                            var t = utils.genSeq(Object.keys(i)),
                                s = {
                                    SEQ: t,
                                    CMD: "command",
                                    INDEX: e.index
                                };
                            i[t] = e;
                            var o = JSON.stringify(s);
                            r.log("send:", o), o = r.encrypt(o), this.ws.send(o)
                        }
                    }
                },
                board_test: {
                    url: o.wsHost + "/controller/board_test/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this), register.call(this, "start_test", ["PRODUCT_ID"], "start_test"), register.call(this, "start_process", ["STEP_ID", "PRODUCT_ID", "IS_AUTO"], "start_process"), register.call(this, "get_status_info", ["STEP_ID"], "get_status_info"), register.call(this, "set_status_info", ["STEP_ID", "INDEX", "STATUS_INFO"], "set_status_info")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                upgrade: {
                    url: o.wsHost + "/controller/upgrade/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "upload_logs", [], "uploadLog"), s.call(this, "reset_all", []), s.call(this, "refresh_upgrade_package_info", ["PACK_URL", "PRODUCT"]), s.call(this, "upgrade_package", ["PACKAGE_VERSION", "FORCE_UPGRADE"]), s.call(this, "refresh_device_status", ["NAME", "PASSWORD", "TOKEN", "QUICK"], "refresh_device_status"), s.call(this, "beta_refresh", ["NAME", "PASSWORD", "TOKEN"], "beta_refresh"), s.call(this, "upgrade", ["DEVICE", "DEVICE_INDEX"], "upgrade"), s.call(this, "upgrade_package_data", ["DATA"], "upgrade_package_data"), s.call(this, "upgrade_selected_package", ["PACKAGE_VERSION"], "upgrade_selected_package"), s.call(this, "upgrade_file", ["DEVICE", "DEVICE_INDEX", "DEVICE_FIRMWARE_TYPE", "FILE_DATA"], "upgrade_file"), s.call(this, "upgrade_path", ["DEVICE", "DEVICE_INDEX", "DEVICE_FIRMWARE_TYPE", "DEVICE_FIRMWARE_PATH"], "upgrade_path"), s.call(this, "upgrade_package_consistency_confirm", ["CODE"], "upgrade_package_consistency_confirm"), s.call(this, "upgrade_announcement_cancel", ["CONTENT_ID"], "upgrade_announcement_cancel"), s.call(this, "upgrade_query_release_note", ["PACKAGE_VERSION", "LANGUAGE"], "upgrade_query_release_note"), s.call(this, "upgrade_package_type_select", ["PACKAGE_TYPE", "PACKAGE_VERSION"], "upgrade_package_type_select"), s.call(this, "upgrade_reset_all", [], "upgrade_reset_all"), s.call(this, "upgrade_package_product_type_select", ["PRODUCT_TYPE"], "upgrade_package_product_type_select"), s.call(this, "switch_server", ["TYPE"], "switch_server")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    },
                    onerror: function(e) {
                        utils.directTo("index")
                    }
                },
                nfz_upgrade: {
                    url: o.wsHost + "/controller/nfz_upgrade/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "upgrade_package", [])
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    },
                    onerror: function(e) {
                        utils.directTo("index")
                    }
                },
                live_video: {
                    url: o.wsHost + "/controller/live_video/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.binaryType = "arraybuffer", this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this), register.call(this, "get_server_port", [], "get_server_port")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                live_video_h1: {
                    url: o.wsHost + "/controller/h1_live_video/",
                    app: null
                },
                live_video_fpv: {
                    url: o.wsHost + "/controller/fpv_live_video/",
                    app: null
                },
                simulator: {
                    url: o.wsHost + "/controller/simulator/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this), register.call(this, "init", [], "sendinit")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    },
                    send: function(e, t) {
                        if (!this.ws || 1 == this.ws.readyState) {
                            var s = utils.genSeq(Object.keys(i)),
                                o = e;
                            o.SEQ = s, i[s] = t;
                            var a = JSON.stringify(o);
                            r.log("send:", a), a = r.encrypt(a), this.ws.send(a)
                        }
                    }
                },
                vison_simulator: {
                    url: o.wsHost + "/controller/vison_simulator/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "init", [], "sendinit")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    },
                    send: function(e, t) {
                        if (!this.ws || 1 == this.ws.readyState) {
                            var s = utils.genSeq(Object.keys(i)),
                                o = e;
                            o.SEQ = s, i[s] = t;
                            var a = JSON.stringify(o);
                            r.log("send:", a), a = r.encrypt(a), this.ws.send(a)
                        }
                    }
                },
                activate: {
                    url: o.wsHost + "/controller/module_activate/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this), register.call(this, "Activate", ["mobileflag"], "Activate"), register.call(this, "DisActivate", [], "DisActivate"), register.call(this, "DisActivateAll", [], "DisActivateAll"), register.call(this, "GetSnList", [], "GetSnList"), register.call(this, "ReplaceSn", [], "ReplaceSn"), register.call(this, "QuickActivate", [], "QuickActivate")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                command: {
                    url: o.wsHost + "/controller/command/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this), register.call(this, "AlignFreq", [], "AlignFreq"), register.call(this, "CancelAlignFreq", [], "CancelAlignFreq")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                p4: {
                    url: o.wsHost + "/controller/p4_ext/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice,
                            s = t && t.FILE || this.app.FILE;
                        this.ws = new WebSocket(this.url + s), this.ws.onopen = this.onopen || this.app && this.app.onopen, this.ws.onclose = this.onclose || this.app && this.app.onclose, this.ws.onmessage = r.getMessageHander().bind(this);
                        var o = r.register;
                        o.call(this, "export_rc_log", ["VALUE"], "exportRCLog"), o.call(this, "export_wm220_log", ["VALUE"], "exportWm220Log"), o.call(this, "get_info", []), o.call(this, "get_file_list", [], "get_file_list"), o.call(this, "download_data_file", ["DIR", "FILE_NAME", "SAVE_PATH"], "download_data_file"), o.call(this, "open_local_file_path", [], "open_local_file_path"), o.call(this, "leave_file_page", [], "leave_file_page"), o.call(this, "compress_download_data_file", [], "compress_download_data_file")
                    },
                    onerror: function(e) {
                        utils.directTo("index")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                calibration: {
                    url: o.wsHost2 + "/controller/vision_calibration/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "vision_calibration_init", ["WIDTH", "HEIGHT", "SCREEN_WIDTH", "SCREEN_HEIGHT"], "initVisionCalibration"), s.call(this, "vision_calibration_set_cam_pair", ["INDEX"], "setCamPair"), s.call(this, "vision_calibration_enter_match_rect", [], "enterMatchRect"), s.call(this, "vision_calibration_enter_track", [], "enterTrack"), s.call(this, "open_folder", ["DIR", "FOLDER"], "openFolder"), s.call(this, "vision_calibration_start_calculation", [], "startCalculation"), s.call(this, "vision_calibration_stop", [], "stop"), s.call(this, "vision_calibration_set_dpi", ["VALUE"], "vision_calibration_set_dpi"), s.call(this, "vision_calibration_config_screen_size", [], "vision_calibration_config_screen_size")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                calibration_common: {
                    url: o.wsHost2 + "/controller/vision_calibration/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "vision_calibration_init", ["DEVICE", "WIDTH", "HEIGHT", "SCREEN_WIDTH", "SCREEN_HEIGHT"], "initVisionCalibration"), s.call(this, "vision_calibration_config_screen_size", []), s.call(this, "vision_calibration_set_screen_size", ["VALUE"]), s.call(this, "vision_calibration_set_cam_pair", ["INDEX"], "setCamPair"), s.call(this, "vision_calibration_enter_match_rect", ["COUNT"], "enterMatchRect"), s.call(this, "vision_calibration_enter_track", ["COUNT"], "enterTrack"), s.call(this, "vision_calibration_start_calculation", [], "startCalculation"), s.call(this, "vision_calibration_stop", [], "stop")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                calibration_assist: {
                    url: o.wsHost + "/controller/vision_calibration/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "upload_calibrate_info", ["INFO"], "upload_calibrate_info")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                esc: {
                    url: o.wsHost + "/esc/config/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "SetParamTable", ["VALUE", "INDEX"]), s.call(this, "GetParamTable", ["INDEX"]), s.call(this, "DoMotorTest", ["INDEX"]), s.call(this, "DoFactoryReset", ["INDEX"]), s.call(this, "GetFlashActiveStatus", []), s.call(this, "ReadFlashData", []), s.call(this, "SelectFlashData", ["NAME"]), s.call(this, "GetSingleParam", ["PARAM"]), s.call(this, "GetFlashWriteFreq", []), s.call(this, "SetFlashWriteFreq", ["FREQ"]), s.call(this, "EraseFlashData", []), s.call(this, "SaveViewerData", ["PATH"]), s.call(this, "SetCtrlInfo", ["LED"]), s.call(this, "GetCtrlInfo", [])
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                flightdata: {
                    url: o.wsHost + "/controller/flight_data/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this)
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    },
                    SycFile: function(e) {
                        if (!this.ws || 1 == this.ws.readyState) {
                            var t = utils.genSeq(Object.keys(i)),
                                s = {
                                    SEQ: t,
                                    OPERATION: "SycFile",
                                    FILE_NAME: e.FILE_NAME
                                };
                            i[t] = e;
                            var o = JSON.stringify(s);
                            r.log("send:", o), o = r.encrypt(o), this.ws.send(o)
                        }
                    },
                    LoadFile: function(e) {
                        if (!this.ws || 1 == this.ws.readyState) {
                            var t = utils.genSeq(Object.keys(i)),
                                s = {
                                    SEQ: t,
                                    OPERATION: "LoadFile",
                                    FILE_NAME: e.FILE_NAME
                                };
                            i[t] = e;
                            var o = JSON.stringify(s);
                            r.log("send:", o), o = r.encrypt(o), this.ws.send(o)
                        }
                    }
                },
                recorderdata: {
                    url: o.wsHost + "/controller/recorder_data/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this)
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    },
                    FilterPack: function(e) {
                        if (!this.ws || 1 == this.ws.readyState) {
                            var t = utils.genSeq(Object.keys(i)),
                                s = {
                                    SEQ: t,
                                    OPERATION: "FilterPack",
                                    Pack_List: e.Pack_List
                                };
                            i[t] = e;
                            var o = JSON.stringify(s);
                            r.log("send:", o), o = r.encrypt(o), this.ws.send(o)
                        }
                    }
                },
                batteryinfo: {
                    url: o.wsHost + "/battery_info/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror,
                            this.ws.onmessage = r.getMessageHander().bind(this)
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                iosdentersd: {
                    url: o.wsHost + "/iosd/enter_sd/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this)
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                hil: {
                    url: o.wsHost + "/hil/config/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "add_data", ["DATA_TYPE", "DATA"], "add_data"), s.call(this, "clear_data", [], "clear_data"), s.call(this, "general_cmd", ["VERSION", "CMD_ID", "SENDER", "SENDER_INDEX", "RECEIVER", "RECEIVER_INDEX", "CMD_TYPE", "CMD_SET"], "general_cmd"), s.call(this, "send_cmd", ["IS_TIMER", "PERIOD", "CMD_LIST"], "send_cmd"), s.call(this, "stop_cmd", [], "stop_cmd"), s.call(this, "filter_push_data", ["IS_ENABLE", "SENDER", "SENDER_INDEX", "RECEIVER", "RECEIVER_INDEX", "CMD_SET", "CMD_ID"], "filter_push_data")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                grap_pack: {
                    url: o.wsHost + "/hil/grap_pack/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "set_rule", ["SENDER", "SENDER_INDEX", "RECEIVER", "RECEIVER_INDEX", "CMD_SET", "CMD_ID", "ENC_TYPE", "PACK_DIR", "IS_LIMIT_LINK", "ACK_TYPE", "PROTOCAL_TYPE", "LINK_NAME"], "set_rule")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                hil_ping: {
                    url: o.wsHost + "/hil/ping/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "start_ping", ["RECEIVER", "RECEIVER_INDEX", "TIME_OUT_PERIOD", "SEND_INTERVAL", "DATA_LEN", "FIX_VALUE", "DATA_VALUE"], "start_ping"), s.call(this, "stop_ping", [], "stop_ping")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                hil_loop_back: {
                    url: o.wsHost + "/hil/loop_back/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "start_loop_back", ["LINK_NAME", "SEND_DATA"], "start_loop_back"), s.call(this, "stop_loop_back", [], "stop_loop_back")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                cert_import: {
                    url: o.wsHost + "/controller/cert_import/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "server_import", ["VALID_TIME", "SERVICES"], "server_import"), s.call(this, "login_server", ["USER_NAME", "PASSWORD"], "login_server"), s.call(this, "get_camera_sn", [], "get_camera_sn"), s.call(this, "local_import", ["FILE_PATH"], "local_import")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                user_feedback: {
                    url: o.wsHost + "/controller/user_feedback/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this)
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                tof_3d: {
                    url: o.wsHost + "/controller/tof_3d/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "3d_tof_check_connection"), s.call(this, "3d_tof_check_frame_rate", ["DIRECTION"]), s.call(this, "3d_tof_check_intergration_time", ["DIRECTION"]), s.call(this, "3d_tof_check_tillum", ["DIRECTION"]), s.call(this, "3d_tof_check_zsensor", ["DIRECTION"]), s.call(this, "3d_tof_set_phase_offset", ["VALUE", "CLEAR_CMD", "DIRECTION"]), s.call(this, "3d_tof_set_temperature_value", ["SCALE", "COEFF_I", "COEFF_S", "DIRECTION"]), s.call(this, "3d_tof_set_frame_rate", ["VALUE", "DIRECTION"]), s.call(this, "3d_tof_set_intergration_time", ["VALUE", "DIRECTION"]), s.call(this, "3d_tof_set_command", ["VALUE", "DIRECTION"]), s.call(this, "3d_tof_set_filter", ["VALUE", "AMPLIUDE", "DENOISE"]), s.call(this, "3d_tof_check_value_mouse_position", ["TYPE", "X", "Y"]), s.call(this, "3d_tof_add_watch_points", ["POINTS"]), s.call(this, "3d_tof_delete_watch_points", ["POINTS"]), s.call(this, "3d_tof_set_data_save", ["VALUE"]), s.call(this, "3d_tof_set_open_path"), s.call(this, "3d_tof_set_threshold", ["TYPE", "MAX_THRESHOLD", "MIN_THRESHOLD"])
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                tof: {
                    url: o.wsHost + "/controller/tof/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "init_tof", ["DIRECTION", "CTROL_CMD"], "init_tof"), s.call(this, "set_direction", ["DIRECTION"], "set_direction"), s.call(this, "set_ctrol_cmd", ["CTROL_CMD"], "set_ctrol_cmd"), s.call(this, "set_delta_time", ["DELTA_TIME"], "set_delta_time"), s.call(this, "set_led_power", ["DRIVER_RANGE", "EMITTER_DAC"], "set_led_power"), s.call(this, "set_tempr_cmd", ["TEMPR_REFERENCE", "PHASE_EXPONENT", "PHASE_OFFSET_TEMPR_CO1", "PHASE_OFFSET_TEMPR_CO2"], "set_tempr_cmd"), s.call(this, "set_bg_light", ["PHASE_OFFSET_AMBIENT_CO1", "PHASE_OFFSET_AMBIENT_CO2"], "set_bg_light"), s.call(this, "start_calibrate", ["STEP", "DISTANCE"], "start_calibrate"), s.call(this, "get_tof_calibrate_result", [], "get_tof_calibrate_result")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                ultrasonic: {
                    url: o.wsHost + "/controller/ultrasonic/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "set_direction", ["DIRECTION"], "set_direction")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                radio: {
                    url: o.wsHost + "/radio/settings/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onerror = this.onerror, this.ws.onmessage = r.getMessageHander().bind(this)
                    },
                    close: function() {
                        this.ws && this.ws.close && (this.ws.close(), this.app = null)
                    },
                    get_work_mode: function(e) {
                        if (!this.ws || 1 == this.ws.readyState) {
                            var t = utils.genSeq(Object.keys(i)),
                                s = {
                                    SEQ: t,
                                    CMD: "command",
                                    OP: "GET",
                                    INDEX: "work_mode"
                                };
                            i[t] = e;
                            var o = JSON.stringify(s);
                            r.log("send:", o), o = r.encrypt(o), this.ws.send(o)
                        }
                    },
                    set_work_mode: function(e) {
                        if (!this.ws || 1 == this.ws.readyState) {
                            var t = utils.genSeq(Object.keys(i)),
                                s = {
                                    SEQ: t,
                                    CMD: "command",
                                    OP: "SET",
                                    INDEX: "work_mode",
                                    VALUE: e.VALUE
                                };
                            i[t] = e;
                            var o = JSON.stringify(s);
                            r.log("send:", o), o = r.encrypt(o), this.ws.send(o)
                        }
                    },
                    clear_info: function(e) {
                        if (!this.ws || 1 == this.ws.readyState) {
                            var t = utils.genSeq(Object.keys(i)),
                                s = {
                                    SEQ: t,
                                    CMD: "command",
                                    OP: "SET",
                                    INDEX: "clear_info"
                                };
                            i[t] = e;
                            var o = JSON.stringify(s);
                            r.log("send:", o), o = r.encrypt(o), this.ws.send(o)
                        }
                    }
                },
                autoUpgrade: {
                    url: o.wsHost + "/auto_upgrade/",
                    app: null,
                    createInstance: function(e) {
                        var t = {};
                        t.app = e, t.ws = new WebSocket(this.url + e.FILE), t.ws.onopen = e.onopen, t.ws.onclose = function(s) {
                            this.ws && this.ws.close && (t.ws.close(), t.app = null), e.onclose(s)
                        }, t.ws.onerror = e.onerror, t.ws.onmessage = r.getMessageHander().bind(t)
                    }
                },
                autotesting: {
                    url: o.wsHost + "/controller/auto_test",
                    app: null,
                    prepare: !1,
                    init: function(e) {
                        var t = this;
                        this.app = e, this.ws = new WebSocket(this.url + "/" + e.FILE), this.ws.onopen = function(s) {
                            t.prepare = !0, e.onopen && e.onopen(s)
                        }, this.ws.onclose = e.onclose, this.ws.onerror = e.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "EnterAutoTest", ["VALUE"]), s.call(this, "SetCaseData", ["VALUE"]), s.call(this, "SetPushObseFreq", ["VALUE"]), s.call(this, "QueryDevice", ["VALUE"])
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                autotesting_common: {
                    url: o.wsHost + "/autotest",
                    app: null,
                    prepare: !1,
                    init: function(e) {
                        var t = this;
                        this.app = e, this.ws = new WebSocket(this.url), this.ws.onopen = function(s) {
                            t.prepare = !0, e.onopen && e.onopen(s)
                        }, this.ws.onclose = e.onclose || function() {}, this.ws.onerror = e.onerror || function() {}, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "GetAutoTestTemplate"), s.call(this, "ExecuteJob", ["VALUE"]), s.call(this, "ExecuteLocalJob", ["VALUE", "JOB_TYPE"]), s.call(this, "AbortJob", ["VALUE", "JOB_TYPE"]), s.call(this, "get_state"), s.call(this, "switch_state", ["state"]), s.call(this, "device_list"), s.call(this, "set_hostname", ["VALUE"]), s.call(this, "set_auto", ["VALUE"]), s.call(this, "get_hostname"), s.call(this, "get_auto"), s.call(this, "add_tc", ["projectid", "session", "testcase"]), s.call(this, "proj_tcs", ["projectid", "session", "page", "size", "path", "filter", "exact"]), s.call(this, "del_tc", ["projectid", "session", "testcaseid"]), s.call(this, "fetch_tc", ["projectid", "session", "testcaseid"]), s.call(this, "update_tc", ["projectid", "session", "testcaseid", "attrs"]), s.call(this, "add_teststep", ["projectid", "session", "name", "desc", "content", "type", "path", "author"]), s.call(this, "del_teststep", ["projectid", "session", "teststepid"]), s.call(this, "get_teststep", ["projectid", "session", "teststepid", "name", "desc", "content", "type", "path", "author", "page", "size"]), s.call(this, "update_teststep", ["projectid", "session", "teststepid", "name", "desc", "content", "type", "path", "author"]), s.call(this, "my_projs", ["session"]), s.call(this, "my_boards", ["session", "cursor"]), s.call(this, "create_plan", ["projectid", "session", "name", "remark", "tags", "author", "content"]), s.call(this, "update_plan", ["projectid", "session", "planid", "attrs"]), s.call(this, "sync_plan", ["projectid", "session", "planid", "tclist"]), s.call(this, "plan_info", ["projectid", "session", "planid"]), s.call(this, "plan_tcs", ["projectid", "session", "planid"]), s.call(this, "del_plan", ["projectid", "session", "planid"]), s.call(this, "my_plans", ["projectid", "session", "page", "size", "tags", "filter"]), s.call(this, "my_jobs", ["projectid", "session", "filter"]), s.call(this, "my_reports", ["projectid", "session", "filter"]), s.call(this, "execute_job", ["projectid", "session", "planid", "tags", "times"]), s.call(this, "job_detail", ["projectid", "session", "jobid"]), s.call(this, "abort_job", ["projectid", "session", "jobid"]), s.call(this, "create_timer", ["projectid", "session", "timer"]), s.call(this, "list_timer", ["projectid", "session", "page", "size"]), s.call(this, "delete_timer", ["projectid", "session", "timerid"]), s.call(this, "login", ["username", "password"]), s.call(this, "checklogin", ["session"]), s.call(this, "get_tc_template", ["session", "title", "desc", "creator", "projectid"]), s.call(this, "add_tc_template", ["session", "projectid", "title", "desc", "device", "creator", "content"]), s.call(this, "del_tc_template", ["session", "templateid", "projectid"]), s.call(this, "get_tc_tree", ["session", "projectid"]), s.call(this, "update_tc_path", ["session", "projectid", "oldprefix", "newprefix"])
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                autotesting_jobexe: {
                    url: o.wsHost3 + "/JobExecute",
                    app: null,
                    prepare: !1,
                    init: function(e) {
                        var t = this;
                        this.app = e, this.ws = new WebSocket(this.url), this.ws.onopen = function(e) {
                            t.prepare = !0, t.onopen && t.onopen(e)
                        }, this.ws.onclose = t.onclose || function() {}, this.ws.onerror = t.onerror || function() {}, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "ExecuteJob", ["VALUE"]), s.call(this, "GetFcV1Tree"), s.call(this, "GetFcV1File", ["VALUE"])
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                get_hash_param: {
                    url: o.wsHost + "/controller/get_hash_param",
                    app: null,
                    init: function(e) {
                        this.app = e, this.ws = new WebSocket(this.url + "/" + e.activeDevice.FILE), this.ws.onopen = e.onopen, this.ws.onclose = e.onclose, this.ws.onerror = e.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var t = r.register;
                        t.call(this, "set_push_freq", ["FREQ"])
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                rcSettings: {
                    url: o.wsHost + "/controller/wifi",
                    app: null,
                    init: function(e) {
                        this.app = e, this.ws = new WebSocket(this.url + "/" + e.FILE), this.ws.onopen = e.onopen, this.ws.onclose = e.onclose, this.ws.onerror = e.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var t = r.register;
                        t.call(this, "GetSsidEx"), t.call(this, "SetSsidEx", ["VALUE"]), t.call(this, "GetPasswordEx"), t.call(this, "SetPasswordEx", ["VALUE"]), t.call(this, "DoRebootWifi"), t.call(this, "GetUavSsidEx"), t.call(this, "GetUavPasswordEx"), t.call(this, "DoRestoreFactory"), t.call(this, "GetCurMode", [], "getCurMode"), t.call(this, "GetMac", [], "getMac"), t.call(this, "SetMac", ["VALUE"], "setMac")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                appreciation: {
                    url: o.wsHost + "/controller/appreciation",
                    app: null,
                    init: function(e) {
                        this.app = e, this.ws = new WebSocket(this.url + "/" + e.FILE), this.ws.onopen = e.onopen, this.ws.onclose = e.onclose, this.ws.onerror = e.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var t = r.register;
                        t.call(this, "GetUserInfo", [], "getUserInfo"), t.call(this, "GetEansNote", [], "getEansNote"), t.call(this, "DoActivate", ["ID", "CODE"], "doActivate"), t.call(this, "DoReLoad", [], "doReLoad")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                zenmuse_debug_data: {
                    url: o.wsHost + "/controller/zenmuse_debug_data",
                    app: null,
                    status: "",
                    init: function(e) {
                        var t = this;
                        this.app = e, this.ws = new WebSocket(this.url + "/" + e.FILE), this.ws.onopen = function() {
                            t.status = "ready", e.onopen.apply(this, arguments)
                        }, this.ws.onclose = e.onclose, this.ws.onerror = e.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "SendDebugCmd", ["DATA1", "DATA2", "DATA3"], "sendDebugCmd"), s.call(this, "DoCail", [], "doCail"), s.call(this, "EraseCailData", [], "eraseCailData"), s.call(this, "DoFineTurning", ["AXIS_TYPE", "CTRL_TYPE"], "doFineTurning")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                radar: {
                    url: o.wsHost + "/controller/radar",
                    app: null,
                    init: function(e) {
                        this.app = e, this.ws = new WebSocket(this.url + "/" + e.FILE), this.ws.onopen = e.onopen, this.ws.onclose = e.onclose, this.ws.onerror = e.onerror, this.ws.onmessage = r.getMessageHander().bind(this);
                        var t = r.register;
                        t.call(this, "GetType", [], "getType"), t.call(this, "SetType", ["VALUE"], "setType"), t.call(this, "GetCountry", [], "getCountry"), t.call(this, "SetCountry", ["VALUE"], "setCountry"), t.call(this, "QueryVersion", ["RECEIVER", "RECEIVER_INDEX"], "queryVersion"), t.call(this, "SetHardwareId", ["RECEIVER", "HARDWARE_ID"], "setHardwareId"), t.call(this, "GetMultiParam", ["RECEIVER", "IDLIST"], "getMultiParam"), t.call(this, "SetMultiParam", ["RECEIVER", "DATA"], "setMultiParam")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                esc_upgrade: {
                    url: o.wsHost + "/controller/esc_upgrade/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.onopen, this.ws.onclose = this.onclose, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "upload_logs", [], "uploadLog"), s.call(this, "refresh_upgrade_package_info", ["PACK_URL"], "refresh_upgrade_package_info"), s.call(this, "upgrade_package", ["PACKAGE_VERSION"], "upgrade_package")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    },
                    onerror: function(e) {
                        utils.directTo("index")
                    }
                },
                ronin2: {
                    url: o.wsHost + "/ronin/config/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.app.onopen || function() {}, this.ws.onclose = this.app.onclose || function() {}, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "SetRoninCtrlParam", ["DATA"], "setRoninCtrlParam"), s.call(this, "RecoverDefaultParams", [], "recoverDefaultParams"), s.call(this, "SetUserParam", ["DATA"], "setUserParam"), s.call(this, "DoCail", ["TYPE"], "doCail"), s.call(this, "get_info", [], "getInfo")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                flight_record: {
                    url: o.wsHost + "/controller/flight_record/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.app.onopen || function() {}, this.ws.onclose = this.app.onclose || function() {}, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "get_file_list", []), s.call(this, "upload_file", ["FILE_NAME"])
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                adsb_log: {
                    url: o.wsHost + "/adsb/log/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.app.onopen || function() {}, this.ws.onclose = this.app.onclose || function() {}, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "ExportLog", ["PATH"], "exportLog")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                rtk_x: {
                    url: o.wsHost + "/rtk_x/config/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.app.onopen || function() {}, this.ws.onclose = this.app.onclose || function() {}, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "DoLanguageCtrl", ["VALUE"], "doLanguageCtrl")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                scan_freq_record: {
                    url: o.wsHost + "/controller/scan_freq_record/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.app.onopen || function() {}, this.ws.onclose = this.app.onclose || function() {}, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "GetFolders", [], "getFolders"), s.call(this, "GetFileList", ["FOLDER"], "getFileList"), s.call(this, "LoadFile", ["FOLDER", "FILE"], "loadFile"), s.call(this, "Play", [], "play"), s.call(this, "Pause", [], "pause"), s.call(this, "Stop", [], "stop"), s.call(this, "SelectFrame", ["FRAME_INDEX"], "selectFrame")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                },
                white_list: {
                    url: o.wsHost + "/controller/white_list/",
                    app: null,
                    init: function(e) {
                        this.app = e;
                        var t = this.app.activeDevice;
                        this.ws = new WebSocket(this.url + t.FILE), this.ws.onopen = this.app.onopen || function() {}, this.ws.onclose = this.app.onclose || function() {}, this.ws.onmessage = r.getMessageHander().bind(this);
                        var s = r.register;
                        s.call(this, "OneTimeAuth", [], "oneTimeAuth"), s.call(this, "WhiteListAuth", ["SAVE_PATH"], "whiteListAuth"), s.call(this, "login_server", ["USER_NAME", "PASSWORD"], "loginServer")
                    },
                    close: function() {
                        var e = r.close.bind(this);
                        e()
                    }
                }
            };
        e.exports = a
    }
});