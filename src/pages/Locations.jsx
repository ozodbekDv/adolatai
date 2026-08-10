import React, { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  Star,
  RotateCcw,
  Navigation,
  Phone,
  Info,
  Send,
  ExternalLink,
} from "lucide-react";

import { useI18n } from "../hooks/useI18n";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ADVOCACY_DATA ni o'zingizning faylingizdan import qilasiz
import { ADVOCACY_DATA } from "../constants/content";

// Farg'ona viloyati hududlari (Shahar va Tumanlar)
const LOCATIONS = [
  {
    id: "barchasi",
    nameKey: "locationsPage.locations.all",
    fallbackName: "Barchasi",
    cityMatch: "",
    lat: 40.3864,
    lng: 71.7864,
  },
  {
    id: "fargona",
    nameKey: "locationsPage.locations.fargona",
    fallbackName: "Farg'ona shahar",
    cityMatch: "fargona",
    lat: 40.3864,
    lng: 71.7864,
  },
  {
    id: "qoqon",
    nameKey: "locationsPage.locations.qoqon",
    fallbackName: "Qo'qon shahar",
    cityMatch: "qoqon",
    lat: 40.5283,
    lng: 70.9425,
  },
  {
    id: "margilon",
    nameKey: "locationsPage.locations.margilon",
    fallbackName: "Marg'ilon shahar",
    cityMatch: "margilon",
    lat: 40.4721,
    lng: 71.7133,
  },
  {
    id: "rishton",
    nameKey: "locationsPage.locations.rishton",
    fallbackName: "Rishton tumani",
    cityMatch: "rishton",
    lat: 40.3562,
    lng: 71.2841,
  },
  {
    id: "oltiariq",
    nameKey: "locationsPage.locations.oltiariq",
    fallbackName: "Oltiariq tumani",
    cityMatch: "oltiariq",
    lat: 40.3956,
    lng: 71.4789,
  },
  {
    id: "quvasoy",
    nameKey: "locationsPage.locations.quvasoy",
    fallbackName: "Quvasoy shahar",
    cityMatch: "quvasoy",
    lat: 40.3015,
    lng: 71.9782,
  },
  {
    id: "bagdod",
    nameKey: "locationsPage.locations.bagdod",
    fallbackName: "Bag'dod tumani",
    cityMatch: "bagdod",
    lat: 40.455,
    lng: 71.2188,
  },
  {
    id: "quva",
    nameKey: "locationsPage.locations.quva",
    fallbackName: "Quva tumani",
    cityMatch: "quva",
    lat: 40.52,
    lng: 72.07,
  },
  {
    id: "buvayda",
    nameKey: "locationsPage.locations.buvayda",
    fallbackName: "Buvayda tumani",
    cityMatch: "buvayda",
    lat: 40.59,
    lng: 71.12,
  },
  {
    id: "uchkoprik",
    nameKey: "locationsPage.locations.uchkoprik",
    fallbackName: "Uchko'prik tumani",
    cityMatch: "uchkoprik",
    lat: 40.54,
    lng: 71.05,
  },
  {
    id: "toshloq",
    nameKey: "locationsPage.locations.toshloq",
    fallbackName: "Toshloq tumani",
    cityMatch: "toshloq",
    lat: 40.52,
    lng: 71.76,
  },
  {
    id: "yozyovon",
    nameKey: "locationsPage.locations.yozyovon",
    fallbackName: "Yozyovon tumani",
    cityMatch: "yozyovon",
    lat: 40.66,
    lng: 71.74,
  },
];

export default function AdvocacyMapUI() {
  const { t } = useI18n();
  const [isLocationActive, setIsLocationActive] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("barchasi");
  const [selectedService, setSelectedService] = useState("barchasi");
  const [selectedLang, setSelectedLang] = useState("barchasi");
  const [mapType, setMapType] = useState("roadmap"); // 'roadmap' (Xarita) yoki 'satellite' (Sun'iy yo'ldosh)
  const [selectedItem, setSelectedItem] = useState(ADVOCACY_DATA[0] || null);

  const locationOptions = useMemo(
    () =>
      LOCATIONS.map((loc) => ({
        ...loc,
        name: t(loc.nameKey) || loc.fallbackName,
      })),
    [t],
  );

  const sortOptions = useMemo(
    () => [
      { value: "popular", label: t("locationsPage.list.sortOptions.popular") },
      { value: "nearest", label: t("locationsPage.list.sortOptions.nearest") },
      { value: "rating", label: t("locationsPage.list.sortOptions.rating") },
    ],
    [t],
  );

  const selectedLocObj = locationOptions.find((l) => l.id === selectedCity);

  // Tanlangan shahar/tuman va qidiruv bo'yicha ma'lumotlarni filterlash
  const filteredData = useMemo(() => {
    return ADVOCACY_DATA.filter((item) => {
      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.address.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCity =
        selectedCity === "barchasi" ||
        (selectedLocObj &&
          item.city
            .toLowerCase()
            .includes(selectedLocObj.cityMatch.toLowerCase()));

      return matchesSearch && matchesCity;
    });
  }, [searchQuery, selectedCity, selectedLocObj]);

  // Filterni tozalash
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCity("barchasi");
    setSelectedService("barchasi");
    setSelectedLang("barchasi");
  };

  // Google Maps havolasini shakllantirish
  const getGoogleMapsUrl = (lat, lng, query) => {
    if (lat && lng) {
      return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  };

  // Xarita markazi uchun koordinatalarni aniqlash
  const currentMapCoords = useMemo(() => {
    if (selectedItem) {
      return { lat: selectedItem.lat, lng: selectedItem.lng };
    }
    const currentLoc = locationOptions.find((l) => l.id === selectedCity);
    return currentLoc
      ? { lat: currentLoc.lat, lng: currentLoc.lng }
      : { lat: 40.3864, lng: 71.7864 };
  }, [selectedItem, selectedCity, locationOptions]);

  return (
    <div className="w-full min-h-screen transition-colors duration-300 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Hero / Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            {t("locationsPage.header.title")}
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {t("locationsPage.header.subtitle")}
          </p>
        </div>

        {/* Filter Paneli */}
        <div className="mt-6 p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap lg:flex-nowrap items-center gap-3">
          {/* Eng yaqin joyni tanlang Switch */}
          <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 min-w-[220px]">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {t("locationsPage.filters.locationSwitchLabel")}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  {t("locationsPage.filters.locationSwitchSubtitle")}
                </span>
              </div>
            </div>
            <Switch
              checked={isLocationActive}
              onCheckedChange={setIsLocationActive}
              className="data-[state=checked]:bg-violet-600"
            />
          </div>

          {/* Qidiruv Satri */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 dark:text-slate-500" />
            <Input
              type="text"
              placeholder={t("locationsPage.filters.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
          </div>

          {/* Filter Select Dropdowns */}
          <div className="grid grid-cols-2 sm:flex items-center gap-2 w-full lg:w-auto">
            {/* Shahar / Tuman Tanlash (Eng yaqin joylar uchun) */}
            <Select
              value={selectedCity}
              onValueChange={(val) => {
                setSelectedCity(val);
                setSelectedItem(null);
              }}
            >
              <SelectTrigger className="h-11 w-full sm:w-[160px] rounded-xl bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-xs">
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] text-slate-400 dark:text-slate-400">
                    {t("locationsPage.filters.cityLabel")}
                  </span>
                  <SelectValue placeholder={t("locationsPage.locations.all")} />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                {locationOptions.map((loc) => (
                  <SelectItem key={loc.id} value={loc.id}>
                    {loc.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Filterni Tozalash Tugmasi */}
            <Button
              variant="outline"
              onClick={resetFilters}
              className="h-11 rounded-xl border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 text-xs gap-1.5 px-3"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              {t("locationsPage.filters.clearBtn")}
            </Button>
          </div>
        </div>
      </div>

      {/* Asosiy Ishchi Maydon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* CHAP RO'YXAT PANEL */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                {filteredData.length} {t("locationsPage.list.foundCount")}
              </span>

              <Select defaultValue="popular">
                <SelectTrigger className="h-8 border-none bg-transparent text-xs font-semibold text-slate-700 dark:text-slate-200 gap-1 focus:ring-0">
                  <SelectValue
                    placeholder={t("locationsPage.list.sortLabel")}
                  />
                </SelectTrigger>
                <SelectContent
                  align="end"
                  className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                >
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Advokaturalar Ro'yxati */}
            <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
              {filteredData.map((item) => {
                const isSelected = selectedItem?.id === item.id;
                return (
                  <Card
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`cursor-pointer transition-all duration-200 border rounded-2xl p-4 bg-white dark:bg-slate-900 ${
                      isSelected
                        ? "border-violet-500 dark:border-violet-500 shadow-md ring-2 ring-violet-500/20"
                        : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-12 h-12 rounded-full bg-slate-900 text-white dark:bg-slate-800 flex items-center justify-center font-bold text-xs shrink-0 border border-slate-200 dark:border-slate-700">
                        {item.name.substring(0, 3).toUpperCase()}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-500 bg-amber-50 dark:bg-amber-950/50 px-1.5 py-0.5 rounded-md shrink-0 border border-amber-200/50 dark:border-amber-900/50">
                            <Star className="h-3 w-3 fill-amber-400 stroke-amber-400" />
                            <span>{item.rating || "4.5"}</span>
                          </div>
                        </div>

                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 truncate">
                          {item.address}
                        </p>

                        <div className="mt-2.5 flex items-center justify-between">
                          <span className="flex items-center gap-1 text-[11px] font-semibold text-violet-600 dark:text-violet-400">
                            <Navigation className="h-3 w-3 fill-violet-600 dark:fill-violet-400 stroke-none" />
                            {item.distance ||
                              t("locationsPage.card.distanceFallback")}
                          </span>

                          {/* Google Maps da Ochish Tugmasi */}
                          <a
                            href={getGoogleMapsUrl(
                              item.lat,
                              item.lng,
                              item.name,
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[11px] text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 flex items-center gap-1 transition-colors"
                          >
                            <span>{t("locationsPage.card.viewOnMap")}</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}

              {filteredData.length === 0 && (
                <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 text-sm">
                  {t("locationsPage.list.empty")}
                </div>
              )}
            </div>

            <Button
              variant="outline"
              className="w-full py-5 rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold"
            >
              {t("locationsPage.list.loadMore")}
            </Button>
          </div>

          {/* O'NG INTERAKTIV XARITA PANEL */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="relative w-full h-[580px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-200 dark:bg-slate-800">
              {/* Dynamic Google Maps Embed (Roadmap va Satellite rejimlarida) */}
              <iframe
                key={`${currentMapCoords.lat}-${currentMapCoords.lng}-${mapType}`}
                title="Google Map View"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${currentMapCoords.lat},${currentMapCoords.lng}&t=${mapType === "satellite" ? "k" : "m"}&z=${selectedItem ? 16 : 13}&output=embed`}
              ></iframe>

              {/* Mening joylashuvim Tugmasi */}
              <button
                onClick={() => {
                  const fargonaLoc = LOCATIONS.find((l) => l.id === "fargona");
                  if (fargonaLoc) {
                    setSelectedCity("fargona");
                    setSelectedItem(null);
                  }
                }}
                className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md text-xs font-semibold text-violet-600 dark:text-violet-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <Navigation className="h-3.5 w-3.5 fill-violet-600 dark:fill-violet-400 stroke-none" />
                {t("locationsPage.map.myLocation")}
              </button>

              {/* Xarita Rejimini O'zgartirish Tugmalari (Xarita / Sun'iy yo'ldosh) */}
              <div className="absolute top-4 right-4 z-10 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 shadow-md flex items-center gap-1">
                <button
                  onClick={() => setMapType("roadmap")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    mapType === "roadmap"
                      ? "bg-violet-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                  }`}
                >
                  {t("locationsPage.map.mapView")}
                </button>
                <button
                  onClick={() => setMapType("satellite")}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    mapType === "satellite"
                      ? "bg-violet-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                  }`}
                >
                  {t("locationsPage.map.satelliteView")}
                </button>
              </div>
            </div>

            {selectedItem && (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-sm flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white dark:bg-slate-800 flex items-center justify-center font-bold text-xs shrink-0 border border-slate-700">
                    {selectedItem.name.substring(0, 3).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">
                        {selectedItem.name}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-500">
                        <Star className="h-3 w-3 fill-amber-400 stroke-amber-400" />
                        <span>{t("locationsPage.map.reviewsText")}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                      {selectedItem.address}
                    </p>
                    <div className="flex items-center gap-3 mt-1 text-[11px] flex-wrap">
                      <span className="text-violet-600 dark:text-violet-400 font-semibold">
                        {t("locationsPage.card.distanceFallback")}
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                        {t("locationsPage.map.openNow")}
                      </span>
                      <span className="text-slate-400 dark:text-slate-500">
                        {t("locationsPage.map.hours")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <a
                    href={getGoogleMapsUrl(
                      selectedItem.lat,
                      selectedItem.lng,
                      selectedItem.name,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none"
                  >
                    <Button className="w-full sm:w-auto h-8 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold gap-1.5 px-3">
                      <Send className="h-3.5 w-3.5" />
                      {t("locationsPage.map.getDirections")}
                    </Button>
                  </a>

                  <a
                    href={`tel:${selectedItem.phone}`}
                    className="flex-1 sm:flex-none"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto h-8 rounded-xl border-slate-200 dark:border-slate-800 text-xs gap-1 text-slate-700 dark:text-slate-200"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {t("locationsPage.map.call")}
                    </Button>
                  </a>
                  <a
                    href={getGoogleMapsUrl(
                      selectedItem.lat,
                      selectedItem.lng,
                      selectedItem.name,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto h-8 rounded-xl border-slate-200 dark:border-slate-800 text-xs gap-1 text-slate-700 dark:text-slate-200"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {t("locationsPage.map.viewMap")}
                    </Button>
                  </a>
                </div>
              </div>
            )}

            {/* Pastki Qism: Joylashuv Ogohlantirish Paneli */}
            <div className="p-3.5 rounded-2xl bg-violet-50 dark:bg-violet-950/30 border border-violet-100 dark:border-violet-900/40 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-violet-100 dark:bg-violet-900/60 text-violet-600 dark:text-violet-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  {t("locationsPage.map.locationPrompt")}
                </span>
              </div>
              <Button className="h-8 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold px-3 shrink-0">
                {t("locationsPage.map.enableLocation")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
