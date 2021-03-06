(function(e) {
    function n(t) {
        e.jqplot.ElemContainer.call(this);
        this.name = t;
        this._series = [];
        this.show = false;
        this.tickRenderer = e.jqplot.AxisTickRenderer;
        this.tickOptions = {};
        this.labelRenderer = e.jqplot.AxisLabelRenderer;
        this.labelOptions = {};
        this.label = null;
        this.showLabel = true;
        this.min = null;
        this.max = null;
        this.autoscale = false;
        this.pad = 1.2;
        this.padMax = null;
        this.padMin = null;
        this.ticks = [];
        this.numberTicks;
        this.tickInterval;
        this.renderer = e.jqplot.LinearAxisRenderer;
        this.rendererOptions = {};
        this.showTicks = true;
        this.showTickMarks = true;
        this.showMinorTicks = true;
        this.drawMajorGridlines = true;
        this.drawMinorGridlines = false;
        this.drawMajorTickMarks = true;
        this.drawMinorTickMarks = true;
        this.useSeriesColor = false;
        this.borderWidth = null;
        this.borderColor = null;
        this.scaleToHiddenSeries = false;
        this._dataBounds = {min: null, max: null};
        this._intervalStats = [];
        this._offsets = {min: null, max: null};
        this._ticks = [];
        this._label = null;
        this.syncTicks = null;
        this.tickSpacing = 75;
        this._min = null;
        this._max = null;
        this._tickInterval = null;
        this._numberTicks = null;
        this.__ticks = null;
        this._options = {}
    }
    function r(t) {
        e.jqplot.ElemContainer.call(this);
        this.show = false;
        this.location = "ne";
        this.labels = [];
        this.showLabels = true;
        this.showSwatches = true;
        this.placement = "insideGrid";
        this.xoffset = 0;
        this.yoffset = 0;
        this.border;
        this.background;
        this.textColor;
        this.fontFamily;
        this.fontSize;
        this.rowSpacing = "0.5em";
        this.renderer = e.jqplot.TableLegendRenderer;
        this.rendererOptions = {};
        this.preDraw = false;
        this.marginTop = null;
        this.marginRight = null;
        this.marginBottom = null;
        this.marginLeft = null;
        this.escapeHtml = false;
        this._series = [];
        e.extend(true, this, t)
    }
    function i(t) {
        e.jqplot.ElemContainer.call(this);
        this.text = t;
        this.show = true;
        this.fontFamily;
        this.fontSize;
        this.textAlign;
        this.textColor;
        this.renderer = e.jqplot.DivTitleRenderer;
        this.rendererOptions = {};
        this.escapeHtml = false
    }
    function s(t) {
        t = t || {};
        e.jqplot.ElemContainer.call(this);
        this.show = true;
        this.xaxis = "xaxis";
        this._xaxis;
        this.yaxis = "yaxis";
        this._yaxis;
        this.gridBorderWidth = 2;
        this.renderer = e.jqplot.LineRenderer;
        this.rendererOptions = {};
        this.data = [];
        this.gridData = [];
        this.label = "";
        this.showLabel = true;
        this.color;
        this.negativeColor;
        this.lineWidth = 2.5;
        this.lineJoin = "round";
        this.lineCap = "round";
        this.linePattern = "solid";
        this.shadow = true;
        this.shadowAngle = 45;
        this.shadowOffset = 1.25;
        this.shadowDepth = 3;
        this.shadowAlpha = "0.1";
        this.breakOnNull = false;
        this.markerRenderer = e.jqplot.MarkerRenderer;
        this.markerOptions = {};
        this.showLine = true;
        this.showMarker = true;
        this.index;
        this.fill = false;
        this.fillColor;
        this.fillAlpha;
        this.fillAndStroke = false;
        this.disableStack = false;
        this._stack = false;
        this.neighborThreshold = 4;
        this.fillToZero = false;
        this.fillToValue = 0;
        this.fillAxis = "y";
        this.useNegativeColors = true;
        this._stackData = [];
        this._plotData = [];
        this._plotValues = {x: [], y: []};
        this._intervals = {x: {}, y: {}};
        this._prevPlotData = [];
        this._prevGridData = [];
        this._stackAxis = "y";
        this._primaryAxis = "_xaxis";
        this.canvas = new e.jqplot.GenericCanvas;
        this.shadowCanvas = new e.jqplot.GenericCanvas;
        this.plugins = {};
        this._sumy = 0;
        this._sumx = 0;
        this._type = ""
    }
    function o() {
        e.jqplot.ElemContainer.call(this);
        this.drawGridlines = true;
        this.gridLineColor = "#eaeaea";
        this.gridLineWidth = 1;
        this.background = "#fff";
        this.borderColor = "#000";
        this.borderWidth = 2;
        this.drawBorder = true;
        this.shadow = true;
        this.shadowAngle = 45;
        this.shadowOffset = 1.5;
        this.shadowWidth = 3;
        this.shadowDepth = 3;
        this.shadowColor = null;
        this.shadowAlpha = "0.07";
        this._left;
        this._top;
        this._right;
        this._bottom;
        this._width;
        this._height;
        this._axes = [];
        this.renderer = e.jqplot.CanvasGridRenderer;
        this.rendererOptions = {};
        this._offsets = {top: null, bottom: null, left: null, right: null}
    }
    function a() {
        function l(e) {
            var t, n, r, i, s;
            for (var o = 0; o < e.length; o++) {
                var u;
                var a = [e[o].data, e[o]._stackData, e[o]._plotData, e[o]._prevPlotData];
                for (var f = 0; f < 4; f++) {
                    u = true;
                    t = a[f];
                    if (e[o]._stackAxis == "x") {
                        for (var l = 0; l < t.length; l++) {
                            if (typeof t[l][1] != "number") {
                                u = false;
                                break
                            }
                        }
                        if (u) {
                            t.sort(function(e, t) {
                                return e[1] - t[1]
                            })
                        }
                    } else {
                        for (var l = 0; l < t.length; l++) {
                            if (typeof t[l][0] != "number") {
                                u = false;
                                break
                            }
                        }
                        if (u) {
                            t.sort(function(e, t) {
                                return e[0] - t[0]
                            })
                        }
                    }
                }
            }
        }
        function c(e) {
            var t = e.data.plot;
            var n = t.eventCanvas._elem.offset();
            var r = {x: e.pageX - n.left, y: e.pageY - n.top};
            var i = {xaxis: null, yaxis: null, x2axis: null, y2axis: null, y3axis: null, y4axis: null, y5axis: null, y6axis: null, y7axis: null, y8axis: null, y9axis: null, yMidAxis: null};
            var s = ["xaxis", "yaxis", "x2axis", "y2axis", "y3axis", "y4axis", "y5axis", "y6axis", "y7axis", "y8axis", "y9axis", "yMidAxis"];
            var o = t.axes;
            var u, a;
            for (u = 11; u > 0; u--) {
                a = s[u - 1];
                if (o[a].show) {
                    i[a] = o[a].series_p2u(r[a.charAt(0)])
                }
            }
            return{offsets: n, gridPos: r, dataPos: i}
        }
        function h(t, n) {
            var r = n.series;
            var i, s, o, u, a, f, l, c, h, p, d, v;
            var m, g, y, b, w, E, S;
            var x, T;
            for (o = n.seriesStack.length - 1; o >= 0; o--) {
                i = n.seriesStack[o];
                u = r[i];
                S = u._highlightThreshold;
                switch (u.renderer.constructor) {
                    case e.jqplot.BarRenderer:
                        f = t.x;
                        l = t.y;
                        for (s = 0; s < u._barPoints.length; s++) {
                            w = u._barPoints[s];
                            y = u.gridData[s];
                            if (f > w[0][0] && f < w[2][0] && l > w[2][1] && l < w[0][1]) {
                                return{seriesIndex: u.index, pointIndex: s, gridData: y, data: u.data[s], points: u._barPoints[s]}
                            }
                        }
                        break;
                    case e.jqplot.PyramidRenderer:
                        f = t.x;
                        l = t.y;
                        for (s = 0; s < u._barPoints.length; s++) {
                            w = u._barPoints[s];
                            y = u.gridData[s];
                            if (f > w[0][0] + S[0][0] && f < w[2][0] + S[2][0] && l > w[2][1] && l < w[0][1]) {
                                return{seriesIndex: u.index, pointIndex: s, gridData: y, data: u.data[s], points: u._barPoints[s]}
                            }
                        }
                        break;
                    case e.jqplot.DonutRenderer:
                        p = u.startAngle / 180 * Math.PI;
                        f = t.x - u._center[0];
                        l = t.y - u._center[1];
                        a = Math.sqrt(Math.pow(f, 2) + Math.pow(l, 2));
                        if (f > 0 && -l >= 0) {
                            c = 2 * Math.PI - Math.atan(-l / f)
                        } else if (f > 0 && -l < 0) {
                            c = -Math.atan(-l / f)
                        } else if (f < 0) {
                            c = Math.PI - Math.atan(-l / f)
                        } else if (f == 0 && -l > 0) {
                            c = 3 * Math.PI / 2
                        } else if (f == 0 && -l < 0) {
                            c = Math.PI / 2
                        } else if (f == 0 && l == 0) {
                            c = 0
                        }
                        if (p) {
                            c -= p;
                            if (c < 0) {
                                c += 2 * Math.PI
                            } else if (c > 2 * Math.PI) {
                                c -= 2 * Math.PI
                            }
                        }
                        h = u.sliceMargin / 180 * Math.PI;
                        if (a < u._radius && a > u._innerRadius) {
                            for (s = 0; s < u.gridData.length; s++) {
                                d = s > 0 ? u.gridData[s - 1][1] + h : h;
                                v = u.gridData[s][1];
                                if (c > d && c < v) {
                                    return{seriesIndex: u.index, pointIndex: s, gridData: [t.x, t.y], data: u.data[s]}
                                }
                            }
                        }
                        break;
                    case e.jqplot.PieRenderer:
                        p = u.startAngle / 180 * Math.PI;
                        f = t.x - u._center[0];
                        l = t.y - u._center[1];
                        a = Math.sqrt(Math.pow(f, 2) + Math.pow(l, 2));
                        if (f > 0 && -l >= 0) {
                            c = 2 * Math.PI - Math.atan(-l / f)
                        } else if (f > 0 && -l < 0) {
                            c = -Math.atan(-l / f)
                        } else if (f < 0) {
                            c = Math.PI - Math.atan(-l / f)
                        } else if (f == 0 && -l > 0) {
                            c = 3 * Math.PI / 2
                        } else if (f == 0 && -l < 0) {
                            c = Math.PI / 2
                        } else if (f == 0 && l == 0) {
                            c = 0
                        }
                        if (p) {
                            c -= p;
                            if (c < 0) {
                                c += 2 * Math.PI
                            } else if (c > 2 * Math.PI) {
                                c -= 2 * Math.PI
                            }
                        }
                        h = u.sliceMargin / 180 * Math.PI;
                        if (a < u._radius) {
                            for (s = 0; s < u.gridData.length; s++) {
                                d = s > 0 ? u.gridData[s - 1][1] + h : h;
                                v = u.gridData[s][1];
                                if (c > d && c < v) {
                                    return{seriesIndex: u.index, pointIndex: s, gridData: [t.x, t.y], data: u.data[s]}
                                }
                            }
                        }
                        break;
                    case e.jqplot.BubbleRenderer:
                        f = t.x;
                        l = t.y;
                        var N = null;
                        if (u.show) {
                            for (var s = 0; s < u.gridData.length; s++) {
                                y = u.gridData[s];
                                g = Math.sqrt((f - y[0]) * (f - y[0]) + (l - y[1]) * (l - y[1]));
                                if (g <= y[2] && (g <= m || m == null)) {
                                    m = g;
                                    N = {seriesIndex: i, pointIndex: s, gridData: y, data: u.data[s]}
                                }
                            }
                            if (N != null) {
                                return N
                            }
                        }
                        break;
                    case e.jqplot.FunnelRenderer:
                        f = t.x;
                        l = t.y;
                        var C = u._vertices, k = C[0], L = C[C.length - 1], A, O, M;
                        function _(e, t, n) {
                            var r = (t[1] - n[1]) / (t[0] - n[0]);
                            var i = t[1] - r * t[0];
                            var s = e + t[1];
                            return[(s - i) / r, s]
                        }
                        A = _(l, k[0], L[3]);
                        O = _(l, k[1], L[2]);
                        for (s = 0; s < C.length; s++) {
                            M = C[s];
                            if (l >= M[0][1] && l <= M[3][1] && f >= A[0] && f <= O[0]) {
                                return{seriesIndex: u.index, pointIndex: s, gridData: null, data: u.data[s]}
                            }
                        }
                        break;
                    case e.jqplot.LineRenderer:
                        f = t.x;
                        l = t.y;
                        a = u.renderer;
                        if (u.show) {
                            if ((u.fill || u.renderer.bands.show && u.renderer.bands.fill) && (!n.plugins.highlighter || !n.plugins.highlighter.show)) {
                                var D = false;
                                if (f > u._boundingBox[0][0] && f < u._boundingBox[1][0] && l > u._boundingBox[1][1] && l < u._boundingBox[0][1]) {
                                    var P = u._areaPoints.length;
                                    var H;
                                    var s = P - 1;
                                    for (var H = 0; H < P; H++) {
                                        var B = [u._areaPoints[H][0], u._areaPoints[H][1]];
                                        var j = [u._areaPoints[s][0], u._areaPoints[s][1]];
                                        if (B[1] < l && j[1] >= l || j[1] < l && B[1] >= l) {
                                            if (B[0] + (l - B[1]) / (j[1] - B[1]) * (j[0] - B[0]) < f) {
                                                D = !D
                                            }
                                        }
                                        s = H
                                    }
                                }
                                if (D) {
                                    return{seriesIndex: i, pointIndex: null, gridData: u.gridData, data: u.data, points: u._areaPoints}
                                }
                                break
                            } else {
                                T = u.markerRenderer.size / 2 + u.neighborThreshold;
                                x = T > 0 ? T : 0;
                                for (var s = 0; s < u.gridData.length; s++) {
                                    y = u.gridData[s];
                                    if (a.constructor == e.jqplot.OHLCRenderer) {
                                        if (a.candleStick) {
                                            var F = u._yaxis.series_u2p;
                                            if (f >= y[0] - a._bodyWidth / 2 && f <= y[0] + a._bodyWidth / 2 && l >= F(u.data[s][2]) && l <= F(u.data[s][3])) {
                                                return{seriesIndex: i, pointIndex: s, gridData: y, data: u.data[s]}
                                            }
                                        } else if (!a.hlc) {
                                            var F = u._yaxis.series_u2p;
                                            if (f >= y[0] - a._tickLength && f <= y[0] + a._tickLength && l >= F(u.data[s][2]) && l <= F(u.data[s][3])) {
                                                return{seriesIndex: i, pointIndex: s, gridData: y, data: u.data[s]}
                                            }
                                        } else {
                                            var F = u._yaxis.series_u2p;
                                            if (f >= y[0] - a._tickLength && f <= y[0] + a._tickLength && l >= F(u.data[s][1]) && l <= F(u.data[s][2])) {
                                                return{seriesIndex: i, pointIndex: s, gridData: y, data: u.data[s]}
                                            }
                                        }
                                    } else if (y[0] != null && y[1] != null) {
                                        g = Math.sqrt((f - y[0]) * (f - y[0]) + (l - y[1]) * (l - y[1]));
                                        if (g <= x && (g <= m || m == null)) {
                                            m = g;
                                            return{seriesIndex: i, pointIndex: s, gridData: y, data: u.data[s]}
                                        }
                                    }
                                }
                            }
                        }
                        break;
                    default:
                        f = t.x;
                        l = t.y;
                        a = u.renderer;
                        if (u.show) {
                            T = u.markerRenderer.size / 2 + u.neighborThreshold;
                            x = T > 0 ? T : 0;
                            for (var s = 0; s < u.gridData.length; s++) {
                                y = u.gridData[s];
                                if (a.constructor == e.jqplot.OHLCRenderer) {
                                    if (a.candleStick) {
                                        var F = u._yaxis.series_u2p;
                                        if (f >= y[0] - a._bodyWidth / 2 && f <= y[0] + a._bodyWidth / 2 && l >= F(u.data[s][2]) && l <= F(u.data[s][3])) {
                                            return{seriesIndex: i, pointIndex: s, gridData: y, data: u.data[s]}
                                        }
                                    } else if (!a.hlc) {
                                        var F = u._yaxis.series_u2p;
                                        if (f >= y[0] - a._tickLength && f <= y[0] + a._tickLength && l >= F(u.data[s][2]) && l <= F(u.data[s][3])) {
                                            return{seriesIndex: i, pointIndex: s, gridData: y, data: u.data[s]}
                                        }
                                    } else {
                                        var F = u._yaxis.series_u2p;
                                        if (f >= y[0] - a._tickLength && f <= y[0] + a._tickLength && l >= F(u.data[s][1]) && l <= F(u.data[s][2])) {
                                            return{seriesIndex: i, pointIndex: s, gridData: y, data: u.data[s]}
                                        }
                                    }
                                } else {
                                    g = Math.sqrt((f - y[0]) * (f - y[0]) + (l - y[1]) * (l - y[1]));
                                    if (g <= x && (g <= m || m == null)) {
                                        m = g;
                                        return{seriesIndex: i, pointIndex: s, gridData: y, data: u.data[s]}
                                    }
                                }
                            }
                        }
                        break
                }
            }
            return null
        }
        this.animate = false;
        this.animateReplot = false;
        this.axes = {xaxis: new n("xaxis"), yaxis: new n("yaxis"), x2axis: new n("x2axis"), y2axis: new n("y2axis"), y3axis: new n("y3axis"), y4axis: new n("y4axis"), y5axis: new n("y5axis"), y6axis: new n("y6axis"), y7axis: new n("y7axis"), y8axis: new n("y8axis"), y9axis: new n("y9axis"), yMidAxis: new n("yMidAxis")};
        this.baseCanvas = new e.jqplot.GenericCanvas;
        this.captureRightClick = false;
        this.data = [];
        this.dataRenderer;
        this.dataRendererOptions;
        this.defaults = {axesDefaults: {}, axes: {xaxis: {}, yaxis: {}, x2axis: {}, y2axis: {}, y3axis: {}, y4axis: {}, y5axis: {}, y6axis: {}, y7axis: {}, y8axis: {}, y9axis: {}, yMidAxis: {}}, seriesDefaults: {}, series: []};
        this.defaultAxisStart = 1;
        this.drawIfHidden = false;
        this.eventCanvas = new e.jqplot.GenericCanvas;
        this.fillBetween = {series1: null, series2: null, color: null, baseSeries: 0, fill: true};
        this.fontFamily;
        this.fontSize;
        this.grid = new o;
        this.legend = new r;
        this.noDataIndicator = {show: false, indicator: "Loading Data...", axes: {xaxis: {min: 0, max: 10, tickInterval: 2, show: true}, yaxis: {min: 0, max: 12, tickInterval: 3, show: true}}};
        this.negativeSeriesColors = e.jqplot.config.defaultNegativeColors;
        this.options = {};
        this.previousSeriesStack = [];
        this.plugins = {};
        this.series = [];
        this.seriesStack = [];
        this.seriesColors = e.jqplot.config.defaultColors;
        this.sortData = true;
        this.stackSeries = false;
        this.syncXTicks = true;
        this.syncYTicks = true;
        this.target = null;
        this.targetId = null;
        this.textColor;
        this.title = new i;
        this._drawCount = 0;
        this._sumy = 0;
        this._sumx = 0;
        this._stackData = [];
        this._plotData = [];
        this._width = null;
        this._height = null;
        this._plotDimensions = {height: null, width: null};
        this._gridPadding = {top: null, right: null, bottom: null, left: null};
        this._defaultGridPadding = {top: 10, right: 10, bottom: 23, left: 10};
        this._addDomReference = e.jqplot.config.addDomReference;
        this.preInitHooks = new e.jqplot.HooksManager;
        this.postInitHooks = new e.jqplot.HooksManager;
        this.preParseOptionsHooks = new e.jqplot.HooksManager;
        this.postParseOptionsHooks = new e.jqplot.HooksManager;
        this.preDrawHooks = new e.jqplot.HooksManager;
        this.postDrawHooks = new e.jqplot.HooksManager;
        this.preDrawSeriesHooks = new e.jqplot.HooksManager;
        this.postDrawSeriesHooks = new e.jqplot.HooksManager;
        this.preDrawLegendHooks = new e.jqplot.HooksManager;
        this.addLegendRowHooks = new e.jqplot.HooksManager;
        this.preSeriesInitHooks = new e.jqplot.HooksManager;
        this.postSeriesInitHooks = new e.jqplot.HooksManager;
        this.preParseSeriesOptionsHooks = new e.jqplot.HooksManager;
        this.postParseSeriesOptionsHooks = new e.jqplot.HooksManager;
        this.eventListenerHooks = new e.jqplot.EventListenerManager;
        this.preDrawSeriesShadowHooks = new e.jqplot.HooksManager;
        this.postDrawSeriesShadowHooks = new e.jqplot.HooksManager;
        this.colorGenerator = new e.jqplot.ColorGenerator;
        this.negativeColorGenerator = new e.jqplot.ColorGenerator;
        this.canvasManager = new e.jqplot.CanvasManager;
        this.themeEngine = new e.jqplot.ThemeEngine;
        var f = 0;
        this.init = function(t, r, i) {
            i = i || {};
            for (var s = 0; s < e.jqplot.preInitHooks.length; s++) {
                e.jqplot.preInitHooks[s].call(this, t, r, i)
            }
            for (var s = 0; s < this.preInitHooks.hooks.length; s++) {
                this.preInitHooks.hooks[s].call(this, t, r, i)
            }
            this.targetId = "#" + t;
            this.target = e("#" + t);
            if (this._addDomReference) {
                this.target.data("jqplot", this)
            }
            this.target.removeClass("jqplot-error");
            if (!this.target.get(0)) {
                throw new Error("No plot target specified")
            }
            if (this.target.css("position") == "static") {
                this.target.css("position", "relative")
            }
            if (!this.target.hasClass("jqplot-target")) {
                this.target.addClass("jqplot-target")
            }
            if (!this.target.height()) {
                var o;
                if (i && i.height) {
                    o = parseInt(i.height, 10)
                } else if (this.target.attr("data-height")) {
                    o = parseInt(this.target.attr("data-height"), 10)
                } else {
                    o = parseInt(e.jqplot.config.defaultHeight, 10)
                }
                this._height = o;
                this.target.css("height", o + "px")
            } else {
                this._height = o = this.target.height()
            }
            if (!this.target.width()) {
                var a;
                if (i && i.width) {
                    a = parseInt(i.width, 10)
                } else if (this.target.attr("data-width")) {
                    a = parseInt(this.target.attr("data-width"), 10)
                } else {
                    a = parseInt(e.jqplot.config.defaultWidth, 10)
                }
                this._width = a;
                this.target.css("width", a + "px")
            } else {
                this._width = a = this.target.width()
            }
            for (var s = 0, f = u.length; s < f; s++) {
                this.axes[u[s]] = new n(u[s])
            }
            this._plotDimensions.height = this._height;
            this._plotDimensions.width = this._width;
            this.grid._plotDimensions = this._plotDimensions;
            this.title._plotDimensions = this._plotDimensions;
            this.baseCanvas._plotDimensions = this._plotDimensions;
            this.eventCanvas._plotDimensions = this._plotDimensions;
            this.legend._plotDimensions = this._plotDimensions;
            if (this._height <= 0 || this._width <= 0 || !this._height || !this._width) {
                throw new Error("Canvas dimension not set")
            }
            if (i.dataRenderer && e.isFunction(i.dataRenderer)) {
                if (i.dataRendererOptions) {
                    this.dataRendererOptions = i.dataRendererOptions
                }
                this.dataRenderer = i.dataRenderer;
                r = this.dataRenderer(r, this, this.dataRendererOptions)
            }
            if (i.noDataIndicator && e.isPlainObject(i.noDataIndicator)) {
                e.extend(true, this.noDataIndicator, i.noDataIndicator)
            }
            if (r == null || e.isArray(r) == false || r.length == 0 || e.isArray(r[0]) == false || r[0].length == 0) {
                if (this.noDataIndicator.show == false) {
                    throw new Error("No data specified")
                } else {
                    for (var c in this.noDataIndicator.axes) {
                        for (var h in this.noDataIndicator.axes[c]) {
                            this.axes[c][h] = this.noDataIndicator.axes[c][h]
                        }
                    }
                    this.postDrawHooks.add(function() {
                        var t = this.eventCanvas.getHeight();
                        var n = this.eventCanvas.getWidth();
                        var r = e('<div class="jqplot-noData-container" style="position:absolute;"></div>');
                        this.target.append(r);
                        r.height(t);
                        r.width(n);
                        r.css("top", this.eventCanvas._offsets.top);
                        r.css("left", this.eventCanvas._offsets.left);
                        var i = e('<div class="jqplot-noData-contents" style="text-align:center; position:relative; margin-left:auto; margin-right:auto;"></div>');
                        r.append(i);
                        i.html(this.noDataIndicator.indicator);
                        var s = i.height();
                        var o = i.width();
                        i.height(s);
                        i.width(o);
                        i.css("top", (t - s) / 2 + "px")
                    })
                }
            }
            this.data = e.extend(true, [], r);
            this.parseOptions(i);
            if (this.textColor) {
                this.target.css("color", this.textColor)
            }
            if (this.fontFamily) {
                this.target.css("font-family", this.fontFamily)
            }
            if (this.fontSize) {
                this.target.css("font-size", this.fontSize)
            }
            this.title.init();
            this.legend.init();
            this._sumy = 0;
            this._sumx = 0;
            this.computePlotData();
            for (var s = 0; s < this.series.length; s++) {
                this.seriesStack.push(s);
                this.previousSeriesStack.push(s);
                this.series[s].shadowCanvas._plotDimensions = this._plotDimensions;
                this.series[s].canvas._plotDimensions = this._plotDimensions;
                for (var p = 0; p < e.jqplot.preSeriesInitHooks.length; p++) {
                    e.jqplot.preSeriesInitHooks[p].call(this.series[s], t, this.data, this.options.seriesDefaults, this.options.series[s], this)
                }
                for (var p = 0; p < this.preSeriesInitHooks.hooks.length; p++) {
                    this.preSeriesInitHooks.hooks[p].call(this.series[s], t, this.data, this.options.seriesDefaults, this.options.series[s], this)
                }
                this.series[s]._plotDimensions = this._plotDimensions;
                this.series[s].init(s, this.grid.borderWidth, this);
                for (var p = 0; p < e.jqplot.postSeriesInitHooks.length; p++) {
                    e.jqplot.postSeriesInitHooks[p].call(this.series[s], t, this.data, this.options.seriesDefaults, this.options.series[s], this)
                }
                for (var p = 0; p < this.postSeriesInitHooks.hooks.length; p++) {
                    this.postSeriesInitHooks.hooks[p].call(this.series[s], t, this.data, this.options.seriesDefaults, this.options.series[s], this)
                }
                this._sumy += this.series[s]._sumy;
                this._sumx += this.series[s]._sumx
            }
            var d, v;
            for (var s = 0, f = u.length; s < f; s++) {
                d = u[s];
                v = this.axes[d];
                v._plotDimensions = this._plotDimensions;
                v.init();
                if (this.axes[d].borderColor == null) {
                    if (d.charAt(0) !== "x" && v.useSeriesColor === true && v.show) {
                        v.borderColor = v._series[0].color
                    } else {
                        v.borderColor = this.grid.borderColor
                    }
                }
            }
            if (this.sortData) {
                l(this.series)
            }
            this.grid.init();
            this.grid._axes = this.axes;
            this.legend._series = this.series;
            for (var s = 0; s < e.jqplot.postInitHooks.length; s++) {
                e.jqplot.postInitHooks[s].call(this, t, this.data, i)
            }
            for (var s = 0; s < this.postInitHooks.hooks.length; s++) {
                this.postInitHooks.hooks[s].call(this, t, this.data, i)
            }
        };
        this.resetAxesScale = function(t, n) {
            var r = n || {};
            var i = t || this.axes;
            if (i === true) {
                i = this.axes
            }
            if (e.isArray(i)) {
                for (var s = 0; s < i.length; s++) {
                    this.axes[i[s]].resetScale(r[i[s]])
                }
            } else if (typeof i === "object") {
                for (var o in i) {
                    this.axes[o].resetScale(r[o])
                }
            }
        };
        this.reInitialize = function(r, i) {
            var s = e.extend(true, {}, this.options, i);
            var o = this.targetId.substr(1);
            var a = r == null ? this.data : r;
            for (var f = 0; f < e.jqplot.preInitHooks.length; f++) {
                e.jqplot.preInitHooks[f].call(this, o, a, s)
            }
            for (var f = 0; f < this.preInitHooks.hooks.length; f++) {
                this.preInitHooks.hooks[f].call(this, o, a, s)
            }
            this._height = this.target.height();
            this._width = this.target.width();
            if (this._height <= 0 || this._width <= 0 || !this._height || !this._width) {
                throw new Error("Target dimension not set")
            }
            this._plotDimensions.height = this._height;
            this._plotDimensions.width = this._width;
            this.grid._plotDimensions = this._plotDimensions;
            this.title._plotDimensions = this._plotDimensions;
            this.baseCanvas._plotDimensions = this._plotDimensions;
            this.eventCanvas._plotDimensions = this._plotDimensions;
            this.legend._plotDimensions = this._plotDimensions;
            var c, h, p, d;
            for (var f = 0, v = u.length; f < v; f++) {
                c = u[f];
                d = this.axes[c];
                h = d._ticks;
                for (var p = 0, m = h.length; p < m; p++) {
                    var g = h[p]._elem;
                    if (g) {
                        if (e.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== t) {
                            window.G_vmlCanvasManager.uninitElement(g.get(0))
                        }
                        g.emptyForce();
                        g = null;
                        h._elem = null
                    }
                }
                h = null;
                delete d.ticks;
                delete d._ticks;
                this.axes[c] = new n(c);
                this.axes[c]._plotWidth = this._width;
                this.axes[c]._plotHeight = this._height
            }
            if (r) {
                if (s.dataRenderer && e.isFunction(s.dataRenderer)) {
                    if (s.dataRendererOptions) {
                        this.dataRendererOptions = s.dataRendererOptions
                    }
                    this.dataRenderer = s.dataRenderer;
                    r = this.dataRenderer(r, this, this.dataRendererOptions)
                }
                this.data = e.extend(true, [], r)
            }
            if (i) {
                this.parseOptions(s)
            }
            this.title._plotWidth = this._width;
            if (this.textColor) {
                this.target.css("color", this.textColor)
            }
            if (this.fontFamily) {
                this.target.css("font-family", this.fontFamily)
            }
            if (this.fontSize) {
                this.target.css("font-size", this.fontSize)
            }
            this.title.init();
            this.legend.init();
            this._sumy = 0;
            this._sumx = 0;
            this.seriesStack = [];
            this.previousSeriesStack = [];
            this.computePlotData();
            for (var f = 0, v = this.series.length; f < v; f++) {
                this.seriesStack.push(f);
                this.previousSeriesStack.push(f);
                this.series[f].shadowCanvas._plotDimensions = this._plotDimensions;
                this.series[f].canvas._plotDimensions = this._plotDimensions;
                for (var p = 0; p < e.jqplot.preSeriesInitHooks.length; p++) {
                    e.jqplot.preSeriesInitHooks[p].call(this.series[f], o, this.data, this.options.seriesDefaults, this.options.series[f], this)
                }
                for (var p = 0; p < this.preSeriesInitHooks.hooks.length; p++) {
                    this.preSeriesInitHooks.hooks[p].call(this.series[f], o, this.data, this.options.seriesDefaults, this.options.series[f], this)
                }
                this.series[f]._plotDimensions = this._plotDimensions;
                this.series[f].init(f, this.grid.borderWidth, this);
                for (var p = 0; p < e.jqplot.postSeriesInitHooks.length; p++) {
                    e.jqplot.postSeriesInitHooks[p].call(this.series[f], o, this.data, this.options.seriesDefaults, this.options.series[f], this)
                }
                for (var p = 0; p < this.postSeriesInitHooks.hooks.length; p++) {
                    this.postSeriesInitHooks.hooks[p].call(this.series[f], o, this.data, this.options.seriesDefaults, this.options.series[f], this)
                }
                this._sumy += this.series[f]._sumy;
                this._sumx += this.series[f]._sumx
            }
            for (var f = 0, v = u.length; f < v; f++) {
                c = u[f];
                d = this.axes[c];
                d._plotDimensions = this._plotDimensions;
                d.init();
                if (d.borderColor == null) {
                    if (c.charAt(0) !== "x" && d.useSeriesColor === true && d.show) {
                        d.borderColor = d._series[0].color
                    } else {
                        d.borderColor = this.grid.borderColor
                    }
                }
            }
            if (this.sortData) {
                l(this.series)
            }
            this.grid.init();
            this.grid._axes = this.axes;
            this.legend._series = this.series;
            for (var f = 0, v = e.jqplot.postInitHooks.length; f < v; f++) {
                e.jqplot.postInitHooks[f].call(this, o, this.data, s)
            }
            for (var f = 0, v = this.postInitHooks.hooks.length; f < v; f++) {
                this.postInitHooks.hooks[f].call(this, o, this.data, s)
            }
        };
        this.quickInit = function() {
            this._height = this.target.height();
            this._width = this.target.width();
            if (this._height <= 0 || this._width <= 0 || !this._height || !this._width) {
                throw new Error("Target dimension not set")
            }
            this._plotDimensions.height = this._height;
            this._plotDimensions.width = this._width;
            this.grid._plotDimensions = this._plotDimensions;
            this.title._plotDimensions = this._plotDimensions;
            this.baseCanvas._plotDimensions = this._plotDimensions;
            this.eventCanvas._plotDimensions = this._plotDimensions;
            this.legend._plotDimensions = this._plotDimensions;
            for (var n in this.axes) {
                this.axes[n]._plotWidth = this._width;
                this.axes[n]._plotHeight = this._height
            }
            this.title._plotWidth = this._width;
            if (this.textColor) {
                this.target.css("color", this.textColor)
            }
            if (this.fontFamily) {
                this.target.css("font-family", this.fontFamily)
            }
            if (this.fontSize) {
                this.target.css("font-size", this.fontSize)
            }
            this._sumy = 0;
            this._sumx = 0;
            this.computePlotData();
            for (var r = 0; r < this.series.length; r++) {
                if (this.series[r]._type === "line" && this.series[r].renderer.bands.show) {
                    this.series[r].renderer.initBands.call(this.series[r], this.series[r].renderer.options, this)
                }
                this.series[r]._plotDimensions = this._plotDimensions;
                this.series[r].canvas._plotDimensions = this._plotDimensions;
                this._sumy += this.series[r]._sumy;
                this._sumx += this.series[r]._sumx
            }
            var i;
            for (var s = 0; s < 12; s++) {
                i = u[s];
                var o = this.axes[i]._ticks;
                for (var r = 0; r < o.length; r++) {
                    var a = o[r]._elem;
                    if (a) {
                        if (e.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== t) {
                            window.G_vmlCanvasManager.uninitElement(a.get(0))
                        }
                        a.emptyForce();
                        a = null;
                        o._elem = null
                    }
                }
                o = null;
                this.axes[i]._plotDimensions = this._plotDimensions;
                this.axes[i]._ticks = []
            }
            if (this.sortData) {
                l(this.series)
            }
            this.grid._axes = this.axes;
            this.legend._series = this.series
        };
        this.computePlotData = function() {
            this._plotData = [];
            this._stackData = [];
            var t, n, r;
            for (n = 0, r = this.series.length; n < r; n++) {
                t = this.series[n];
                this._plotData.push([]);
                this._stackData.push([]);
                var i = t.data;
                this._plotData[n] = e.extend(true, [], i);
                this._stackData[n] = e.extend(true, [], i);
                t._plotData = this._plotData[n];
                t._stackData = this._stackData[n];
                var s = {x: [], y: []};
                if (this.stackSeries && !t.disableStack) {
                    t._stack = true;
                    var o = t._stackAxis === "x" ? 0 : 1;
                    for (var u = 0, a = i.length; u < a; u++) {
                        var f = i[u][o];
                        if (f == null) {
                            f = 0
                        }
                        this._plotData[n][u][o] = f;
                        this._stackData[n][u][o] = f;
                        if (n > 0) {
                            for (var l = n; l--; ) {
                                var c = this._plotData[l][u][o];
                                if (f * c >= 0) {
                                    this._plotData[n][u][o] += c;
                                    this._stackData[n][u][o] += c;
                                    break
                                }
                            }
                        }
                    }
                } else {
                    for (var h = 0; h < t.data.length; h++) {
                        s.x.push(t.data[h][0]);
                        s.y.push(t.data[h][1])
                    }
                    this._stackData.push(t.data);
                    this.series[n]._stackData = t.data;
                    this._plotData.push(t.data);
                    t._plotData = t.data;
                    t._plotValues = s
                }
                if (n > 0) {
                    t._prevPlotData = this.series[n - 1]._plotData
                }
                t._sumy = 0;
                t._sumx = 0;
                for (h = t.data.length - 1; h > -1; h--) {
                    t._sumy += t.data[h][1];
                    t._sumx += t.data[h][0]
                }
            }
        };
        this.populatePlotData = function(t, n) {
            this._plotData = [];
            this._stackData = [];
            t._stackData = [];
            t._plotData = [];
            var r = {x: [], y: []};
            if (this.stackSeries && !t.disableStack) {
                t._stack = true;
                var i = t._stackAxis === "x" ? 0 : 1;
                var s = e.extend(true, [], t.data);
                var o = e.extend(true, [], t.data);
                var u, a, f, l, c;
                for (var h = 0; h < n; h++) {
                    var p = this.series[h].data;
                    for (var d = 0; d < p.length; d++) {
                        f = p[d];
                        u = f[0] != null ? f[0] : 0;
                        a = f[1] != null ? f[1] : 0;
                        s[d][0] += u;
                        s[d][1] += a;
                        l = i ? a : u;
                        if (t.data[d][i] * l >= 0) {
                            o[d][i] += l
                        }
                    }
                }
                for (var v = 0; v < o.length; v++) {
                    r.x.push(o[v][0]);
                    r.y.push(o[v][1])
                }
                this._plotData.push(o);
                this._stackData.push(s);
                t._stackData = s;
                t._plotData = o;
                t._plotValues = r
            } else {
                for (var v = 0; v < t.data.length; v++) {
                    r.x.push(t.data[v][0]);
                    r.y.push(t.data[v][1])
                }
                this._stackData.push(t.data);
                this.series[n]._stackData = t.data;
                this._plotData.push(t.data);
                t._plotData = t.data;
                t._plotValues = r
            }
            if (n > 0) {
                t._prevPlotData = this.series[n - 1]._plotData
            }
            t._sumy = 0;
            t._sumx = 0;
            for (v = t.data.length - 1; v > -1; v--) {
                t._sumy += t.data[v][1];
                t._sumx += t.data[v][0]
            }
        };
        this.getNextSeriesColor = function(e) {
            var t = 0;
            var n = e.seriesColors;
            return function() {
                if (t < n.length) {
                    return n[t++]
                } else {
                    t = 0;
                    return n[t++]
                }
            }
        }(this);
        this.parseOptions = function(t) {
            for (var n = 0; n < this.preParseOptionsHooks.hooks.length; n++) {
                this.preParseOptionsHooks.hooks[n].call(this, t)
            }
            for (var n = 0; n < e.jqplot.preParseOptionsHooks.length; n++) {
                e.jqplot.preParseOptionsHooks[n].call(this, t)
            }
            this.options = e.extend(true, {}, this.defaults, t);
            var r = this.options;
            this.animate = r.animate;
            this.animateReplot = r.animateReplot;
            this.stackSeries = r.stackSeries;
            if (e.isPlainObject(r.fillBetween)) {
                var i = ["series1", "series2", "color", "baseSeries", "fill"], o;
                for (var n = 0, a = i.length; n < a; n++) {
                    o = i[n];
                    if (r.fillBetween[o] != null) {
                        this.fillBetween[o] = r.fillBetween[o]
                    }
                }
            }
            if (r.seriesColors) {
                this.seriesColors = r.seriesColors
            }
            if (r.negativeSeriesColors) {
                this.negativeSeriesColors = r.negativeSeriesColors
            }
            if (r.captureRightClick) {
                this.captureRightClick = r.captureRightClick
            }
            this.defaultAxisStart = t && t.defaultAxisStart != null ? t.defaultAxisStart : this.defaultAxisStart;
            this.colorGenerator.setColors(this.seriesColors);
            this.negativeColorGenerator.setColors(this.negativeSeriesColors);
            e.extend(true, this._gridPadding, r.gridPadding);
            this.sortData = r.sortData != null ? r.sortData : this.sortData;
            for (var n = 0; n < 12; n++) {
                var f = u[n];
                var l = this.axes[f];
                l._options = e.extend(true, {}, r.axesDefaults, r.axes[f]);
                e.extend(true, l, r.axesDefaults, r.axes[f]);
                l._plotWidth = this._width;
                l._plotHeight = this._height
            }
            var c = function(t, n, r) {
                var i = [];
                var s, o;
                n = n || "vertical";
                if (!e.isArray(t[0])) {
                    for (s = 0, o = t.length; s < o; s++) {
                        if (n == "vertical") {
                            i.push([r + s, t[s]])
                        } else {
                            i.push([t[s], r + s])
                        }
                    }
                } else {
                    e.extend(true, i, t)
                }
                return i
            };
            var h = 0;
            this.series = [];
            for (var n = 0; n < this.data.length; n++) {
                var p = e.extend(true, {index: n}, {seriesColors: this.seriesColors, negativeSeriesColors: this.negativeSeriesColors}, this.options.seriesDefaults, this.options.series[n], {rendererOptions: {animation: {show: this.animate}}});
                var i = new s(p);
                for (var d = 0; d < e.jqplot.preParseSeriesOptionsHooks.length; d++) {
                    e.jqplot.preParseSeriesOptionsHooks[d].call(i, this.options.seriesDefaults, this.options.series[n])
                }
                for (var d = 0; d < this.preParseSeriesOptionsHooks.hooks.length; d++) {
                    this.preParseSeriesOptionsHooks.hooks[d].call(i, this.options.seriesDefaults, this.options.series[n])
                }
                e.extend(true, i, p);
                var v = "vertical";
                if (i.renderer === e.jqplot.BarRenderer && i.rendererOptions && i.rendererOptions.barDirection == "horizontal") {
                    v = "horizontal";
                    i._stackAxis = "x";
                    i._primaryAxis = "_yaxis"
                }
                i.data = c(this.data[n], v, this.defaultAxisStart);
                switch (i.xaxis) {
                    case"xaxis":
                        i._xaxis = this.axes.xaxis;
                        break;
                    case"x2axis":
                        i._xaxis = this.axes.x2axis;
                        break;
                    default:
                        break
                }
                i._yaxis = this.axes[i.yaxis];
                i._xaxis._series.push(i);
                i._yaxis._series.push(i);
                if (i.show) {
                    i._xaxis.show = true;
                    i._yaxis.show = true
                } else {
                    if (i._xaxis.scaleToHiddenSeries) {
                        i._xaxis.show = true
                    }
                    if (i._yaxis.scaleToHiddenSeries) {
                        i._yaxis.show = true
                    }
                }
                if (!i.label) {
                    i.label = "Series " + (n + 1).toString()
                }
                this.series.push(i);
                for (var d = 0; d < e.jqplot.postParseSeriesOptionsHooks.length; d++) {
                    e.jqplot.postParseSeriesOptionsHooks[d].call(this.series[n], this.options.seriesDefaults, this.options.series[n])
                }
                for (var d = 0; d < this.postParseSeriesOptionsHooks.hooks.length; d++) {
                    this.postParseSeriesOptionsHooks.hooks[d].call(this.series[n], this.options.seriesDefaults, this.options.series[n])
                }
            }
            e.extend(true, this.grid, this.options.grid);
            for (var n = 0, a = u.length; n < a; n++) {
                var f = u[n];
                var l = this.axes[f];
                if (l.borderWidth == null) {
                    l.borderWidth = this.grid.borderWidth
                }
            }
            if (typeof this.options.title == "string") {
                this.title.text = this.options.title
            } else if (typeof this.options.title == "object") {
                e.extend(true, this.title, this.options.title)
            }
            this.title._plotWidth = this._width;
            this.legend.setOptions(this.options.legend);
            for (var n = 0; n < e.jqplot.postParseOptionsHooks.length; n++) {
                e.jqplot.postParseOptionsHooks[n].call(this, t)
            }
            for (var n = 0; n < this.postParseOptionsHooks.hooks.length; n++) {
                this.postParseOptionsHooks.hooks[n].call(this, t)
            }
        };
        this.destroy = function() {
            this.canvasManager.freeAllCanvases();
            if (this.eventCanvas && this.eventCanvas._elem) {
                this.eventCanvas._elem.unbind()
            }
            this.target.empty();
            this.target[0].innerHTML = ""
        };
        this.replot = function(t) {
            var n = t || {};
            var r = n.data || null;
            var i = n.clear === false ? false : true;
            var s = n.resetAxes || false;
            delete n.data;
            delete n.clear;
            delete n.resetAxes;
            this.target.trigger("jqplotPreReplot");
            if (i) {
                this.destroy()
            }
            if (r || !e.isEmptyObject(n)) {
                this.reInitialize(r, n)
            } else {
                this.quickInit()
            }
            if (s) {
                this.resetAxesScale(s, n.axes)
            }
            this.draw();
            this.target.trigger("jqplotPostReplot")
        };
        this.redraw = function(e) {
            e = e != null ? e : true;
            this.target.trigger("jqplotPreRedraw");
            if (e) {
                this.canvasManager.freeAllCanvases();
                this.eventCanvas._elem.unbind();
                this.target.empty()
            }
            for (var t in this.axes) {
                this.axes[t]._ticks = []
            }
            this.computePlotData();
            this._sumy = 0;
            this._sumx = 0;
            for (var n = 0, r = this.series.length; n < r; n++) {
                this._sumy += this.series[n]._sumy;
                this._sumx += this.series[n]._sumx
            }
            this.draw();
            this.target.trigger("jqplotPostRedraw")
        };
        this.draw = function() {
            if (this.drawIfHidden || this.target.is(":visible")) {
                this.target.trigger("jqplotPreDraw");
                var t, n, r, i;
                for (t = 0, r = e.jqplot.preDrawHooks.length; t < r; t++) {
                    e.jqplot.preDrawHooks[t].call(this)
                }
                for (t = 0, r = this.preDrawHooks.hooks.length; t < r; t++) {
                    this.preDrawHooks.hooks[t].apply(this, this.preDrawSeriesHooks.args[t])
                }
                this.target.append(this.baseCanvas.createElement({left: 0, right: 0, top: 0, bottom: 0}, "jqplot-base-canvas", null, this));
                this.baseCanvas.setContext();
                this.target.append(this.title.draw());
                this.title.pack({top: 0, left: 0});
                var s = this.legend.draw({}, this);
                var o = {top: 0, left: 0, bottom: 0, right: 0};
                if (this.legend.placement == "outsideGrid") {
                    this.target.append(s);
                    switch (this.legend.location) {
                        case"n":
                            o.top += this.legend.getHeight();
                            break;
                        case"s":
                            o.bottom += this.legend.getHeight();
                            break;
                        case"ne":
                        case"e":
                        case"se":
                            o.right += this.legend.getWidth();
                            break;
                        case"nw":
                        case"w":
                        case"sw":
                            o.left += this.legend.getWidth();
                            break;
                        default:
                            o.right += this.legend.getWidth();
                            break
                    }
                    s = s.detach()
                }
                var a = this.axes;
                var f;
                for (t = 0; t < 12; t++) {
                    f = u[t];
                    this.target.append(a[f].draw(this.baseCanvas._ctx, this));
                    a[f].set()
                }
                if (a.yaxis.show) {
                    o.left += a.yaxis.getWidth()
                }
                var l = ["y2axis", "y3axis", "y4axis", "y5axis", "y6axis", "y7axis", "y8axis", "y9axis"];
                var c = [0, 0, 0, 0, 0, 0, 0, 0];
                var h = 0;
                var p;
                for (p = 0; p < 8; p++) {
                    if (a[l[p]].show) {
                        h += a[l[p]].getWidth();
                        c[p] = h
                    }
                }
                o.right += h;
                if (a.x2axis.show) {
                    o.top += a.x2axis.getHeight()
                }
                if (this.title.show) {
                    o.top += this.title.getHeight()
                }
                if (a.xaxis.show) {
                    o.bottom += a.xaxis.getHeight()
                }
                if (this.options.gridDimensions && e.isPlainObject(this.options.gridDimensions)) {
                    var d = parseInt(this.options.gridDimensions.width, 10) || 0;
                    var v = parseInt(this.options.gridDimensions.height, 10) || 0;
                    var m = (this._width - o.left - o.right - d) / 2;
                    var g = (this._height - o.top - o.bottom - v) / 2;
                    if (g >= 0 && m >= 0) {
                        o.top += g;
                        o.bottom += g;
                        o.left += m;
                        o.right += m
                    }
                }
                var y = ["top", "bottom", "left", "right"];
                for (var p in y) {
                    if (this._gridPadding[y[p]] == null && o[y[p]] > 0) {
                        this._gridPadding[y[p]] = o[y[p]]
                    } else if (this._gridPadding[y[p]] == null) {
                        this._gridPadding[y[p]] = this._defaultGridPadding[y[p]]
                    }
                }
                var b = this._gridPadding;
                if (this.legend.placement === "outsideGrid") {
                    b = {top: this.title.getHeight(), left: 0, right: 0, bottom: 0};
                    if (this.legend.location === "s") {
                        b.left = this._gridPadding.left;
                        b.right = this._gridPadding.right
                    }
                }
                a.xaxis.pack({position: "absolute", bottom: this._gridPadding.bottom - a.xaxis.getHeight(), left: 0, width: this._width}, {min: this._gridPadding.left, max: this._width - this._gridPadding.right});
                a.yaxis.pack({position: "absolute", top: 0, left: this._gridPadding.left - a.yaxis.getWidth(), height: this._height}, {min: this._height - this._gridPadding.bottom, max: this._gridPadding.top});
                a.x2axis.pack({position: "absolute", top: this._gridPadding.top - a.x2axis.getHeight(), left: 0, width: this._width}, {min: this._gridPadding.left, max: this._width - this._gridPadding.right});
                for (t = 8; t > 0; t--) {
                    a[l[t - 1]].pack({position: "absolute", top: 0, right: this._gridPadding.right - c[t - 1]}, {min: this._height - this._gridPadding.bottom, max: this._gridPadding.top})
                }
                var w = (this._width - this._gridPadding.left - this._gridPadding.right) / 2 + this._gridPadding.left - a.yMidAxis.getWidth() / 2;
                a.yMidAxis.pack({position: "absolute", top: 0, left: w, zIndex: 9, textAlign: "center"}, {min: this._height - this._gridPadding.bottom, max: this._gridPadding.top});
                this.target.append(this.grid.createElement(this._gridPadding, this));
                this.grid.draw();
                var E = this.series;
                var S = E.length;
                for (t = 0, r = S; t < r; t++) {
                    n = this.seriesStack[t];
                    this.target.append(E[n].shadowCanvas.createElement(this._gridPadding, "jqplot-series-shadowCanvas", null, this));
                    E[n].shadowCanvas.setContext();
                    E[n].shadowCanvas._elem.data("seriesIndex", n)
                }
                for (t = 0, r = S; t < r; t++) {
                    n = this.seriesStack[t];
                    this.target.append(E[n].canvas.createElement(this._gridPadding, "jqplot-series-canvas", null, this));
                    E[n].canvas.setContext();
                    E[n].canvas._elem.data("seriesIndex", n)
                }
                this.target.append(this.eventCanvas.createElement(this._gridPadding, "jqplot-event-canvas", null, this));
                this.eventCanvas.setContext();
                this.eventCanvas._ctx.fillStyle = "rgba(0,0,0,0)";
                this.eventCanvas._ctx.fillRect(0, 0, this.eventCanvas._ctx.canvas.width, this.eventCanvas._ctx.canvas.height);
                this.bindCustomEvents();
                if (this.legend.preDraw) {
                    this.eventCanvas._elem.before(s);
                    this.legend.pack(b);
                    if (this.legend._elem) {
                        this.drawSeries({legendInfo: {location: this.legend.location, placement: this.legend.placement, width: this.legend.getWidth(), height: this.legend.getHeight(), xoffset: this.legend.xoffset, yoffset: this.legend.yoffset}})
                    } else {
                        this.drawSeries()
                    }
                } else {
                    this.drawSeries();
                    if (S) {
                        e(E[S - 1].canvas._elem).after(s)
                    }
                    this.legend.pack(b)
                }
                for (var t = 0, r = e.jqplot.eventListenerHooks.length; t < r; t++) {
                    this.eventCanvas._elem.bind(e.jqplot.eventListenerHooks[t][0], {plot: this}, e.jqplot.eventListenerHooks[t][1])
                }
                for (var t = 0, r = this.eventListenerHooks.hooks.length; t < r; t++) {
                    this.eventCanvas._elem.bind(this.eventListenerHooks.hooks[t][0], {plot: this}, this.eventListenerHooks.hooks[t][1])
                }
                var x = this.fillBetween;
                if (x.fill && x.series1 !== x.series2 && x.series1 < S && x.series2 < S && E[x.series1]._type === "line" && E[x.series2]._type === "line") {
                    this.doFillBetweenLines()
                }
                for (var t = 0, r = e.jqplot.postDrawHooks.length; t < r; t++) {
                    e.jqplot.postDrawHooks[t].call(this)
                }
                for (var t = 0, r = this.postDrawHooks.hooks.length; t < r; t++) {
                    this.postDrawHooks.hooks[t].apply(this, this.postDrawHooks.args[t])
                }
                if (this.target.is(":visible")) {
                    this._drawCount += 1
                }
                var T, N, C, k;
                for (t = 0, r = S; t < r; t++) {
                    T = E[t];
                    N = T.renderer;
                    C = ".jqplot-point-label.jqplot-series-" + t;
                    if (N.animation && N.animation._supported && N.animation.show && (this._drawCount < 2 || this.animateReplot)) {
                        k = this.target.find(C);
                        k.stop(true, true).hide();
                        T.canvas._elem.stop(true, true).hide();
                        T.shadowCanvas._elem.stop(true, true).hide();
                        T.canvas._elem.jqplotEffect("blind", {mode: "show", direction: N.animation.direction}, N.animation.speed);
                        T.shadowCanvas._elem.jqplotEffect("blind", {mode: "show", direction: N.animation.direction}, N.animation.speed);
                        k.fadeIn(N.animation.speed * .8)
                    }
                }
                k = null;
                this.target.trigger("jqplotPostDraw", [this])
            }
        };
        a.prototype.doFillBetweenLines = function() {
            var e = this.fillBetween;
            var t = e.series1;
            var n = e.series2;
            var r = t < n ? t : n;
            var i = n > t ? n : t;
            var s = this.series[r];
            var o = this.series[i];
            if (o.renderer.smooth) {
                var u = o.renderer._smoothedData.slice(0).reverse()
            } else {
                var u = o.gridData.slice(0).reverse()
            }
            if (s.renderer.smooth) {
                var a = s.renderer._smoothedData.concat(u)
            } else {
                var a = s.gridData.concat(u)
            }
            var f = e.color !== null ? e.color : this.series[t].fillColor;
            var l = e.baseSeries !== null ? e.baseSeries : r;
            var c = this.series[l].renderer.shapeRenderer;
            var h = {fillStyle: f, fill: true, closePath: true};
            c.draw(s.shadowCanvas._ctx, a, h)
        };
        this.bindCustomEvents = function() {
            this.eventCanvas._elem.bind("click", {plot: this}, this.onClick);
            this.eventCanvas._elem.bind("dblclick", {plot: this}, this.onDblClick);
            this.eventCanvas._elem.bind("mousedown", {plot: this}, this.onMouseDown);
            this.eventCanvas._elem.bind("mousemove", {plot: this}, this.onMouseMove);
            this.eventCanvas._elem.bind("mouseenter", {plot: this}, this.onMouseEnter);
            this.eventCanvas._elem.bind("mouseleave", {plot: this}, this.onMouseLeave);
            if (this.captureRightClick) {
                this.eventCanvas._elem.bind("mouseup", {plot: this}, this.onRightClick);
                this.eventCanvas._elem.get(0).oncontextmenu = function() {
                    return false
                }
            } else {
                this.eventCanvas._elem.bind("mouseup", {plot: this}, this.onMouseUp)
            }
        };
        this.onClick = function(t) {
            var n = c(t);
            var r = t.data.plot;
            var i = h(n.gridPos, r);
            var s = e.Event("jqplotClick");
            s.pageX = t.pageX;
            s.pageY = t.pageY;
            e(this).trigger(s, [n.gridPos, n.dataPos, i, r])
        };
        this.onDblClick = function(t) {
            var n = c(t);
            var r = t.data.plot;
            var i = h(n.gridPos, r);
            var s = e.Event("jqplotDblClick");
            s.pageX = t.pageX;
            s.pageY = t.pageY;
            e(this).trigger(s, [n.gridPos, n.dataPos, i, r])
        };
        this.onMouseDown = function(t) {
            var n = c(t);
            var r = t.data.plot;
            var i = h(n.gridPos, r);
            var s = e.Event("jqplotMouseDown");
            s.pageX = t.pageX;
            s.pageY = t.pageY;
            e(this).trigger(s, [n.gridPos, n.dataPos, i, r])
        };
        this.onMouseUp = function(t) {
            var n = c(t);
            var r = e.Event("jqplotMouseUp");
            r.pageX = t.pageX;
            r.pageY = t.pageY;
            e(this).trigger(r, [n.gridPos, n.dataPos, null, t.data.plot])
        };
        this.onRightClick = function(t) {
            var n = c(t);
            var r = t.data.plot;
            var i = h(n.gridPos, r);
            if (r.captureRightClick) {
                if (t.which == 3) {
                    var s = e.Event("jqplotRightClick");
                    s.pageX = t.pageX;
                    s.pageY = t.pageY;
                    e(this).trigger(s, [n.gridPos, n.dataPos, i, r])
                } else {
                    var s = e.Event("jqplotMouseUp");
                    s.pageX = t.pageX;
                    s.pageY = t.pageY;
                    e(this).trigger(s, [n.gridPos, n.dataPos, i, r])
                }
            }
        };
        this.onMouseMove = function(t) {
            var n = c(t);
            var r = t.data.plot;
            var i = h(n.gridPos, r);
            var s = e.Event("jqplotMouseMove");
            s.pageX = t.pageX;
            s.pageY = t.pageY;
            e(this).trigger(s, [n.gridPos, n.dataPos, i, r])
        };
        this.onMouseEnter = function(t) {
            var n = c(t);
            var r = t.data.plot;
            var i = e.Event("jqplotMouseEnter");
            i.pageX = t.pageX;
            i.pageY = t.pageY;
            i.relatedTarget = t.relatedTarget;
            e(this).trigger(i, [n.gridPos, n.dataPos, null, r])
        };
        this.onMouseLeave = function(t) {
            var n = c(t);
            var r = t.data.plot;
            var i = e.Event("jqplotMouseLeave");
            i.pageX = t.pageX;
            i.pageY = t.pageY;
            i.relatedTarget = t.relatedTarget;
            e(this).trigger(i, [n.gridPos, n.dataPos, null, r])
        };
        this.drawSeries = function(n, r) {
            var i, s, o;
            r = typeof n === "number" && r == null ? n : r;
            n = typeof n === "object" ? n : {};
            if (r != t) {
                s = this.series[r];
                o = s.shadowCanvas._ctx;
                o.clearRect(0, 0, o.canvas.width, o.canvas.height);
                s.drawShadow(o, n, this);
                o = s.canvas._ctx;
                o.clearRect(0, 0, o.canvas.width, o.canvas.height);
                s.draw(o, n, this);
                if (s.renderer.constructor == e.jqplot.BezierCurveRenderer) {
                    if (r < this.series.length - 1) {
                        this.drawSeries(r + 1)
                    }
                }
            } else {
                for (i = 0; i < this.series.length; i++) {
                    s = this.series[i];
                    o = s.shadowCanvas._ctx;
                    o.clearRect(0, 0, o.canvas.width, o.canvas.height);
                    s.drawShadow(o, n, this);
                    o = s.canvas._ctx;
                    o.clearRect(0, 0, o.canvas.width, o.canvas.height);
                    s.draw(o, n, this)
                }
            }
            n = r = i = s = o = null
        };
        this.moveSeriesToFront = function(t) {
            t = parseInt(t, 10);
            var n = e.inArray(t, this.seriesStack);
            if (n == -1) {
                return
            }
            if (n == this.seriesStack.length - 1) {
                this.previousSeriesStack = this.seriesStack.slice(0);
                return
            }
            var r = this.seriesStack[this.seriesStack.length - 1];
            var i = this.series[t].canvas._elem.detach();
            var s = this.series[t].shadowCanvas._elem.detach();
            this.series[r].shadowCanvas._elem.after(s);
            this.series[r].canvas._elem.after(i);
            this.previousSeriesStack = this.seriesStack.slice(0);
            this.seriesStack.splice(n, 1);
            this.seriesStack.push(t)
        };
        this.moveSeriesToBack = function(t) {
            t = parseInt(t, 10);
            var n = e.inArray(t, this.seriesStack);
            if (n == 0 || n == -1) {
                return
            }
            var r = this.seriesStack[0];
            var i = this.series[t].canvas._elem.detach();
            var s = this.series[t].shadowCanvas._elem.detach();
            this.series[r].shadowCanvas._elem.before(s);
            this.series[r].canvas._elem.before(i);
            this.previousSeriesStack = this.seriesStack.slice(0);
            this.seriesStack.splice(n, 1);
            this.seriesStack.unshift(t)
        };
        this.restorePreviousSeriesOrder = function() {
            var e, t, n, r, i, s, o;
            if (this.seriesStack == this.previousSeriesStack) {
                return
            }
            for (e = 1; e < this.previousSeriesStack.length; e++) {
                s = this.previousSeriesStack[e];
                o = this.previousSeriesStack[e - 1];
                n = this.series[s].canvas._elem.detach();
                r = this.series[s].shadowCanvas._elem.detach();
                this.series[o].shadowCanvas._elem.after(r);
                this.series[o].canvas._elem.after(n)
            }
            i = this.seriesStack.slice(0);
            this.seriesStack = this.previousSeriesStack.slice(0);
            this.previousSeriesStack = i
        };
        this.restoreOriginalSeriesOrder = function() {
            var e, t, n = [], r, i;
            for (e = 0; e < this.series.length; e++) {
                n.push(e)
            }
            if (this.seriesStack == n) {
                return
            }
            this.previousSeriesStack = this.seriesStack.slice(0);
            this.seriesStack = n;
            for (e = 1; e < this.seriesStack.length; e++) {
                r = this.series[e].canvas._elem.detach();
                i = this.series[e].shadowCanvas._elem.detach();
                this.series[e - 1].shadowCanvas._elem.after(i);
                this.series[e - 1].canvas._elem.after(r)
            }
        };
        this.activateTheme = function(e) {
            this.themeEngine.activate(this, e)
        }
    }
    function l(e, t) {
        return(3.4182054 + t) * Math.pow(e, -.3534992)
    }
    function c(e, t) {
        var n = Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2));
        return 5.7648 * Math.log(n) + 7.4456
    }
    function h(e) {
        var t = (Math.exp(2 * e) - 1) / (Math.exp(2 * e) + 1);
        return t
    }
    function p(e) {
        function v(e, t) {
            if (e - t == 0) {
                return Math.pow(10, 10)
            } else {
                return e - t
            }
        }
        var t = this.renderer.smooth;
        var n = this.canvas.getWidth();
        var r = this._xaxis.series_p2u;
        var i = this._yaxis.series_p2u;
        var s = null;
        var o = null;
        var u = e.length / n;
        var a = [];
        var f = [];
        if (!isNaN(parseFloat(t))) {
            s = parseFloat(t)
        } else {
            s = l(u, .5)
        }
        var c = [];
        var h = [];
        for (var p = 0, d = e.length; p < d; p++) {
            c.push(e[p][1]);
            h.push(e[p][0])
        }
        var m, g, y, b;
        var w = e.length - 1;
        for (var E = 1, S = e.length; E < S; E++) {
            var x = [];
            var T = [];
            for (var N = 0; N < 2; N++) {
                var p = E - 1 + N;
                if (p == 0 || p == w) {
                    x[N] = Math.pow(10, 10)
                } else if (c[p + 1] - c[p] == 0 || c[p] - c[p - 1] == 0) {
                    x[N] = 0
                } else if ((h[p + 1] - h[p]) / (c[p + 1] - c[p]) + (h[p] - h[p - 1]) / (c[p] - c[p - 1]) == 0) {
                    x[N] = 0
                } else if ((c[p + 1] - c[p]) * (c[p] - c[p - 1]) < 0) {
                    x[N] = 0
                } else {
                    x[N] = 2 / (v(h[p + 1], h[p]) / (c[p + 1] - c[p]) + v(h[p], h[p - 1]) / (c[p] - c[p - 1]))
                }
            }
            if (E == 1) {
                x[0] = 3 / 2 * (c[1] - c[0]) / v(h[1], h[0]) - x[1] / 2
            } else if (E == w) {
                x[1] = 3 / 2 * (c[w] - c[w - 1]) / v(h[w], h[w - 1]) - x[0] / 2
            }
            T[0] = -2 * (x[1] + 2 * x[0]) / v(h[E], h[E - 1]) + 6 * (c[E] - c[E - 1]) / Math.pow(v(h[E], h[E - 1]), 2);
            T[1] = 2 * (2 * x[1] + x[0]) / v(h[E], h[E - 1]) - 6 * (c[E] - c[E - 1]) / Math.pow(v(h[E], h[E - 1]), 2);
            b = 1 / 6 * (T[1] - T[0]) / v(h[E], h[E - 1]);
            y = 1 / 2 * (h[E] * T[0] - h[E - 1] * T[1]) / v(h[E], h[E - 1]);
            g = (c[E] - c[E - 1] - y * (Math.pow(h[E], 2) - Math.pow(h[E - 1], 2)) - b * (Math.pow(h[E], 3) - Math.pow(h[E - 1], 3))) / v(h[E], h[E - 1]);
            m = c[E - 1] - g * h[E - 1] - y * Math.pow(h[E - 1], 2) - b * Math.pow(h[E - 1], 3);
            var C = (h[E] - h[E - 1]) / s;
            var k, L;
            for (var N = 0, d = s; N < d; N++) {
                k = [];
                L = h[E - 1] + N * C;
                k.push(L);
                k.push(m + g * L + y * Math.pow(L, 2) + b * Math.pow(L, 3));
                a.push(k);
                f.push([r(k[0]), i(k[1])])
            }
        }
        a.push(e[p]);
        f.push([r(e[p][0]), i(e[p][1])]);
        return[a, f]
    }
    function d(e) {
        var t = this.renderer.smooth;
        var n = this.renderer.tension;
        var r = this.canvas.getWidth();
        var i = this._xaxis.series_p2u;
        var s = this._yaxis.series_p2u;
        var o = null;
        var u = null;
        var a = null;
        var f = null;
        var c = null;
        var p = null;
        var d = null;
        var v = null;
        var m, g, y, b, w, E;
        var S, x, T, N;
        var C, k, L;
        var A = [];
        var O = [];
        var M = e.length / r;
        var _, D, P, H, B;
        var j = [];
        var F = [];
        if (!isNaN(parseFloat(t))) {
            o = parseFloat(t)
        } else {
            o = l(M, .5)
        }
        if (!isNaN(parseFloat(n))) {
            n = parseFloat(n)
        }
        for (var I = 0, q = e.length - 1; I < q; I++) {
            if (n === null) {
                p = Math.abs((e[I + 1][1] - e[I][1]) / (e[I + 1][0] - e[I][0]));
                _ = .3;
                D = .6;
                P = (D - _) / 2;
                H = 2.5;
                B = -1.4;
                v = p / H + B;
                f = P * h(v) - P * h(B) + _;
                if (I > 0) {
                    d = Math.abs((e[I][1] - e[I - 1][1]) / (e[I][0] - e[I - 1][0]))
                }
                v = d / H + B;
                c = P * h(v) - P * h(B) + _;
                a = (f + c) / 2
            } else {
                a = n
            }
            for (m = 0; m < o; m++) {
                g = m / o;
                y = (1 + 2 * g) * Math.pow(1 - g, 2);
                b = g * Math.pow(1 - g, 2);
                w = Math.pow(g, 2) * (3 - 2 * g);
                E = Math.pow(g, 2) * (g - 1);
                if (e[I - 1]) {
                    S = a * (e[I + 1][0] - e[I - 1][0]);
                    x = a * (e[I + 1][1] - e[I - 1][1])
                } else {
                    S = a * (e[I + 1][0] - e[I][0]);
                    x = a * (e[I + 1][1] - e[I][1])
                }
                if (e[I + 2]) {
                    T = a * (e[I + 2][0] - e[I][0]);
                    N = a * (e[I + 2][1] - e[I][1])
                } else {
                    T = a * (e[I + 1][0] - e[I][0]);
                    N = a * (e[I + 1][1] - e[I][1])
                }
                C = y * e[I][0] + w * e[I + 1][0] + b * S + E * T;
                k = y * e[I][1] + w * e[I + 1][1] + b * x + E * N;
                L = [C, k];
                j.push(L);
                F.push([i(C), s(k)])
            }
        }
        j.push(e[q]);
        F.push([i(e[q][0]), s(e[q][1])]);
        return[j, F]
    }
    function v(t, n, r) {
        for (var i = 0; i < this.series.length; i++) {
            if (this.series[i].renderer.constructor == e.jqplot.LineRenderer) {
                if (this.series[i].highlightMouseOver) {
                    this.series[i].highlightMouseDown = false
                }
            }
        }
    }
    function m() {
        if (this.plugins.lineRenderer && this.plugins.lineRenderer.highlightCanvas) {
            this.plugins.lineRenderer.highlightCanvas.resetCanvas();
            this.plugins.lineRenderer.highlightCanvas = null
        }
        this.plugins.lineRenderer.highlightedSeriesIndex = null;
        this.plugins.lineRenderer.highlightCanvas = new e.jqplot.GenericCanvas;
        this.eventCanvas._elem.before(this.plugins.lineRenderer.highlightCanvas.createElement(this._gridPadding, "jqplot-lineRenderer-highlight-canvas", this._plotDimensions, this));
        this.plugins.lineRenderer.highlightCanvas.setContext();
        this.eventCanvas._elem.bind("mouseleave", {plot: this}, function(e) {
            y(e.data.plot)
        })
    }
    function g(e, t, n, r) {
        var i = e.series[t];
        var s = e.plugins.lineRenderer.highlightCanvas;
        s._ctx.clearRect(0, 0, s._ctx.canvas.width, s._ctx.canvas.height);
        i._highlightedPoint = n;
        e.plugins.lineRenderer.highlightedSeriesIndex = t;
        var o = {fillStyle: i.highlightColor};
        if (i.type === "line" && i.renderer.bands.show) {
            o.fill = true;
            o.closePath = true
        }
        i.renderer.shapeRenderer.draw(s._ctx, r, o);
        s = null
    }
    function y(e) {
        var t = e.plugins.lineRenderer.highlightCanvas;
        t._ctx.clearRect(0, 0, t._ctx.canvas.width, t._ctx.canvas.height);
        for (var n = 0; n < e.series.length; n++) {
            e.series[n]._highlightedPoint = null
        }
        e.plugins.lineRenderer.highlightedSeriesIndex = null;
        e.target.trigger("jqplotDataUnhighlight");
        t = null
    }
    function b(e, t, n, r, i) {
        if (r) {
            var s = [r.seriesIndex, r.pointIndex, r.data];
            var o = jQuery.Event("jqplotDataMouseOver");
            o.pageX = e.pageX;
            o.pageY = e.pageY;
            i.target.trigger(o, s);
            if (i.series[s[0]].highlightMouseOver && !(s[0] == i.plugins.lineRenderer.highlightedSeriesIndex)) {
                var u = jQuery.Event("jqplotDataHighlight");
                u.which = e.which;
                u.pageX = e.pageX;
                u.pageY = e.pageY;
                i.target.trigger(u, s);
                g(i, r.seriesIndex, r.pointIndex, r.points)
            }
        } else if (r == null) {
            y(i)
        }
    }
    function w(e, t, n, r, i) {
        if (r) {
            var s = [r.seriesIndex, r.pointIndex, r.data];
            if (i.series[s[0]].highlightMouseDown && !(s[0] == i.plugins.lineRenderer.highlightedSeriesIndex)) {
                var o = jQuery.Event("jqplotDataHighlight");
                o.which = e.which;
                o.pageX = e.pageX;
                o.pageY = e.pageY;
                i.target.trigger(o, s);
                g(i, r.seriesIndex, r.pointIndex, r.points)
            }
        } else if (r == null) {
            y(i)
        }
    }
    function E(e, t, n, r, i) {
        var s = i.plugins.lineRenderer.highlightedSeriesIndex;
        if (s != null && i.series[s].highlightMouseDown) {
            y(i)
        }
    }
    function S(e, t, n, r, i) {
        if (r) {
            var s = [r.seriesIndex, r.pointIndex, r.data];
            var o = jQuery.Event("jqplotDataClick");
            o.which = e.which;
            o.pageX = e.pageX;
            o.pageY = e.pageY;
            i.target.trigger(o, s)
        }
    }
    function x(e, t, n, r, i) {
        if (r) {
            var s = [r.seriesIndex, r.pointIndex, r.data];
            var o = i.plugins.lineRenderer.highlightedSeriesIndex;
            if (o != null && i.series[o].highlightMouseDown) {
                y(i)
            }
            var u = jQuery.Event("jqplotDataRightClick");
            u.which = e.which;
            u.pageX = e.pageX;
            u.pageY = e.pageY;
            i.target.trigger(u, s)
        }
    }
    function T(e) {
        var t;
        e = Math.abs(e);
        if (e >= 10) {
            t = "%d"
        } else if (e > 1) {
            if (e === parseInt(e, 10)) {
                t = "%d"
            } else {
                t = "%.1f"
            }
        } else {
            var n = -Math.floor(Math.log(e) / Math.LN10);
            t = "%." + n + "f"
        }
        return t
    }
    function L(t, n, r) {
        var i = Math.floor(r / 2);
        var s = Math.ceil(r * 1.5);
        var o = Number.MAX_VALUE;
        var u = n - t;
        var a;
        var f;
        var l;
        var c = e.jqplot.getSignificantFigures;
        var h;
        var p;
        var d;
        var v;
        for (var m = 0, g = s - i + 1; m < g; m++) {
            d = i + m;
            a = u / (d - 1);
            f = c(a);
            a = Math.abs(r - d) + f.digitsRight;
            if (a < o) {
                o = a;
                l = d;
                v = f.digitsRight
            } else if (a === o) {
                if (f.digitsRight < v) {
                    l = d;
                    v = f.digitsRight
                }
            }
        }
        h = Math.max(v, Math.max(c(t).digitsRight, c(n).digitsRight));
        if (h === 0) {
            p = "%d"
        } else {
            p = "%." + h + "f"
        }
        a = u / (l - 1);
        return[t, n, l, p, a]
    }
    function A(e, t) {
        t = t || 7;
        var n = e / (t - 1);
        var r = Math.pow(10, Math.floor(Math.log(n) / Math.LN10));
        var i = n / r;
        var s;
        if (r < 1) {
            if (i > 5) {
                s = 10 * r
            } else if (i > 2) {
                s = 5 * r
            } else if (i > 1) {
                s = 2 * r
            } else {
                s = r
            }
        } else {
            if (i > 5) {
                s = 10 * r
            } else if (i > 4) {
                s = 5 * r
            } else if (i > 3) {
                s = 4 * r
            } else if (i > 2) {
                s = 3 * r
            } else if (i > 1) {
                s = 2 * r
            } else {
                s = r
            }
        }
        return s
    }
    function O(e, t) {
        t = t || 1;
        var n = Math.floor(Math.log(e) / Math.LN10);
        var r = Math.pow(10, n);
        var i = e / r;
        var s;
        i = i / t;
        if (i <= .38) {
            s = .1
        } else if (i <= 1.6) {
            s = .2
        } else if (i <= 4) {
            s = .5
        } else if (i <= 8) {
            s = 1
        } else if (i <= 16) {
            s = 2
        } else {
            s = 5
        }
        return s * r
    }
    function M(e, t) {
        var n = Math.floor(Math.log(e) / Math.LN10);
        var r = Math.pow(10, n);
        var i = e / r;
        var s;
        var o;
        i = i / t;
        if (i <= .38) {
            o = .1
        } else if (i <= 1.6) {
            o = .2
        } else if (i <= 4) {
            o = .5
        } else if (i <= 8) {
            o = 1
        } else if (i <= 16) {
            o = 2
        } else {
            o = 5
        }
        s = o * r;
        return[s, o, r]
    }
    function _(e, t) {
        return e - t
    }
    function D(e) {
        if (e == null || typeof e != "object") {
            return e
        }
        var t = new e.constructor;
        for (var n in e) {
            t[n] = D(e[n])
        }
        return t
    }
    function P(e, t) {
        if (t == null || typeof t != "object") {
            return
        }
        for (var n in t) {
            if (n == "highlightColors") {
                e[n] = D(t[n])
            }
            if (t[n] != null && typeof t[n] == "object") {
                if (!e.hasOwnProperty(n)) {
                    e[n] = {}
                }
                P(e[n], t[n])
            } else {
                e[n] = t[n]
            }
        }
    }
    function G(e, t) {
        if (t.indexOf) {
            return t.indexOf(e)
        }
        for (var n = 0, r = t.length; n < r; n++) {
            if (t[n] === e) {
                return n
            }
        }
        return-1
    }
    function Y(e) {
        if (e === null)
            return"[object Null]";
        return Object.prototype.toString.call(e)
    }
    function tt(n, r, i, s) {
        if (e.isPlainObject(n)) {
            return n
        }
        n = {effect: n};
        if (r === t) {
            r = {}
        }
        if (e.isFunction(r)) {
            s = r;
            i = null;
            r = {}
        }
        if (e.type(r) === "number" || e.fx.speeds[r]) {
            s = i;
            i = r;
            r = {}
        }
        if (e.isFunction(i)) {
            s = i;
            i = null
        }
        if (r) {
            e.extend(n, r)
        }
        i = i || r.duration;
        n.duration = e.fx.off ? 0 : typeof i === "number" ? i : i in e.fx.speeds ? e.fx.speeds[i] : e.fx.speeds._default;
        n.complete = s || r.complete;
        return n
    }
    function nt(t) {
        if (!t || typeof t === "number" || e.fx.speeds[t]) {
            return true
        }
        if (typeof t === "string" && !e.jqplot.effects.effect[t]) {
            if (Z && e.jqplot.effects[t]) {
                return false
            }
            return true
        }
        return false
    }
    var t;
    e.fn.emptyForce = function() {
        for (var t = 0, n; (n = e(this)[t]) != null; t++) {
            if (n.nodeType === 1) {
                e.cleanData(n.getElementsByTagName("*"))
            }
            if (e.jqplot.use_excanvas) {
                n.outerHTML = ""
            } else {
                while (n.firstChild) {
                    n.removeChild(n.firstChild)
                }
            }
            n = null
        }
        return e(this)
    };
    e.fn.removeChildForce = function(e) {
        while (e.firstChild) {
            this.removeChildForce(e.firstChild);
            e.removeChild(e.firstChild)
        }
    };
    e.fn.jqplot = function() {
        var n = [];
        var r = [];
        for (var i = 0, s = arguments.length; i < s; i++) {
            if (e.isArray(arguments[i])) {
                n.push(arguments[i])
            } else if (e.isPlainObject(arguments[i])) {
                r.push(arguments[i])
            }
        }
        return this.each(function(i) {
            var s, o, u = e(this), a = n.length, f = r.length, l, c;
            if (i < a) {
                l = n[i]
            } else {
                l = a ? n[a - 1] : null
            }
            if (i < f) {
                c = r[i]
            } else {
                c = f ? r[f - 1] : null
            }
            s = u.attr("id");
            if (s === t) {
                s = "jqplot_target_" + e.jqplot.targetCounter++;
                u.attr("id", s)
            }
            o = e.jqplot(s, l, c);
            u.data("jqplot", o)
        })
    };
    e.jqplot = function(t, n, r) {
        var i = null, s = null;
        if (arguments.length === 3) {
            i = n;
            s = r
        } else if (arguments.length === 2) {
            if (e.isArray(n)) {
                i = n
            } else if (e.isPlainObject(n)) {
                s = n
            }
        }
        if (i === null && s !== null && s.data) {
            i = s.data
        }
        var o = new a;
        e("#" + t).removeClass("jqplot-error");
        if (e.jqplot.config.catchErrors) {
            try {
                o.init(t, i, s);
                o.draw();
                o.themeEngine.init.call(o);
                return o
            } catch (u) {
                var f = e.jqplot.config.errorMessage || u.message;
                e("#" + t).append('<div class="jqplot-error-message">' + f + "</div>");
                e("#" + t).addClass("jqplot-error");
                document.getElementById(t).style.background = e.jqplot.config.errorBackground;
                document.getElementById(t).style.border = e.jqplot.config.errorBorder;
                document.getElementById(t).style.fontFamily = e.jqplot.config.errorFontFamily;
                document.getElementById(t).style.fontSize = e.jqplot.config.errorFontSize;
                document.getElementById(t).style.fontStyle = e.jqplot.config.errorFontStyle;
                document.getElementById(t).style.fontWeight = e.jqplot.config.errorFontWeight
            }
        } else {
            o.init(t, i, s);
            o.draw();
            o.themeEngine.init.call(o);
            return o
        }
    };
    e.jqplot.version = "1.0.8";
    e.jqplot.revision = "1250";
    e.jqplot.targetCounter = 1;
    e.jqplot.CanvasManager = function() {
        if (typeof e.jqplot.CanvasManager.canvases == "undefined") {
            e.jqplot.CanvasManager.canvases = [];
            e.jqplot.CanvasManager.free = []
        }
        var n = [];
        this.getCanvas = function() {
            var t;
            var r = true;
            if (!e.jqplot.use_excanvas) {
                for (var i = 0, s = e.jqplot.CanvasManager.canvases.length; i < s; i++) {
                    if (e.jqplot.CanvasManager.free[i] === true) {
                        r = false;
                        t = e.jqplot.CanvasManager.canvases[i];
                        e.jqplot.CanvasManager.free[i] = false;
                        n.push(i);
                        break
                    }
                }
            }
            if (r) {
                t = document.createElement("canvas");
                n.push(e.jqplot.CanvasManager.canvases.length);
                e.jqplot.CanvasManager.canvases.push(t);
                e.jqplot.CanvasManager.free.push(false)
            }
            return t
        };
        this.initCanvas = function(t) {
            if (e.jqplot.use_excanvas) {
                return window.G_vmlCanvasManager.initElement(t)
            }
            return t
        };
        this.freeAllCanvases = function() {
            for (var e = 0, t = n.length; e < t; e++) {
                this.freeCanvas(n[e])
            }
            n = []
        };
        this.freeCanvas = function(n) {
            if (e.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== t) {
                window.G_vmlCanvasManager.uninitElement(e.jqplot.CanvasManager.canvases[n]);
                e.jqplot.CanvasManager.canvases[n] = null
            } else {
                var r = e.jqplot.CanvasManager.canvases[n];
                r.getContext("2d").clearRect(0, 0, r.width, r.height);
                e(r).unbind().removeAttr("class").removeAttr("style");
                e(r).css({left: "", top: "", position: ""});
                r.width = 0;
                r.height = 0;
                e.jqplot.CanvasManager.free[n] = true
            }
        }
    };
    e.jqplot.log = function() {
        if (window.console) {
            window.console.log.apply(window.console, arguments)
        }
    };
    e.jqplot.config = {addDomReference: false, enablePlugins: false, defaultHeight: 300, defaultWidth: 400, UTCAdjust: false, timezoneOffset: new Date((new Date).getTimezoneOffset() * 6e4), errorMessage: "", errorBackground: "", errorBorder: "", errorFontFamily: "", errorFontSize: "", errorFontStyle: "", errorFontWeight: "", catchErrors: false, defaultTickFormatString: "%.1f", defaultColors: ["#00ff00", "#ff0000", "#c5b47f", "#579575", "#839557", "#958c12", "#953579", "#4b5de4", "#d8b83f", "#ff5800", "#0085cc", "#c747a3", "#cddf54", "#FBD178", "#26B4E3", "#bd70c7"], defaultNegativeColors: ["#498991", "#C08840", "#9F9274", "#546D61", "#646C4A", "#6F6621", "#6E3F5F", "#4F64B0", "#A89050", "#C45923", "#187399", "#945381", "#959E5C", "#C7AF7B", "#478396", "#907294"], dashLength: 4, gapLength: 4, dotGapLength: 2.5, srcLocation: "js/", pluginLocation: "js/plugins"};
    e.jqplot.arrayMax = function(e) {
        return Math.max.apply(Math, e)
    };
    e.jqplot.arrayMin = function(e) {
        return Math.min.apply(Math, e)
    };
    e.jqplot.enablePlugins = e.jqplot.config.enablePlugins;
    e.jqplot.support_canvas = function() {
        if (typeof e.jqplot.support_canvas.result == "undefined") {
            e.jqplot.support_canvas.result = !!document.createElement("canvas").getContext
        }
        return e.jqplot.support_canvas.result
    };
    e.jqplot.support_canvas_text = function() {
        if (typeof e.jqplot.support_canvas_text.result == "undefined") {
            if (window.G_vmlCanvasManager !== t && window.G_vmlCanvasManager._version > 887) {
                e.jqplot.support_canvas_text.result = true
            } else {
                e.jqplot.support_canvas_text.result = !!(document.createElement("canvas").getContext && typeof document.createElement("canvas").getContext("2d").fillText == "function")
            }
        }
        return e.jqplot.support_canvas_text.result
    };
    e.jqplot.use_excanvas = (!e.support.boxModel || !e.support.objectAll || !$support.leadingWhitespace) && !e.jqplot.support_canvas() ? true : false;
    e.jqplot.preInitHooks = [];
    e.jqplot.postInitHooks = [];
    e.jqplot.preParseOptionsHooks = [];
    e.jqplot.postParseOptionsHooks = [];
    e.jqplot.preDrawHooks = [];
    e.jqplot.postDrawHooks = [];
    e.jqplot.preDrawSeriesHooks = [];
    e.jqplot.postDrawSeriesHooks = [];
    e.jqplot.preDrawLegendHooks = [];
    e.jqplot.addLegendRowHooks = [];
    e.jqplot.preSeriesInitHooks = [];
    e.jqplot.postSeriesInitHooks = [];
    e.jqplot.preParseSeriesOptionsHooks = [];
    e.jqplot.postParseSeriesOptionsHooks = [];
    e.jqplot.eventListenerHooks = [];
    e.jqplot.preDrawSeriesShadowHooks = [];
    e.jqplot.postDrawSeriesShadowHooks = [];
    e.jqplot.ElemContainer = function() {
        this._elem;
        this._plotWidth;
        this._plotHeight;
        this._plotDimensions = {height: null, width: null}
    };
    e.jqplot.ElemContainer.prototype.createElement = function(t, n, r, i, s) {
        this._offsets = n;
        var o = r || "jqplot";
        var u = document.createElement(t);
        this._elem = e(u);
        this._elem.addClass(o);
        this._elem.css(i);
        this._elem.attr(s);
        u = null;
        return this._elem
    };
    e.jqplot.ElemContainer.prototype.getWidth = function() {
        if (this._elem) {
            return this._elem.outerWidth(true)
        } else {
            return null
        }
    };
    e.jqplot.ElemContainer.prototype.getHeight = function() {
        if (this._elem) {
            return this._elem.outerHeight(true)
        } else {
            return null
        }
    };
    e.jqplot.ElemContainer.prototype.getPosition = function() {
        if (this._elem) {
            return this._elem.position()
        } else {
            return{top: null, left: null, bottom: null, right: null}
        }
    };
    e.jqplot.ElemContainer.prototype.getTop = function() {
        return this.getPosition().top
    };
    e.jqplot.ElemContainer.prototype.getLeft = function() {
        return this.getPosition().left
    };
    e.jqplot.ElemContainer.prototype.getBottom = function() {
        return this._elem.css("bottom")
    };
    e.jqplot.ElemContainer.prototype.getRight = function() {
        return this._elem.css("right")
    };
    n.prototype = new e.jqplot.ElemContainer;
    n.prototype.constructor = n;
    n.prototype.init = function() {
        if (e.isFunction(this.renderer)) {
            this.renderer = new this.renderer
        }
        this.tickOptions.axis = this.name;
        if (this.tickOptions.showMark == null) {
            this.tickOptions.showMark = this.showTicks
        }
        if (this.tickOptions.showMark == null) {
            this.tickOptions.showMark = this.showTickMarks
        }
        if (this.tickOptions.showLabel == null) {
            this.tickOptions.showLabel = this.showTicks
        }
        if (this.label == null || this.label == "") {
            this.showLabel = false
        } else {
            this.labelOptions.label = this.label
        }
        if (this.showLabel == false) {
            this.labelOptions.show = false
        }
        if (this.pad == 0) {
            this.pad = 1
        }
        if (this.padMax == 0) {
            this.padMax = 1
        }
        if (this.padMin == 0) {
            this.padMin = 1
        }
        if (this.padMax == null) {
            this.padMax = (this.pad - 1) / 2 + 1
        }
        if (this.padMin == null) {
            this.padMin = (this.pad - 1) / 2 + 1
        }
        this.pad = this.padMax + this.padMin - 1;
        if (this.min != null || this.max != null) {
            this.autoscale = false
        }
        if (this.syncTicks == null && this.name.indexOf("y") > -1) {
            this.syncTicks = true
        } else if (this.syncTicks == null) {
            this.syncTicks = false
        }
        this.renderer.init.call(this, this.rendererOptions)
    };
    n.prototype.draw = function(e, t) {
        if (this.__ticks) {
            this.__ticks = null
        }
        return this.renderer.draw.call(this, e, t)
    };
    n.prototype.set = function() {
        this.renderer.set.call(this)
    };
    n.prototype.pack = function(e, t) {
        if (this.show) {
            this.renderer.pack.call(this, e, t)
        }
        if (this._min == null) {
            this._min = this.min;
            this._max = this.max;
            this._tickInterval = this.tickInterval;
            this._numberTicks = this.numberTicks;
            this.__ticks = this._ticks
        }
    };
    n.prototype.reset = function() {
        this.renderer.reset.call(this)
    };
    n.prototype.resetScale = function(t) {
        e.extend(true, this, {min: null, max: null, numberTicks: null, tickInterval: null, _ticks: [], ticks: []}, t);
        this.resetDataBounds()
    };
    n.prototype.resetDataBounds = function() {
        var t = this._dataBounds;
        t.min = null;
        t.max = null;
        var n, r, i;
        var s = this.show ? true : false;
        for (var o = 0; o < this._series.length; o++) {
            r = this._series[o];
            if (r.show || this.scaleToHiddenSeries) {
                i = r._plotData;
                if (r._type === "line" && r.renderer.bands.show && this.name.charAt(0) !== "x") {
                    i = [[0, r.renderer.bands._min], [1, r.renderer.bands._max]]
                }
                var u = 1, a = 1;
                if (r._type != null && r._type == "ohlc") {
                    u = 3;
                    a = 2
                }
                for (var f = 0, n = i.length; f < n; f++) {
                    if (this.name == "xaxis" || this.name == "x2axis") {
                        if (i[f][0] != null && i[f][0] < t.min || t.min == null) {
                            t.min = i[f][0]
                        }
                        if (i[f][0] != null && i[f][0] > t.max || t.max == null) {
                            t.max = i[f][0]
                        }
                    } else {
                        if (i[f][u] != null && i[f][u] < t.min || t.min == null) {
                            t.min = i[f][u]
                        }
                        if (i[f][a] != null && i[f][a] > t.max || t.max == null) {
                            t.max = i[f][a]
                        }
                    }
                }
                if (s && r.renderer.constructor !== e.jqplot.BarRenderer) {
                    s = false
                } else if (s && this._options.hasOwnProperty("forceTickAt0") && this._options.forceTickAt0 == false) {
                    s = false
                } else if (s && r.renderer.constructor === e.jqplot.BarRenderer) {
                    if (r.barDirection == "vertical" && this.name != "xaxis" && this.name != "x2axis") {
                        if (this._options.pad != null || this._options.padMin != null) {
                            s = false
                        }
                    } else if (r.barDirection == "horizontal" && (this.name == "xaxis" || this.name == "x2axis")) {
                        if (this._options.pad != null || this._options.padMin != null) {
                            s = false
                        }
                    }
                }
            }
        }
        if (s && this.renderer.constructor === e.jqplot.LinearAxisRenderer && t.min >= 0) {
            this.padMin = 1;
            this.forceTickAt0 = true
        }
    };
    r.prototype = new e.jqplot.ElemContainer;
    r.prototype.constructor = r;
    r.prototype.setOptions = function(t) {
        e.extend(true, this, t);
        if (this.placement == "inside") {
            this.placement = "insideGrid"
        }
        if (this.xoffset > 0) {
            if (this.placement == "insideGrid") {
                switch (this.location) {
                    case"nw":
                    case"w":
                    case"sw":
                        if (this.marginLeft == null) {
                            this.marginLeft = this.xoffset + "px"
                        }
                        this.marginRight = "0px";
                        break;
                    case"ne":
                    case"e":
                    case"se":
                    default:
                        if (this.marginRight == null) {
                            this.marginRight = this.xoffset + "px"
                        }
                        this.marginLeft = "0px";
                        break
                }
            } else if (this.placement == "outside") {
                switch (this.location) {
                    case"nw":
                    case"w":
                    case"sw":
                        if (this.marginRight == null) {
                            this.marginRight = this.xoffset + "px"
                        }
                        this.marginLeft = "0px";
                        break;
                    case"ne":
                    case"e":
                    case"se":
                    default:
                        if (this.marginLeft == null) {
                            this.marginLeft = this.xoffset + "px"
                        }
                        this.marginRight = "0px";
                        break
                }
            }
            this.xoffset = 0
        }
        if (this.yoffset > 0) {
            if (this.placement == "outside") {
                switch (this.location) {
                    case"sw":
                    case"s":
                    case"se":
                        if (this.marginTop == null) {
                            this.marginTop = this.yoffset + "px"
                        }
                        this.marginBottom = "0px";
                        break;
                    case"ne":
                    case"n":
                    case"nw":
                    default:
                        if (this.marginBottom == null) {
                            this.marginBottom = this.yoffset + "px"
                        }
                        this.marginTop = "0px";
                        break
                }
            } else if (this.placement == "insideGrid") {
                switch (this.location) {
                    case"sw":
                    case"s":
                    case"se":
                        if (this.marginBottom == null) {
                            this.marginBottom = this.yoffset + "px"
                        }
                        this.marginTop = "0px";
                        break;
                    case"ne":
                    case"n":
                    case"nw":
                    default:
                        if (this.marginTop == null) {
                            this.marginTop = this.yoffset + "px"
                        }
                        this.marginBottom = "0px";
                        break
                }
            }
            this.yoffset = 0
        }
    };
    r.prototype.init = function() {
        if (e.isFunction(this.renderer)) {
            this.renderer = new this.renderer
        }
        this.renderer.init.call(this, this.rendererOptions)
    };
    r.prototype.draw = function(t, n) {
        for (var r = 0; r < e.jqplot.preDrawLegendHooks.length; r++) {
            e.jqplot.preDrawLegendHooks[r].call(this, t)
        }
        return this.renderer.draw.call(this, t, n)
    };
    r.prototype.pack = function(e) {
        this.renderer.pack.call(this, e)
    };
    i.prototype = new e.jqplot.ElemContainer;
    i.prototype.constructor = i;
    i.prototype.init = function() {
        if (e.isFunction(this.renderer)) {
            this.renderer = new this.renderer
        }
        this.renderer.init.call(this, this.rendererOptions)
    };
    i.prototype.draw = function(e) {
        return this.renderer.draw.call(this, e)
    };
    i.prototype.pack = function() {
        this.renderer.pack.call(this)
    };
    s.prototype = new e.jqplot.ElemContainer;
    s.prototype.constructor = s;
    s.prototype.init = function(t, n, r) {
        this.index = t;
        this.gridBorderWidth = n;
        var i = this.data;
        var s = [], o, u;
        for (o = 0, u = i.length; o < u; o++) {
            if (!this.breakOnNull) {
                if (i[o] == null || i[o][0] == null || i[o][1] == null) {
                    continue
                } else {
                    s.push(i[o])
                }
            } else {
                s.push(i[o])
            }
        }
        this.data = s;
        if (!this.color) {
            this.color = r.colorGenerator.get(this.index)
        }
        if (!this.negativeColor) {
            this.negativeColor = r.negativeColorGenerator.get(this.index)
        }
        if (!this.fillColor) {
            this.fillColor = this.color
        }
        if (this.fillAlpha) {
            var a = e.jqplot.normalize2rgb(this.fillColor);
            var a = e.jqplot.getColorComponents(a);
            this.fillColor = "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + this.fillAlpha + ")"
        }
        if (e.isFunction(this.renderer)) {
            this.renderer = new this.renderer
        }
        this.renderer.init.call(this, this.rendererOptions, r);
        this.markerRenderer = new this.markerRenderer;
        if (!this.markerOptions.color) {
            this.markerOptions.color = this.color
        }
        if (this.markerOptions.show == null) {
            this.markerOptions.show = this.showMarker
        }
        this.showMarker = this.markerOptions.show;
        this.markerRenderer.init(this.markerOptions)
    };
    s.prototype.draw = function(n, r, i) {
        var s = r == t ? {} : r;
        n = n == t ? this.canvas._ctx : n;
        var o, u, a;
        for (o = 0; o < e.jqplot.preDrawSeriesHooks.length; o++) {
            e.jqplot.preDrawSeriesHooks[o].call(this, n, s)
        }
        if (this.show) {
            this.renderer.setGridData.call(this, i);
            if (!s.preventJqPlotSeriesDrawTrigger) {
                e(n.canvas).trigger("jqplotSeriesDraw", [this.data, this.gridData])
            }
            u = [];
            if (s.data) {
                u = s.data
            } else if (!this._stack) {
                u = this.data
            } else {
                u = this._plotData
            }
            a = s.gridData || this.renderer.makeGridData.call(this, u, i);
            if (this._type === "line" && this.renderer.smooth && this.renderer._smoothedData.length) {
                a = this.renderer._smoothedData
            }
            this.renderer.draw.call(this, n, a, s, i)
        }
        for (o = 0; o < e.jqplot.postDrawSeriesHooks.length; o++) {
            e.jqplot.postDrawSeriesHooks[o].call(this, n, s, i)
        }
        n = r = i = o = u = a = null
    };
    s.prototype.drawShadow = function(n, r, i) {
        var s = r == t ? {} : r;
        n = n == t ? this.shadowCanvas._ctx : n;
        var o, u, a;
        for (o = 0; o < e.jqplot.preDrawSeriesShadowHooks.length; o++) {
            e.jqplot.preDrawSeriesShadowHooks[o].call(this, n, s)
        }
        if (this.shadow) {
            this.renderer.setGridData.call(this, i);
            u = [];
            if (s.data) {
                u = s.data
            } else if (!this._stack) {
                u = this.data
            } else {
                u = this._plotData
            }
            a = s.gridData || this.renderer.makeGridData.call(this, u, i);
            this.renderer.drawShadow.call(this, n, a, s, i)
        }
        for (o = 0; o < e.jqplot.postDrawSeriesShadowHooks.length; o++) {
            e.jqplot.postDrawSeriesShadowHooks[o].call(this, n, s)
        }
        n = r = i = o = u = a = null
    };
    s.prototype.toggleDisplay = function(e, t) {
        var n, r;
        if (e.data.series) {
            n = e.data.series
        } else {
            n = this
        }
        if (e.data.speed) {
            r = e.data.speed
        }
        if (r) {
            if (n.canvas._elem.is(":hidden") || !n.show) {
                n.show = true;
                n.canvas._elem.removeClass("jqplot-series-hidden");
                if (n.shadowCanvas._elem) {
                    n.shadowCanvas._elem.fadeIn(r)
                }
                n.canvas._elem.fadeIn(r, t);
                n.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-" + n.index).fadeIn(r)
            } else {
                n.show = false;
                n.canvas._elem.addClass("jqplot-series-hidden");
                if (n.shadowCanvas._elem) {
                    n.shadowCanvas._elem.fadeOut(r)
                }
                n.canvas._elem.fadeOut(r, t);
                n.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-" + n.index).fadeOut(r)
            }
        } else {
            if (n.canvas._elem.is(":hidden") || !n.show) {
                n.show = true;
                n.canvas._elem.removeClass("jqplot-series-hidden");
                if (n.shadowCanvas._elem) {
                    n.shadowCanvas._elem.show()
                }
                n.canvas._elem.show(0, t);
                n.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-" + n.index).show()
            } else {
                n.show = false;
                n.canvas._elem.addClass("jqplot-series-hidden");
                if (n.shadowCanvas._elem) {
                    n.shadowCanvas._elem.hide()
                }
                n.canvas._elem.hide(0, t);
                n.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-" + n.index).hide()
            }
        }
    };
    o.prototype = new e.jqplot.ElemContainer;
    o.prototype.constructor = o;
    o.prototype.init = function() {
        if (e.isFunction(this.renderer)) {
            this.renderer = new this.renderer
        }
        this.renderer.init.call(this, this.rendererOptions)
    };
    o.prototype.createElement = function(e, t) {
        this._offsets = e;
        return this.renderer.createElement.call(this, t)
    };
    o.prototype.draw = function() {
        this.renderer.draw.call(this)
    };
    e.jqplot.GenericCanvas = function() {
        e.jqplot.ElemContainer.call(this);
        this._ctx
    };
    e.jqplot.GenericCanvas.prototype = new e.jqplot.ElemContainer;
    e.jqplot.GenericCanvas.prototype.constructor = e.jqplot.GenericCanvas;
    e.jqplot.GenericCanvas.prototype.createElement = function(n, r, i, s) {
        this._offsets = n;
        var o = "jqplot";
        if (r != t) {
            o = r
        }
        var u;
        u = s.canvasManager.getCanvas();
        if (i != null) {
            this._plotDimensions = i
        }
        u.width = this._plotDimensions.width - this._offsets.left - this._offsets.right;
        u.height = this._plotDimensions.height - this._offsets.top - this._offsets.bottom;
        this._elem = e(u);
        this._elem.css({position: "absolute", left: this._offsets.left, top: this._offsets.top});
        this._elem.addClass(o);
        u = s.canvasManager.initCanvas(u);
        u = null;
        return this._elem
    };
    e.jqplot.GenericCanvas.prototype.setContext = function() {
        this._ctx = this._elem.get(0).getContext("2d");
        return this._ctx
    };
    e.jqplot.GenericCanvas.prototype.resetCanvas = function() {
        if (this._elem) {
            if (e.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== t) {
                window.G_vmlCanvasManager.uninitElement(this._elem.get(0))
            }
            this._elem.emptyForce()
        }
        this._ctx = null
    };
    e.jqplot.HooksManager = function() {
        this.hooks = [];
        this.args = []
    };
    e.jqplot.HooksManager.prototype.addOnce = function(e, t) {
        t = t || [];
        var n = false;
        for (var r = 0, i = this.hooks.length; r < i; r++) {
            if (this.hooks[r] == e) {
                n = true
            }
        }
        if (!n) {
            this.hooks.push(e);
            this.args.push(t)
        }
    };
    e.jqplot.HooksManager.prototype.add = function(e, t) {
        t = t || [];
        this.hooks.push(e);
        this.args.push(t)
    };
    e.jqplot.EventListenerManager = function() {
        this.hooks = []
    };
    e.jqplot.EventListenerManager.prototype.addOnce = function(e, t) {
        var n = false, r, i;
        for (var i = 0, s = this.hooks.length; i < s; i++) {
            r = this.hooks[i];
            if (r[0] == e && r[1] == t) {
                n = true
            }
        }
        if (!n) {
            this.hooks.push([e, t])
        }
    };
    e.jqplot.EventListenerManager.prototype.add = function(e, t) {
        this.hooks.push([e, t])
    };
    var u = ["yMidAxis", "xaxis", "yaxis", "x2axis", "y2axis", "y3axis", "y4axis", "y5axis", "y6axis", "y7axis", "y8axis", "y9axis"];
    e.jqplot.computeHighlightColors = function(t) {
        var n;
        if (e.isArray(t)) {
            n = [];
            for (var r = 0; r < t.length; r++) {
                var i = e.jqplot.getColorComponents(t[r]);
                var s = [i[0], i[1], i[2]];
                var o = s[0] + s[1] + s[2];
                for (var u = 0; u < 3; u++) {
                    s[u] = o > 660 ? s[u] * .85 : .73 * s[u] + 90;
                    s[u] = parseInt(s[u], 10);
                    s[u] > 255 ? 255 : s[u]
                }
                s[3] = .3 + .35 * i[3];
                n.push("rgba(" + s[0] + "," + s[1] + "," + s[2] + "," + s[3] + ")")
            }
        } else {
            var i = e.jqplot.getColorComponents(t);
            var s = [i[0], i[1], i[2]];
            var o = s[0] + s[1] + s[2];
            for (var u = 0; u < 3; u++) {
                s[u] = o > 660 ? s[u] * .85 : .73 * s[u] + 90;
                s[u] = parseInt(s[u], 10);
                s[u] > 255 ? 255 : s[u]
            }
            s[3] = .3 + .35 * i[3];
            n = "rgba(" + s[0] + "," + s[1] + "," + s[2] + "," + s[3] + ")"
        }
        return n
    };
    e.jqplot.ColorGenerator = function(t) {
        t = t || e.jqplot.config.defaultColors;
        var n = 0;
        this.next = function() {
            if (n < t.length) {
                return t[n++]
            } else {
                n = 0;
                return t[n++]
            }
        };
        this.previous = function() {
            if (n > 0) {
                return t[n--]
            } else {
                n = t.length - 1;
                return t[n]
            }
        };
        this.get = function(e) {
            var n = e - t.length * Math.floor(e / t.length);
            return t[n]
        };
        this.setColors = function(e) {
            t = e
        };
        this.reset = function() {
            n = 0
        };
        this.getIndex = function() {
            return n
        };
        this.setIndex = function(e) {
            n = e
        }
    };
    e.jqplot.hex2rgb = function(e, t) {
        e = e.replace("#", "");
        if (e.length == 3) {
            e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)
        }
        var n;
        n = "rgba(" + parseInt(e.slice(0, 2), 16) + ", " + parseInt(e.slice(2, 4), 16) + ", " + parseInt(e.slice(4, 6), 16);
        if (t) {
            n += ", " + t
        }
        n += ")";
        return n
    };
    e.jqplot.rgb2hex = function(e) {
        var t = /rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *(?:, *[0-9.]*)?\)/;
        var n = e.match(t);
        var r = "#";
        for (var i = 1; i < 4; i++) {
            var s;
            if (n[i].search(/%/) != -1) {
                s = parseInt(255 * n[i] / 100, 10).toString(16);
                if (s.length == 1) {
                    s = "0" + s
                }
            } else {
                s = parseInt(n[i], 10).toString(16);
                if (s.length == 1) {
                    s = "0" + s
                }
            }
            r += s
        }
        return r
    };
    e.jqplot.normalize2rgb = function(t, n) {
        if (t.search(/^ *rgba?\(/) != -1) {
            return t
        } else if (t.search(/^ *#?[0-9a-fA-F]?[0-9a-fA-F]/) != -1) {
            return e.jqplot.hex2rgb(t, n)
        } else {
            throw new Error("Invalid color spec")
        }
    };
    e.jqplot.getColorComponents = function(t) {
        t = e.jqplot.colorKeywordMap[t] || t;
        var n = e.jqplot.normalize2rgb(t);
        var r = /rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *,? *([0-9.]* *)?\)/;
        var i = n.match(r);
        var s = [];
        for (var o = 1; o < 4; o++) {
            if (i[o].search(/%/) != -1) {
                s[o - 1] = parseInt(255 * i[o] / 100, 10)
            } else {
                s[o - 1] = parseInt(i[o], 10)
            }
        }
        s[3] = parseFloat(i[4]) ? parseFloat(i[4]) : 1;
        return s
    };
    e.jqplot.colorKeywordMap = {aliceblue: "rgb(240, 248, 255)", antiquewhite: "rgb(250, 235, 215)", aqua: "rgb( 0, 255, 255)", aquamarine: "rgb(127, 255, 212)", azure: "rgb(240, 255, 255)", beige: "rgb(245, 245, 220)", bisque: "rgb(255, 228, 196)", black: "rgb( 0, 0, 0)", blanchedalmond: "rgb(255, 235, 205)", blue: "rgb( 0, 0, 255)", blueviolet: "rgb(138, 43, 226)", brown: "rgb(165, 42, 42)", burlywood: "rgb(222, 184, 135)", cadetblue: "rgb( 95, 158, 160)", chartreuse: "rgb(127, 255, 0)", chocolate: "rgb(210, 105, 30)", coral: "rgb(255, 127, 80)", cornflowerblue: "rgb(100, 149, 237)", cornsilk: "rgb(255, 248, 220)", crimson: "rgb(220, 20, 60)", cyan: "rgb( 0, 255, 255)", darkblue: "rgb( 0, 0, 139)", darkcyan: "rgb( 0, 139, 139)", darkgoldenrod: "rgb(184, 134, 11)", darkgray: "rgb(169, 169, 169)", darkgreen: "rgb( 0, 100, 0)", darkgrey: "rgb(169, 169, 169)", darkkhaki: "rgb(189, 183, 107)", darkmagenta: "rgb(139, 0, 139)", darkolivegreen: "rgb( 85, 107, 47)", darkorange: "rgb(255, 140, 0)", darkorchid: "rgb(153, 50, 204)", darkred: "rgb(139, 0, 0)", darksalmon: "rgb(233, 150, 122)", darkseagreen: "rgb(143, 188, 143)", darkslateblue: "rgb( 72, 61, 139)", darkslategray: "rgb( 47, 79, 79)", darkslategrey: "rgb( 47, 79, 79)", darkturquoise: "rgb( 0, 206, 209)", darkviolet: "rgb(148, 0, 211)", deeppink: "rgb(255, 20, 147)", deepskyblue: "rgb( 0, 191, 255)", dimgray: "rgb(105, 105, 105)", dimgrey: "rgb(105, 105, 105)", dodgerblue: "rgb( 30, 144, 255)", firebrick: "rgb(178, 34, 34)", floralwhite: "rgb(255, 250, 240)", forestgreen: "rgb( 34, 139, 34)", fuchsia: "rgb(255, 0, 255)", gainsboro: "rgb(220, 220, 220)", ghostwhite: "rgb(248, 248, 255)", gold: "rgb(255, 215, 0)", goldenrod: "rgb(218, 165, 32)", gray: "rgb(128, 128, 128)", grey: "rgb(128, 128, 128)", green: "rgb( 0, 128, 0)", greenyellow: "rgb(173, 255, 47)", honeydew: "rgb(240, 255, 240)", hotpink: "rgb(255, 105, 180)", indianred: "rgb(205, 92, 92)", indigo: "rgb( 75, 0, 130)", ivory: "rgb(255, 255, 240)", khaki: "rgb(240, 230, 140)", lavender: "rgb(230, 230, 250)", lavenderblush: "rgb(255, 240, 245)", lawngreen: "rgb(124, 252, 0)", lemonchiffon: "rgb(255, 250, 205)", lightblue: "rgb(173, 216, 230)", lightcoral: "rgb(240, 128, 128)", lightcyan: "rgb(224, 255, 255)", lightgoldenrodyellow: "rgb(250, 250, 210)", lightgray: "rgb(211, 211, 211)", lightgreen: "rgb(144, 238, 144)", lightgrey: "rgb(211, 211, 211)", lightpink: "rgb(255, 182, 193)", lightsalmon: "rgb(255, 160, 122)", lightseagreen: "rgb( 32, 178, 170)", lightskyblue: "rgb(135, 206, 250)", lightslategray: "rgb(119, 136, 153)", lightslategrey: "rgb(119, 136, 153)", lightsteelblue: "rgb(176, 196, 222)", lightyellow: "rgb(255, 255, 224)", lime: "rgb( 0, 255, 0)", limegreen: "rgb( 50, 205, 50)", linen: "rgb(250, 240, 230)", magenta: "rgb(255, 0, 255)", maroon: "rgb(128, 0, 0)", mediumaquamarine: "rgb(102, 205, 170)", mediumblue: "rgb( 0, 0, 205)", mediumorchid: "rgb(186, 85, 211)", mediumpurple: "rgb(147, 112, 219)", mediumseagreen: "rgb( 60, 179, 113)", mediumslateblue: "rgb(123, 104, 238)", mediumspringgreen: "rgb( 0, 250, 154)", mediumturquoise: "rgb( 72, 209, 204)", mediumvioletred: "rgb(199, 21, 133)", midnightblue: "rgb( 25, 25, 112)", mintcream: "rgb(245, 255, 250)", mistyrose: "rgb(255, 228, 225)", moccasin: "rgb(255, 228, 181)", navajowhite: "rgb(255, 222, 173)", navy: "rgb( 0, 0, 128)", oldlace: "rgb(253, 245, 230)", olive: "rgb(128, 128, 0)", olivedrab: "rgb(107, 142, 35)", orange: "rgb(255, 165, 0)", orangered: "rgb(255, 69, 0)", orchid: "rgb(218, 112, 214)", palegoldenrod: "rgb(238, 232, 170)", palegreen: "rgb(152, 251, 152)", paleturquoise: "rgb(175, 238, 238)", palevioletred: "rgb(219, 112, 147)", papayawhip: "rgb(255, 239, 213)", peachpuff: "rgb(255, 218, 185)", peru: "rgb(205, 133, 63)", pink: "rgb(255, 192, 203)", plum: "rgb(221, 160, 221)", powderblue: "rgb(176, 224, 230)", purple: "rgb(128, 0, 128)", red: "rgb(255, 0, 0)", rosybrown: "rgb(188, 143, 143)", royalblue: "rgb( 65, 105, 225)", saddlebrown: "rgb(139, 69, 19)", salmon: "rgb(250, 128, 114)", sandybrown: "rgb(244, 164, 96)", seagreen: "rgb( 46, 139, 87)", seashell: "rgb(255, 245, 238)", sienna: "rgb(160, 82, 45)", silver: "rgb(192, 192, 192)", skyblue: "rgb(135, 206, 235)", slateblue: "rgb(106, 90, 205)", slategray: "rgb(112, 128, 144)", slategrey: "rgb(112, 128, 144)", snow: "rgb(255, 250, 250)", springgreen: "rgb( 0, 255, 127)", steelblue: "rgb( 70, 130, 180)", tan: "rgb(210, 180, 140)", teal: "rgb( 0, 128, 128)", thistle: "rgb(216, 191, 216)", tomato: "rgb(255, 99, 71)", turquoise: "rgb( 64, 224, 208)", violet: "rgb(238, 130, 238)", wheat: "rgb(245, 222, 179)", white: "rgb(255, 255, 255)", whitesmoke: "rgb(245, 245, 245)", yellow: "rgb(255, 255, 0)", yellowgreen: "rgb(154, 205, 50)"};
    e.jqplot.AxisLabelRenderer = function(t) {
        e.jqplot.ElemContainer.call(this);
        this.axis;
        this.show = true;
        this.label = "";
        this.fontFamily = null;
        this.fontSize = null;
        this.textColor = null;
        this._elem;
        this.escapeHTML = false;
        e.extend(true, this, t)
    };
    e.jqplot.AxisLabelRenderer.prototype = new e.jqplot.ElemContainer;
    e.jqplot.AxisLabelRenderer.prototype.constructor = e.jqplot.AxisLabelRenderer;
    e.jqplot.AxisLabelRenderer.prototype.init = function(t) {
        e.extend(true, this, t)
    };
    e.jqplot.AxisLabelRenderer.prototype.draw = function(t, n) {
        if (this._elem) {
            this._elem.emptyForce();
            this._elem = null
        }
        this._elem = e('<div style="position:absolute;" class="jqplot-' + this.axis + '-label"></div>');
        if (Number(this.label)) {
            this._elem.css("white-space", "nowrap")
        }
        if (!this.escapeHTML) {
            this._elem.html(this.label)
        } else {
            this._elem.text(this.label)
        }
        if (this.fontFamily) {
            this._elem.css("font-family", this.fontFamily)
        }
        if (this.fontSize) {
            this._elem.css("font-size", this.fontSize)
        }
        if (this.textColor) {
            this._elem.css("color", this.textColor)
        }
        return this._elem
    };
    e.jqplot.AxisLabelRenderer.prototype.pack = function() {
    };
    e.jqplot.AxisTickRenderer = function(t) {
        e.jqplot.ElemContainer.call(this);
        this.mark = "outside";
        this.axis;
        this.showMark = true;
        this.showGridline = true;
        this.isMinorTick = false;
        this.size = 4;
        this.markSize = 6;
        this.show = true;
        this.showLabel = true;
        this.label = null;
        this.value = null;
        this._styles = {};
        this.formatter = e.jqplot.DefaultTickFormatter;
        this.prefix = "";
        this.suffix = "";
        this.formatString = "";
        this.fontFamily;
        this.fontSize;
        this.textColor;
        this.escapeHTML = false;
        this._elem;
        this._breakTick = false;
        e.extend(true, this, t)
    };
    e.jqplot.AxisTickRenderer.prototype.init = function(t) {
        e.extend(true, this, t)
    };
    e.jqplot.AxisTickRenderer.prototype = new e.jqplot.ElemContainer;
    e.jqplot.AxisTickRenderer.prototype.constructor = e.jqplot.AxisTickRenderer;
    e.jqplot.AxisTickRenderer.prototype.setTick = function(e, t, n) {
        this.value = e;
        this.axis = t;
        if (n) {
            this.isMinorTick = true
        }
        return this
    };
    e.jqplot.AxisTickRenderer.prototype.draw = function() {
        if (this.label === null) {
            this.label = this.prefix + this.formatter(this.formatString, this.value) + this.suffix
        }
        var t = {position: "absolute"};
        if (Number(this.label)) {
            t["whitSpace"] = "nowrap"
        }
        if (this._elem) {
            this._elem.emptyForce();
            this._elem = null
        }
        this._elem = e(document.createElement("div"));
        this._elem.addClass("jqplot-" + this.axis + "-tick");
        if (!this.escapeHTML) {
            this._elem.html(this.label)
        } else {
            this._elem.text(this.label)
        }
        this._elem.css(t);
        for (var n in this._styles) {
            this._elem.css(n, this._styles[n])
        }
        if (this.fontFamily) {
            this._elem.css("font-family", this.fontFamily)
        }
        if (this.fontSize) {
            this._elem.css("font-size", this.fontSize)
        }
        if (this.textColor) {
            this._elem.css("color", this.textColor)
        }
        if (this._breakTick) {
            this._elem.addClass("jqplot-breakTick")
        }
        return this._elem
    };
    e.jqplot.DefaultTickFormatter = function(t, n) {
        if (typeof n == "number") {
            if (!t) {
                t = e.jqplot.config.defaultTickFormatString
            }
            return e.jqplot.sprintf(t, n)
        } else {
            return String(n)
        }
    };
    e.jqplot.PercentTickFormatter = function(t, n) {
        if (typeof n == "number") {
            n = 100 * n;
            if (!t) {
                t = e.jqplot.config.defaultTickFormatString
            }
            return e.jqplot.sprintf(t, n)
        } else {
            return String(n)
        }
    };
    e.jqplot.AxisTickRenderer.prototype.pack = function() {
    };
    e.jqplot.CanvasGridRenderer = function() {
        this.shadowRenderer = new e.jqplot.ShadowRenderer
    };
    e.jqplot.CanvasGridRenderer.prototype.init = function(t) {
        this._ctx;
        e.extend(true, this, t);
        var n = {lineJoin: "miter", lineCap: "round", fill: false, isarc: false, angle: this.shadowAngle, offset: this.shadowOffset, alpha: this.shadowAlpha, depth: this.shadowDepth, lineWidth: this.shadowWidth, closePath: false, strokeStyle: this.shadowColor};
        this.renderer.shadowRenderer.init(n)
    };
    e.jqplot.CanvasGridRenderer.prototype.createElement = function(n) {
        var r;
        if (this._elem) {
            if (e.jqplot.use_excanvas && window.G_vmlCanvasManager.uninitElement !== t) {
                r = this._elem.get(0);
                window.G_vmlCanvasManager.uninitElement(r);
                r = null
            }
            this._elem.emptyForce();
            this._elem = null
        }
        r = n.canvasManager.getCanvas();
        var i = this._plotDimensions.width;
        var s = this._plotDimensions.height;
        r.width = i;
        r.height = s;
        this._elem = e(r);
        this._elem.addClass("jqplot-grid-canvas");
        this._elem.css({position: "absolute", left: 0, top: 0});
        r = n.canvasManager.initCanvas(r);
        this._top = this._offsets.top;
        this._bottom = s - this._offsets.bottom;
        this._left = this._offsets.left;
        this._right = i - this._offsets.right;
        this._width = this._right - this._left;
        this._height = this._bottom - this._top;
        r = null;
        return this._elem
    };
    e.jqplot.CanvasGridRenderer.prototype.draw = function() {
        function E(n, r, i, s, o) {
            t.save();
            o = o || {};
            if (o.lineWidth == null || o.lineWidth != 0) {
                e.extend(true, t, o);
                t.beginPath();
                t.moveTo(n, r);
                t.lineTo(i, s);
                t.stroke();
                t.restore()
            }
        }
        this._ctx = this._elem.get(0).getContext("2d");
        var t = this._ctx;
        var n = this._axes;
        t.save();
        t.clearRect(0, 0, this._plotDimensions.width, this._plotDimensions.height);
        t.fillStyle = this.backgroundColor || this.background;
        t.fillRect(this._left, this._top, this._width, this._height);
        t.save();
        t.lineJoin = "miter";
        t.lineCap = "butt";
        t.lineWidth = this.gridLineWidth;
        t.strokeStyle = this.gridLineColor;
        var r, i, s, o;
        var u = ["xaxis", "yaxis", "x2axis", "y2axis"];
        for (var a = 4; a > 0; a--) {
            var f = u[a - 1];
            var l = n[f];
            var c = l._ticks;
            var h = c.length;
            if (l.show) {
                if (l.drawBaseline) {
                    var p = {};
                    if (l.baselineWidth !== null) {
                        p.lineWidth = l.baselineWidth
                    }
                    if (l.baselineColor !== null) {
                        p.strokeStyle = l.baselineColor
                    }
                    switch (f) {
                        case"xaxis":
                            E(this._left, this._bottom, this._right, this._bottom, p);
                            break;
                        case"yaxis":
                            E(this._left, this._bottom, this._left, this._top, p);
                            break;
                        case"x2axis":
                            E(this._left, this._bottom, this._right, this._bottom, p);
                            break;
                        case"y2axis":
                            E(this._right, this._bottom, this._right, this._top, p);
                            break
                    }
                }
                for (var d = h; d > 0; d--) {
                    var v = c[d - 1];
                    if (v.show) {
                        var m = Math.round(l.u2p(v.value)) + .5;
                        switch (f) {
                            case"xaxis":
                                if (v.showGridline && this.drawGridlines && (!v.isMinorTick && l.drawMajorGridlines || v.isMinorTick && l.drawMinorGridlines)) {
                                    E(m, this._top, m, this._bottom)
                                }
                                if (v.showMark && v.mark && (!v.isMinorTick && l.drawMajorTickMarks || v.isMinorTick && l.drawMinorTickMarks)) {
                                    s = v.markSize;
                                    o = v.mark;
                                    var m = Math.round(l.u2p(v.value)) + .5;
                                    switch (o) {
                                        case"outside":
                                            r = this._bottom;
                                            i = this._bottom + s;
                                            break;
                                        case"inside":
                                            r = this._bottom - s;
                                            i = this._bottom;
                                            break;
                                        case"cross":
                                            r = this._bottom - s;
                                            i = this._bottom + s;
                                            break;
                                        default:
                                            r = this._bottom;
                                            i = this._bottom + s;
                                            break
                                    }
                                    if (this.shadow) {
                                        this.renderer.shadowRenderer.draw(t, [[m, r], [m, i]], {lineCap: "butt", lineWidth: this.gridLineWidth, offset: this.gridLineWidth * .75, depth: 2, fill: false, closePath: false})
                                    }
                                    E(m, r, m, i)
                                }
                                break;
                            case"yaxis":
                                if (v.showGridline && this.drawGridlines && (!v.isMinorTick && l.drawMajorGridlines || v.isMinorTick && l.drawMinorGridlines)) {
                                    E(this._right, m, this._left, m)
                                }
                                if (v.showMark && v.mark && (!v.isMinorTick && l.drawMajorTickMarks || v.isMinorTick && l.drawMinorTickMarks)) {
                                    s = v.markSize;
                                    o = v.mark;
                                    var m = Math.round(l.u2p(v.value)) + .5;
                                    switch (o) {
                                        case"outside":
                                            r = this._left - s;
                                            i = this._left;
                                            break;
                                        case"inside":
                                            r = this._left;
                                            i = this._left + s;
                                            break;
                                        case"cross":
                                            r = this._left - s;
                                            i = this._left + s;
                                            break;
                                        default:
                                            r = this._left - s;
                                            i = this._left;
                                            break
                                    }
                                    if (this.shadow) {
                                        this.renderer.shadowRenderer.draw(t, [[r, m], [i, m]], {lineCap: "butt", lineWidth: this.gridLineWidth * 1.5, offset: this.gridLineWidth * .75, fill: false, closePath: false})
                                    }
                                    E(r, m, i, m, {strokeStyle: l.borderColor})
                                }
                                break;
                            case"x2axis":
                                if (v.showGridline && this.drawGridlines && (!v.isMinorTick && l.drawMajorGridlines || v.isMinorTick && l.drawMinorGridlines)) {
                                    E(m, this._bottom, m, this._top)
                                }
                                if (v.showMark && v.mark && (!v.isMinorTick && l.drawMajorTickMarks || v.isMinorTick && l.drawMinorTickMarks)) {
                                    s = v.markSize;
                                    o = v.mark;
                                    var m = Math.round(l.u2p(v.value)) + .5;
                                    switch (o) {
                                        case"outside":
                                            r = this._top - s;
                                            i = this._top;
                                            break;
                                        case"inside":
                                            r = this._top;
                                            i = this._top + s;
                                            break;
                                        case"cross":
                                            r = this._top - s;
                                            i = this._top + s;
                                            break;
                                        default:
                                            r = this._top - s;
                                            i = this._top;
                                            break
                                    }
                                    if (this.shadow) {
                                        this.renderer.shadowRenderer.draw(t, [[m, r], [m, i]], {lineCap: "butt", lineWidth: this.gridLineWidth, offset: this.gridLineWidth * .75, depth: 2, fill: false, closePath: false})
                                    }
                                    E(m, r, m, i)
                                }
                                break;
                            case"y2axis":
                                if (v.showGridline && this.drawGridlines && (!v.isMinorTick && l.drawMajorGridlines || v.isMinorTick && l.drawMinorGridlines)) {
                                    E(this._left, m, this._right, m)
                                }
                                if (v.showMark && v.mark && (!v.isMinorTick && l.drawMajorTickMarks || v.isMinorTick && l.drawMinorTickMarks)) {
                                    s = v.markSize;
                                    o = v.mark;
                                    var m = Math.round(l.u2p(v.value)) + .5;
                                    switch (o) {
                                        case"outside":
                                            r = this._right;
                                            i = this._right + s;
                                            break;
                                        case"inside":
                                            r = this._right - s;
                                            i = this._right;
                                            break;
                                        case"cross":
                                            r = this._right - s;
                                            i = this._right + s;
                                            break;
                                        default:
                                            r = this._right;
                                            i = this._right + s;
                                            break
                                    }
                                    if (this.shadow) {
                                        this.renderer.shadowRenderer.draw(t, [[r, m], [i, m]], {lineCap: "butt", lineWidth: this.gridLineWidth * 1.5, offset: this.gridLineWidth * .75, fill: false, closePath: false})
                                    }
                                    E(r, m, i, m, {strokeStyle: l.borderColor})
                                }
                                break;
                            default:
                                break
                        }
                    }
                }
                v = null
            }
            l = null;
            c = null
        }
        u = ["y3axis", "y4axis", "y5axis", "y6axis", "y7axis", "y8axis", "y9axis", "yMidAxis"];
        for (var a = 7; a > 0; a--) {
            var l = n[u[a - 1]];
            var c = l._ticks;
            if (l.show) {
                var g = c[l.numberTicks - 1];
                var y = c[0];
                var b = l.getLeft();
                var w = [[b, g.getTop() + g.getHeight() / 2], [b, y.getTop() + y.getHeight() / 2 + 1]];
                if (this.shadow) {
                    this.renderer.shadowRenderer.draw(t, w, {lineCap: "butt", fill: false, closePath: false})
                }
                E(w[0][0], w[0][1], w[1][0], w[1][1], {lineCap: "butt", strokeStyle: l.borderColor, lineWidth: l.borderWidth});
                for (var d = c.length; d > 0; d--) {
                    var v = c[d - 1];
                    s = v.markSize;
                    o = v.mark;
                    var m = Math.round(l.u2p(v.value)) + .5;
                    if (v.showMark && v.mark) {
                        switch (o) {
                            case"outside":
                                r = b;
                                i = b + s;
                                break;
                            case"inside":
                                r = b - s;
                                i = b;
                                break;
                            case"cross":
                                r = b - s;
                                i = b + s;
                                break;
                            default:
                                r = b;
                                i = b + s;
                                break
                        }
                        w = [[r, m], [i, m]];
                        if (this.shadow) {
                            this.renderer.shadowRenderer.draw(t, w, {lineCap: "butt", lineWidth: this.gridLineWidth * 1.5, offset: this.gridLineWidth * .75, fill: false, closePath: false})
                        }
                        E(r, m, i, m, {strokeStyle: l.borderColor})
                    }
                    v = null
                }
                y = null
            }
            l = null;
            c = null
        }
        t.restore();
        if (this.shadow) {
            var w = [[this._left, this._bottom], [this._right, this._bottom], [this._right, this._top]];
            this.renderer.shadowRenderer.draw(t, w)
        }
        if (this.borderWidth != 0 && this.drawBorder) {
            E(this._left, this._top, this._right, this._top, {lineCap: "round", strokeStyle: n.x2axis.borderColor, lineWidth: n.x2axis.borderWidth});
            E(this._right, this._top, this._right, this._bottom, {lineCap: "round", strokeStyle: n.y2axis.borderColor, lineWidth: n.y2axis.borderWidth});
            E(this._right, this._bottom, this._left, this._bottom, {lineCap: "round", strokeStyle: n.xaxis.borderColor, lineWidth: n.xaxis.borderWidth});
            E(this._left, this._bottom, this._left, this._top, {lineCap: "round", strokeStyle: n.yaxis.borderColor, lineWidth: n.yaxis.borderWidth})
        }
        t.restore();
        t = null;
        n = null
    };
    e.jqplot.DivTitleRenderer = function() {
    };
    e.jqplot.DivTitleRenderer.prototype.init = function(t) {
        e.extend(true, this, t)
    };
    e.jqplot.DivTitleRenderer.prototype.draw = function() {
        if (this._elem) {
            this._elem.emptyForce();
            this._elem = null
        }
        var t = this.renderer;
        var n = document.createElement("div");
        this._elem = e(n);
        this._elem.addClass("jqplot-title");
        if (!this.text) {
            this.show = false;
            this._elem.height(0);
            this._elem.width(0)
        } else if (this.text) {
            var r;
            if (this.color) {
                r = this.color
            } else if (this.textColor) {
                r = this.textColor
            }
            var i = {position: "absolute", top: "0px", left: "0px"};
            if (this._plotWidth) {
                i["width"] = this._plotWidth + "px"
            }
            if (this.fontSize) {
                i["fontSize"] = this.fontSize
            }
            if (typeof this.textAlign === "string") {
                i["textAlign"] = this.textAlign
            } else {
                i["textAlign"] = "center"
            }
            if (r) {
                i["color"] = r
            }
            if (this.paddingBottom) {
                i["paddingBottom"] = this.paddingBottom
            }
            if (this.fontFamily) {
                i["fontFamily"] = this.fontFamily
            }
            this._elem.css(i);
            if (this.escapeHtml) {
                this._elem.text(this.text)
            } else {
                this._elem.html(this.text)
            }
        }
        n = null;
        return this._elem
    };
    e.jqplot.DivTitleRenderer.prototype.pack = function() {
    };
    var f = .1;
    e.jqplot.LinePattern = function(t, n) {
        var r = {dotted: [f, e.jqplot.config.dotGapLength], dashed: [e.jqplot.config.dashLength, e.jqplot.config.gapLength], solid: null};
        if (typeof n === "string") {
            if (n[0] === "." || n[0] === "-") {
                var i = n;
                n = [];
                for (var s = 0, o = i.length; s < o; s++) {
                    if (i[s] === ".") {
                        n.push(f)
                    } else if (i[s] === "-") {
                        n.push(e.jqplot.config.dashLength)
                    } else {
                        continue
                    }
                    n.push(e.jqplot.config.gapLength)
                }
            } else {
                n = r[n]
            }
        }
        if (!(n && n.length)) {
            return t
        }
        var u = 0;
        var a = n[0];
        var l = 0;
        var c = 0;
        var h = 0;
        var p = 0;
        var d = function(e, n) {
            t.moveTo(e, n);
            l = e;
            c = n;
            h = e;
            p = n
        };
        var v = function(e, r) {
            var i = t.lineWidth;
            var s = e - l;
            var o = r - c;
            var f = Math.sqrt(s * s + o * o);
            if (f > 0 && i > 0) {
                s /= f;
                o /= f;
                while (true) {
                    var h = i * a;
                    if (h < f) {
                        l += h * s;
                        c += h * o;
                        if ((u & 1) == 0) {
                            t.lineTo(l, c)
                        } else {
                            t.moveTo(l, c)
                        }
                        f -= h;
                        u++;
                        if (u >= n.length) {
                            u = 0
                        }
                        a = n[u]
                    } else {
                        l = e;
                        c = r;
                        if ((u & 1) == 0) {
                            t.lineTo(l, c)
                        } else {
                            t.moveTo(l, c)
                        }
                        a -= f / i;
                        break
                    }
                }
            }
        };
        var m = function() {
            t.beginPath()
        };
        var g = function() {
            v(h, p)
        };
        return{moveTo: d, lineTo: v, beginPath: m, closePath: g}
    };
    e.jqplot.LineRenderer = function() {
        this.shapeRenderer = new e.jqplot.ShapeRenderer;
        this.shadowRenderer = new e.jqplot.ShadowRenderer
    };
    e.jqplot.LineRenderer.prototype.init = function(t, n) {
        t = t || {};
        this._type = "line";
        this.renderer.animation = {show: false, direction: "left", speed: 2500, _supported: true};
        this.renderer.smooth = false;
        this.renderer.tension = null;
        this.renderer.constrainSmoothing = true;
        this.renderer._smoothedData = [];
        this.renderer._smoothedPlotData = [];
        this.renderer._hiBandGridData = [];
        this.renderer._lowBandGridData = [];
        this.renderer._hiBandSmoothedData = [];
        this.renderer._lowBandSmoothedData = [];
        this.renderer.bandData = [];
        this.renderer.bands = {show: false, hiData: [], lowData: [], color: this.color, showLines: false, fill: true, fillColor: null, _min: null, _max: null, interval: "3%"};
        var r = {highlightMouseOver: t.highlightMouseOver, highlightMouseDown: t.highlightMouseDown, highlightColor: t.highlightColor};
        delete t.highlightMouseOver;
        delete t.highlightMouseDown;
        delete t.highlightColor;
        e.extend(true, this.renderer, t);
        this.renderer.options = t;
        if (this.renderer.bandData.length > 1 && (!t.bands || t.bands.show == null)) {
            this.renderer.bands.show = true
        } else if (t.bands && t.bands.show == null && t.bands.interval != null) {
            this.renderer.bands.show = true
        }
        if (this.fill) {
            this.renderer.bands.show = false
        }
        if (this.renderer.bands.show) {
            this.renderer.initBands.call(this, this.renderer.options, n)
        }
        if (this._stack) {
            this.renderer.smooth = false
        }
        var i = {lineJoin: this.lineJoin, lineCap: this.lineCap, fill: this.fill, isarc: false, strokeStyle: this.color, fillStyle: this.fillColor, lineWidth: this.lineWidth, linePattern: this.linePattern, closePath: this.fill};
        this.renderer.shapeRenderer.init(i);
        var s = t.shadowOffset;
        if (s == null) {
            if (this.lineWidth > 2.5) {
                s = 1.25 * (1 + (Math.atan(this.lineWidth / 2.5) / .785398163 - 1) * .6)
            } else {
                s = 1.25 * Math.atan(this.lineWidth / 2.5) / .785398163
            }
        }
        var o = {lineJoin: this.lineJoin, lineCap: this.lineCap, fill: this.fill, isarc: false, angle: this.shadowAngle, offset: s, alpha: this.shadowAlpha, depth: this.shadowDepth, lineWidth: this.lineWidth, linePattern: this.linePattern, closePath: this.fill};
        this.renderer.shadowRenderer.init(o);
        this._areaPoints = [];
        this._boundingBox = [[], []];
        if (!this.isTrendline && this.fill || this.renderer.bands.show) {
            this.highlightMouseOver = true;
            this.highlightMouseDown = false;
            this.highlightColor = null;
            if (r.highlightMouseDown && r.highlightMouseOver == null) {
                r.highlightMouseOver = false
            }
            e.extend(true, this, {highlightMouseOver: r.highlightMouseOver, highlightMouseDown: r.highlightMouseDown, highlightColor: r.highlightColor});
            if (!this.highlightColor) {
                var u = this.renderer.bands.show ? this.renderer.bands.fillColor : this.fillColor;
                this.highlightColor = e.jqplot.computeHighlightColors(u)
            }
            if (this.highlighter) {
                this.highlighter.show = false
            }
        }
        if (!this.isTrendline && n) {
            n.plugins.lineRenderer = {};
            n.postInitHooks.addOnce(v);
            n.postDrawHooks.addOnce(m);
            n.eventListenerHooks.addOnce("jqplotMouseMove", b);
            n.eventListenerHooks.addOnce("jqplotMouseDown", w);
            n.eventListenerHooks.addOnce("jqplotMouseUp", E);
            n.eventListenerHooks.addOnce("jqplotClick", S);
            n.eventListenerHooks.addOnce("jqplotRightClick", x)
        }
    };
    e.jqplot.LineRenderer.prototype.initBands = function(t, n) {
        var r = t.bandData || [];
        var i = this.renderer.bands;
        i.hiData = [];
        i.lowData = [];
        var s = this.data;
        i._max = null;
        i._min = null;
        if (r.length == 2) {
            if (e.isArray(r[0][0])) {
                var o;
                var u = 0, a = 0;
                for (var f = 0, l = r[0].length; f < l; f++) {
                    o = r[0][f];
                    if (o[1] != null && o[1] > i._max || i._max == null) {
                        i._max = o[1]
                    }
                    if (o[1] != null && o[1] < i._min || i._min == null) {
                        i._min = o[1]
                    }
                }
                for (var f = 0, l = r[1].length; f < l; f++) {
                    o = r[1][f];
                    if (o[1] != null && o[1] > i._max || i._max == null) {
                        i._max = o[1];
                        a = 1
                    }
                    if (o[1] != null && o[1] < i._min || i._min == null) {
                        i._min = o[1];
                        u = 1
                    }
                }
                if (a === u) {
                    i.show = false
                }
                i.hiData = r[a];
                i.lowData = r[u]
            } else if (r[0].length === s.length && r[1].length === s.length) {
                var c = r[0][0] > r[1][0] ? 0 : 1;
                var h = c ? 0 : 1;
                for (var f = 0, l = s.length; f < l; f++) {
                    i.hiData.push([s[f][0], r[c][f]]);
                    i.lowData.push([s[f][0], r[h][f]])
                }
            } else {
                i.show = false
            }
        } else if (r.length > 2 && !e.isArray(r[0][0])) {
            var c = r[0][0] > r[0][1] ? 0 : 1;
            var h = c ? 0 : 1;
            for (var f = 0, l = r.length; f < l; f++) {
                i.hiData.push([s[f][0], r[f][c]]);
                i.lowData.push([s[f][0], r[f][h]])
            }
        } else {
            var p = i.interval;
            var d = null;
            var v = null;
            var m = null;
            var g = null;
            if (e.isArray(p)) {
                d = p[0];
                v = p[1]
            } else {
                d = p
            }
            if (isNaN(d)) {
                if (d.charAt(d.length - 1) === "%") {
                    m = "multiply";
                    d = parseFloat(d) / 100 + 1
                }
            } else {
                d = parseFloat(d);
                m = "add"
            }
            if (v !== null && isNaN(v)) {
                if (v.charAt(v.length - 1) === "%") {
                    g = "multiply";
                    v = parseFloat(v) / 100 + 1
                }
            } else if (v !== null) {
                v = parseFloat(v);
                g = "add"
            }
            if (d !== null) {
                if (v === null) {
                    v = -d;
                    g = m;
                    if (g === "multiply") {
                        v += 2
                    }
                }
                if (d < v) {
                    var y = d;
                    d = v;
                    v = y;
                    y = m;
                    m = g;
                    g = y
                }
                for (var f = 0, l = s.length; f < l; f++) {
                    switch (m) {
                        case"add":
                            i.hiData.push([s[f][0], s[f][1] + d]);
                            break;
                        case"multiply":
                            i.hiData.push([s[f][0], s[f][1] * d]);
                            break
                    }
                    switch (g) {
                        case"add":
                            i.lowData.push([s[f][0], s[f][1] + v]);
                            break;
                        case"multiply":
                            i.lowData.push([s[f][0], s[f][1] * v]);
                            break
                    }
                }
            } else {
                i.show = false
            }
        }
        var b = i.hiData;
        var w = i.lowData;
        for (var f = 0, l = b.length; f < l; f++) {
            if (b[f][1] != null && b[f][1] > i._max || i._max == null) {
                i._max = b[f][1]
            }
        }
        for (var f = 0, l = w.length; f < l; f++) {
            if (w[f][1] != null && w[f][1] < i._min || i._min == null) {
                i._min = w[f][1]
            }
        }
        if (i.fillColor === null) {
            var E = e.jqplot.getColorComponents(i.color);
            E[3] = E[3] * .5;
            i.fillColor = "rgba(" + E[0] + ", " + E[1] + ", " + E[2] + ", " + E[3] + ")"
        }
    };
    e.jqplot.LineRenderer.prototype.setGridData = function(e) {
        var t = this._xaxis.series_u2p;
        var n = this._yaxis.series_u2p;
        var r = this._plotData;
        var i = this._prevPlotData;
        this.gridData = [];
        this._prevGridData = [];
        this.renderer._smoothedData = [];
        this.renderer._smoothedPlotData = [];
        this.renderer._hiBandGridData = [];
        this.renderer._lowBandGridData = [];
        this.renderer._hiBandSmoothedData = [];
        this.renderer._lowBandSmoothedData = [];
        var s = this.renderer.bands;
        var o = false;
        for (var u = 0, a = r.length; u < a; u++) {
            if (r[u][0] != null && r[u][1] != null) {
                this.gridData.push([t.call(this._xaxis, r[u][0]), n.call(this._yaxis, r[u][1])])
            } else if (r[u][0] == null) {
                o = true;
                this.gridData.push([null, n.call(this._yaxis, r[u][1])])
            } else if (r[u][1] == null) {
                o = true;
                this.gridData.push([t.call(this._xaxis, r[u][0]), null])
            }
            if (i[u] != null && i[u][0] != null && i[u][1] != null) {
                this._prevGridData.push([t.call(this._xaxis, i[u][0]), n.call(this._yaxis, i[u][1])])
            } else if (i[u] != null && i[u][0] == null) {
                this._prevGridData.push([null, n.call(this._yaxis, i[u][1])])
            } else if (i[u] != null && i[u][0] != null && i[u][1] == null) {
                this._prevGridData.push([t.call(this._xaxis, i[u][0]), null])
            }
        }
        if (o) {
            this.renderer.smooth = false;
            if (this._type === "line") {
                s.show = false
            }
        }
        if (this._type === "line" && s.show) {
            for (var u = 0, a = s.hiData.length; u < a; u++) {
                this.renderer._hiBandGridData.push([t.call(this._xaxis, s.hiData[u][0]), n.call(this._yaxis, s.hiData[u][1])])
            }
            for (var u = 0, a = s.lowData.length; u < a; u++) {
                this.renderer._lowBandGridData.push([t.call(this._xaxis, s.lowData[u][0]), n.call(this._yaxis, s.lowData[u][1])])
            }
        }
        if (this._type === "line" && this.renderer.smooth && this.gridData.length > 2) {
            var f;
            if (this.renderer.constrainSmoothing) {
                f = p.call(this, this.gridData);
                this.renderer._smoothedData = f[0];
                this.renderer._smoothedPlotData = f[1];
                if (s.show) {
                    f = p.call(this, this.renderer._hiBandGridData);
                    this.renderer._hiBandSmoothedData = f[0];
                    f = p.call(this, this.renderer._lowBandGridData);
                    this.renderer._lowBandSmoothedData = f[0]
                }
                f = null
            } else {
                f = d.call(this, this.gridData);
                this.renderer._smoothedData = f[0];
                this.renderer._smoothedPlotData = f[1];
                if (s.show) {
                    f = d.call(this, this.renderer._hiBandGridData);
                    this.renderer._hiBandSmoothedData = f[0];
                    f = d.call(this, this.renderer._lowBandGridData);
                    this.renderer._lowBandSmoothedData = f[0]
                }
                f = null
            }
        }
    };
    e.jqplot.LineRenderer.prototype.makeGridData = function(e, t) {
        var n = this._xaxis.series_u2p;
        var r = this._yaxis.series_u2p;
        var i = [];
        var s = [];
        this.renderer._smoothedData = [];
        this.renderer._smoothedPlotData = [];
        this.renderer._hiBandGridData = [];
        this.renderer._lowBandGridData = [];
        this.renderer._hiBandSmoothedData = [];
        this.renderer._lowBandSmoothedData = [];
        var o = this.renderer.bands;
        var u = false;
        for (var a = 0; a < e.length; a++) {
            if (e[a][0] != null && e[a][1] != null) {
                i.push([n.call(this._xaxis, e[a][0]), r.call(this._yaxis, e[a][1])])
            } else if (e[a][0] == null) {
                u = true;
                i.push([null, r.call(this._yaxis, e[a][1])])
            } else if (e[a][1] == null) {
                u = true;
                i.push([n.call(this._xaxis, e[a][0]), null])
            }
        }
        if (u) {
            this.renderer.smooth = false;
            if (this._type === "line") {
                o.show = false
            }
        }
        if (this._type === "line" && o.show) {
            for (var a = 0, f = o.hiData.length; a < f; a++) {
                this.renderer._hiBandGridData.push([n.call(this._xaxis, o.hiData[a][0]), r.call(this._yaxis, o.hiData[a][1])])
            }
            for (var a = 0, f = o.lowData.length; a < f; a++) {
                this.renderer._lowBandGridData.push([n.call(this._xaxis, o.lowData[a][0]), r.call(this._yaxis, o.lowData[a][1])])
            }
        }
        if (this._type === "line" && this.renderer.smooth && i.length > 2) {
            var l;
            if (this.renderer.constrainSmoothing) {
                l = p.call(this, i);
                this.renderer._smoothedData = l[0];
                this.renderer._smoothedPlotData = l[1];
                if (o.show) {
                    l = p.call(this, this.renderer._hiBandGridData);
                    this.renderer._hiBandSmoothedData = l[0];
                    l = p.call(this, this.renderer._lowBandGridData);
                    this.renderer._lowBandSmoothedData = l[0]
                }
                l = null
            } else {
                l = d.call(this, i);
                this.renderer._smoothedData = l[0];
                this.renderer._smoothedPlotData = l[1];
                if (o.show) {
                    l = d.call(this, this.renderer._hiBandGridData);
                    this.renderer._hiBandSmoothedData = l[0];
                    l = d.call(this, this.renderer._lowBandGridData);
                    this.renderer._lowBandSmoothedData = l[0]
                }
                l = null
            }
        }
        return i
    };
    e.jqplot.LineRenderer.prototype.draw = function(n, r, i, s) {
        var o;
        var u = e.extend(true, {}, i);
        var a = u.shadow != t ? u.shadow : this.shadow;
        var f = u.showLine != t ? u.showLine : this.showLine;
        var l = u.fill != t ? u.fill : this.fill;
        var c = u.fillAndStroke != t ? u.fillAndStroke : this.fillAndStroke;
        var h, p, d, v;
        n.save();
        if (r.length) {
            if (f) {
                if (l) {
                    if (this.fillToZero) {
                        var m = this.negativeColor;
                        if (!this.useNegativeColors) {
                            m = u.fillStyle
                        }
                        var g = false;
                        var y = u.fillStyle;
                        if (c) {
                            var b = r.slice(0)
                        }
                        if (this.index == 0 || !this._stack) {
                            var w = [];
                            var E = this.renderer.smooth ? this.renderer._smoothedPlotData : this._plotData;
                            this._areaPoints = [];
                            var S = this._yaxis.series_u2p(this.fillToValue);
                            var x = this._xaxis.series_u2p(this.fillToValue);
                            u.closePath = true;
                            if (this.fillAxis == "y") {
                                w.push([r[0][0], S]);
                                this._areaPoints.push([r[0][0], S]);
                                for (var o = 0; o < r.length - 1; o++) {
                                    w.push(r[o]);
                                    this._areaPoints.push(r[o]);
                                    if (E[o][1] * E[o + 1][1] <= 0) {
                                        if (E[o][1] < 0) {
                                            g = true;
                                            u.fillStyle = m
                                        } else {
                                            g = false;
                                            u.fillStyle = y
                                        }
                                        var T = r[o][0] + (r[o + 1][0] - r[o][0]) * (S - r[o][1]) / (r[o + 1][1] - r[o][1]);
                                        w.push([T, S]);
                                        this._areaPoints.push([T, S]);
                                        if (a) {
                                            this.renderer.shadowRenderer.draw(n, w, u)
                                        }
                                        this.renderer.shapeRenderer.draw(n, w, u);
                                        w = [[T, S]]
                                    }
                                }
                                if (E[r.length - 1][1] < 0) {
                                    g = true;
                                    u.fillStyle = m
                                } else {
                                    g = false;
                                    u.fillStyle = y
                                }
                                w.push(r[r.length - 1]);
                                this._areaPoints.push(r[r.length - 1]);
                                w.push([r[r.length - 1][0], S]);
                                this._areaPoints.push([r[r.length - 1][0], S])
                            }
                            if (a) {
                                this.renderer.shadowRenderer.draw(n, w, u)
                            }
                            this.renderer.shapeRenderer.draw(n, w, u)
                        } else {
                            var N = this._prevGridData;
                            for (var o = N.length; o > 0; o--) {
                                r.push(N[o - 1])
                            }
                            if (a) {
                                this.renderer.shadowRenderer.draw(n, r, u)
                            }
                            this._areaPoints = r;
                            this.renderer.shapeRenderer.draw(n, r, u)
                        }
                    } else {
                        if (c) {
                            var b = r.slice(0)
                        }
                        if (this.index == 0 || !this._stack) {
                            var C = n.canvas.height;
                            r.unshift([r[0][0], C]);
                            var k = r.length;
                            r.push([r[k - 1][0], C])
                        } else {
                            var N = this._prevGridData;
                            for (var o = N.length; o > 0; o--) {
                                r.push(N[o - 1])
                            }
                        }
                        this._areaPoints = r;
                        if (a) {
                            this.renderer.shadowRenderer.draw(n, r, u)
                        }
                        this.renderer.shapeRenderer.draw(n, r, u)
                    }
                    if (c) {
                        var L = e.extend(true, {}, u, {fill: false, closePath: false});
                        this.renderer.shapeRenderer.draw(n, b, L);
                        if (this.markerRenderer.show) {
                            if (this.renderer.smooth) {
                                b = this.gridData
                            }
                            for (o = 0; o < b.length; o++) {
                                this.markerRenderer.draw(b[o][0], b[o][1], n, u.markerOptions)
                            }
                        }
                    }
                } else {
                    if (this.renderer.bands.show) {
                        var A;
                        var O = e.extend(true, {}, u);
                        if (this.renderer.bands.showLines) {
                            A = this.renderer.smooth ? this.renderer._hiBandSmoothedData : this.renderer._hiBandGridData;
                            this.renderer.shapeRenderer.draw(n, A, u);
                            A = this.renderer.smooth ? this.renderer._lowBandSmoothedData : this.renderer._lowBandGridData;
                            this.renderer.shapeRenderer.draw(n, A, O)
                        }
                        if (this.renderer.bands.fill) {
                            if (this.renderer.smooth) {
                                A = this.renderer._hiBandSmoothedData.concat(this.renderer._lowBandSmoothedData.reverse())
                            } else {
                                A = this.renderer._hiBandGridData.concat(this.renderer._lowBandGridData.reverse())
                            }
                            this._areaPoints = A;
                            O.closePath = true;
                            O.fill = true;
                            O.fillStyle = this.renderer.bands.fillColor;
                            this.renderer.shapeRenderer.draw(n, A, O)
                        }
                    }
                    if (a) {
                        this.renderer.shadowRenderer.draw(n, r, u)
                    }
                    this.renderer.shapeRenderer.draw(n, r, u)
                }
            }
            var h = d = p = v = null;
            for (o = 0; o < this._areaPoints.length; o++) {
                var M = this._areaPoints[o];
                if (h > M[0] || h == null) {
                    h = M[0]
                }
                if (v < M[1] || v == null) {
                    v = M[1]
                }
                if (d < M[0] || d == null) {
                    d = M[0]
                }
                if (p > M[1] || p == null) {
                    p = M[1]
                }
            }
            if (this.type === "line" && this.renderer.bands.show) {
                v = this._yaxis.series_u2p(this.renderer.bands._min);
                p = this._yaxis.series_u2p(this.renderer.bands._max)
            }
            this._boundingBox = [[h, v], [d, p]];
            if (this.markerRenderer.show && !l) {
                if (this.renderer.smooth) {
                    r = this.gridData
                }
                for (o = 0; o < r.length; o++) {
                    if (r[o][0] != null && r[o][1] != null) {
                        this.markerRenderer.draw(r[o][0], r[o][1], n, u.markerOptions)
                    }
                }
            }
        }
        n.restore()
    };
    e.jqplot.LineRenderer.prototype.drawShadow = function(e, t, n) {
    };
    e.jqplot.LinearAxisRenderer = function() {
    };
    e.jqplot.LinearAxisRenderer.prototype.init = function(t) {
        this.breakPoints = null;
        this.breakTickLabel = "&asymp;";
        this.drawBaseline = true;
        this.baselineWidth = null;
        this.baselineColor = null;
        this.forceTickAt0 = false;
        this.forceTickAt100 = false;
        this.tickInset = 0;
        this.minorTicks = 0;
        this.alignTicks = false;
        this._autoFormatString = "";
        this._overrideFormatString = false;
        this._scalefact = 1;
        e.extend(true, this, t);
        if (this.breakPoints) {
            if (!e.isArray(this.breakPoints)) {
                this.breakPoints = null
            } else if (this.breakPoints.length < 2 || this.breakPoints[1] <= this.breakPoints[0]) {
                this.breakPoints = null
            }
        }
        if (this.numberTicks != null && this.numberTicks < 2) {
            this.numberTicks = 2
        }
        this.resetDataBounds()
    };
    e.jqplot.LinearAxisRenderer.prototype.draw = function(t, n) {
        if (this.show) {
            this.renderer.createTicks.call(this, n);
            var r = 0;
            var i;
            if (this._elem) {
                this._elem.emptyForce();
                this._elem = null
            }
            this._elem = e(document.createElement("div"));
            this._elem.addClass("jqplot-axis jqplot-" + this.name);
            this._elem.css("position", "absolute");
            if (this.name == "xaxis" || this.name == "x2axis") {
                this._elem.width(this._plotDimensions.width)
            } else {
                this._elem.height(this._plotDimensions.height)
            }
            this.labelOptions.axis = this.name;
            this._label = new this.labelRenderer(this.labelOptions);
            if (this._label.show) {
                var s = this._label.draw(t, n);
                s.appendTo(this._elem);
                s = null
            }
            var o = this._ticks;
            var u;
            for (var a = 0; a < o.length; a++) {
                u = o[a];
                if (u.show && u.showLabel && (!u.isMinorTick || this.showMinorTicks)) {
                    this._elem.append(u.draw(t, n))
                }
            }
            u = null;
            o = null
        }
        return this._elem
    };
    e.jqplot.LinearAxisRenderer.prototype.reset = function() {
        this.min = this._options.min;
        this.max = this._options.max;
        this.tickInterval = this._options.tickInterval;
        this.numberTicks = this._options.numberTicks;
        this._autoFormatString = "";
        if (this._overrideFormatString && this.tickOptions && this.tickOptions.formatString) {
            this.tickOptions.formatString = ""
        }
    };
    e.jqplot.LinearAxisRenderer.prototype.set = function() {
        var t = 0;
        var n;
        var r = 0;
        var i = 0;
        var s = this._label == null ? false : this._label.show;
        if (this.show) {
            var o = this._ticks;
            var u;
            for (var a = 0; a < o.length; a++) {
                u = o[a];
                if (!u._breakTick && u.show && u.showLabel && (!u.isMinorTick || this.showMinorTicks)) {
                    if (this.name == "xaxis" || this.name == "x2axis") {
                        n = u._elem.outerHeight(true)
                    } else {
                        n = u._elem.outerWidth(true)
                    }
                    if (n > t) {
                        t = n
                    }
                }
            }
            u = null;
            o = null;
            if (s) {
                r = this._label._elem.outerWidth(true);
                i = this._label._elem.outerHeight(true)
            }
            if (this.name == "xaxis") {
                t = t + i;
                this._elem.css({height: t + "px", left: "0px", bottom: "0px"})
            } else if (this.name == "x2axis") {
                t = t + i;
                this._elem.css({height: t + "px", left: "0px", top: "0px"})
            } else if (this.name == "yaxis") {
                t = t + r;
                this._elem.css({width: t + "px", left: "0px", top: "0px"});
                if (s && this._label.constructor == e.jqplot.AxisLabelRenderer) {
                    this._label._elem.css("width", r + "px")
                }
            } else {
                t = t + r;
                this._elem.css({width: t + "px", right: "0px", top: "0px"});
                if (s && this._label.constructor == e.jqplot.AxisLabelRenderer) {
                    this._label._elem.css("width", r + "px")
                }
            }
        }
    };
    e.jqplot.LinearAxisRenderer.prototype.createTicks = function(t) {
        var n = this._ticks;
        var r = this.ticks;
        var i = this.name;
        var s = this._dataBounds;
        var o = this.name.charAt(0) === "x" ? this._plotDimensions.width : this._plotDimensions.height;
        var u;
        var a, f;
        var l, c;
        var h, p;
        var d = this.min;
        var v = this.max;
        var m = this.numberTicks;
        var g = this.tickInterval;
        var y = 30;
        this._scalefact = (Math.max(o, y + 1) - y) / 300;
        if (r.length) {
            for (p = 0; p < r.length; p++) {
                var b = r[p];
                var w = new this.tickRenderer(this.tickOptions);
                if (e.isArray(b)) {
                    w.value = b[0];
                    if (this.breakPoints) {
                        if (b[0] == this.breakPoints[0]) {
                            w.label = this.breakTickLabel;
                            w._breakTick = true;
                            w.showGridline = false;
                            w.showMark = false
                        } else if (b[0] > this.breakPoints[0] && b[0] <= this.breakPoints[1]) {
                            w.show = false;
                            w.showGridline = false;
                            w.label = b[1]
                        } else {
                            w.label = b[1]
                        }
                    } else {
                        w.label = b[1]
                    }
                    w.setTick(b[0], this.name);
                    this._ticks.push(w)
                } else if (e.isPlainObject(b)) {
                    e.extend(true, w, b);
                    w.axis = this.name;
                    this._ticks.push(w)
                } else {
                    w.value = b;
                    if (this.breakPoints) {
                        if (b == this.breakPoints[0]) {
                            w.label = this.breakTickLabel;
                            w._breakTick = true;
                            w.showGridline = false;
                            w.showMark = false
                        } else if (b > this.breakPoints[0] && b <= this.breakPoints[1]) {
                            w.show = false;
                            w.showGridline = false
                        }
                    }
                    w.setTick(b, this.name);
                    this._ticks.push(w)
                }
            }
            this.numberTicks = r.length;
            this.min = this._ticks[0].value;
            this.max = this._ticks[this.numberTicks - 1].value;
            this.tickInterval = (this.max - this.min) / (this.numberTicks - 1)
        } else {
            if (i == "xaxis" || i == "x2axis") {
                o = this._plotDimensions.width
            } else {
                o = this._plotDimensions.height
            }
            var E = this.numberTicks;
            if (this.alignTicks) {
                if (this.name === "x2axis" && t.axes.xaxis.show) {
                    E = t.axes.xaxis.numberTicks
                } else if (this.name.charAt(0) === "y" && this.name !== "yaxis" && this.name !== "yMidAxis" && t.axes.yaxis.show) {
                    E = t.axes.yaxis.numberTicks
                }
            }
            a = this.min != null ? this.min : s.min;
            f = this.max != null ? this.max : s.max;
            var S = f - a;
            var x, T;
            var N;
            if (this.tickOptions == null || !this.tickOptions.formatString) {
                this._overrideFormatString = true
            }
            if (this.min == null || this.max == null && this.tickInterval == null && !this.autoscale) {
                if (this.forceTickAt0) {
                    if (a > 0) {
                        a = 0
                    }
                    if (f < 0) {
                        f = 0
                    }
                }
                if (this.forceTickAt100) {
                    if (a > 100) {
                        a = 100
                    }
                    if (f < 100) {
                        f = 100
                    }
                }
                var C = false, k = false;
                if (this.min != null) {
                    C = true
                } else if (this.max != null) {
                    k = true
                }
                var L = e.jqplot.LinearTickGenerator(a, f, this._scalefact, E, C, k);
                var A = this.min != null ? a : a + S * (this.padMin - 1);
                var O = this.max != null ? f : f - S * (this.padMax - 1);
                if (a < A || f > O) {
                    A = this.min != null ? a : a - S * (this.padMin - 1);
                    O = this.max != null ? f : f + S * (this.padMax - 1);
                    L = e.jqplot.LinearTickGenerator(A, O, this._scalefact, E, C, k)
                }
                this.min = L[0];
                this.max = L[1];
                this.numberTicks = L[2];
                this._autoFormatString = L[3];
                this.tickInterval = L[4]
            } else {
                if (a == f) {
                    var M = .05;
                    if (a > 0) {
                        M = Math.max(Math.log(a) / Math.LN10, .05)
                    }
                    a -= M;
                    f += M
                }
                if (this.autoscale && this.min == null && this.max == null) {
                    var _, D, P;
                    var H = false;
                    var B = false;
                    var j = {min: null, max: null, average: null, stddev: null};
                    for (var p = 0; p < this._series.length; p++) {
                        var F = this._series[p];
                        var I = F.fillAxis == "x" ? F._xaxis.name : F._yaxis.name;
                        if (this.name == I) {
                            var q = F._plotValues[F.fillAxis];
                            var R = q[0];
                            var U = q[0];
                            for (var z = 1; z < q.length; z++) {
                                if (q[z] < R) {
                                    R = q[z]
                                } else if (q[z] > U) {
                                    U = q[z]
                                }
                            }
                            var W = (U - R) / U;
                            if (F.renderer.constructor == e.jqplot.BarRenderer) {
                                if (R >= 0 && (F.fillToZero || W > .1)) {
                                    H = true
                                } else {
                                    H = false;
                                    if (F.fill && F.fillToZero && R < 0 && U > 0) {
                                        B = true
                                    } else {
                                        B = false
                                    }
                                }
                            } else if (F.fill) {
                                if (R >= 0 && (F.fillToZero || W > .1)) {
                                    H = true
                                } else if (R < 0 && U > 0 && F.fillToZero) {
                                    H = false;
                                    B = true
                                } else {
                                    H = false;
                                    B = false
                                }
                            } else if (R < 0) {
                                H = false
                            }
                        }
                    }
                    if (H) {
                        this.numberTicks = 2 + Math.ceil((o - (this.tickSpacing - 1)) / this.tickSpacing);
                        this.min = 0;
                        d = 0;
                        D = f / (this.numberTicks - 1);
                        N = Math.pow(10, Math.abs(Math.floor(Math.log(D) / Math.LN10)));
                        if (D / N == parseInt(D / N, 10)) {
                            D += N
                        }
                        this.tickInterval = Math.ceil(D / N) * N;
                        this.max = this.tickInterval * (this.numberTicks - 1)
                    } else if (B) {
                        this.numberTicks = 2 + Math.ceil((o - (this.tickSpacing - 1)) / this.tickSpacing);
                        var X = Math.ceil(Math.abs(a) / S * (this.numberTicks - 1));
                        var V = this.numberTicks - 1 - X;
                        D = Math.max(Math.abs(a / X), Math.abs(f / V));
                        N = Math.pow(10, Math.abs(Math.floor(Math.log(D) / Math.LN10)));
                        this.tickInterval = Math.ceil(D / N) * N;
                        this.max = this.tickInterval * V;
                        this.min = -this.tickInterval * X
                    } else {
                        if (this.numberTicks == null) {
                            if (this.tickInterval) {
                                this.numberTicks = 3 + Math.ceil(S / this.tickInterval)
                            } else {
                                this.numberTicks = 2 + Math.ceil((o - (this.tickSpacing - 1)) / this.tickSpacing)
                            }
                        }
                        if (this.tickInterval == null) {
                            D = S / (this.numberTicks - 1);
                            if (D < 1) {
                                N = Math.pow(10, Math.abs(Math.floor(Math.log(D) / Math.LN10)))
                            } else {
                                N = 1
                            }
                            this.tickInterval = Math.ceil(D * N * this.pad) / N
                        } else {
                            N = 1 / this.tickInterval
                        }
                        _ = this.tickInterval * (this.numberTicks - 1);
                        P = (_ - S) / 2;
                        if (this.min == null) {
                            this.min = Math.floor(N * (a - P)) / N
                        }
                        if (this.max == null) {
                            this.max = this.min + _
                        }
                    }
                    var $ = e.jqplot.getSignificantFigures(this.tickInterval);
                    var J;
                    if ($.digitsLeft >= $.significantDigits) {
                        J = "%d"
                    } else {
                        var N = Math.max(0, 5 - $.digitsLeft);
                        N = Math.min(N, $.digitsRight);
                        J = "%." + N + "f"
                    }
                    this._autoFormatString = J
                } else {
                    x = this.min != null ? this.min : a - S * (this.padMin - 1);
                    T = this.max != null ? this.max : f + S * (this.padMax - 1);
                    S = T - x;
                    if (this.numberTicks == null) {
                        if (this.tickInterval != null) {
                            this.numberTicks = Math.ceil((T - x) / this.tickInterval) + 1
                        } else if (o > 100) {
                            this.numberTicks = parseInt(3 + (o - 100) / 75, 10)
                        } else {
                            this.numberTicks = 2
                        }
                    }
                    if (this.tickInterval == null) {
                        this.tickInterval = S / (this.numberTicks - 1)
                    }
                    if (this.max == null) {
                        T = x + this.tickInterval * (this.numberTicks - 1)
                    }
                    if (this.min == null) {
                        x = T - this.tickInterval * (this.numberTicks - 1)
                    }
                    var $ = e.jqplot.getSignificantFigures(this.tickInterval);
                    var J;
                    if ($.digitsLeft >= $.significantDigits) {
                        J = "%d"
                    } else {
                        var N = Math.max(0, 5 - $.digitsLeft);
                        N = Math.min(N, $.digitsRight);
                        J = "%." + N + "f"
                    }
                    this._autoFormatString = J;
                    this.min = x;
                    this.max = T
                }
                if (this.renderer.constructor == e.jqplot.LinearAxisRenderer && this._autoFormatString == "") {
                    S = this.max - this.min;
                    var K = new this.tickRenderer(this.tickOptions);
                    var Q = K.formatString || e.jqplot.config.defaultTickFormatString;
                    var Q = Q.match(e.jqplot.sprintf.regex)[0];
                    var G = 0;
                    if (Q) {
                        if (Q.search(/[fFeEgGpP]/) > -1) {
                            var Y = Q.match(/\%\.(\d{0,})?[eEfFgGpP]/);
                            if (Y) {
                                G = parseInt(Y[1], 10)
                            } else {
                                G = 6
                            }
                        } else if (Q.search(/[di]/) > -1) {
                            G = 0
                        }
                        var Z = Math.pow(10, -G);
                        if (this.tickInterval < Z) {
                            if (m == null && g == null) {
                                this.tickInterval = Z;
                                if (v == null && d == null) {
                                    this.min = Math.floor(this._dataBounds.min / Z) * Z;
                                    if (this.min == this._dataBounds.min) {
                                        this.min = this._dataBounds.min - this.tickInterval
                                    }
                                    this.max = Math.ceil(this._dataBounds.max / Z) * Z;
                                    if (this.max == this._dataBounds.max) {
                                        this.max = this._dataBounds.max + this.tickInterval
                                    }
                                    var et = (this.max - this.min) / this.tickInterval;
                                    et = et.toFixed(11);
                                    et = Math.ceil(et);
                                    this.numberTicks = et + 1
                                } else if (v == null) {
                                    var et = (this._dataBounds.max - this.min) / this.tickInterval;
                                    et = et.toFixed(11);
                                    this.numberTicks = Math.ceil(et) + 2;
                                    this.max = this.min + this.tickInterval * (this.numberTicks - 1)
                                } else if (d == null) {
                                    var et = (this.max - this._dataBounds.min) / this.tickInterval;
                                    et = et.toFixed(11);
                                    this.numberTicks = Math.ceil(et) + 2;
                                    this.min = this.max - this.tickInterval * (this.numberTicks - 1)
                                } else {
                                    this.numberTicks = Math.ceil((v - d) / this.tickInterval) + 1;
                                    this.min = Math.floor(d * Math.pow(10, G)) / Math.pow(10, G);
                                    this.max = Math.ceil(v * Math.pow(10, G)) / Math.pow(10, G);
                                    this.numberTicks = Math.ceil((this.max - this.min) / this.tickInterval) + 1
                                }
                            }
                        }
                    }
                }
            }
            if (this._overrideFormatString && this._autoFormatString != "") {
                this.tickOptions = this.tickOptions || {};
                this.tickOptions.formatString = this._autoFormatString
            }
            var w, tt;
            for (var p = 0; p < this.numberTicks; p++) {
                h = this.min + p * this.tickInterval;
                w = new this.tickRenderer(this.tickOptions);
                w.setTick(h, this.name);
                this._ticks.push(w);
                if (p < this.numberTicks - 1) {
                    for (var z = 0; z < this.minorTicks; z++) {
                        h += this.tickInterval / (this.minorTicks + 1);
                        tt = e.extend(true, {}, this.tickOptions, {name: this.name, value: h, label: "", isMinorTick: true});
                        w = new this.tickRenderer(tt);
                        this._ticks.push(w)
                    }
                }
                w = null
            }
        }
        if (this.tickInset) {
            this.min = this.min - this.tickInset * this.tickInterval;
            this.max = this.max + this.tickInset * this.tickInterval
        }
        n = null
    };
    e.jqplot.LinearAxisRenderer.prototype.resetTickValues = function(t) {
        if (e.isArray(t) && t.length == this._ticks.length) {
            var n;
            for (var r = 0; r < t.length; r++) {
                n = this._ticks[r];
                n.value = t[r];
                n.label = n.formatter(n.formatString, t[r]);
                n.label = n.prefix + n.label;
                n._elem.html(n.label)
            }
            n = null;
            this.min = e.jqplot.arrayMin(t);
            this.max = e.jqplot.arrayMax(t);
            this.pack()
        }
    };
    e.jqplot.LinearAxisRenderer.prototype.pack = function(t, n) {
        t = t || {};
        n = n || this._offsets;
        var r = this._ticks;
        var i = this.max;
        var s = this.min;
        var o = n.max;
        var u = n.min;
        var a = this._label == null ? false : this._label.show;
        for (var f in t) {
            this._elem.css(f, t[f])
        }
        this._offsets = n;
        var l = o - u;
        var c = i - s;
        if (this.breakPoints) {
            c = c - this.breakPoints[1] + this.breakPoints[0];
            this.p2u = function(e) {
                return(e - u) * c / l + s
            };
            this.u2p = function(e) {
                if (e > this.breakPoints[0] && e < this.breakPoints[1]) {
                    e = this.breakPoints[0]
                }
                if (e <= this.breakPoints[0]) {
                    return(e - s) * l / c + u
                } else {
                    return(e - this.breakPoints[1] + this.breakPoints[0] - s) * l / c + u
                }
            };
            if (this.name.charAt(0) == "x") {
                this.series_u2p = function(e) {
                    if (e > this.breakPoints[0] && e < this.breakPoints[1]) {
                        e = this.breakPoints[0]
                    }
                    if (e <= this.breakPoints[0]) {
                        return(e - s) * l / c
                    } else {
                        return(e - this.breakPoints[1] + this.breakPoints[0] - s) * l / c
                    }
                };
                this.series_p2u = function(e) {
                    return e * c / l + s
                }
            } else {
                this.series_u2p = function(e) {
                    if (e > this.breakPoints[0] && e < this.breakPoints[1]) {
                        e = this.breakPoints[0]
                    }
                    if (e >= this.breakPoints[1]) {
                        return(e - i) * l / c
                    } else {
                        return(e + this.breakPoints[1] - this.breakPoints[0] - i) * l / c
                    }
                };
                this.series_p2u = function(e) {
                    return e * c / l + i
                }
            }
        } else {
            this.p2u = function(e) {
                return(e - u) * c / l + s
            };
            this.u2p = function(e) {
                return(e - s) * l / c + u
            };
            if (this.name == "xaxis" || this.name == "x2axis") {
                this.series_u2p = function(e) {
                    return(e - s) * l / c
                };
                this.series_p2u = function(e) {
                    return e * c / l + s
                }
            } else {
                this.series_u2p = function(e) {
                    return(e - i) * l / c
                };
                this.series_p2u = function(e) {
                    return e * c / l + i
                }
            }
        }
        if (this.show) {
            if (this.name == "xaxis" || this.name == "x2axis") {
                for (var h = 0; h < r.length; h++) {
                    var p = r[h];
                    if (p.show && p.showLabel) {
                        var d;
                        if (p.constructor == e.jqplot.CanvasAxisTickRenderer && p.angle) {
                            var v = this.name == "xaxis" ? 1 : -1;
                            switch (p.labelPosition) {
                                case"auto":
                                    if (v * p.angle < 0) {
                                        d = -p.getWidth() + p._textRenderer.height * Math.sin(-p._textRenderer.angle) / 2
                                    } else {
                                        d = -p._textRenderer.height * Math.sin(p._textRenderer.angle) / 2
                                    }
                                    break;
                                case"end":
                                    d = -p.getWidth() + p._textRenderer.height * Math.sin(-p._textRenderer.angle) / 2;
                                    break;
                                case"start":
                                    d = -p._textRenderer.height * Math.sin(p._textRenderer.angle) / 2;
                                    break;
                                case"middle":
                                    d = -p.getWidth() / 2 + p._textRenderer.height * Math.sin(-p._textRenderer.angle) / 2;
                                    break;
                                default:
                                    d = -p.getWidth() / 2 + p._textRenderer.height * Math.sin(-p._textRenderer.angle) / 2;
                                    break
                            }
                        } else {
                            d = -p.getWidth() / 2
                        }
                        var m = this.u2p(p.value) + d + "px";
                        p._elem.css("left", m);
                        p.pack()
                    }
                }
                if (a) {
                    var g = this._label._elem.outerWidth(true);
                    this._label._elem.css("left", u + l / 2 - g / 2 + "px");
                    if (this.name == "xaxis") {
                        this._label._elem.css("bottom", "0px")
                    } else {
                        this._label._elem.css("top", "0px")
                    }
                    this._label.pack()
                }
            } else {
                for (var h = 0; h < r.length; h++) {
                    var p = r[h];
                    if (p.show && p.showLabel) {
                        var d;
                        if (p.constructor == e.jqplot.CanvasAxisTickRenderer && p.angle) {
                            var v = this.name == "yaxis" ? 1 : -1;
                            switch (p.labelPosition) {
                                case"auto":
                                case"end":
                                    if (v * p.angle < 0) {
                                        d = -p._textRenderer.height * Math.cos(-p._textRenderer.angle) / 2
                                    } else {
                                        d = -p.getHeight() + p._textRenderer.height * Math.cos(p._textRenderer.angle) / 2
                                    }
                                    break;
                                case"start":
                                    if (p.angle > 0) {
                                        d = -p._textRenderer.height * Math.cos(-p._textRenderer.angle) / 2
                                    } else {
                                        d = -p.getHeight() + p._textRenderer.height * Math.cos(p._textRenderer.angle) / 2
                                    }
                                    break;
                                case"middle":
                                    d = -p.getHeight() / 2;
                                    break;
                                default:
                                    d = -p.getHeight() / 2;
                                    break
                            }
                        } else {
                            d = -p.getHeight() / 2
                        }
                        var m = this.u2p(p.value) + d + "px";
                        p._elem.css("top", m);
                        p.pack()
                    }
                }
                if (a) {
                    var y = this._label._elem.outerHeight(true);
                    this._label._elem.css("top", o - l / 2 - y / 2 + "px");
                    if (this.name == "yaxis") {
                        this._label._elem.css("left", "0px")
                    } else {
                        this._label._elem.css("right", "0px")
                    }
                    this._label.pack()
                }
            }
        }
        r = null
    };
    var N = [.1, .2, .3, .4, .5, .8, 1, 2, 3, 4, 5];
    var C = function(e) {
        var t = N.indexOf(e);
        if (t > 0) {
            return N[t - 1]
        } else {
            return N[N.length - 1] / 100
        }
    };
    var k = function(e) {
        var t = N.indexOf(e);
        if (t < N.length - 1) {
            return N[t + 1]
        } else {
            return N[0] * 100
        }
    };
    e.jqplot.LinearTickGenerator = function(t, n, r, i, s, o) {
        s = s === null ? false : s;
        o = o === null || s ? false : o;
        if (t === n) {
            n = n ? 0 : 1
        }
        r = r || 1;
        if (n < t) {
            var u = n;
            n = t;
            t = u
        }
        var a = [];
        var f = O(n - t, r);
        var l = e.jqplot.getSignificantFigures;
        if (i == null) {
            if (!s && !o) {
                a[0] = Math.floor(t / f) * f;
                a[1] = Math.ceil(n / f) * f;
                a[2] = Math.round((a[1] - a[0]) / f + 1);
                a[3] = T(f);
                a[4] = f
            } else if (s) {
                a[0] = t;
                a[2] = Math.ceil((n - t) / f + 1);
                a[1] = t + (a[2] - 1) * f;
                var c = l(t).digitsRight;
                var h = l(f).digitsRight;
                if (c < h) {
                    a[3] = T(f)
                } else {
                    a[3] = "%." + c + "f"
                }
                a[4] = f
            } else if (o) {
                a[1] = n;
                a[2] = Math.ceil((n - t) / f + 1);
                a[0] = n - (a[2] - 1) * f;
                var p = l(n).digitsRight;
                var h = l(f).digitsRight;
                if (p < h) {
                    a[3] = T(f)
                } else {
                    a[3] = "%." + p + "f"
                }
                a[4] = f
            }
        } else {
            var d = [];
            d[0] = Math.floor(t / f) * f;
            d[1] = Math.ceil(n / f) * f;
            d[2] = Math.round((d[1] - d[0]) / f + 1);
            d[3] = T(f);
            d[4] = f;
            if (d[2] === i) {
                a = d
            } else {
                var v = A(d[1] - d[0], i);
                a[0] = d[0];
                a[2] = i;
                a[4] = v;
                a[3] = T(v);
                a[1] = a[0] + (a[2] - 1) * a[4]
            }
        }
        return a
    };
    e.jqplot.LinearTickGenerator.bestLinearInterval = O;
    e.jqplot.LinearTickGenerator.bestInterval = A;
    e.jqplot.LinearTickGenerator.bestLinearComponents = M;
    e.jqplot.LinearTickGenerator.bestConstrainedInterval = L;
    e.jqplot.MarkerRenderer = function(t) {
        this.show = true;
        this.style = "filledCircle";
        this.lineWidth = 2;
        this.size = 9;
        this.color = "#666666";
        this.shadow = true;
        this.shadowAngle = 45;
        this.shadowOffset = 1;
        this.shadowDepth = 3;
        this.shadowAlpha = "0.07";
        this.shadowRenderer = new e.jqplot.ShadowRenderer;
        this.shapeRenderer = new e.jqplot.ShapeRenderer;
        e.extend(true, this, t)
    };
    e.jqplot.MarkerRenderer.prototype.init = function(t) {
        e.extend(true, this, t);
        var n = {angle: this.shadowAngle, offset: this.shadowOffset, alpha: this.shadowAlpha, lineWidth: this.lineWidth, depth: this.shadowDepth, closePath: true};
        if (this.style.indexOf("filled") != -1) {
            n.fill = true
        }
        if (this.style.indexOf("ircle") != -1) {
            n.isarc = true;
            n.closePath = false
        }
        this.shadowRenderer.init(n);
        var r = {fill: false, isarc: false, strokeStyle: this.color, fillStyle: this.color, lineWidth: this.lineWidth, closePath: true};
        if (this.style.indexOf("filled") != -1) {
            r.fill = true
        }
        if (this.style.indexOf("ircle") != -1) {
            r.isarc = true;
            r.closePath = false
        }
        this.shapeRenderer.init(r)
    };
    e.jqplot.MarkerRenderer.prototype.drawDiamond = function(e, t, n, r, i) {
        var s = 1.2;
        var o = this.size / 2 / s;
        var u = this.size / 2 * s;
        var a = [[e - o, t], [e, t + u], [e + o, t], [e, t - u]];
        if (this.shadow) {
            this.shadowRenderer.draw(n, a)
        }
        this.shapeRenderer.draw(n, a, i)
    };
    e.jqplot.MarkerRenderer.prototype.drawPlus = function(t, n, r, i, s) {
        var o = 1;
        var u = this.size / 2 * o;
        var a = this.size / 2 * o;
        var f = [[t, n - a], [t, n + a]];
        var l = [[t + u, n], [t - u, n]];
        var c = e.extend(true, {}, this.options, {closePath: false});
        if (this.shadow) {
            this.shadowRenderer.draw(r, f, {closePath: false});
            this.shadowRenderer.draw(r, l, {closePath: false})
        }
        this.shapeRenderer.draw(r, f, c);
        this.shapeRenderer.draw(r, l, c)
    };
    e.jqplot.MarkerRenderer.prototype.drawX = function(t, n, r, i, s) {
        var o = 1;
        var u = this.size / 2 * o;
        var a = this.size / 2 * o;
        var f = e.extend(true, {}, this.options, {closePath: false});
        var l = [[t - u, n - a], [t + u, n + a]];
        var c = [[t - u, n + a], [t + u, n - a]];
        if (this.shadow) {
            this.shadowRenderer.draw(r, l, {closePath: false});
            this.shadowRenderer.draw(r, c, {closePath: false})
        }
        this.shapeRenderer.draw(r, l, f);
        this.shapeRenderer.draw(r, c, f)
    };
    e.jqplot.MarkerRenderer.prototype.drawDash = function(e, t, n, r, i) {
        var s = 1;
        var o = this.size / 2 * s;
        var u = this.size / 2 * s;
        var a = [[e - o, t], [e + o, t]];
        if (this.shadow) {
            this.shadowRenderer.draw(n, a)
        }
        this.shapeRenderer.draw(n, a, i)
    };
    e.jqplot.MarkerRenderer.prototype.drawLine = function(e, t, n, r, i) {
        var s = [e, t];
        if (this.shadow) {
            this.shadowRenderer.draw(n, s)
        }
        this.shapeRenderer.draw(n, s, i)
    };
    e.jqplot.MarkerRenderer.prototype.drawSquare = function(e, t, n, r, i) {
        var s = 1;
        var o = this.size / 2 / s;
        var u = this.size / 2 * s;
        var a = [[e - o, t - u], [e - o, t + u], [e + o, t + u], [e + o, t - u]];
        if (this.shadow) {
            this.shadowRenderer.draw(n, a)
        }
        this.shapeRenderer.draw(n, a, i)
    };
    e.jqplot.MarkerRenderer.prototype.drawCircle = function(e, t, n, r, i) {
        var s = this.size / 2;
        var o = 2 * Math.PI;
        var u = [e, t, s, 0, o, true];
        if (this.shadow) {
            this.shadowRenderer.draw(n, u)
        }
        this.shapeRenderer.draw(n, u, i)
    };
    e.jqplot.MarkerRenderer.prototype.draw = function(e, t, n, r) {
        r = r || {};
        if (r.show == null || r.show != false) {
            if (r.color && !r.fillStyle) {
                r.fillStyle = r.color
            }
            if (r.color && !r.strokeStyle) {
                r.strokeStyle = r.color
            }
            switch (this.style) {
                case"diamond":
                    this.drawDiamond(e, t, n, false, r);
                    break;
                case"filledDiamond":
                    this.drawDiamond(e, t, n, true, r);
                    break;
                case"circle":
                    this.drawCircle(e, t, n, false, r);
                    break;
                case"filledCircle":
                    this.drawCircle(e, t, n, true, r);
                    break;
                case"square":
                    this.drawSquare(e, t, n, false, r);
                    break;
                case"filledSquare":
                    this.drawSquare(e, t, n, true, r);
                    break;
                case"x":
                    this.drawX(e, t, n, true, r);
                    break;
                case"plus":
                    this.drawPlus(e, t, n, true, r);
                    break;
                case"dash":
                    this.drawDash(e, t, n, true, r);
                    break;
                case"line":
                    this.drawLine(e, t, n, false, r);
                    break;
                default:
                    this.drawDiamond(e, t, n, false, r);
                    break
            }
        }
    };
    e.jqplot.ShadowRenderer = function(t) {
        this.angle = 45;
        this.offset = 1;
        this.alpha = .07;
        this.lineWidth = 1.5;
        this.lineJoin = "miter";
        this.lineCap = "round";
        this.closePath = false;
        this.fill = false;
        this.depth = 3;
        this.strokeStyle = "rgba(0,0,0,0.1)";
        this.isarc = false;
        e.extend(true, this, t)
    };
    e.jqplot.ShadowRenderer.prototype.init = function(t) {
        e.extend(true, this, t)
    };
    e.jqplot.ShadowRenderer.prototype.draw = function(t, n, r) {
        t.save();
        var i = r != null ? r : {};
        var s = i.fill != null ? i.fill : this.fill;
        var o = i.fillRect != null ? i.fillRect : this.fillRect;
        var u = i.closePath != null ? i.closePath : this.closePath;
        var a = i.offset != null ? i.offset : this.offset;
        var f = i.alpha != null ? i.alpha : this.alpha;
        var l = i.depth != null ? i.depth : this.depth;
        var c = i.isarc != null ? i.isarc : this.isarc;
        var h = i.linePattern != null ? i.linePattern : this.linePattern;
        t.lineWidth = i.lineWidth != null ? i.lineWidth : this.lineWidth;
        t.lineJoin = i.lineJoin != null ? i.lineJoin : this.lineJoin;
        t.lineCap = i.lineCap != null ? i.lineCap : this.lineCap;
        t.strokeStyle = i.strokeStyle || this.strokeStyle || "rgba(0,0,0," + f + ")";
        t.fillStyle = i.fillStyle || this.fillStyle || "rgba(0,0,0," + f + ")";
        for (var p = 0; p < l; p++) {
            var d = e.jqplot.LinePattern(t, h);
            t.translate(Math.cos(this.angle * Math.PI / 180) * a, Math.sin(this.angle * Math.PI / 180) * a);
            d.beginPath();
            if (c) {
                t.arc(n[0], n[1], n[2], n[3], n[4], true)
            } else if (o) {
                if (o) {
                    t.fillRect(n[0], n[1], n[2], n[3])
                }
            } else if (n && n.length) {
                var v = true;
                for (var m = 0; m < n.length; m++) {
                    if (n[m][0] != null && n[m][1] != null) {
                        if (v) {
                            d.moveTo(n[m][0], n[m][1]);
                            v = false
                        } else {
                            d.lineTo(n[m][0], n[m][1])
                        }
                    } else {
                        v = true
                    }
                }
            }
            if (u) {
                d.closePath()
            }
            if (s) {
                t.fill()
            } else {
                t.stroke()
            }
        }
        t.restore()
    };
    e.jqplot.ShapeRenderer = function(t) {
        this.lineWidth = 1.5;
        this.linePattern = "solid";
        this.lineJoin = "miter";
        this.lineCap = "round";
        this.closePath = false;
        this.fill = false;
        this.isarc = false;
        this.fillRect = false;
        this.strokeRect = false;
        this.clearRect = false;
        this.strokeStyle = "#999999";
        this.fillStyle = "#999999";
        e.extend(true, this, t)
    };
    e.jqplot.ShapeRenderer.prototype.init = function(t) {
        e.extend(true, this, t)
    };
    e.jqplot.ShapeRenderer.prototype.draw = function(t, n, r) {
        t.save();
        var i = r != null ? r : {};
        var s = i.fill != null ? i.fill : this.fill;
        var o = i.closePath != null ? i.closePath : this.closePath;
        var u = i.fillRect != null ? i.fillRect : this.fillRect;
        var a = i.strokeRect != null ? i.strokeRect : this.strokeRect;
        var f = i.clearRect != null ? i.clearRect : this.clearRect;
        var l = i.isarc != null ? i.isarc : this.isarc;
        var c = i.linePattern != null ? i.linePattern : this.linePattern;
        var h = e.jqplot.LinePattern(t, c);
        t.lineWidth = i.lineWidth || this.lineWidth;
        t.lineJoin = i.lineJoin || this.lineJoin;
        t.lineCap = i.lineCap || this.lineCap;
        t.strokeStyle = i.strokeStyle || i.color || this.strokeStyle;
        t.fillStyle = i.fillStyle || this.fillStyle;
        t.beginPath();
        if (l) {
            t.arc(n[0], n[1], n[2], n[3], n[4], true);
            if (o) {
                t.closePath()
            }
            if (s) {
                t.fill()
            } else {
                t.stroke()
            }
            t.restore();
            return
        } else if (f) {
            t.clearRect(n[0], n[1], n[2], n[3]);
            t.restore();
            return
        } else if (u || a) {
            if (u) {
                t.fillRect(n[0], n[1], n[2], n[3])
            }
            if (a) {
                t.strokeRect(n[0], n[1], n[2], n[3]);
                t.restore();
                return
            }
        } else if (n && n.length) {
            var p = true;
            for (var d = 0; d < n.length; d++) {
                if (n[d][0] != null && n[d][1] != null) {
                    if (p) {
                        h.moveTo(n[d][0], n[d][1]);
                        p = false
                    } else {
                        h.lineTo(n[d][0], n[d][1])
                    }
                } else {
                    p = true
                }
            }
            if (o) {
                h.closePath()
            }
            if (s) {
                t.fill()
            } else {
                t.stroke()
            }
        }
        t.restore()
    };
    e.jqplot.TableLegendRenderer = function() {
    };
    e.jqplot.TableLegendRenderer.prototype.init = function(t) {
        e.extend(true, this, t)
    };
    e.jqplot.TableLegendRenderer.prototype.addrow = function(t, n, r, i) {
        var s = r ? this.rowSpacing + "px" : "0px";
        var o;
        var u;
        var a;
        var f;
        var l;
        a = document.createElement("tr");
        o = e(a);
        o.addClass("jqplot-table-legend");
        a = null;
        if (i) {
            o.prependTo(this._elem)
        } else {
            o.appendTo(this._elem)
        }
        if (this.showSwatches) {
            u = e(document.createElement("td"));
            u.addClass("jqplot-table-legend jqplot-table-legend-swatch");
            u.css({textAlign: "center", paddingTop: s});
            f = e(document.createElement("div"));
            f.addClass("jqplot-table-legend-swatch-outline");
            l = e(document.createElement("div"));
            l.addClass("jqplot-table-legend-swatch");
            l.css({backgroundColor: n, borderColor: n});
            o.append(u.append(f.append(l)))
        }
        if (this.showLabels) {
            u = e(document.createElement("td"));
            u.addClass("jqplot-table-legend jqplot-table-legend-label");
            u.css("paddingTop", s);
            o.append(u);
            if (this.escapeHtml) {
                u.text(t)
            } else {
                u.html(t)
            }
        }
        u = null;
        f = null;
        l = null;
        o = null;
        a = null
    };
    e.jqplot.TableLegendRenderer.prototype.draw = function() {
        if (this._elem) {
            this._elem.emptyForce();
            this._elem = null
        }
        if (this.show) {
            var t = this._series;
            var n = document.createElement("table");
            this._elem = e(n);
            this._elem.addClass("jqplot-table-legend");
            var r = {position: "absolute"};
            if (this.background) {
                r["background"] = this.background
            }
            if (this.border) {
                r["border"] = this.border
            }
            if (this.fontSize) {
                r["fontSize"] = this.fontSize
            }
            if (this.fontFamily) {
                r["fontFamily"] = this.fontFamily
            }
            if (this.textColor) {
                r["textColor"] = this.textColor
            }
            if (this.marginTop != null) {
                r["marginTop"] = this.marginTop
            }
            if (this.marginBottom != null) {
                r["marginBottom"] = this.marginBottom
            }
            if (this.marginLeft != null) {
                r["marginLeft"] = this.marginLeft
            }
            if (this.marginRight != null) {
                r["marginRight"] = this.marginRight
            }
            var i = false, s = false, o;
            for (var u = 0; u < t.length; u++) {
                o = t[u];
                if (o._stack || o.renderer.constructor == e.jqplot.BezierCurveRenderer) {
                    s = true
                }
                if (o.show && o.showLabel) {
                    var a = this.labels[u] || o.label.toString();
                    if (a) {
                        var f = o.color;
                        if (s && u < t.length - 1) {
                            i = true
                        } else if (s && u == t.length - 1) {
                            i = false
                        }
                        this.renderer.addrow.call(this, a, f, i, s);
                        i = true
                    }
                    for (var l = 0; l < e.jqplot.addLegendRowHooks.length; l++) {
                        var c = e.jqplot.addLegendRowHooks[l].call(this, o);
                        if (c) {
                            this.renderer.addrow.call(this, c.label, c.color, i);
                            i = true
                        }
                    }
                    a = null
                }
            }
        }
        return this._elem
    };
    e.jqplot.TableLegendRenderer.prototype.pack = function(e) {
        if (this.show) {
            if (this.placement == "insideGrid") {
                switch (this.location) {
                    case"nw":
                        var t = e.left;
                        var n = e.top;
                        this._elem.css("left", t);
                        this._elem.css("top", n);
                        break;
                    case"n":
                        var t = (e.left + (this._plotDimensions.width - e.right)) / 2 - this.getWidth() / 2;
                        var n = e.top;
                        this._elem.css("left", t);
                        this._elem.css("top", n);
                        break;
                    case"ne":
                        var t = e.right;
                        var n = e.top;
                        this._elem.css({right: t, top: n});
                        break;
                    case"e":
                        var t = e.right;
                        var n = (e.top + (this._plotDimensions.height - e.bottom)) / 2 - this.getHeight() / 2;
                        this._elem.css({right: t, top: n});
                        break;
                    case"se":
                        var t = e.right;
                        var n = e.bottom;
                        this._elem.css({right: t, bottom: n});
                        break;
                    case"s":
                        var t = (e.left + (this._plotDimensions.width - e.right)) / 2 - this.getWidth() / 2;
                        var n = e.bottom;
                        this._elem.css({left: t, bottom: n});
                        break;
                    case"sw":
                        var t = e.left;
                        var n = e.bottom;
                        this._elem.css({left: t, bottom: n});
                        break;
                    case"w":
                        var t = e.left;
                        var n = (e.top + (this._plotDimensions.height - e.bottom)) / 2 - this.getHeight() / 2;
                        this._elem.css({left: t, top: n});
                        break;
                    default:
                        var t = e.right;
                        var n = e.bottom;
                        this._elem.css({right: t, bottom: n});
                        break
                }
            } else if (this.placement == "outside") {
                switch (this.location) {
                    case"nw":
                        var t = this._plotDimensions.width - e.left;
                        var n = e.top;
                        this._elem.css("right", t);
                        this._elem.css("top", n);
                        break;
                    case"n":
                        var t = (e.left + (this._plotDimensions.width - e.right)) / 2 - this.getWidth() / 2;
                        var n = this._plotDimensions.height - e.top;
                        this._elem.css("left", t);
                        this._elem.css("bottom", n);
                        break;
                    case"ne":
                        var t = this._plotDimensions.width - e.right;
                        var n = e.top;
                        this._elem.css({left: t, top: n});
                        break;
                    case"e":
                        var t = this._plotDimensions.width - e.right;
                        var n = (e.top + (this._plotDimensions.height - e.bottom)) / 2 - this.getHeight() / 2;
                        this._elem.css({left: t, top: n});
                        break;
                    case"se":
                        var t = this._plotDimensions.width - e.right;
                        var n = e.bottom;
                        this._elem.css({left: t, bottom: n});
                        break;
                    case"s":
                        var t = (e.left + (this._plotDimensions.width - e.right)) / 2 - this.getWidth() / 2;
                        var n = this._plotDimensions.height - e.bottom;
                        this._elem.css({left: t, top: n});
                        break;
                    case"sw":
                        var t = this._plotDimensions.width - e.left;
                        var n = e.bottom;
                        this._elem.css({right: t, bottom: n});
                        break;
                    case"w":
                        var t = this._plotDimensions.width - e.left;
                        var n = (e.top + (this._plotDimensions.height - e.bottom)) / 2 - this.getHeight() / 2;
                        this._elem.css({right: t, top: n});
                        break;
                    default:
                        var t = e.right;
                        var n = e.bottom;
                        this._elem.css({right: t, bottom: n});
                        break
                }
            } else {
                switch (this.location) {
                    case"nw":
                        this._elem.css({left: 0, top: e.top});
                        break;
                    case"n":
                        var t = (e.left + (this._plotDimensions.width - e.right)) / 2 - this.getWidth() / 2;
                        this._elem.css({left: t, top: e.top});
                        break;
                    case"ne":
                        this._elem.css({right: 0, top: e.top});
                        break;
                    case"e":
                        var n = (e.top + (this._plotDimensions.height - e.bottom)) / 2 - this.getHeight() / 2;
                        this._elem.css({right: e.right, top: n});
                        break;
                    case"se":
                        this._elem.css({right: e.right, bottom: e.bottom});
                        break;
                    case"s":
                        var t = (e.left + (this._plotDimensions.width - e.right)) / 2 - this.getWidth() / 2;
                        this._elem.css({left: t, bottom: e.bottom});
                        break;
                    case"sw":
                        this._elem.css({left: e.left, bottom: e.bottom});
                        break;
                    case"w":
                        var n = (e.top + (this._plotDimensions.height - e.bottom)) / 2 - this.getHeight() / 2;
                        this._elem.css({left: e.left, top: n});
                        break;
                    default:
                        this._elem.css({right: e.right, bottom: e.bottom});
                        break
                }
            }
        }
    };
    e.jqplot.ThemeEngine = function() {
        this.themes = {};
        this.activeTheme = null
    };
    e.jqplot.ThemeEngine.prototype.init = function() {
        var t = new e.jqplot.Theme({_name: "Default"});
        var n, r, i;
        for (n in t.target) {
            if (n == "textColor") {
                t.target[n] = this.target.css("color")
            } else {
                t.target[n] = this.target.css(n)
            }
        }
        if (this.title.show && this.title._elem) {
            for (n in t.title) {
                if (n == "textColor") {
                    t.title[n] = this.title._elem.css("color")
                } else {
                    t.title[n] = this.title._elem.css(n)
                }
            }
        }
        for (n in t.grid) {
            t.grid[n] = this.grid[n]
        }
        if (t.grid.backgroundColor == null && this.grid.background != null) {
            t.grid.backgroundColor = this.grid.background
        }
        if (this.legend.show && this.legend._elem) {
            for (n in t.legend) {
                if (n == "textColor") {
                    t.legend[n] = this.legend._elem.css("color")
                } else {
                    t.legend[n] = this.legend._elem.css(n)
                }
            }
        }
        var s;
        for (r = 0; r < this.series.length; r++) {
            s = this.series[r];
            if (s.renderer.constructor == e.jqplot.LineRenderer) {
                t.series.push(new F)
            } else if (s.renderer.constructor == e.jqplot.BarRenderer) {
                t.series.push(new q)
            } else if (s.renderer.constructor == e.jqplot.PieRenderer) {
                t.series.push(new R)
            } else if (s.renderer.constructor == e.jqplot.DonutRenderer) {
                t.series.push(new U)
            } else if (s.renderer.constructor == e.jqplot.FunnelRenderer) {
                t.series.push(new z)
            } else if (s.renderer.constructor == e.jqplot.MeterGaugeRenderer) {
                t.series.push(new W)
            } else {
                t.series.push({})
            }
            for (n in t.series[r]) {
                t.series[r][n] = s[n]
            }
        }
        var o, u;
        for (n in this.axes) {
            u = this.axes[n];
            o = t.axes[n] = new H;
            o.borderColor = u.borderColor;
            o.borderWidth = u.borderWidth;
            if (u._ticks && u._ticks[0]) {
                for (i in o.ticks) {
                    if (u._ticks[0].hasOwnProperty(i)) {
                        o.ticks[i] = u._ticks[0][i]
                    } else if (u._ticks[0]._elem) {
                        o.ticks[i] = u._ticks[0]._elem.css(i)
                    }
                }
            }
            if (u._label && u._label.show) {
                for (i in o.label) {
                    if (u._label[i]) {
                        o.label[i] = u._label[i]
                    } else if (u._label._elem) {
                        if (i == "textColor") {
                            o.label[i] = u._label._elem.css("color")
                        } else {
                            o.label[i] = u._label._elem.css(i)
                        }
                    }
                }
            }
        }
        this.themeEngine._add(t);
        this.themeEngine.activeTheme = this.themeEngine.themes[t._name]
    };
    e.jqplot.ThemeEngine.prototype.get = function(e) {
        if (!e) {
            return this.activeTheme
        } else {
            return this.themes[e]
        }
    };
    e.jqplot.ThemeEngine.prototype.getThemeNames = function() {
        var e = [];
        for (var t in this.themes) {
            e.push(t)
        }
        return e.sort(_)
    };
    e.jqplot.ThemeEngine.prototype.getThemes = function() {
        var e = [];
        var t = [];
        for (var n in this.themes) {
            e.push(n)
        }
        e.sort(_);
        for (var r = 0; r < e.length; r++) {
            t.push(this.themes[e[r]])
        }
        return t
    };
    e.jqplot.ThemeEngine.prototype.activate = function(t, n) {
        var r = false;
        if (!n && this.activeTheme && this.activeTheme._name) {
            n = this.activeTheme._name
        }
        if (!this.themes.hasOwnProperty(n)) {
            throw new Error("No theme of that name")
        } else {
            var i = this.themes[n];
            this.activeTheme = i;
            var s, o = false, u = false;
            var a = ["xaxis", "x2axis", "yaxis", "y2axis"];
            for (g = 0; g < a.length; g++) {
                var f = a[g];
                if (i.axesStyles.borderColor != null) {
                    t.axes[f].borderColor = i.axesStyles.borderColor
                }
                if (i.axesStyles.borderWidth != null) {
                    t.axes[f].borderWidth = i.axesStyles.borderWidth
                }
            }
            for (var l in t.axes) {
                var c = t.axes[l];
                if (c.show) {
                    var h = i.axes[l] || {};
                    var p = i.axesStyles;
                    var d = e.jqplot.extend(true, {}, h, p);
                    s = i.axesStyles.borderColor != null ? i.axesStyles.borderColor : d.borderColor;
                    if (d.borderColor != null) {
                        c.borderColor = d.borderColor;
                        r = true
                    }
                    s = i.axesStyles.borderWidth != null ? i.axesStyles.borderWidth : d.borderWidth;
                    if (d.borderWidth != null) {
                        c.borderWidth = d.borderWidth;
                        r = true
                    }
                    if (c._ticks && c._ticks[0]) {
                        for (var v in d.ticks) {
                            s = d.ticks[v];
                            if (s != null) {
                                c.tickOptions[v] = s;
                                c._ticks = [];
                                r = true
                            }
                        }
                    }
                    if (c._label && c._label.show) {
                        for (var v in d.label) {
                            s = d.label[v];
                            if (s != null) {
                                c.labelOptions[v] = s;
                                r = true
                            }
                        }
                    }
                }
            }
            for (var m in i.grid) {
                if (i.grid[m] != null) {
                    t.grid[m] = i.grid[m]
                }
            }
            if (!r) {
                t.grid.draw()
            }
            if (t.legend.show) {
                for (m in i.legend) {
                    if (i.legend[m] != null) {
                        t.legend[m] = i.legend[m]
                    }
                }
            }
            if (t.title.show) {
                for (m in i.title) {
                    if (i.title[m] != null) {
                        t.title[m] = i.title[m]
                    }
                }
            }
            var g;
            for (g = 0; g < i.series.length; g++) {
                var y = {};
                var b = false;
                for (m in i.series[g]) {
                    s = i.seriesStyles[m] != null ? i.seriesStyles[m] : i.series[g][m];
                    if (s != null) {
                        y[m] = s;
                        if (m == "color") {
                            t.series[g].renderer.shapeRenderer.fillStyle = s;
                            t.series[g].renderer.shapeRenderer.strokeStyle = s;
                            t.series[g][m] = s
                        } else if (m == "lineWidth" || m == "linePattern") {
                            t.series[g].renderer.shapeRenderer[m] = s;
                            t.series[g][m] = s
                        } else if (m == "markerOptions") {
                            P(t.series[g].markerOptions, s);
                            P(t.series[g].markerRenderer, s)
                        } else {
                            t.series[g][m] = s
                        }
                        r = true
                    }
                }
            }
            if (r) {
                t.target.empty();
                t.draw()
            }
            for (m in i.target) {
                if (i.target[m] != null) {
                    t.target.css(m, i.target[m])
                }
            }
        }
    };
    e.jqplot.ThemeEngine.prototype._add = function(e, t) {
        if (t) {
            e._name = t
        }
        if (!e._name) {
            e._name = Date.parse(new Date)
        }
        if (!this.themes.hasOwnProperty(e._name)) {
            this.themes[e._name] = e
        } else {
            throw new Error("jqplot.ThemeEngine Error: Theme already in use")
        }
    };
    e.jqplot.ThemeEngine.prototype.remove = function(e) {
        if (e == "Default") {
            return false
        }
        return delete this.themes[e]
    };
    e.jqplot.ThemeEngine.prototype.newTheme = function(t, n) {
        if (typeof t == "object") {
            n = n || t;
            t = null
        }
        if (n && n._name) {
            t = n._name
        } else {
            t = t || Date.parse(new Date)
        }
        var r = this.copy(this.themes["Default"]._name, t);
        e.jqplot.extend(r, n);
        return r
    };
    e.jqplot.clone = D;
    e.jqplot.merge = P;
    e.jqplot.extend = function() {
        var n = arguments[0] || {}, r = 1, i = arguments.length, s = false, o;
        if (typeof n === "boolean") {
            s = n;
            n = arguments[1] || {};
            r = 2
        }
        if (typeof n !== "object" && !toString.call(n) === "[object Function]") {
            n = {}
        }
        for (; r < i; r++) {
            if ((o = arguments[r]) != null) {
                for (var u in o) {
                    var a = n[u], f = o[u];
                    if (n === f) {
                        continue
                    }
                    if (s && f && typeof f === "object" && !f.nodeType) {
                        n[u] = e.jqplot.extend(s, a || (f.length != null ? [] : {}), f)
                    } else if (f !== t) {
                        n[u] = f
                    }
                }
            }
        }
        return n
    };
    e.jqplot.ThemeEngine.prototype.rename = function(e, t) {
        if (e == "Default" || t == "Default") {
            throw new Error("jqplot.ThemeEngine Error: Cannot rename from/to Default")
        }
        if (this.themes.hasOwnProperty(t)) {
            throw new Error("jqplot.ThemeEngine Error: New name already in use.")
        } else if (this.themes.hasOwnProperty(e)) {
            var n = this.copy(e, t);
            this.remove(e);
            return n
        }
        throw new Error("jqplot.ThemeEngine Error: Old name or new name invalid")
    };
    e.jqplot.ThemeEngine.prototype.copy = function(t, n, r) {
        if (n == "Default") {
            throw new Error("jqplot.ThemeEngine Error: Cannot copy over Default theme")
        }
        if (!this.themes.hasOwnProperty(t)) {
            var i = "jqplot.ThemeEngine Error: Source name invalid";
            throw new Error(i)
        }
        if (this.themes.hasOwnProperty(n)) {
            var i = "jqplot.ThemeEngine Error: Target name invalid";
            throw new Error(i)
        } else {
            var s = D(this.themes[t]);
            s._name = n;
            e.jqplot.extend(true, s, r);
            this._add(s);
            return s
        }
    };
    e.jqplot.Theme = function(t, n) {
        if (typeof t == "object") {
            n = n || t;
            t = null
        }
        t = t || Date.parse(new Date);
        this._name = t;
        this.target = {backgroundColor: null};
        this.legend = {textColor: null, fontFamily: null, fontSize: null, border: null, background: null};
        this.title = {textColor: null, fontFamily: null, fontSize: null, textAlign: null};
        this.seriesStyles = {};
        this.series = [];
        this.grid = {drawGridlines: null, gridLineColor: null, gridLineWidth: null, backgroundColor: null, borderColor: null, borderWidth: null, shadow: null};
        this.axesStyles = {label: {}, ticks: {}};
        this.axes = {};
        if (typeof n == "string") {
            this._name = n
        } else if (typeof n == "object") {
            e.jqplot.extend(true, this, n)
        }
    };
    var H = function() {
        this.borderColor = null;
        this.borderWidth = null;
        this.ticks = new B;
        this.label = new j
    };
    var B = function() {
        this.show = null;
        this.showGridline = null;
        this.showLabel = null;
        this.showMark = null;
        this.size = null;
        this.textColor = null;
        this.whiteSpace = null;
        this.fontSize = null;
        this.fontFamily = null
    };
    var j = function() {
        this.textColor = null;
        this.whiteSpace = null;
        this.fontSize = null;
        this.fontFamily = null;
        this.fontWeight = null
    };
    var F = function() {
        this.color = null;
        this.lineWidth = null;
        this.linePattern = null;
        this.shadow = null;
        this.fillColor = null;
        this.showMarker = null;
        this.markerOptions = new I
    };
    var I = function() {
        this.show = null;
        this.style = null;
        this.lineWidth = null;
        this.size = null;
        this.color = null;
        this.shadow = null
    };
    var q = function() {
        this.color = null;
        this.seriesColors = null;
        this.lineWidth = null;
        this.shadow = null;
        this.barPadding = null;
        this.barMargin = null;
        this.barWidth = null;
        this.highlightColors = null
    };
    var R = function() {
        this.seriesColors = null;
        this.padding = null;
        this.sliceMargin = null;
        this.fill = null;
        this.shadow = null;
        this.startAngle = null;
        this.lineWidth = null;
        this.highlightColors = null
    };
    var U = function() {
        this.seriesColors = null;
        this.padding = null;
        this.sliceMargin = null;
        this.fill = null;
        this.shadow = null;
        this.startAngle = null;
        this.lineWidth = null;
        this.innerDiameter = null;
        this.thickness = null;
        this.ringMargin = null;
        this.highlightColors = null
    };
    var z = function() {
        this.color = null;
        this.lineWidth = null;
        this.shadow = null;
        this.padding = null;
        this.sectionMargin = null;
        this.seriesColors = null;
        this.highlightColors = null
    };
    var W = function() {
        this.padding = null;
        this.backgroundColor = null;
        this.ringColor = null;
        this.tickColor = null;
        this.ringWidth = null;
        this.intervalColors = null;
        this.intervalInnerRadius = null;
        this.intervalOuterRadius = null;
        this.hubRadius = null;
        this.needleThickness = null;
        this.needlePad = null
    };
    e.fn.jqplotChildText = function() {
        return e(this).contents().filter(function() {
            return this.nodeType == 3
        }).text()
    };
    e.fn.jqplotGetComputedFontStyle = function() {
        var e = window.getComputedStyle ? window.getComputedStyle(this[0], "") : this[0].currentStyle;
        var t = e["font-style"] ? ["font-style", "font-weight", "font-size", "font-family"] : ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
        var n = [];
        for (var r = 0; r < t.length; ++r) {
            var i = String(e[t[r]]);
            if (i && i != "normal") {
                n.push(i)
            }
        }
        return n.join(" ")
    };
    e.fn.jqplotToImageCanvas = function(t) {
        function w(t) {
            var n = parseInt(e(t).css("line-height"), 10);
            if (isNaN(n)) {
                n = parseInt(e(t).css("font-size"), 10) * 1.2
            }
            return n
        }
        function E(t, n, r, i, s, o) {
            var u = w(t);
            var a = e(t).innerWidth();
            var f = e(t).innerHeight();
            var l = r.split(/\s+/);
            var h = l.length;
            var p = "";
            var d = [];
            var v = s;
            var m = i;
            for (var g = 0; g < h; g++) {
                p += l[g];
                if (n.measureText(p).width > a) {
                    d.push(g);
                    p = "";
                    g--
                }
            }
            if (d.length === 0) {
                if (e(t).css("textAlign") === "center") {
                    m = i + (o - n.measureText(p).width) / 2 - c
                }
                n.fillText(r, m, s)
            } else {
                p = l.slice(0, d[0]).join(" ");
                if (e(t).css("textAlign") === "center") {
                    m = i + (o - n.measureText(p).width) / 2 - c
                }
                n.fillText(p, m, v);
                v += u;
                for (var g = 1, y = d.length; g < y; g++) {
                    p = l.slice(d[g - 1], d[g]).join(" ");
                    if (e(t).css("textAlign") === "center") {
                        m = i + (o - n.measureText(p).width) / 2 - c
                    }
                    n.fillText(p, m, v);
                    v += u
                }
                p = l.slice(d[g - 1], l.length).join(" ");
                if (e(t).css("textAlign") === "center") {
                    m = i + (o - n.measureText(p).width) / 2 - c
                }
                n.fillText(p, m, v)
            }
        }
        function S(t, n, r) {
            var i = t.tagName.toLowerCase();
            var o = e(t).position();
            var u = window.getComputedStyle ? window.getComputedStyle(t, "") : t.currentStyle;
            var a = n + o.left + parseInt(u.marginLeft, 10) + parseInt(u.borderLeftWidth, 10) + parseInt(u.paddingLeft, 10);
            var f = r + o.top + parseInt(u.marginTop, 10) + parseInt(u.borderTopWidth, 10) + parseInt(u.paddingTop, 10);
            var l = s.width;
            if ((i == "div" || i == "span") && !e(t).hasClass("jqplot-highlighter-tooltip")) {
                e(t).children().each(function() {
                    S(this, a, f)
                });
                var c = e(t).jqplotChildText();
                if (c) {
                    b.font = e(t).jqplotGetComputedFontStyle();
                    b.fillStyle = e(t).css("color");
                    E(t, b, c, a, f, l)
                }
            } else if (i === "table" && e(t).hasClass("jqplot-table-legend")) {
                b.strokeStyle = e(t).css("border-top-color");
                b.fillStyle = e(t).css("background-color");
                b.fillRect(a, f, e(t).innerWidth(), e(t).innerHeight());
                if (parseInt(e(t).css("border-top-width"), 10) > 0) {
                    b.strokeRect(a, f, e(t).innerWidth(), e(t).innerHeight())
                }
                e(t).find("div.jqplot-table-legend-swatch-outline").each(function() {
                    var t = e(this);
                    b.strokeStyle = t.css("border-top-color");
                    var n = a + t.position().left;
                    var r = f + t.position().top;
                    b.strokeRect(n, r, t.innerWidth(), t.innerHeight());
                    n += parseInt(t.css("padding-left"), 10);
                    r += parseInt(t.css("padding-top"), 10);
                    var i = t.innerHeight() - 2 * parseInt(t.css("padding-top"), 10);
                    var s = t.innerWidth() - 2 * parseInt(t.css("padding-left"), 10);
                    var o = t.children("div.jqplot-table-legend-swatch");
                    b.fillStyle = o.css("background-color");
                    b.fillRect(n, r, s, i)
                });
                e(t).find("td.jqplot-table-legend-label").each(function() {
                    var t = e(this);
                    var n = a + t.position().left;
                    var r = f + t.position().top + parseInt(t.css("padding-top"), 10);
                    b.font = t.jqplotGetComputedFontStyle();
                    b.fillStyle = t.css("color");
                    E(t, b, t.text(), n, r, l)
                });
                var h = null
            } else if (i == "canvas") {
                b.drawImage(t, a, f)
            }
        }
        t = t || {};
        var n = t.x_offset == null ? 0 : t.x_offset;
        var r = t.y_offset == null ? 0 : t.y_offset;
        var i = t.backgroundColor == null ? "rgb(255,255,255)" : t.backgroundColor;
        if (e(this).width() == 0 || e(this).height() == 0) {
            return null
        }
        if (e.jqplot.use_excanvas) {
            return null
        }
        var s = document.createElement("canvas");
        var o = e(this).outerHeight(true);
        var u = e(this).outerWidth(true);
        var a = e(this).offset();
        var f = a.left;
        var l = a.top;
        var c = 0, h = 0;
        var p = ["jqplot-table-legend", "jqplot-xaxis-tick", "jqplot-x2axis-tick", "jqplot-yaxis-tick", "jqplot-y2axis-tick", "jqplot-y3axis-tick", "jqplot-y4axis-tick", "jqplot-y5axis-tick", "jqplot-y6axis-tick", "jqplot-y7axis-tick", "jqplot-y8axis-tick", "jqplot-y9axis-tick", "jqplot-xaxis-label", "jqplot-x2axis-label", "jqplot-yaxis-label", "jqplot-y2axis-label", "jqplot-y3axis-label", "jqplot-y4axis-label", "jqplot-y5axis-label", "jqplot-y6axis-label", "jqplot-y7axis-label", "jqplot-y8axis-label", "jqplot-y9axis-label"];
        var d, v, m, g;
        for (var y = 0; y < p.length; y++) {
            e(this).find("." + p[y]).each(function() {
                d = e(this).offset().top - l;
                v = e(this).offset().left - f;
                g = v + e(this).outerWidth(true) + c;
                m = d + e(this).outerHeight(true) + h;
                if (v < -c) {
                    u = u - c - v;
                    c = -v
                }
                if (d < -h) {
                    o = o - h - d;
                    h = -d
                }
                if (g > u) {
                    u = g
                }
                if (m > o) {
                    o = m
                }
            })
        }
        s.width = u + Number(n);
        s.height = o + Number(r);
        var b = s.getContext("2d");
        b.save();
        b.fillStyle = i;
        b.fillRect(0, 0, s.width, s.height);
        b.restore();
        b.translate(c, h);
        b.textAlign = "left";
        b.textBaseline = "top";
        e(this).children().each(function() {
            S(this, n, r)
        });
        return s
    };
    e.fn.jqplotToImageStr = function(t) {
        var n = e(this).jqplotToImageCanvas(t);
        if (n) {
            return n.toDataURL("image/png")
        } else {
            return null
        }
    };
    e.fn.jqplotToImageElem = function(t) {
        var n = document.createElement("img");
        var r = e(this).jqplotToImageStr(t);
        n.src = r;
        return n
    };
    e.fn.jqplotToImageElemStr = function(t) {
        var n = "<img src=" + e(this).jqplotToImageStr(t) + " />";
        return n
    };
    e.fn.jqplotSaveImage = function() {
        var t = e(this).jqplotToImageStr({});
        if (t) {
            window.location.href = t.replace("image/png", "image/octet-stream")
        }
    };
    e.fn.jqplotViewImage = function() {
        var t = e(this).jqplotToImageElemStr({});
        var n = e(this).jqplotToImageStr({});
        if (t) {
            var r = window.open("");
            r.document.open("image/png");
            r.document.write(t);
            r.document.close();
            r = null
        }
    };
    var X = function() {
        this.syntax = X.config.syntax;
        this._type = "jsDate";
        this.proxy = new Date;
        this.options = {};
        this.locale = X.regional.getLocale();
        this.formatString = "";
        this.defaultCentury = X.config.defaultCentury;
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                if (Y(arguments[0]) == "[object Object]" && arguments[0]._type != "jsDate") {
                    var e = this.options = arguments[0];
                    this.syntax = e.syntax || this.syntax;
                    this.defaultCentury = e.defaultCentury || this.defaultCentury;
                    this.proxy = X.createDate(e.date)
                } else {
                    this.proxy = X.createDate(arguments[0])
                }
                break;
            default:
                var t = [];
                for (var n = 0; n < arguments.length; n++) {
                    t.push(arguments[n])
                }
                this.proxy = new Date;
                this.proxy.setFullYear.apply(this.proxy, t.slice(0, 3));
                if (t.slice(3).length) {
                    this.proxy.setHours.apply(this.proxy, t.slice(3))
                }
                break
        }
    };
    X.config = {defaultLocale: "en", syntax: "perl", defaultCentury: 1900};
    X.prototype.add = function(e, t) {
        var n = J[t] || J.day;
        if (typeof n == "number") {
            this.proxy.setTime(this.proxy.getTime() + n * e)
        } else {
            n.add(this, e)
        }
        return this
    };
    X.prototype.clone = function() {
        return new X(this.proxy.getTime())
    };
    X.prototype.getUtcOffset = function() {
        return this.proxy.getTimezoneOffset() * 6e4
    };
    X.prototype.diff = function(e, t, n) {
        e = new X(e);
        if (e === null) {
            return null
        }
        var r = J[t] || J.day;
        if (typeof r == "number") {
            var i = (this.proxy.getTime() - e.proxy.getTime()) / r
        } else {
            var i = r.diff(this.proxy, e.proxy)
        }
        return n ? i : Math[i > 0 ? "floor" : "ceil"](i)
    };
    X.prototype.getAbbrDayName = function() {
        return X.regional[this.locale]["dayNamesShort"][this.proxy.getDay()]
    };
    X.prototype.getAbbrMonthName = function() {
        return X.regional[this.locale]["monthNamesShort"][this.proxy.getMonth()]
    };
    X.prototype.getAMPM = function() {
        return this.proxy.getHours() >= 12 ? "PM" : "AM"
    };
    X.prototype.getAmPm = function() {
        return this.proxy.getHours() >= 12 ? "pm" : "am"
    };
    X.prototype.getCentury = function() {
        return parseInt(this.proxy.getFullYear() / 100, 10)
    };
    X.prototype.getDate = function() {
        return this.proxy.getDate()
    };
    X.prototype.getDay = function() {
        return this.proxy.getDay()
    };
    X.prototype.getDayOfWeek = function() {
        var e = this.proxy.getDay();
        return e === 0 ? 7 : e
    };
    X.prototype.getDayOfYear = function() {
        var e = this.proxy;
        var t = e - new Date("" + e.getFullYear() + "/1/1 GMT");
        t += e.getTimezoneOffset() * 6e4;
        e = null;
        return parseInt(t / 6e4 / 60 / 24, 10) + 1
    };
    X.prototype.getDayName = function() {
        return X.regional[this.locale]["dayNames"][this.proxy.getDay()]
    };
    X.prototype.getFullWeekOfYear = function() {
        var e = this.proxy;
        var t = this.getDayOfYear();
        var n = 6 - e.getDay();
        var r = parseInt((t + n) / 7, 10);
        return r
    };
    X.prototype.getFullYear = function() {
        return this.proxy.getFullYear()
    };
    X.prototype.getGmtOffset = function() {
        var e = this.proxy.getTimezoneOffset() / 60;
        var t = e < 0 ? "+" : "-";
        e = Math.abs(e);
        return t + $(Math.floor(e), 2) + ":" + $(e % 1 * 60, 2)
    };
    X.prototype.getHours = function() {
        return this.proxy.getHours()
    };
    X.prototype.getHours12 = function() {
        var e = this.proxy.getHours();
        return e > 12 ? e - 12 : e == 0 ? 12 : e
    };
    X.prototype.getIsoWeek = function() {
        var e = this.proxy;
        var t = this.getWeekOfYear();
        var n = (new Date("" + e.getFullYear() + "/1/1")).getDay();
        var r = t + (n > 4 || n <= 1 ? 0 : 1);
        if (r == 53 && (new Date("" + e.getFullYear() + "/12/31")).getDay() < 4) {
            r = 1
        } else if (r === 0) {
            e = new X(new Date("" + (e.getFullYear() - 1) + "/12/31"));
            r = e.getIsoWeek()
        }
        e = null;
        return r
    };
    X.prototype.getMilliseconds = function() {
        return this.proxy.getMilliseconds()
    };
    X.prototype.getMinutes = function() {
        return this.proxy.getMinutes()
    };
    X.prototype.getMonth = function() {
        return this.proxy.getMonth()
    };
    X.prototype.getMonthName = function() {
        return X.regional[this.locale]["monthNames"][this.proxy.getMonth()]
    };
    X.prototype.getMonthNumber = function() {
        return this.proxy.getMonth() + 1
    };
    X.prototype.getSeconds = function() {
        return this.proxy.getSeconds()
    };
    X.prototype.getShortYear = function() {
        return this.proxy.getYear() % 100
    };
    X.prototype.getTime = function() {
        return this.proxy.getTime()
    };
    X.prototype.getTimezoneAbbr = function() {
        return this.proxy.toString().replace(/^.*\(([^)]+)\)$/, "$1")
    };
    X.prototype.getTimezoneName = function() {
        var e = /(?:\((.+)\)$| ([A-Z]{3}) )/.exec(this.toString());
        return e[1] || e[2] || "GMT" + this.getGmtOffset()
    };
    X.prototype.getTimezoneOffset = function() {
        return this.proxy.getTimezoneOffset()
    };
    X.prototype.getWeekOfYear = function() {
        var e = this.getDayOfYear();
        var t = 7 - this.getDayOfWeek();
        var n = parseInt((e + t) / 7, 10);
        return n
    };
    X.prototype.getUnix = function() {
        return Math.round(this.proxy.getTime() / 1e3, 0)
    };
    X.prototype.getYear = function() {
        return this.proxy.getYear()
    };
    X.prototype.next = function(e) {
        e = e || "day";
        return this.clone().add(1, e)
    };
    X.prototype.set = function() {
        switch (arguments.length) {
            case 0:
                this.proxy = new Date;
                break;
            case 1:
                if (Y(arguments[0]) == "[object Object]" && arguments[0]._type != "jsDate") {
                    var e = this.options = arguments[0];
                    this.syntax = e.syntax || this.syntax;
                    this.defaultCentury = e.defaultCentury || this.defaultCentury;
                    this.proxy = X.createDate(e.date)
                } else {
                    this.proxy = X.createDate(arguments[0])
                }
                break;
            default:
                var t = [];
                for (var n = 0; n < arguments.length; n++) {
                    t.push(arguments[n])
                }
                this.proxy = new Date;
                this.proxy.setFullYear.apply(this.proxy, t.slice(0, 3));
                if (t.slice(3).length) {
                    this.proxy.setHours.apply(this.proxy, t.slice(3))
                }
                break
        }
        return this
    };
    X.prototype.setDate = function(e) {
        this.proxy.setDate(e);
        return this
    };
    X.prototype.setFullYear = function() {
        this.proxy.setFullYear.apply(this.proxy, arguments);
        return this
    };
    X.prototype.setHours = function() {
        this.proxy.setHours.apply(this.proxy, arguments);
        return this
    };
    X.prototype.setMilliseconds = function(e) {
        this.proxy.setMilliseconds(e);
        return this
    };
    X.prototype.setMinutes = function() {
        this.proxy.setMinutes.apply(this.proxy, arguments);
        return this
    };
    X.prototype.setMonth = function() {
        this.proxy.setMonth.apply(this.proxy, arguments);
        return this
    };
    X.prototype.setSeconds = function() {
        this.proxy.setSeconds.apply(this.proxy, arguments);
        return this
    };
    X.prototype.setTime = function(e) {
        this.proxy.setTime(e);
        return this
    };
    X.prototype.setYear = function() {
        this.proxy.setYear.apply(this.proxy, arguments);
        return this
    };
    X.prototype.strftime = function(e) {
        e = e || this.formatString || X.regional[this.locale]["formatString"];
        return X.strftime(this, e, this.syntax)
    };
    X.prototype.toString = function() {
        return this.proxy.toString()
    };
    X.prototype.toYmdInt = function() {
        return this.proxy.getFullYear() * 1e4 + this.getMonthNumber() * 100 + this.proxy.getDate()
    };
    X.regional = {en: {monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], formatString: "%Y-%m-%d %H:%M:%S"}, fr: {monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], monthNamesShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"], dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"], dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"], formatString: "%Y-%m-%d %H:%M:%S"}, de: {monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], formatString: "%Y-%m-%d %H:%M:%S"}, es: {monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"], dayNames: ["Domingo", "Lunes", "Martes", "Mi&eacute;rcoles", "Jueves", "Viernes", "S&aacute;bado"], dayNamesShort: ["Dom", "Lun", "Mar", "Mi&eacute;", "Juv", "Vie", "S&aacute;b"], formatString: "%Y-%m-%d %H:%M:%S"}, ru: {monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"], dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"], dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"], formatString: "%Y-%m-%d %H:%M:%S"}, ar: {monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "آذار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"], monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], dayNames: ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"], dayNamesShort: ["سبت", "أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة"], formatString: "%Y-%m-%d %H:%M:%S"}, pt: {monthNames: ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], dayNames: ["Domingo", "Segunda-feira", "Ter&ccedil;a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S&aacute;bado"], dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S&aacute;b"], formatString: "%Y-%m-%d %H:%M:%S"}, "pt-BR": {monthNames: ["Janeiro", "Fevereiro", "Mar&ccedil;o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], dayNames: ["Domingo", "Segunda-feira", "Ter&ccedil;a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S&aacute;bado"], dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S&aacute;b"], formatString: "%Y-%m-%d %H:%M:%S"}, pl: {monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"], monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"], dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"], dayNamesShort: ["Ni", "Pn", "Wt", "Śr", "Cz", "Pt", "Sb"], formatString: "%Y-%m-%d %H:%M:%S"}, nl: {monthNames: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "July", "Augustus", "September", "Oktober", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"], dayNames: ","["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], dayNamesShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"], formatString: "%Y-%m-%d %H:%M:%S"}, sv: {monthNames: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"], monthNamesShort: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], dayNames: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"], dayNamesShort: ["sön", "mån", "tis", "ons", "tor", "fre", "lör"], formatString: "%Y-%m-%d %H:%M:%S"}};
    X.regional["en-US"] = X.regional["en-GB"] = X.regional["en"];
    X.regional.getLocale = function() {
        var e = X.config.defaultLocale;
        if (document && document.getElementsByTagName("html") && document.getElementsByTagName("html")[0].lang) {
            e = document.getElementsByTagName("html")[0].lang;
            if (!X.regional.hasOwnProperty(e)) {
                e = X.config.defaultLocale
            }
        }
        return e
    };
    var V = 24 * 60 * 60 * 1e3;
    var $ = function(e, t) {
        e = String(e);
        var n = t - e.length;
        var r = String(Math.pow(10, n)).slice(1);
        return r.concat(e)
    };
    var J = {millisecond: 1, second: 1e3, minute: 60 * 1e3, hour: 60 * 60 * 1e3, day: V, week: 7 * V, month: {add: function(e, t) {
                J.year.add(e, Math[t > 0 ? "floor" : "ceil"](t / 12));
                var n = e.getMonth() + t % 12;
                if (n == 12) {
                    n = 0;
                    e.setYear(e.getFullYear() + 1)
                } else if (n == -1) {
                    n = 11;
                    e.setYear(e.getFullYear() - 1)
                }
                e.setMonth(n)
            }, diff: function(e, t) {
                var n = e.getFullYear() - t.getFullYear();
                var r = e.getMonth() - t.getMonth() + n * 12;
                var i = e.getDate() - t.getDate();
                return r + i / 30
            }}, year: {add: function(e, t) {
                e.setYear(e.getFullYear() + Math[t > 0 ? "floor" : "ceil"](t))
            }, diff: function(e, t) {
                return J.month.diff(e, t) / 12
            }}};
    for (var K in J) {
        if (K.substring(K.length - 1) != "s") {
            J[K + "s"] = J[K]
        }
    }
    var Q = function(e, t, n) {
        if (X.formats[n]["shortcuts"][t]) {
            return X.strftime(e, X.formats[n]["shortcuts"][t], n)
        } else {
            var r = (X.formats[n]["codes"][t] || "").split(".");
            var i = e["get" + r[0]] ? e["get" + r[0]]() : "";
            if (r[1]) {
                i = $(i, r[1])
            }
            return i
        }
    };
    X.strftime = function(e, t, n, r) {
        var i = "perl";
        var s = X.regional.getLocale();
        if (n && X.formats.hasOwnProperty(n)) {
            i = n
        } else if (n && X.regional.hasOwnProperty(n)) {
            s = n
        }
        if (r && X.formats.hasOwnProperty(r)) {
            i = r
        } else if (r && X.regional.hasOwnProperty(r)) {
            s = r
        }
        if (Y(e) != "[object Object]" || e._type != "jsDate") {
            e = new X(e);
            e.locale = s
        }
        if (!t) {
            t = e.formatString || X.regional[s]["formatString"]
        }
        var o = t || "%Y-%m-%d", u = "", a;
        while (o.length > 0) {
            if (a = o.match(X.formats[i].codes.matcher)) {
                u += o.slice(0, a.index);
                u += (a[1] || "") + Q(e, a[2], i);
                o = o.slice(a.index + a[0].length)
            } else {
                u += o;
                o = ""
            }
        }
        return u
    };
    X.formats = {ISO: "%Y-%m-%dT%H:%M:%S.%N%G", SQL: "%Y-%m-%d %H:%M:%S"};
    X.formats.perl = {codes: {matcher: /()%(#?(%|[a-z]))/i, Y: "FullYear", y: "ShortYear.2", m: "MonthNumber.2", "#m": "MonthNumber", B: "MonthName", b: "AbbrMonthName", d: "Date.2", "#d": "Date", e: "Date", A: "DayName", a: "AbbrDayName", w: "Day", H: "Hours.2", "#H": "Hours", I: "Hours12.2", "#I": "Hours12", p: "AMPM", M: "Minutes.2", "#M": "Minutes", S: "Seconds.2", "#S": "Seconds", s: "Unix", N: "Milliseconds.3", "#N": "Milliseconds", O: "TimezoneOffset", Z: "TimezoneName", G: "GmtOffset"}, shortcuts: {F: "%Y-%m-%d", T: "%H:%M:%S", X: "%H:%M:%S", x: "%m/%d/%y", D: "%m/%d/%y", "#c": "%a %b %e %H:%M:%S %Y", v: "%e-%b-%Y", R: "%H:%M", r: "%I:%M:%S %p", t: "	", n: "\n", "%": "%"}};
    X.formats.php = {codes: {matcher: /()%((%|[a-z]))/i, a: "AbbrDayName", A: "DayName", d: "Date.2", e: "Date", j: "DayOfYear.3", u: "DayOfWeek", w: "Day", U: "FullWeekOfYear.2", V: "IsoWeek.2", W: "WeekOfYear.2", b: "AbbrMonthName", B: "MonthName", m: "MonthNumber.2", h: "AbbrMonthName", C: "Century.2", y: "ShortYear.2", Y: "FullYear", H: "Hours.2", I: "Hours12.2", l: "Hours12", p: "AMPM", P: "AmPm", M: "Minutes.2", S: "Seconds.2", s: "Unix", O: "TimezoneOffset", z: "GmtOffset", Z: "TimezoneAbbr"}, shortcuts: {D: "%m/%d/%y", F: "%Y-%m-%d", T: "%H:%M:%S", X: "%H:%M:%S", x: "%m/%d/%y", R: "%H:%M", r: "%I:%M:%S %p", t: "	", n: "\n", "%": "%"}};
    X.createDate = function(e) {
        function s(e, t) {
            var n = parseFloat(t[1]);
            var r = parseFloat(t[2]);
            var i = parseFloat(t[3]);
            var s = X.config.defaultCentury;
            var o, u, a, f;
            if (n > 31) {
                u = i;
                a = r;
                o = s + n
            } else {
                u = r;
                a = n;
                o = s + i
            }
            f = a + "/" + u + "/" + o;
            return e.replace(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})/, f)
        }
        if (e == null) {
            return new Date
        }
        if (e instanceof Date) {
            return e
        }
        if (typeof e == "number") {
            return new Date(e)
        }
        var t = String(e).replace(/^\s*(.+)\s*$/g, "$1");
        t = t.replace(/^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,4})/, "$1/$2/$3");
        t = t.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{4})/i, "$1 $2 $3");
        var n = t.match(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i);
        if (n && n.length > 3) {
            var r = parseFloat(n[3]);
            var i = X.config.defaultCentury + r;
            i = String(i);
            t = t.replace(/^(3[01]|[0-2]?\d)[-\/]([a-z]{3,})[-\/](\d{2})\D*/i, n[1] + " " + n[2] + " " + i)
        }
        n = t.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})[^0-9]/);
        if (n && n.length > 3) {
            t = s(t, n)
        }
        var n = t.match(/^([0-9]{1,2})[-\/]([0-9]{1,2})[-\/]([0-9]{1,2})$/);
        if (n && n.length > 3) {
            t = s(t, n)
        }
        var o = 0;
        var u = X.matchers.length;
        var a, f, l = t, c;
        while (o < u) {
            f = Date.parse(l);
            if (!isNaN(f)) {
                return new Date(f)
            }
            a = X.matchers[o];
            if (typeof a == "function") {
                c = a.call(X, l);
                if (c instanceof Date) {
                    return c
                }
            } else {
                l = t.replace(a[0], a[1])
            }
            o++
        }
        return NaN
    };
    X.daysInMonth = function(e, n) {
        if (n == 2) {
            return(new Date(e, 1, 29)).getDate() == 29 ? 29 : 28
        }
        return[t, 31, t, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n]
    };
    X.matchers = [[/(3[01]|[0-2]\d)\s*\.\s*(1[0-2]|0\d)\s*\.\s*([1-9]\d{3})/, "$2/$1/$3"], [/([1-9]\d{3})\s*-\s*(1[0-2]|0\d)\s*-\s*(3[01]|[0-2]\d)/, "$2/$3/$1"], function(e) {
            var t = e.match(/^(?:(.+)\s+)?([012]?\d)(?:\s*\:\s*(\d\d))?(?:\s*\:\s*(\d\d(\.\d*)?))?\s*(am|pm)?\s*$/i);
            if (t) {
                if (t[1]) {
                    var n = this.createDate(t[1]);
                    if (isNaN(n)) {
                        return
                    }
                } else {
                    var n = new Date;
                    n.setMilliseconds(0)
                }
                var r = parseFloat(t[2]);
                if (t[6]) {
                    r = t[6].toLowerCase() == "am" ? r == 12 ? 0 : r : r == 12 ? 12 : r + 12
                }
                n.setHours(r, parseInt(t[3] || 0, 10), parseInt(t[4] || 0, 10), (parseFloat(t[5] || 0) || 0) * 1e3);
                return n
            } else {
                return e
            }
        }, function(e) {
            var t = e.match(/^(?:(.+))[T|\s+]([012]\d)(?:\:(\d\d))(?:\:(\d\d))(?:\.\d+)([\+\-]\d\d\:\d\d)$/i);
            if (t) {
                if (t[1]) {
                    var n = this.createDate(t[1]);
                    if (isNaN(n)) {
                        return
                    }
                } else {
                    var n = new Date;
                    n.setMilliseconds(0)
                }
                var r = parseFloat(t[2]);
                n.setHours(r, parseInt(t[3], 10), parseInt(t[4], 10), parseFloat(t[5]) * 1e3);
                return n
            } else {
                return e
            }
        }, function(e) {
            var t = e.match(/^([0-3]?\d)\s*[-\/.\s]{1}\s*([a-zA-Z]{3,9})\s*[-\/.\s]{1}\s*([0-3]?\d)$/);
            if (t) {
                var n = new Date;
                var r = X.config.defaultCentury;
                var i = parseFloat(t[1]);
                var s = parseFloat(t[3]);
                var o, u, a;
                if (i > 31) {
                    u = s;
                    o = r + i
                } else {
                    u = i;
                    o = r + s
                }
                var a = G(t[2], X.regional[X.regional.getLocale()]["monthNamesShort"]);
                if (a == -1) {
                    a = G(t[2], X.regional[X.regional.getLocale()]["monthNames"])
                }
                n.setFullYear(o, a, u);
                n.setHours(0, 0, 0, 0);
                return n
            } else {
                return e
            }
        }];
    e.jsDate = X;
    e.jqplot.sprintf = function() {
        function t(e, t, n, r) {
            var i = e.length >= t ? "" : Array(1 + t - e.length >>> 0).join(n);
            return r ? e + i : i + e
        }
        function n(t) {
            var n = new String(t);
            for (var r = 10; r > 0; r--) {
                if (n == (n = n.replace(/^(\d+)(\d{3})/, "$1" + e.jqplot.sprintf.thousandsSeparator + "$2")))
                    break
            }
            return n
        }
        function r(e, n, r, i, s, o) {
            var u = i - e.length;
            if (u > 0) {
                var a = " ";
                if (o) {
                    a = "&nbsp;"
                }
                if (r || !s) {
                    e = t(e, i, a, r)
                } else {
                    e = e.slice(0, n.length) + t("", u, "0", true) + e.slice(n.length)
                }
            }
            return e
        }
        function i(e, n, i, s, o, u, a, f) {
            var l = e >>> 0;
            i = i && l && {2: "0b", 8: "0", 16: "0x"}[n] || "";
            e = i + t(l.toString(n), u || 0, "0", false);
            return r(e, i, s, o, a, f)
        }
        function s(e, t, n, i, s, o) {
            if (i != null) {
                e = e.slice(0, i)
            }
            return r(e, "", t, n, s, o)
        }
        var o = arguments, u = 0, a = o[u++];
        return a.replace(e.jqplot.sprintf.regex, function(a, f, l, c, h, p, d) {
            if (a == "%%") {
                return"%"
            }
            var v = false, m = "", g = false, y = false, b = false, w = false;
            for (var E = 0; l && E < l.length; E++)
                switch (l.charAt(E)) {
                    case" ":
                        m = " ";
                        break;
                    case"+":
                        m = "+";
                        break;
                    case"-":
                        v = true;
                        break;
                    case"0":
                        g = true;
                        break;
                    case"#":
                        y = true;
                        break;
                    case"&":
                        b = true;
                        break;
                    case"'":
                        w = true;
                        break
                }
            if (!c) {
                c = 0
            } else if (c == "*") {
                c = +o[u++]
            } else if (c.charAt(0) == "*") {
                c = +o[c.slice(1, -1)]
            } else {
                c = +c
            }
            if (c < 0) {
                c = -c;
                v = true
            }
            if (!isFinite(c)) {
                throw new Error("$.jqplot.sprintf: (minimum-)width must be finite")
            }
            if (!p) {
                p = "fFeE".indexOf(d) > -1 ? 6 : d == "d" ? 0 : void 0
            } else if (p == "*") {
                p = +o[u++]
            } else if (p.charAt(0) == "*") {
                p = +o[p.slice(1, -1)]
            } else {
                p = +p
            }
            var S = f ? o[f.slice(0, -1)] : o[u++];
            switch (d) {
                case"s":
                    {
                        if (S == null) {
                            return""
                        }
                        return s(String(S), v, c, p, g, b)
                    }
                    ;
                case"c":
                    return s(String.fromCharCode(+S), v, c, p, g, b);
                case"b":
                    return i(S, 2, y, v, c, p, g, b);
                case"o":
                    return i(S, 8, y, v, c, p, g, b);
                case"x":
                    return i(S, 16, y, v, c, p, g, b);
                case"X":
                    return i(S, 16, y, v, c, p, g, b).toUpperCase();
                case"u":
                    return i(S, 10, y, v, c, p, g, b);
                case"i":
                    {
                        var x = parseInt(+S, 10);
                        if (isNaN(x)) {
                            return""
                        }
                        var T = x < 0 ? "-" : m;
                        var N = w ? n(String(Math.abs(x))) : String(Math.abs(x));
                        S = T + t(N, p, "0", false);
                        return r(S, T, v, c, g, b)
                    }
                    ;
                case"d":
                    {
                        var x = Math.round(+S);
                        if (isNaN(x)) {
                            return""
                        }
                        var T = x < 0 ? "-" : m;
                        var N = w ? n(String(Math.abs(x))) : String(Math.abs(x));
                        S = T + t(N, p, "0", false);
                        return r(S, T, v, c, g, b)
                    }
                    ;
                case"e":
                case"E":
                case"f":
                case"F":
                case"g":
                case"G":
                    {
                        var x = +S;
                        if (isNaN(x)) {
                            return""
                        }
                        var T = x < 0 ? "-" : m;
                        var C = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(d.toLowerCase())];
                        var k = ["toString", "toUpperCase"]["eEfFgG".indexOf(d) % 2];
                        var N = Math.abs(x)[C](p);
                        var L = N.toString().split(".");
                        L[0] = w ? n(L[0]) : L[0];
                        N = L.join(e.jqplot.sprintf.decimalMark);
                        S = T + N;
                        var A = r(S, T, v, c, g, b)[k]();
                        return A
                    }
                    ;
                case"p":
                case"P":
                    {
                        var x = +S;
                        if (isNaN(x)) {
                            return""
                        }
                        var T = x < 0 ? "-" : m;
                        var L = String(Number(Math.abs(x)).toExponential()).split(/e|E/);
                        var O = L[0].indexOf(".") != -1 ? L[0].length - 1 : String(x).length;
                        var M = L[1] < 0 ? -L[1] - 1 : 0;
                        if (Math.abs(x) < 1) {
                            if (O + M <= p) {
                                S = T + Math.abs(x).toPrecision(O)
                            } else {
                                if (O <= p - 1) {
                                    S = T + Math.abs(x).toExponential(O - 1)
                                } else {
                                    S = T + Math.abs(x).toExponential(p - 1)
                                }
                            }
                        } else {
                            var _ = O <= p ? O : p;
                            S = T + Math.abs(x).toPrecision(_)
                        }
                        var k = ["toString", "toUpperCase"]["pP".indexOf(d) % 2];
                        return r(S, T, v, c, g, b)[k]()
                    }
                    ;
                case"n":
                    return"";
                default:
                    return a
            }
        })
    };
    e.jqplot.sprintf.thousandsSeparator = ",";
    e.jqplot.sprintf.decimalMark = ".";
    e.jqplot.sprintf.regex = /%%|%(\d+\$)?([-+#0&\' ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([nAscboxXuidfegpEGP])/g;
    e.jqplot.getSignificantFigures = function(e) {
        var t = String(Number(Math.abs(e)).toExponential()).split(/e|E/);
        var n = t[0].indexOf(".") != -1 ? t[0].length - 1 : t[0].length;
        var r = t[1] < 0 ? -t[1] - 1 : 0;
        var i = parseInt(t[1], 10);
        var s = i + 1 > 0 ? i + 1 : 0;
        var o = n <= s ? 0 : n - i - 1;
        return{significantDigits: n, digitsLeft: s, digitsRight: o, zeros: r, exponent: i}
    };
    e.jqplot.getPrecision = function(t) {
        return e.jqplot.getSignificantFigures(t).digitsRight
    };
    var Z = e.uiBackCompat !== false;
    e.jqplot.effects = {effect: {}};
    var et = "jqplot.storage.";
    e.extend(e.jqplot.effects, {version: "1.9pre", save: function(e, t) {
            for (var n = 0; n < t.length; n++) {
                if (t[n] !== null) {
                    e.data(et + t[n], e[0].style[t[n]])
                }
            }
        }, restore: function(e, t) {
            for (var n = 0; n < t.length; n++) {
                if (t[n] !== null) {
                    e.css(t[n], e.data(et + t[n]))
                }
            }
        }, setMode: function(e, t) {
            if (t === "toggle") {
                t = e.is(":hidden") ? "show" : "hide"
            }
            return t
        }, createWrapper: function(t) {
            if (t.parent().is(".ui-effects-wrapper")) {
                return t.parent()
            }
            var n = {width: t.outerWidth(true), height: t.outerHeight(true), "float": t.css("float")}, r = e("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0}), i = {width: t.width(), height: t.height()}, s = document.activeElement;
            t.wrap(r);
            if (t[0] === s || e.contains(t[0], s)) {
                e(s).focus()
            }
            r = t.parent();
            if (t.css("position") === "static") {
                r.css({position: "relative"});
                t.css({position: "relative"})
            } else {
                e.extend(n, {position: t.css("position"), zIndex: t.css("z-index")});
                e.each(["top", "left", "bottom", "right"], function(e, r) {
                    n[r] = t.css(r);
                    if (isNaN(parseInt(n[r], 10))) {
                        n[r] = "auto"
                    }
                });
                t.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"})
            }
            t.css(i);
            return r.css(n).show()
        }, removeWrapper: function(t) {
            var n = document.activeElement;
            if (t.parent().is(".ui-effects-wrapper")) {
                t.parent().replaceWith(t);
                if (t[0] === n || e.contains(t[0], n)) {
                    e(n).focus()
                }
            }
            return t
        }});
    e.fn.extend({jqplotEffect: function(t, n, r, i) {
            function l(t) {
                function o() {
                    if (e.isFunction(r)) {
                        r.call(n[0])
                    }
                    if (e.isFunction(t)) {
                        t()
                    }
                }
                var n = e(this), r = s.complete, i = s.mode;
                if (n.is(":hidden") ? i === "hide" : i === "show") {
                    o()
                } else {
                    a.call(n[0], s, o)
                }
            }
            var s = tt.apply(this, arguments), o = s.mode, u = s.queue, a = e.jqplot.effects.effect[s.effect], f = !a && Z && e.jqplot.effects[s.effect];
            if (e.fx.off || !(a || f)) {
                if (o) {
                    return this[o](s.duration, s.complete)
                } else {
                    return this.each(function() {
                        if (s.complete) {
                            s.complete.call(this)
                        }
                    })
                }
            }
            if (a) {
                return u === false ? this.each(l) : this.queue(u || "fx", l)
            } else {
                return f.call(this, {options: s, duration: s.duration, callback: s.complete, mode: s.mode})
            }
        }});
    var rt = /up|down|vertical/, it = /up|left|vertical|horizontal/;
    e.jqplot.effects.effect.blind = function(t, n) {
        var r = e(this), i = ["position", "top", "bottom", "left", "right", "height", "width"], s = e.jqplot.effects.setMode(r, t.mode || "hide"), o = t.direction || "up", u = rt.test(o), a = u ? "height" : "width", f = u ? "top" : "left", l = it.test(o), c = {}, h = s === "show", p, d, v;
        if (r.parent().is(".ui-effects-wrapper")) {
            e.jqplot.effects.save(r.parent(), i)
        } else {
            e.jqplot.effects.save(r, i)
        }
        r.show();
        v = parseInt(r.css("top"), 10);
        p = e.jqplot.effects.createWrapper(r).css({overflow: "hidden"});
        d = u ? p[a]() + v : p[a]();
        c[a] = h ? String(d) : "0";
        if (!l) {
            r.css(u ? "bottom" : "right", 0).css(u ? "top" : "left", "").css({position: "absolute"});
            c[f] = h ? "0" : String(d)
        }
        if (h) {
            p.css(a, 0);
            if (!l) {
                p.css(f, d)
            }
        }
        p.animate(c, {duration: t.duration, easing: t.easing, queue: false, complete: function() {
                if (s === "hide") {
                    r.hide()
                }
                e.jqplot.effects.restore(r, i);
                e.jqplot.effects.removeWrapper(r);
                n()
            }})
    }
})(jQuery)