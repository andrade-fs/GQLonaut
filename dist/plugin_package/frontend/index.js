const Us = {
  // For PrimeVue version 3
  accordiontab: {
    root: {
      class: ["mb-0", "border-b border-surface-200 dark:border-surface-700"]
    },
    header: ({ props: e }) => ({
      class: [
        // State
        { "select-none pointer-events-none cursor-default opacity-60": e == null ? void 0 : e.disabled }
      ]
    }),
    headerAction: {
      class: [
        //Font
        "font-semibold",
        "leading-none",
        // Alignments
        "flex justify-between items-center",
        "flex-row-reverse",
        "relative",
        // Sizing
        "p-[1.125rem]",
        // Shape
        "rounded-md",
        "border-0",
        // Color
        "bg-surface-0 dark:bg-surface-900",
        "text-surface-600 dark:text-surface-0/80",
        // Transition
        "transition duration-200 ease-in-out",
        "transition-shadow duration-200",
        // States
        "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300",
        // Focus
        // Misc
        "cursor-pointer no-underline select-none"
      ]
    },
    headerIcon: ({ context: e }) => ({
      class: ["inline-block ml-2", { "text-surface-900 dark:text-surface-0": e.active }]
    }),
    headerTitle: {
      class: "leading-none"
    },
    content: {
      class: [
        // Spacing
        "p-[1.125rem] pt-0",
        //Shape
        "border-0 rounded-none",
        // Color
        "bg-surface-0 dark:bg-surface-900",
        "text-surface-600 dark:text-surface-0/70"
      ]
    },
    transition: {
      enterFromClass: "max-h-0",
      enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
      enterToClass: "max-h-[1000px]",
      leaveFromClass: "max-h-[1000px]",
      leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
      leaveToClass: "max-h-0"
    }
  }
}, Ks = {
  content: "p-5 pt-0 bg-surface-0 dark:bg-surface-900 text-surface-600 dark:text-surface-0/70"
}, Ws = {
  root: ({ context: e }) => ({
    class: [
      "flex items-center justify-between bg-surface-0 dark:bg-surface-900 text-surface-600 dark:text-surface-0/70 p-[1.125rem] font-semibold outline-transparent",
      {
        "focus-visible:outline-offset-2 focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400": !e.disabled
      },
      {
        "hover:text-surface-700 dark:hover:text-surface-0": !e.disabled
      }
    ]
  }),
  toggleIcon: "inline-block text-surface-900 dark:text-surface-0 w-4 h-4"
}, Gs = {
  root: ({ props: e, context: t }) => ({
    class: [
      "flex flex-col border-b border-surface-200 dark:border-surface-700",
      {
        "[&>[data-pc-name=accordionheader]]:select-none [&>[data-pc-name=accordionheader]]:pointer-events-none [&>[data-pc-name=accordionheader]]:cursor-default [&>[data-pc-name=accordionheader]]:opacity-60": e == null ? void 0 : e.disabled,
        "[&>[data-pc-name=accordionheader]]:text-surface-700 dark:[&>[data-pc-name=accordionheader]]:text-surface-100 hover:[&>[data-pc-name=accordionheader]]:text-surface-800 dark:hover:[&>[data-pc-name=accordionheader]]:text-surface-0": !e.disabled && t.active,
        "[&>[data-pc-section=toggleicon]]:text-surface-700 dark:[&>[data-pc-section=toggleicon]]:text-surface-100 hover:[&>[data-pc-section=toggleicon]]:text-surface-800 dark:hover:[&>[data-pc-section=toggleicon]]:text-surface-0": !e.disabled && t.active,
        "[&:last-child>[data-pc-name=accordioncontent]>[data-pc-section=content]]:rounded-b-md": !e.disabled && t.active,
        "[&:last-child>[data-pc-name=accordionheader]]:rounded-b-md": !e.disabled && !t.active
      },
      "[&:nth-child(n+2)>[data-pc-name=accordionheader]]:border-t-0",
      "[&:first-child>[data-pc-name=accordionheader]]:rounded-t-md"
    ]
  })
}, qs = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      // Flex
      {
        flex: e.fluid,
        "inline-flex": !e.fluid
      },
      // Size
      { "w-full": e.multiple },
      { "[&>input]:!rounded-r-none": e.dropdown },
      // Color
      "text-surface-900 dark:text-surface-0",
      //States
      {
        "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  inputMultiple: ({ props: e, state: t }) => ({
    class: [
      // Font
      "leading-none",
      // Flex
      "flex items-center flex-wrap",
      "gap-2",
      // Spacing
      "m-0 list-none",
      "py-1 px-1",
      // Size
      "w-full",
      // Shape
      "appearance-none rounded-md",
      // Color
      "text-surface-700 dark:text-white/80",
      "placeholder:text-surface-400 dark:placeholder:text-surface-500",
      { "bg-surface-0 dark:bg-surface-950": !e.disabled },
      "border",
      { "border-surface-300 dark:border-surface-700": !e.invalid },
      // Invalid State
      "invalid:focus:ring-red-200",
      "invalid:hover:border-red-500",
      { "border-red-500 dark:border-red-400": e.invalid },
      // States
      { "hover:border-surface-400 dark:hover:border-surface-700": !e.invalid },
      { "outline-none outline-offset-0 z-10 ring-1 ring-primary-500 dark:ring-primary-400": t.focused },
      // Transition
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-text overflow-hidden"
    ]
  }),
  inputToken: {
    class: ["py-1 px-0 ml-2", "inline-flex flex-auto"]
  },
  inputChip: {
    class: "flex-auto inline-flex pt-1 pb-1"
  },
  input: {
    class: "border-none outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full"
  },
  dropdown: {
    class: [
      "relative",
      // Alignments
      "items-center inline-flex justify-center text-center align-bottom",
      // Shape
      "rounded-r-md",
      // Size
      "py-2 leading-none",
      "w-10",
      // Colors
      "text-primary-contrast",
      "bg-primary",
      "border border-primary",
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 ",
      "hover:bg-primary-emphasis hover:border-primary-emphasis",
      "focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  },
  loader: {
    class: ["text-surface-500 dark:text-surface-0/70", "absolute top-[50%] right-[0.5rem] -mt-2 animate-spin"]
  },
  overlay: {
    class: [
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      // Shape
      "border border-surface-300 dark:border-surface-700",
      "rounded-md",
      "shadow-md",
      // Size
      "overflow-auto"
    ]
  },
  list: {
    class: "p-1 list-none m-0"
  },
  option: ({ context: e }) => ({
    class: [
      "relative",
      // Font
      "leading-none",
      // Spacing
      "m-0 px-3 py-2",
      "first:mt-0 mt-[2px]",
      // Shape
      "border-0 rounded",
      // Colors
      {
        "bg-surface-200 dark:bg-surface-600/60": e.focused && !e.selected,
        "text-surface-700 dark:text-white/80": e.focused && !e.selected,
        "bg-highlight": e.selected
      },
      //States
      { "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.focused && !e.selected },
      { "hover:bg-highlight-emphasis": e.selected },
      { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]": e.focused && !e.selected },
      // Transition
      "transition-shadow duration-200",
      // Misc
      "cursor-pointer overflow-hidden whitespace-nowrap"
    ]
  }),
  optionGroup: {
    class: [
      "font-semibold",
      // Spacing
      "m-0 py-2 px-3",
      // Colors
      "text-surface-400 dark:text-surface-500",
      // Misc
      "cursor-auto"
    ]
  },
  emptyMessage: {
    class: [
      // Font
      "leading-none",
      // Spacing
      "py-2 px-3",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-transparent"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Ys = {
  root: ({ props: e, parent: t }) => {
    var r, n, o;
    return {
      class: [
        // Font
        {
          "text-xl": e.size == "large",
          "text-2xl": e.size == "xlarge"
        },
        // Alignments
        "inline-flex items-center justify-center",
        "relative",
        // Sizes
        {
          "h-8 w-8": e.size == null || e.size == "normal",
          "w-12 h-12": e.size == "large",
          "w-16 h-16": e.size == "xlarge"
        },
        { "-ml-4": ((r = t.instance.$style) == null ? void 0 : r.name) == "avatargroup" },
        // Shapes
        {
          "rounded-lg": e.shape == "square",
          "rounded-full": e.shape == "circle"
        },
        { "border-2": ((n = t.instance.$style) == null ? void 0 : n.name) == "avatargroup" },
        // Colors
        "bg-surface-300 dark:bg-surface-700",
        { "border-white dark:border-surface-800": ((o = t.instance.$style) == null ? void 0 : o.name) == "avatargroup" }
      ]
    };
  },
  image: ({ props: e }) => ({
    class: [
      "h-full w-full",
      {
        "rounded-lg": e.shape == "square",
        "rounded-full": e.shape == "circle"
      }
    ]
  })
}, Js = {
  root: {
    class: "flex items-center"
  }
}, Qs = {
  root: ({ props: e }) => {
    var t, r;
    return {
      class: [
        // Font
        "font-bold",
        {
          "text-xs leading-[1.5rem]": e.size === null,
          "text-[0.625rem] leading-[1.25rem]": e.size === "small",
          "text-lg leading-[2.25rem]": e.size === "large",
          "text-2xl leading-[3rem]": e.size === "xlarge"
        },
        // Alignment
        "text-center inline-block",
        // Size
        "p-0 px-1",
        {
          "w-2 h-2": e.value === null,
          "min-w-[1.5rem] h-[1.5rem]": e.value !== null && e.size === null,
          "min-w-[1.25rem] h-[1.25rem]": e.size === "small",
          "min-w-[2.25rem] h-[2.25rem]": e.size === "large",
          "min-w-[3rem] h-[3rem]": e.size === "xlarge"
        },
        // Shape
        {
          "rounded-full": ((t = e.value) == null ? void 0 : t.length) === 1,
          "rounded-[0.71rem]": ((r = e.value) == null ? void 0 : r.length) !== 1
        },
        // Color
        "text-primary-contrast",
        {
          "bg-primary": e.severity == null || e.severity === "primary",
          "bg-surface-500 dark:bg-surface-400": e.severity === "secondary",
          "bg-green-500 dark:bg-green-400": e.severity === "success",
          "bg-blue-500 dark:bg-blue-400": e.severity === "info",
          "bg-orange-500 dark:bg-orange-400": e.severity === "warn",
          "bg-purple-500 dark:bg-purple-400": e.severity === "help",
          "bg-red-500 dark:bg-red-400": e.severity === "danger",
          "text-surface-0 dark:text-surface-900 bg-surface-900 dark:bg-surface-0": e.severity === "contrast"
        }
      ]
    };
  }
}, Zs = {
  root: ({ context: e }) => ({
    class: [
      // Font
      "font-bold",
      "text-xs leading-5",
      // Alignment
      "flex items-center justify-center",
      "text-center",
      // Position
      "absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 origin-top-right",
      // Size
      "m-0",
      {
        "p-0": e.nogutter || e.dot,
        "px-2": !e.nogutter && !e.dot,
        "min-w-[0.5rem] w-2 h-2": e.dot,
        "min-w-[1.5rem] h-6": !e.dot
      },
      // Shape
      {
        "rounded-full": e.nogutter || e.dot,
        "rounded-[10px]": !e.nogutter && !e.dot
      },
      // Color
      "text-primary-contrast",
      {
        "bg-primary": !e.info && !e.success && !e.warning && !e.danger && !e.help && !e.secondary,
        "bg-surface-500 dark:bg-surface-400": e.secondary,
        "bg-green-500 dark:bg-green-400": e.success,
        "bg-blue-500 dark:bg-blue-400": e.info,
        "bg-orange-500 dark:bg-orange-400": e.warning,
        "bg-purple-500 dark:bg-purple-400": e.help,
        "bg-red-500 dark:bg-red-400": e.danger
      }
    ]
  })
}, Xs = {
  root: "relative",
  mask: "bg-black/40 rounded-md"
}, ei = {
  root: {
    class: [
      // Shape
      "rounded-md",
      // Spacing
      "p-4",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      // Misc
      "overflow-x-auto"
    ]
  },
  list: {
    class: [
      // Flex & Alignment
      "flex items-center flex-nowrap",
      // Spacing
      "m-0 p-0 list-none leading-none"
    ]
  },
  itemLink: {
    class: [
      // Flex & Alignment
      "flex items-center gap-2",
      // Shape
      "rounded-md",
      // Color
      "text-surface-600 dark:text-white/70",
      // States
      "focus-visible:outline-none focus-visible:outline-offset-0",
      "focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      // Transitions
      "transition-shadow duration-200",
      // Misc
      "text-decoration-none"
    ]
  },
  itemIcon: {
    class: "text-surface-600 dark:text-white/70"
  },
  separator: {
    class: [
      // Flex & Alignment
      "flex items-center",
      // Spacing
      "mx-2",
      // Color
      "text-surface-600 dark:text-white/70"
    ]
  }
}, ti = {
  root: ({ props: e, context: t, parent: r, instance: n }) => ({
    class: [
      "relative",
      // Fluid
      { "w-full": e.fluid },
      // Alignments
      "items-center inline-flex text-center align-bottom justify-center",
      { "flex-col": (e.iconPos === "top" || e.iconPos === "bottom") && e.label },
      // Sizes & Spacing
      "leading-[normal]",
      {
        "px-3 py-2": e.size === null,
        "text-sm py-1.5 px-3": e.size === "small",
        "text-xl py-3 px-4": e.size === "large"
      },
      { "gap-2": e.label !== null },
      {
        "w-10 px-0 py-2": e.label == null && e.icon !== null
      },
      {
        "w-10 px-0 gap-0": n.hasIcon && !e.label && !e.badge,
        "rounded-[50%] h-10 [&>[data-pc-section=label]]:w-0 [&>[data-pc-section=label]]:invisible": n.hasIcon && !e.label && !e.badge && e.rounded
      },
      // Shapes
      { "shadow-lg": e.raised },
      { "rounded-md": !e.rounded, "rounded-full": e.rounded },
      { "rounded-none first:rounded-l-md last:rounded-r-md": r.instance.$name == "InputGroup" },
      // Link Button
      { "text-primary-600 bg-transparent border-transparent": e.link },
      // Plain Button
      { "text-white bg-gray-500 border border-gray-500": e.plain && !e.outlined && !e.text },
      // Plain Text Button
      { "text-surface-500": e.plain && e.text },
      // Plain Outlined Button
      { "text-surface-500 border border-gray-500": e.plain && e.outlined },
      // Text Button
      { "bg-transparent border-transparent": e.text && !e.plain },
      // Outlined Button
      { "bg-transparent border": e.outlined && !e.plain },
      // --- Severity Buttons ---
      // Primary Button
      {
        "text-surface-0": !e.link && e.severity === null && !e.text && !e.outlined && !e.plain,
        "bg-primary-700": !e.link && e.severity === null && !e.text && !e.outlined && !e.plain,
        "border border-primary-700": !e.link && e.severity === null && !e.text && !e.outlined && !e.plain
      },
      // Primary Text Button
      { "text-primary-600": e.text && e.severity === null && !e.plain },
      // Primary Outlined Button
      { "text-primary-700 border border-primary-700": e.outlined && e.severity === null && !e.plain },
      // Secondary Button
      {
        "text-surface-900 dark:text-white": e.severity === "secondary" && !e.text && !e.outlined && !e.plain,
        "bg-surface-100 dark:bg-surface-700": e.severity === "secondary" && !e.text && !e.outlined && !e.plain,
        "border border-surface-100 dark:border-surface-700": e.severity === "secondary" && !e.text && !e.outlined && !e.plain
      },
      // Secondary Text Button
      { "text-surface-500 dark:text-surface-300": e.text && e.severity === "secondary" && !e.plain },
      // Secondary Outlined Button
      { "text-surface-500 dark:text-surface-300 border border-surface-500 hover:bg-surface-300/10": e.outlined && e.severity === "secondary" && !e.plain },
      // Success Button
      {
        "text-white dark:text-success-900": e.severity === "success" && !e.text && !e.outlined && !e.plain,
        "bg-success-500 dark:bg-success-400": e.severity === "success" && !e.text && !e.outlined && !e.plain,
        "border border-success-500 dark:border-success-400": e.severity === "success" && !e.text && !e.outlined && !e.plain
      },
      // Success Text Button
      { "text-success-500 dark:text-success-400": e.text && e.severity === "success" && !e.plain },
      // Success Outlined Button
      { "text-success-500 border border-success-500 hover:bg-success-300/10": e.outlined && e.severity === "success" && !e.plain },
      // Info Button
      {
        "text-white dark:text-surface-900": e.severity === "info" && !e.text && !e.outlined && !e.plain,
        "bg-blue-500 dark:bg-info-400": e.severity === "info" && !e.text && !e.outlined && !e.plain,
        "border border-blue-500 dark:border-info-400": e.severity === "info" && !e.text && !e.outlined && !e.plain
      },
      // Info Text Button
      { "text-info-400 dark:text-info-400": e.text && e.severity === "info" && !e.plain },
      // Info Outlined Button
      { "text-info-400 border border-info-400 hover:bg-info-300/10 ": e.outlined && e.severity === "info" && !e.plain },
      // Warning Button
      {
        "text-white dark:text-surface-900": e.severity === "warn" && !e.text && !e.outlined && !e.plain,
        "bg-orange-500 dark:bg-orange-400": e.severity === "warn" && !e.text && !e.outlined && !e.plain,
        "border border-orange-500 dark:border-orange-400": e.severity === "warn" && !e.text && !e.outlined && !e.plain
      },
      // Warning Text Button
      { "text-orange-500 dark:text-orange-400": e.text && e.severity === "warn" && !e.plain },
      // Warning Outlined Button
      { "text-orange-500 border border-orange-500 hover:bg-orange-300/10": e.outlined && e.severity === "warn" && !e.plain },
      // Help Button
      {
        "text-white dark:text-surface-900": e.severity === "help" && !e.text && !e.outlined && !e.plain,
        "bg-purple-500 dark:bg-purple-400": e.severity === "help" && !e.text && !e.outlined && !e.plain,
        "border border-purple-500 dark:border-purple-400": e.severity === "help" && !e.text && !e.outlined && !e.plain
      },
      // Help Text Button
      { "text-purple-500 dark:text-purple-400": e.text && e.severity === "help" && !e.plain },
      // Help Outlined Button
      { "text-purple-500 border border-purple-500 hover:bg-purple-300/10": e.outlined && e.severity === "help" && !e.plain },
      // Danger Button
      {
        "text-white dark:text-surface-900": e.severity === "danger" && !e.text && !e.outlined && !e.plain,
        "bg-danger-500 dark:bg-danger-400": e.severity === "danger" && !e.text && !e.outlined && !e.plain,
        "border border-danger-500 dark:border-danger-400": e.severity === "danger" && !e.text && !e.outlined && !e.plain
      },
      // Danger Text Button
      { "text-danger-400 dark:text-danger-400": e.text && e.severity === "danger" && !e.plain },
      // Danger Outlined Button
      { "text-danger-400 border border-danger-400 hover:bg-danger-300/10": e.outlined && e.severity === "danger" && !e.plain },
      // Contrast Button
      {
        "text-white dark:text-surface-900": e.severity === "contrast" && !e.text && !e.outlined && !e.plain,
        "bg-surface-900 dark:bg-surface-300": e.severity === "contrast" && !e.text && !e.outlined && !e.plain,
        "border border-surface-900 dark:border-surface-300": e.severity === "contrast" && !e.text && !e.outlined && !e.plain
      },
      // Contrast Text Button
      { "text-surface-900 dark:text-surface-300": e.text && e.severity === "contrast" && !e.plain },
      // Contrast Outlined Button
      { "text-surface-900 dark:text-surface-300 border border-surface-900 dark:border-surface-300": e.outlined && e.severity === "contrast" && !e.plain },
      // --- Severity Button States ---
      "focus:outline-none focus:outline-offset-0 focus:ring-1",
      // Link
      { "focus:ring-primary-400": e.link },
      // Plain
      { "hover:bg-gray-600 hover:border-gray-600": e.plain && !e.outlined && !e.text },
      // Text & Outlined Button
      { "hover:bg-surface-300/10": e.plain && (e.text || e.outlined) },
      // Primary
      { "hover:bg-primary-600/80 hover:border-primary-600/80": !e.link && e.severity === null && !e.text && !e.outlined && !e.plain },
      { "focus:ring-primary-300": e.severity === null },
      // Text & Outlined Button
      { "hover:bg-primary-300/10": (e.text || e.outlined) && e.severity === null && !e.plain },
      // Secondary
      { "hover:bg-surface-200 dark:hover:bg-surface-600 hover:border-surface-200 dark:hover:border-surface-600": e.severity === "secondary" && !e.text && !e.outlined && !e.plain },
      { "focus:ring-surface-500 dark:focus:ring-surface-400": e.severity === "secondary" },
      // Text & Outlined Button
      { "hover:bg-surface-300/10": (e.text || e.outlined) && e.severity === "secondary" && !e.plain },
      // Success
      { "hover:bg-success-600 dark:hover:bg-success-300 hover:border-success-600 dark:hover:border-success-300": e.severity === "success" && !e.text && !e.outlined && !e.plain },
      { "focus:ring-success-500 dark:focus:ring-success-400": e.severity === "success" },
      // Text & Outlined Button
      { "hover:bg-success-300/10": (e.text || e.outlined) && e.severity === "success" && !e.plain },
      // Info
      { "hover:bg-blue-600 dark:hover:bg-info-300 hover:border-blue-600 dark:hover:border-info-300": e.severity === "info" && !e.text && !e.outlined && !e.plain },
      { "focus:ring-blue-400 dark:focus:ring-info-300": e.severity === "info" },
      // Text & Outlined Button
      { "hover:bg-info-300/10": (e.text || e.outlined) && e.severity === "info" && !e.plain },
      // Warning
      { "hover:bg-orange-600 dark:hover:bg-orange-300 hover:border-orange-600 dark:hover:border-orange-300": e.severity === "warn" && !e.text && !e.outlined && !e.plain },
      { "focus:ring-orange-500 dark:focus:ring-orange-400": e.severity === "warn" },
      // Text & Outlined Button
      { "hover:bg-orange-300/10": (e.text || e.outlined) && e.severity === "warn" && !e.plain },
      // Help
      { "hover:bg-purple-600 dark:hover:bg-purple-300 hover:border-purple-600 dark:hover:border-purple-300": e.severity === "help" && !e.text && !e.outlined && !e.plain },
      { "focus:ring-purple-500 dark:focus:ring-purple-400": e.severity === "help" },
      // Text & Outlined Button
      { "hover:bg-purple-300/10": (e.text || e.outlined) && e.severity === "help" && !e.plain },
      // Danger
      { "hover:bg-danger-600 dark:hover:bg-danger-300 hover:border-danger-600 dark:hover:border-danger-300": e.severity === "danger" && !e.text && !e.outlined && !e.plain },
      { "focus:ring-danger-500 dark:focus:ring-danger-400": e.severity === "danger" },
      // Text & Outlined Button
      { "hover:bg-danger-300/10": (e.text || e.outlined) && e.severity === "danger" && !e.plain },
      // Contrast
      { "hover:bg-surface-800 dark:hover:bg-surface-200 hover:border-surface-800 dark:hover:border-surface-200": e.severity === "contrast" && !e.text && !e.outlined && !e.plain },
      { "focus:ring-surface-500 dark:focus:ring-surface-0": e.severity === "contrast" },
      // Text & Outlined Button
      { "hover:bg-surface-900/10 dark:hover:bg-[rgba(255,255,255,0.03)]": (e.text || e.outlined) && e.severity === "contrast" && !e.plain },
      // Disabled
      { "opacity-60 pointer-events-none cursor-default": t.disabled },
      // Transitions
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer overflow-hidden select-none",
      // Badge
      "[&>[data-pc-name=badge]]:min-w-4 [&>[data-pc-name=badge]]:h-4 [&>[data-pc-name=badge]]:leading-4"
    ]
  }),
  label: ({ props: e }) => ({
    class: [
      "duration-200",
      "font-medium",
      {
        "hover:underline": e.link
      },
      { "flex-1": e.label !== null, "invisible w-0": e.label == null }
    ]
  }),
  icon: ({ props: e }) => ({
    class: [
      "text-base leading-4",
      "mx-0",
      {
        "mr-2": e.iconPos == "left" && e.label != null,
        "ml-2 order-1": e.iconPos == "right" && e.label != null,
        "order-2": e.iconPos == "bottom" && e.label != null
      }
    ]
  }),
  loadingIcon: ({ props: e }) => ({
    class: [
      "h-4 w-4",
      "mx-0",
      {
        "mr-2": e.iconPos == "left" && e.label != null,
        "ml-2 order-1": e.iconPos == "right" && e.label != null,
        "mb-2": e.iconPos == "top" && e.label != null,
        "mt-2": e.iconPos == "bottom" && e.label != null
      },
      "animate-spin"
    ]
  }),
  badge: ({ props: e }) => ({
    class: [{ "ml-2 w-4 h-4 leading-none flex items-center justify-center": e.badge }]
  })
}, ri = {
  root: {
    class: [
      "[&>[data-pc-name=button]]:m-0",
      "[&>[data-pc-name=button]]:border-r-none",
      "[&>[data-pc-name=button]:nth-last-child(n+2)]:rounded-tr-none",
      "[&>[data-pc-name=button]:nth-last-child(n+2)]:rounded-br-none",
      "[&>[data-pc-name=button]:nth-child(n+2)]:rounded-tl-none",
      "[&>[data-pc-name=button]:nth-child(n+2)]:rounded-bl-none"
    ]
  }
}, ni = {
  root: {
    class: [
      //Flex
      "flex flex-col",
      //Shape
      "rounded-[0.25rem]",
      "shadow-md",
      //Color
      "bg-surface-0 dark:bg-surface-800",
      "text-surface-700 dark:text-surface-0"
    ]
  },
  body: {
    class: [
      //Flex
      "flex flex-col",
      "gap-4",
      "p-6"
    ]
  },
  caption: {
    class: [
      //Flex
      "flex flex-col",
      "gap-2"
    ]
  },
  title: {
    class: "text-xl font-semibold mb-0"
  },
  subtitle: {
    class: [
      //Font
      "font-normal",
      //Spacing
      "mb-0",
      //Color
      "text-surface-600 dark:text-surface-0/60"
    ]
  },
  content: {
    class: "p-0"
  },
  footer: {
    class: "p-0"
  }
}, oi = {
  root: {
    class: [
      // Flexbox
      "flex flex-col"
    ]
  },
  contentContainer: {
    class: [
      // Flexbox & Overflow
      "flex flex-col overflow-auto"
    ]
  },
  content: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex",
      // Orientation
      {
        "flex-row": e.orientation !== "vertical",
        "flex-col": e.orientation == "vertical"
      },
      "[&>[data-pc-extend=button]]:self-center"
    ]
  }),
  viewport: {
    class: [
      // Overflow & Width
      "overflow-hidden w-full"
    ]
  },
  itemList: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex",
      // Orientation & Sizing
      {
        "flex-row": e.orientation !== "vertical",
        "flex-col h-full": e.orientation == "vertical"
      }
    ]
  }),
  item: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex shrink-0 grow ",
      // Size
      {
        "w-full sm:w-[50%] md:w-[33.333333333333336%]": e.orientation !== "vertical",
        "w-full h-full": e.orientation == "vertical"
      }
    ]
  }),
  itemClone: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex shrink-0 grow",
      "unvisible",
      // Size
      {
        "w-full sm:w-[50%] md:w-[33.333333333333336%]": e.orientation !== "vertical",
        "w-full h-full": e.orientation == "vertical"
      }
    ]
  }),
  indicatorList: {
    class: [
      // Flexbox & Alignment
      "flex flex-row justify-center flex-wrap"
    ]
  },
  indicator: {
    class: [
      // Spacing
      "mr-2 mb-2"
    ]
  },
  indicatorButton: ({ context: e }) => ({
    class: [
      // Sizing & Shape
      "w-8 h-2 rounded-md",
      // Transitions
      "transition duration-200",
      // Focus Styles
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Color & Background
      {
        "bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600": !e.highlighted,
        "bg-primary hover:bg-primary-emphasis": e.highlighted
      }
    ]
  })
}, ai = {
  root: ({ props: e, state: t }) => ({
    class: [
      "relative",
      // Flex
      {
        flex: e.fluid,
        "inline-flex": !e.fluid
      },
      // Shape
      "rounded-md",
      // Color and Background
      { "bg-surface-0 dark:bg-surface-950": !e.disabled },
      "border",
      { "border-surface-300 dark:border-surface-600": !e.invalid },
      // Invalid State
      "invalid:focus:ring-red-200",
      "invalid:hover:border-red-500",
      { "border-red-500 dark:border-red-400": e.invalid },
      // Transitions
      "transition-all",
      "duration-200",
      // States
      { "hover:border-surface-400 dark:hover:border-surface-600": !e.invalid },
      { "outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400": t.focused },
      // Misc
      "cursor-pointer",
      "select-none",
      { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  label: ({ props: e, parent: t }) => {
    var r, n, o, a;
    return {
      class: [
        //Font
        "leading-[normal]",
        // Display
        "block",
        "flex-auto",
        // Color and Background
        "bg-transparent",
        "border-0",
        { "text-surface-800 dark:text-white/80": e.modelValue != null, "text-surface-400 dark:text-surface-500": e.modelValue == null },
        {
          "placeholder:text-transparent dark:placeholder:text-transparent": ((r = t.instance) == null ? void 0 : r.$name) == "FloatLabel",
          "!text-transparent dark:!text-transparent": ((n = t.instance) == null ? void 0 : n.$name) == "FloatLabel" && e.modelValue == null || ((o = e.modelValue) == null ? void 0 : o.length) == 0
        },
        // Sizing and Spacing
        "w-[1%]",
        "py-2 px-3",
        { "pr-7": e.showClear },
        //Shape
        "rounded-none",
        // Transitions
        "transition",
        "duration-200",
        // States
        "focus:outline-none focus:shadow-none",
        // Filled State *for FloatLabel
        { filled: ((a = t.instance) == null ? void 0 : a.$name) == "FloatLabel" && e.modelValue !== null },
        // Misc
        "relative",
        "cursor-pointer",
        "overflow-hidden overflow-ellipsis",
        "whitespace-nowrap",
        "appearance-none"
      ]
    };
  },
  dropdown: {
    class: [
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",
      // Color and Background
      "bg-transparent",
      "text-surface-500",
      // Size
      "w-12",
      // Shape
      "rounded-r-md"
    ]
  },
  overlay: {
    class: [
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      // Shape
      "border border-surface-300 dark:border-surface-700",
      "rounded-md",
      "shadow-md"
    ]
  },
  list: {
    class: "flex flex-col list-none p-0 m-0 gap-[2px] min-w-full"
  },
  option: ({ context: e }) => ({
    class: [
      //Shape
      "rounded-[4px]",
      // Spacing
      "first:mt-0 mt-[2px]",
      // Colors
      {
        "text-surface-500 dark:text-white/70": !e.focused && !e.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90": e.focused && !e.active,
        "bg-highlight text-highlight-contrast": e.focused && e.active || e.active || !e.focused && e.active
      },
      // Transitions
      "transition-shadow",
      "duration-200",
      // States
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.active,
        "hover:bg-highlight-emphasis": e.active
      },
      // Disabled
      { "opacity-60 pointer-events-none cursor-default": e.disabled }
    ]
  }),
  optionContent: {
    class: [
      "relative",
      "leading-[normal]",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      // Misc
      "no-underline",
      "overflow-hidden",
      "cursor-pointer",
      "select-none"
    ]
  },
  groupIcon: {
    class: [
      // Alignment
      "ml-auto"
    ]
  },
  optionList: {
    class: [
      "min-w-full",
      // Spacing
      "p-1",
      "m-0",
      "list-none",
      // Shape
      "shadow-none sm:shadow-md",
      "rounded-md",
      "border border-surface-200 dark:border-surface-700",
      // Position
      "static sm:absolute",
      "z-10",
      // Color
      "bg-surface-0 dark:bg-surface-900"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, si = {
  root: {
    class: [
      "relative",
      // Alignment
      "inline-flex",
      "align-bottom",
      // Size
      "w-5",
      "h-5",
      // Misc
      "cursor-pointer",
      "select-none"
    ]
  },
  box: ({ props: e, context: t }) => ({
    class: [
      // Alignment
      "flex",
      "items-center",
      "justify-center",
      // Size
      "w-5",
      "h-5",
      // Shape
      "rounded",
      "border",
      // Colors
      {
        "border-surface-300 dark:border-surface-700": !t.checked && !e.invalid,
        "bg-surface-0 dark:bg-surface-950": !t.checked && !e.invalid && !e.disabled,
        "border-secondary-400 bg-secondary-400": t.checked
      },
      // Invalid State
      "invalid:focus:ring-danger-400",
      "invalid:hover:border-danger-400",
      { "border-danger-400 dark:border-danger-400": e.invalid },
      // States
      {
        "peer-hover:border-surface-400 dark:peer-hover:border-surface-600": !e.disabled && !t.checked && !e.invalid,
        "peer-hover:bg-primary-emphasis peer-hover:border-primary-emphasis": !e.disabled && t.checked,
        "peer-focus-visible:z-10 peer-focus-visible:outline-none peer-focus-visible:outline-offset-0 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-secondary-200": !e.disabled,
        "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled
      },
      { "[&>svg]:text-primary-contrast [&>svg]:w-[0.875rem] [&>svg]:h-[0.875rem]": t.checked },
      // Transitions
      "transition-colors",
      "duration-200"
    ]
  }),
  input: {
    class: [
      "peer",
      // Size
      "w-full ",
      "h-full",
      // Position
      "absolute",
      "top-0 left-0",
      "z-10",
      // Spacing
      "p-0",
      "m-0",
      // Shape
      "opacity-0",
      "rounded",
      "outline-none",
      "border border-surface-300 dark:border-surface-700",
      // Misc
      "appearance-none",
      "cursor-pointer"
    ]
  },
  icon: ({ context: e, state: t }) => ({
    class: [
      // Size
      "w-[0.875rem]",
      "h-[0.875rem]",
      // Colors
      {
        "text-primary-contrast": e.checked,
        "text-primary": t.d_indeterminate
      },
      // Transitions
      "transition-all",
      "duration-200"
    ]
  })
}, ii = {
  root: {
    class: [
      // Flexbox
      "inline-flex items-center",
      // Spacing
      "px-3 py-1 gap-2",
      // Shape
      "rounded-[16px]",
      // Colors
      "text-surface-700 dark:text-white",
      "bg-surface-100 dark:bg-surface-700"
    ]
  },
  label: {
    class: "leading-6 m-0"
  },
  icon: {
    class: "leading-6 mr-2"
  },
  image: {
    class: ["w-8 h-8 -ml-2 mr-2", "rounded-full"]
  },
  removeIcon: {
    class: [
      "inline-block",
      // Shape
      "rounded-md leading-6",
      // Size
      "w-4 h-4",
      // Transition
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer"
    ]
  }
}, li = {
  root: ({ props: e }) => ({
    class: [
      // Display
      "inline-block",
      // Misc
      { "opacity-60 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  preview: {
    class: [
      // Font
      "text-base leading-none",
      // Spacing
      "m-0",
      "p-0",
      //Size
      "w-6 h-6",
      // Shape
      "rounded-md",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-300 dark:border-surface-700",
      // States
      "hover:border-surface-400 dark:hover:border-surface-600",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
      // Transition
      "transition-colors duration-200",
      // Misc
      "cursor-pointer"
    ]
  },
  panel: ({ props: e }) => ({
    class: [
      // Position & Size
      {
        "relative h-[166px] w-[193px]": e.inline,
        "absolute h-[166px] w-[193px]": !e.inline
      },
      // Shape
      "shadow-md border",
      // Colors
      "bg-surface-800 dark:bg-surface-900 border-surface-600 dark:border-surface-700"
    ]
  }),
  colorSelector: {
    class: [
      // Position
      "absolute top-[8px] left-[8px]",
      // Size
      "h-[150px] w-[150px]"
    ]
  },
  colorbackground: {
    class: [
      // Size
      "h-[150px] w-[150px]"
    ],
    style: "background:linear-gradient(to top,#000 0%,rgba(0,0,0,0) 100%),linear-gradient(to right,#fff 0%,rgba(255,255,255,0) 100%)"
  },
  colorHandle: {
    class: [
      "absolute",
      // Shape
      "rounded-full border border-solid",
      // Size
      "h-[10px] w-[10px]",
      // Spacing
      "-ml-[5px] -mt-[5px]",
      // Colors
      "border-white",
      // Misc
      "cursor-pointer opacity-85"
    ]
  },
  hue: {
    class: [
      // Position
      "absolute top-[8px] left-[167px]",
      // Size
      "h-[150px] w-[17px]",
      // Opacity
      "opacity-85"
    ],
    style: "background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)"
  },
  hueHandle: {
    class: [
      // Position
      "absolute left-0 -ml-[2px] -mt-[5px]",
      // Size
      "h-[10px] w-[21px]",
      // Shape
      "border-solid border-2",
      // Misc
      "cursor-pointer opacity-85"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, ci = {
  icon: "w-8 h-8 text-[2rem] mr-2"
}, ui = {
  root: {
    class: [
      // Shape
      "rounded-lg",
      "shadow-lg",
      "border-0",
      // Positioning
      "z-40 transform origin-center",
      "mt-3 absolute left-0 top-0",
      '[&[data-p-confirmpopup-flipped="true"]]:mb-3 [&[data-p-confirmpopup-flipped="true"]]:-mt-3',
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80",
      // Before: Arrow
      "before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-[10px] before:border-x-[10px] before:border-b-[10px] before:border-t-0 before:border-b-surface-200 dark:before:border-b-surface-700",
      "after:absolute after:w-0 after:-top-[0.54rem] after:left-[4px] after:h-0 after:border-transparent after:border-solid after:ml-[8px] after:border-x-[8px] after:border-b-[8px] after:border-t-0 after:border-b-surface-0 dark:after:border-b-surface-900",
      // Flipped: Arrow
      '[&[data-p-confirmpopup-flipped="true"]]:before:-bottom-3 [&[data-p-confirmpopup-flipped="true"]]:before:top-auto [&[data-p-confirmpopup-flipped="true"]]:before:border-b-0 [&[data-p-confirmpopup-flipped="true"]]:before:border-t-[10px] [&[data-p-confirmpopup-flipped="true"]]:before:border-t-surface-200 dark:[&[data-p-confirmpopup-flipped="true"]]:before:border-t-surface-700',
      '[&[data-p-confirmpopup-flipped="true"]]:after:-bottom-[0.54rem] [&[data-p-confirmpopup-flipped="true"]]:after:top-auto [&[data-p-confirmpopup-flipped="true"]]:after:border-b-0 [&[data-p-confirmpopup-flipped="true"]]:after:border-t-[8px] [&[data-p-confirmpopup-flipped="true"]]:after:border-t-surface-0 dark:[&[data-p-confirmpopup-flipped="true"]]:after:border-t-surface-900'
    ]
  },
  content: {
    class: ["p-4 items-center flex", "rounded-t-lg", "border-x border-t last:border-b border-surface-200 dark:border-surface-700"]
  },
  icon: {
    class: "text-2xl mr-4"
  },
  footer: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-end",
      "shrink-0",
      "text-right",
      "gap-2",
      // Spacing
      "px-4",
      "pb-4",
      // Shape
      "border-t-0",
      "rounded-b-lg",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80",
      "border-x border-b border-surface-200 dark:border-surface-700"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, di = {
  root: {
    class: [
      // Sizing and Shape
      "min-w-[12.5rem]",
      "rounded-md",
      "shadow-md",
      // Spacing
      "p-1",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      "border border-surface-200 dark:border-surface-700"
    ]
  },
  rootList: {
    class: [
      // Spacings and Shape
      "flex flex-col",
      "list-none",
      "m-0",
      "p-0",
      "outline-none"
    ]
  },
  item: {
    class: "relative my-[2px] [&:first-child]:mt-0"
  },
  itemContent: ({ context: e }) => ({
    class: [
      //Shape
      "rounded-[4px]",
      // Colors
      {
        "text-surface-500 dark:text-white/70": !e.focused && !e.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90": e.focused && !e.active,
        "bg-highlight text-highlight-contrast": e.focused && e.active || e.active || !e.focused && e.active
      },
      // Transitions
      "transition-shadow",
      "duration-200",
      // States
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.active,
        "hover:bg-highlight-emphasis": e.active
      },
      // Disabled
      { "opacity-60 pointer-events-none cursor-default": e.disabled }
    ]
  }),
  itemLink: {
    class: [
      "relative",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      // Misc
      "no-underline",
      "overflow-hidden",
      "cursor-pointer",
      "select-none"
    ]
  },
  itemIcon: {
    class: [
      // Spacing
      "mr-2"
    ]
  },
  itemLabel: {
    class: ["leading-none"]
  },
  submenu: ({ props: e }) => ({
    class: [
      "flex flex-col",
      // Size
      "w-full sm:w-48",
      // Spacing
      "p-1",
      "m-0",
      "list-none",
      // Shape
      "shadow-md",
      "rounded-md",
      "dark:border dark:border-surface-700",
      // Position
      "static sm:absolute",
      "z-10",
      { "sm:absolute sm:left-full sm:top-0": e.level > 1 },
      // Color
      "bg-surface-0 dark:bg-surface-900"
    ]
  }),
  submenuIcon: {
    class: ["ml-auto"]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-700"
  },
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-250"
  }
}, fi = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      { "flex flex-col": e.scrollable && e.scrollHeight === "flex" },
      // Size
      { "h-full": e.scrollable && e.scrollHeight === "flex" }
    ]
  }),
  mask: {
    class: [
      // Position
      "absolute",
      "top-0 left-0",
      "z-20",
      // Flex & Alignment
      "flex items-center justify-center",
      // Size
      "w-full h-full",
      // Color
      "bg-surface-100/40 dark:bg-surface-900/40",
      // Transition
      "transition duration-200"
    ]
  },
  loadingIcon: {
    class: "w-8 h-8 animate-spin"
  },
  tableContainer: ({ props: e }) => ({
    class: [
      { relative: e.scrollable, "flex flex-col grow": e.scrollable && e.scrollHeight === "flex" },
      // Size
      { "h-full": e.scrollable && e.scrollHeight === "flex" }
    ]
  }),
  header: ({ props: e }) => ({
    class: [
      "font-bold",
      // Shape
      e.showGridlines ? "border-x border-t border-b-0" : "border-y border-x-0",
      // Spacing
      "p-4",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-200 dark:border-surface-700",
      "text-surface-700 dark:text-white/80"
    ]
  }),
  table: {
    class: "w-full border-spacing-0 border-separate"
  },
  thead: ({ context: e }) => ({
    class: [
      {
        "bg-surface-0 dark:bg-surface-900 top-0 z-40 sticky": e.scrollable
      }
    ]
  }),
  tbody: ({ instance: e, context: t }) => ({
    class: [
      {
        "sticky z-20": e.frozenRow && t.scrollable
      },
      "bg-surface-0 dark:bg-surface-800"
    ]
  }),
  tfoot: ({ context: e }) => ({
    class: [
      {
        "bg-surface-0 bottom-0 z-0": e.scrollable
      }
    ]
  }),
  footer: {
    class: [
      "font-bold",
      // Shape
      "border-t-0 border-b border-x-0 dark:border-b-0",
      // Spacing
      "p-4",
      // Color
      "bg-surface-0 dark:bg-surface-800",
      "border-surface-200 dark:border-surface-700",
      "text-surface-700 dark:text-white/80"
    ]
  },
  column: {
    headerCell: ({ context: e, props: t }) => ({
      class: [
        "font-semibold dark:font-normal",
        "leading-[normal]",
        // Position
        { "sticky z-20 border-b": t.frozen || t.frozen === "" },
        { relative: e.resizable },
        // Alignment
        "text-left",
        // Shape
        { "first:border-l border-y border-r": e == null ? void 0 : e.showGridlines },
        "border-x-0 border-y-2 border-solid",
        // Spacing
        (e == null ? void 0 : e.size) === "small" ? "py-[0.375rem] px-2" : (e == null ? void 0 : e.size) === "large" ? "py-[0.9375rem] px-5" : "py-3 px-4",
        // Color
        (t.sortable === "" || t.sortable) && e.sorted ? "bg-highlight" : "bg-surface-50 text-surface-700 dark:text-surface-0/50 dark:bg-surface-800/50",
        "border-surface-200 dark:border-surface-900",
        // States
        { "hover:bg-surface-100 dark:hover:bg-surface-800/50": (t.sortable === "" || t.sortable) && !(e != null && e.sorted) },
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        // Transition
        { "transition duration-200": t.sortable === "" || t.sortable },
        // Misc
        { "cursor-pointer": t.sortable === "" || t.sortable },
        {
          "overflow-hidden whitespace-nowrap border-y bg-clip-padding": e == null ? void 0 : e.resizable
          // Resizable
        }
      ]
    }),
    columnHeaderContent: {
      class: "flex items-center gap-2"
    },
    sort: ({ context: e }) => ({
      class: [e.sorted ? "text-primary-500" : "text-surface-700", e.sorted ? "dark:text-primary-400" : "dark:text-white/80"]
    }),
    bodyCell: ({ props: e, context: t, state: r, parent: n }) => {
      var o, a, s;
      return {
        class: [
          // Font
          "leading-[normal]",
          //Position
          { "sticky box-border border-b": n.instance.frozenRow },
          { "sticky box-border border-b z-20": e.frozen || e.frozen === "" },
          // Alignment
          "text-left",
          // Shape
          "border-0 border-b dark:border-b-0 border-solid",
          { "first:border-l border-r border-b": t == null ? void 0 : t.showGridlines },
          { "bg-surface-0 dark:bg-surface-900": n.instance.frozenRow || e.frozen || e.frozen === "" },
          // Spacing
          { "py-[0.375rem] px-2": (t == null ? void 0 : t.size) === "small" && !r.d_editing },
          { "py-[0.9375rem] px-5": (t == null ? void 0 : t.size) === "large" && !r.d_editing },
          { "py-3 px-4": (t == null ? void 0 : t.size) !== "large" && (t == null ? void 0 : t.size) !== "small" && !r.d_editing },
          { "py-[0.6rem] px-2": r.d_editing },
          // Color
          "border-surface-200 dark:border-surface-700",
          {
            "overflow-hidden whitespace-nowrap border-y bg-clip-padding": (s = (a = (o = n.instance) == null ? void 0 : o.$parentInstance) == null ? void 0 : a.$parentInstance) == null ? void 0 : s.resizableColumns
            // Resizable
          }
        ]
      };
    },
    footerCell: ({ context: e }) => ({
      class: [
        // Font
        "font-bold",
        // Alignment
        "text-left",
        // Shape
        "border-0 border-b border-solid",
        { "border-x border-y": e == null ? void 0 : e.showGridlines },
        // Spacing
        (e == null ? void 0 : e.size) === "small" ? "p-2" : (e == null ? void 0 : e.size) === "large" ? "p-5" : "p-4",
        // Color
        "border-surface-200 dark:border-surface-700",
        "text-surface-700 dark:text-white/80",
        "bg-surface-0 dark:bg-surface-900"
      ]
    }),
    sortIcon: ({ context: e }) => ({
      class: ["ml-2", e.sorted ? "text-inherit" : "text-surface-700 dark:text-white/70"]
    }),
    columnFilter: {
      class: "inline-flex items-center ml-auto font-normal"
    },
    filterOverlay: {
      class: [
        "flex flex-col gap-2",
        // Position
        "absolute top-0 left-0",
        // Shape
        "border-0 dark:border",
        "rounded-md",
        "shadow-md",
        // Size
        "min-w-[12.5rem]",
        // Color
        "bg-surface-0 dark:bg-surface-900",
        "text-surface-800 dark:text-white/80",
        "dark:border-surface-700"
      ]
    },
    filterConstraintList: {
      class: "m-0 p-0 py-3 list-none"
    },
    filterConstraint: ({ context: e }) => ({
      class: [
        // Font
        "font-normal",
        "leading-none",
        // Position
        "relative",
        // Shape
        "border-0",
        "rounded-none",
        // Spacing
        "m-0",
        "py-3 px-5",
        // Color
        { "text-surface-700 dark:text-white/80": !(e != null && e.highlighted) },
        { "bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-white/80": !(e != null && e.highlighted) },
        { "bg-highlight": e == null ? void 0 : e.highlighted },
        //States
        { "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !(e != null && e.highlighted) },
        { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]": !(e != null && e.highlighted) },
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        // Transitions
        "transition-shadow",
        "duration-200",
        // Misc
        "cursor-pointer",
        "overflow-hidden",
        "whitespace-nowrap"
      ]
    }),
    filterOperator: {
      class: [
        // Shape
        "rounded-t-md",
        // Color
        "text-surface-700 dark:text-white/80",
        "bg-surface-0 dark:bg-surface-700",
        "[&>[data-pc-name=pcfilteroperatordropdown]]:w-full"
      ]
    },
    filter: ({ instance: e }) => ({
      class: [{ "flex items-center w-full gap-2": e.display === "row", "inline-flex ml-auto": e.display === "menu" }]
    }),
    filterRule: "flex flex-col gap-2",
    filterButtonbar: "flex items-center justify-between p-0",
    filterAddButtonContainer: "[&>[data-pc-name=pcfilteraddrulebutton]]:w-full",
    rowToggleButton: {
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left",
        // Spacing
        "m-0 p-0",
        // Size
        "w-8 h-8",
        // Shape
        "border-0 rounded-full",
        // Color
        "text-surface-500 dark:text-white/70",
        "bg-transparent",
        "focus-visible:outline-none focus-visible:outline-offset-0",
        "focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        // Transition
        "transition duration-200",
        // Misc
        "overflow-hidden",
        "cursor-pointer select-none"
      ]
    },
    columnResizer: {
      class: [
        "block",
        // Position
        "absolute top-0 right-0",
        // Sizing
        "w-2 h-full",
        // Spacing
        "m-0 p-0",
        // Color
        "border border-transparent",
        // Misc
        "cursor-col-resize"
      ]
    },
    transition: {
      class: "p-4 flex flex-col gap-2",
      enterFromClass: "opacity-0 scale-y-[0.8]",
      enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
      leaveActiveClass: "transition-opacity duration-100 ease-linear",
      leaveToClass: "opacity-0"
    }
  },
  bodyRow: ({ context: e, props: t, parent: r }) => ({
    class: [
      // Color
      { "bg-highlight": e.selected },
      { "bg-surface-0 text-surface-600 dark:text-white/80 dark:bg-surface-900": !e.selected },
      { "font-bold bg-surface-0 dark:bg-surface-900 z-20": t.frozenRow },
      { "odd:bg-surface-0 odd:text-surface-600 dark:odd:text-surface-0 dark:even:text-surface-0 dark:odd:bg-surface-800 even:bg-surface-50 even:text-surface-600 dark:even:bg-surface-900": e.stripedRows },
      // State
      { "hover:bg-surface-300/20 dark:hover:bg-surface-700/50": t.selectionMode && !e.selected || r.instance.rowHover },
      // Transition
      { "transition duration-200": t.selectionMode && !e.selected || t.rowHover },
      // Misc
      { "cursor-pointer": t.selectionMode || r.instance.rowHover }
    ]
  }),
  rowExpansion: {
    class: "bg-surface-0 dark:bg-surface-900 text-surface-600 dark:text-white/80"
  },
  rowGroupHeader: {
    class: ["sticky z-20", "bg-surface-0 text-surface-600 dark:text-white/70", "dark:bg-surface-900"]
  },
  rowGroupFooter: {
    class: ["sticky z-20", "bg-surface-0 text-surface-600 dark:text-white/70", "dark:bg-surface-900"]
  },
  rowToggleButton: {
    class: [
      "relative",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      "text-left",
      // Spacing
      "m-0 p-0",
      // Size
      "w-8 h-8",
      // Shape
      "border-0 rounded-full",
      // Color
      "text-surface-500 dark:text-white/70",
      "bg-transparent",
      "focus-visible:outline-none focus-visible:outline-offset-0",
      "focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      // Transition
      "transition duration-200",
      // Misc
      "overflow-hidden",
      "cursor-pointer select-none"
    ]
  },
  rowToggleIcon: {
    class: "inline-block w-4 h-4"
  },
  columnResizeIndicator: {
    class: "absolute hidden w-[2px] z-20 bg-primary"
  }
}, pi = {
  content: {
    class: [
      // Spacing
      "p-0",
      // Shape
      "border-0",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900"
    ]
  },
  header: {
    class: [
      "font-semibold",
      // Spacing
      "py-3 px-4",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-surface-00 dark:bg-surface-900",
      "border-b border-surface-200 dark:border-surface-700"
    ]
  }
}, co = {
  root: ({ props: e }) => ({
    class: [
      // Display and Position
      {
        flex: e.fluid,
        "inline-flex": !e.fluid
      },
      "max-w-full",
      "relative"
    ]
  }),
  pcInput: ({ props: e, parent: t }) => {
    var r;
    return {
      root: {
        class: [
          // Display
          "flex-auto w-[1%]",
          // Font
          "leading-none",
          // Colors
          "text-surface-600 dark:text-surface-200",
          "placeholder:text-surface-400 dark:placeholder:text-surface-500",
          { "bg-surface-0 dark:bg-surface-950": !e.disabled },
          "border",
          { "border-surface-300 dark:border-surface-600": !e.invalid },
          // Invalid State
          "invalid:focus:ring-red-200",
          "invalid:hover:border-red-500",
          { "border-red-500 dark:border-red-400": e.invalid },
          // Spacing
          "m-0 py-2 px-3",
          // Shape
          "appearance-none",
          { "rounded-md": !e.showIcon || e.iconDisplay == "input" },
          { "rounded-l-md  flex-1 pr-9": e.showIcon && e.iconDisplay !== "input" },
          { "rounded-md flex-1 pr-9": e.showIcon && e.iconDisplay === "input" },
          // Transitions
          "transition-colors",
          "duration-200",
          // States
          {
            "hover:border-surface-400 dark:hover:border-surface-600": !e.disabled && !e.invalid,
            "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10": !e.disabled,
            "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled
          },
          // Filled State *for FloatLabel
          { filled: ((r = t.instance) == null ? void 0 : r.$name) == "FloatLabel" && e.modelValue !== null }
        ]
      }
    };
  },
  dropdownIcon: {
    class: ["absolute top-1/2 -mt-2", "text-surface-600 dark:text-surface-200", "right-3"]
  },
  dropdown: {
    class: [
      "relative",
      // Alignments
      "items-center inline-flex text-center align-bottom justify-center",
      // Shape
      "rounded-r-md",
      // Size
      "py-2 px-0",
      "w-10",
      "leading-[normal]",
      // Colors
      "border border-l-0 border-surface-300 dark:border-surface-600",
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1",
      "hover:bg-primary-hover hover:border-primary-hover",
      "focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  },
  inputIconContainer: "absolute cursor-pointer top-1/2 right-3 -mt-3",
  inputIcon: "inline-block text-base",
  panel: ({ props: e }) => ({
    class: [
      // Display & Position
      {
        absolute: !e.inline,
        "inline-block": e.inline
      },
      // Size
      { "w-auto p-3 ": !e.inline },
      { "min-w-[80vw] w-auto p-3 ": e.touchUI },
      { "p-3 min-w-full": e.inline },
      // Shape
      "border rounded-lg",
      {
        "shadow-md": !e.inline
      },
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-200 dark:border-surface-700",
      //misc
      { "overflow-x-auto": e.inline }
    ]
  }),
  header: {
    class: [
      //Font
      "font-medium",
      // Flexbox and Alignment
      "flex items-center justify-between",
      // Spacing
      "p-0 pb-2",
      "m-0",
      // Shape
      "border-b",
      "rounded-t-md",
      // Colors
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-200 dark:border-surface-700"
    ]
  },
  title: {
    class: [
      // Text
      "leading-7",
      "mx-auto my-0"
    ]
  },
  selectMonth: {
    class: [
      // Font
      "text-base leading-[normal]",
      "font-medium",
      //shape
      "rounded-md",
      // Colors
      "text-surface-700 dark:text-white/80",
      // Transitions
      "transition duration-200",
      // Spacing
      "p-1",
      "m-0 mr-2",
      // States
      "hover:text-primary-500 dark:hover:text-primary-400",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
      // Misc
      "cursor-pointer"
    ]
  },
  selectYear: {
    class: [
      // Font
      "text-base leading-[normal]",
      "font-medium",
      //shape
      "rounded-md",
      // Colors
      "text-surface-700 dark:text-white/80",
      // Transitions
      "transition duration-200",
      // Spacing
      "p-1",
      "m-0 mr-2",
      // States
      "hover:text-primary-500 dark:hover:text-primary-400",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
      // Misc
      "cursor-pointer"
    ]
  },
  table: {
    class: [
      // Font
      "text-base leading-[normal]",
      // Size & Shape
      "border-collapse",
      "w-full",
      // Spacing
      "m-0 mt-2"
    ]
  },
  tableHeaderCell: {
    class: [
      // Spacing
      "p-1",
      "font-medium"
    ]
  },
  weekHeader: {
    class: ["leading-5", "text-surface-600 dark:text-white/70", "opacity-60 cursor-default"]
  },
  weekNumber: {
    class: ["text-surface-600 dark:text-white/70", "opacity-60 cursor-default"]
  },
  weekday: {
    class: [
      // Colors
      "text-surface-500 dark:text-white/60",
      "p-1"
    ]
  },
  dayCell: {
    class: [
      // Spacing
      "p-1"
    ]
  },
  weekLabelContainer: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      "mx-auto",
      // Shape & Size
      "w-8 h-8",
      "rounded-full",
      "border-transparent border",
      "leading-[normal]",
      // Colors
      "opacity-60 cursor-default"
    ]
  },
  dayView: "w-full",
  day: ({ context: e }) => ({
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      "mx-auto",
      // Shape & Size
      "w-8 h-8",
      "rounded-full",
      "border-transparent border",
      "leading-[normal]",
      // Colors
      {
        "bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-white/70": e.date.today && !e.selected && !e.disabled,
        "bg-transparent text-surface-600 dark:text-white/70": !e.selected && !e.disabled && !e.date.today,
        "bg-highlight": e.selected && !e.disabled
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
      {
        "hover:bg-surface-50 dark:hover:bg-surface-500/10": !e.selected && !e.disabled
      },
      {
        "opacity-60 cursor-default": e.disabled,
        "cursor-pointer": !e.disabled
      }
    ]
  }),
  monthView: {
    class: [
      // Spacing
      "mt-2"
    ]
  },
  month: ({ context: e }) => ({
    class: [
      // Flexbox and Alignment
      "inline-flex items-center justify-center",
      // Size
      "w-1/3",
      "p-1",
      // Shape
      "rounded-md",
      // Colors
      {
        "text-surface-600 dark:text-white/70 bg-transparent": !e.selected && !e.disabled,
        "bg-highlight": e.selected && !e.disabled
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.selected && !e.disabled
      },
      // Misc
      "cursor-pointer"
    ]
  }),
  yearView: {
    class: [
      // Spacing
      "mt-2"
    ]
  },
  year: ({ context: e }) => ({
    class: [
      // Flexbox and Alignment
      "inline-flex items-center justify-center",
      // Size
      "w-1/2",
      "p-1",
      // Shape
      "rounded-md",
      // Colors
      {
        "text-surface-600 dark:text-white/70 bg-transparent": !e.selected && !e.disabled,
        "bg-highlight": e.selected && !e.disabled
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10",
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.selected && !e.disabled
      },
      // Misc
      "cursor-pointer"
    ]
  }),
  timePicker: {
    class: [
      // Flexbox
      "flex",
      "justify-center items-center",
      // Borders
      "border-t-1",
      "border-solid border-surface-200",
      // Spacing
      "pt-2 mt-2"
    ]
  },
  separatorContainer: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",
      // Spacing
      "px-2"
    ]
  },
  separator: {
    class: [
      // Text
      "text-xl"
    ]
  },
  hourPicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",
      // Spacing
      "px-2"
    ]
  },
  minutePicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",
      // Spacing
      "px-2"
    ]
  },
  secondPicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",
      // Spacing
      "px-2"
    ]
  },
  ampmPicker: {
    class: [
      // Flexbox and Alignment
      "flex",
      "items-center",
      "flex-col",
      // Spacing
      "px-2"
    ]
  },
  calendarContainer: "flex",
  calendar: "flex-auto border-l first:border-l-0 border-surface-200",
  buttonbar: {
    class: [
      // Flexbox
      "flex justify-between items-center",
      // Spacing
      "pt-2",
      // Shape
      "border-t border-surface-200 dark:border-surface-700"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, bi = {
  root: {}
}, hi = {
  root: ({ state: e }) => ({
    class: [
      // Shape
      "rounded-lg",
      "shadow-lg",
      "border-0",
      // Size
      "max-h-[90vh]",
      "m-0",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "[&:last-child]:border-b",
      "border-surface-200 dark:border-surface-700",
      // Transitions
      "transform",
      "scale-100",
      // Maximized State
      {
        "transition-none": e.maximized,
        "transform-none": e.maximized,
        "!w-screen": e.maximized,
        "!h-screen": e.maximized,
        "!max-h-full": e.maximized,
        "!top-0": e.maximized,
        "!left-0": e.maximized
      }
    ]
  }),
  header: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-between",
      "shrink-0",
      // Spacing
      "p-6",
      // Shape
      "rounded-tl-lg",
      "rounded-tr-lg",
      // Colors
      "text-surface-700 dark:text-surface-0/80",
      "border border-b-0",
      "border-surface-200 dark:border-surface-700"
    ]
  },
  title: {
    class: ["font-semibold text-xl leading-[normal]"]
  },
  headerActions: {
    class: ["flex items-center"]
  },
  content: ({ state: e, instance: t }) => ({
    class: [
      // Spacing
      "px-6",
      "pb-6",
      "pt-0",
      // Shape
      {
        grow: e.maximized,
        "rounded-bl-lg": !t.$slots.footer,
        "rounded-br-lg": !t.$slots.footer
      },
      // Colors
      "text-surface-700 dark:text-surface-0/80",
      "border border-t-0 border-b-0",
      "border-surface-200 dark:border-surface-700",
      // Misc
      "overflow-y-auto"
    ]
  }),
  footer: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-end",
      "shrink-0",
      "text-right",
      "gap-2",
      // Spacing
      "px-6",
      "pb-6",
      // Shape
      "border-t-0",
      "rounded-b-lg",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80",
      "border border-t-0 border-b-0",
      "border-surface-200 dark:border-surface-700"
    ]
  },
  mask: ({ props: e }) => ({
    class: [
      // Transitions
      "transition-all",
      "duration-300",
      { "p-5": e.position !== "full" },
      // Background and Effects
      { "has-[.mask-active]:bg-transparent bg-black/40": e.modal }
    ]
  }),
  transition: ({ props: e }) => e.position === "top" ? {
    enterFromClass: "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active"
  } : e.position === "bottom" ? {
    enterFromClass: "opacity-0 scale-75 translate-y-full mask-active",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0 mask-active"
  } : e.position === "left" || e.position === "topleft" || e.position === "bottomleft" ? {
    enterFromClass: "opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0 mask-active",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0 mask-active"
  } : e.position === "right" || e.position === "topright" || e.position === "bottomright" ? {
    enterFromClass: "opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active"
  } : {
    enterFromClass: "opacity-0 scale-75 mask-active",
    enterActiveClass: "transition-all duration-200 ease-out",
    leaveActiveClass: "transition-all duration-200 ease-out",
    leaveToClass: "opacity-0 scale-75 mask-active"
  }
}, mi = {
  root: ({ props: e }) => ({
    class: [
      // Flex and Position
      "flex relative",
      { "justify-center": e.layout == "vertical" },
      { "items-center": e.layout == "vertical" },
      {
        "justify-start": (e == null ? void 0 : e.align) == "left" && e.layout == "horizontal",
        "justify-center": (e == null ? void 0 : e.align) == "center" && e.layout == "horizontal",
        "justify-end": (e == null ? void 0 : e.align) == "right" && e.layout == "horizontal",
        "items-center": (e == null ? void 0 : e.align) == "top" && e.layout == "vertical",
        "items-start": (e == null ? void 0 : e.align) == "center" && e.layout == "vertical",
        "items-end": (e == null ? void 0 : e.align) == "bottom" && e.layout == "vertical"
      },
      // Spacing
      {
        "my-5 mx-0 py-0 px-5": e.layout == "horizontal",
        "mx-4 md:mx-5 py-5": e.layout == "vertical"
      },
      // Size
      {
        "w-full": e.layout == "horizontal",
        "min-h-full": e.layout == "vertical"
      },
      // Before: Line
      "before:block",
      // Position
      {
        "before:absolute before:left-0 before:top-1/2": e.layout == "horizontal",
        "before:absolute before:left-1/2 before:top-0 before:transform before:-translate-x-1/2": e.layout == "vertical"
      },
      // Size
      {
        "before:w-full": e.layout == "horizontal",
        "before:min-h-full": e.layout == "vertical"
      },
      // Shape
      {
        "before:border-solid": e.type == "solid",
        "before:border-dotted": e.type == "dotted",
        "before:border-dashed": e.type == "dashed"
      },
      // Color
      {
        "before:border-t before:border-surface-200 before:dark:border-surface-600": e.layout == "horizontal",
        "before:border-l before:border-surface-200 before:dark:border-surface-600": e.layout == "vertical"
      }
    ]
  }),
  content: {
    class: [
      // Space and Position
      "px-1 z-10",
      // Color
      "bg-surface-0 dark:bg-surface-800"
    ]
  }
}, gi = {
  root: ({ props: e }) => ({
    class: [
      // Positioning
      "absolute z-1",
      {
        "left-0 bottom-0 w-full": e.position == "bottom",
        "left-0 top-0 w-full": e.position == "top",
        "left-0 top-0 h-full": e.position == "left",
        "right-0 top-0 h-full": e.position == "right"
      },
      // Flexbox & Alignment
      "flex justify-center items-center",
      // Interactivity
      "pointer-events-none"
    ]
  }),
  listContainer: {
    class: [
      // Flexbox
      "flex",
      // Shape & Border
      "rounded-md",
      // Color
      "bg-surface-0/10 dark:bg-surface-900/20 border border-surface-0/20",
      "backdrop-blur-sm",
      // Spacing
      "p-2",
      // Misc
      "pointer-events-auto"
    ]
  },
  list: ({ props: e }) => ({
    class: [
      // Flexbox & Alignment
      "flex items-center justify-center",
      {
        "flex-col": e.position == "left" || e.position == "right"
      },
      // List Style
      "m-0 p-0 list-none",
      // Shape
      "outline-none"
    ]
  }),
  item: ({ props: e, context: t, instance: r }) => ({
    class: [
      // Spacing & Shape
      "p-2 rounded-md",
      // Positioning & Hover States
      {
        "origin-bottom": e.position == "bottom",
        "origin-top": e.position == "top",
        "origin-left": e.position == "left",
        "origin-right": e.position == "right"
      },
      // Transitions & Transform
      "transition-all duration-200 ease-cubic-bezier-will-change-transform transform"
    ]
  }),
  itemLink: {
    class: [
      // Flexbox & Alignment
      "flex flex-col items-center justify-center",
      // Position
      "relative",
      // Size
      "w-16 h-16",
      // Misc
      "cursor-default overflow-hidden"
    ]
  }
}, uo = {
  root: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex flex-col",
      // Position
      "relative",
      { "!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0": e.position == "full" },
      // Size
      {
        "h-full w-80": e.position == "left" || e.position == "right",
        "h-auto w-full": e.position == "top" || e.position == "bottom"
      },
      // Shape
      "border-0 dark:border",
      "shadow-lg",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      "dark:border-surface-700",
      // Transitions
      "transition-transform",
      "duration-300",
      // Misc
      "pointer-events-auto"
    ]
  }),
  header: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-between",
      "shrink-0",
      // Spacing
      "p-[1.125rem]",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80"
    ]
  },
  title: {
    class: ["font-semibold text-xl"]
  },
  icons: {
    class: ["flex items-center"]
  },
  closeButton: {
    class: [
      "relative",
      // Flexbox and Alignment
      "flex items-center justify-center",
      // Size and Spacing
      "mr-2",
      "last:mr-0",
      "w-7 h-7",
      // Shape
      "border-0",
      "rounded-full",
      // Colors
      "text-surface-500",
      "bg-transparent",
      // Transitions
      "transition duration-200 ease-in-out",
      // States
      "hover:text-surface-700 dark:hover:text-white/80",
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]",
      "focus:outline-none focus:outline-offset-0 focus:ring-1",
      "focus:ring-primary-500 dark:focus:ring-primary-400",
      // Misc
      "overflow-hidden"
    ]
  },
  closeButtonIcon: {
    class: [
      // Display
      "inline-block",
      // Size
      "w-4",
      "h-4"
    ]
  },
  content: {
    class: [
      // Spacing and Size
      "p-[1.125rem]",
      "pt-0",
      "h-full",
      "w-full",
      // Growth and Overflow
      "grow",
      "overflow-y-auto"
    ]
  },
  mask: ({ props: e }) => ({
    class: [
      // Transitions
      "transition-all",
      "duration-300",
      { "p-5": e.position !== "full" },
      // Background and Effects
      { "has-[.mask-active]:bg-transparent bg-black/40": e.modal }
    ]
  }),
  transition: ({ props: e }) => e.position === "top" ? {
    enterFromClass: "translate-x-0 -translate-y-full translate-z-0 mask-active",
    leaveToClass: "translate-x-0 -translate-y-full translate-z-0 mask-active"
  } : e.position === "bottom" ? {
    enterFromClass: "translate-x-0 translate-y-full translate-z-0 mask-active",
    leaveToClass: "translate-x-0 translate-y-full translate-z-0 mask-active"
  } : e.position === "left" ? {
    enterFromClass: "-translate-x-full translate-y-0 translate-z-0 mask-active",
    leaveToClass: "-translate-x-full translate-y-0 translate-z-0 mask-active"
  } : e.position === "right" ? {
    enterFromClass: "translate-x-full translate-y-0 translate-z-0 mask-active",
    leaveToClass: "translate-x-full translate-y-0 translate-z-0 mask-active"
  } : {
    enterFromClass: "opacity-0 mask-active",
    enterActiveClass: "transition-opacity duration-400 ease-in",
    leaveActiveClass: "transition-opacity duration-400 ease-in",
    leaveToClass: "opacity-0 mask-active"
  }
}, vi = {
  root: {
    class: [
      // Spacing
      "p-[1.125rem] pt-0",
      // Shape
      "rounded-md",
      // Color
      "border border-surface-200 dark:border-surface-700",
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80"
    ]
  },
  legend: ({ props: e }) => ({
    class: [
      // Font
      "font-semibold",
      "leading-none",
      //Spacing
      "p-0 mb-[0.375rem]",
      // Shape
      "rounded-md",
      // Color
      "text-surface-700 dark:text-surface-0/80",
      "bg-surface-0 dark:bg-surface-900",
      // Transition
      "transition-none",
      // States
      { "hover:bg-surface-100 dark:hover:bg-surface-800": e.toggleable }
    ]
  }),
  toggleButton: ({ props: e }) => ({
    class: [
      // Alignments
      "flex items-center justify-center",
      "relative",
      //Spacing
      { "py-2 px-3": e.toggleable },
      // Shape
      { "rounded-md": e.toggleable },
      // Color
      { "text-surface-700 dark:text-surface-200 hover:text-surface-900": e.toggleable },
      // States
      { "hover:text-surface-900 dark:hover:text-surface-100": e.toggleable },
      { "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300": e.toggleable },
      // Misc
      {
        "transition-none cursor-pointer overflow-hidden select-none": e.toggleable
      }
    ]
  }),
  toggleIcon: {
    class: "mr-2 inline-block"
  },
  legendLabel: ({ props: e }) => ({
    class: ["flex items-center justify-center leading-none", { "py-2 px-3": !e.toggleable }]
  }),
  content: {
    class: "p-0"
  },
  transition: {
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0"
  }
}, yi = {
  root: ({ props: e }) => ({
    class: [
      {
        "flex flex-wrap items-center justify-center gap-2": e.mode === "basic"
      }
    ]
  }),
  input: {
    class: "hidden"
  },
  header: {
    class: [
      // Flexbox
      "flex",
      "flex-wrap",
      // Colors
      "bg-surface-0",
      "dark:bg-surface-900",
      "text-surface-700",
      "dark:text-white/80",
      // Spacing
      "p-[1.125rem]",
      "gap-2",
      // Borders
      "border",
      "border-solid",
      "border-surface-200",
      "dark:border-surface-700",
      "border-b-0",
      // Shape
      "rounded-tr-lg",
      "rounded-tl-lg"
    ]
  },
  content: {
    class: [
      // Position
      "relative",
      // Colors
      "bg-surface-0",
      "dark:bg-surface-900",
      "text-surface-700",
      "dark:text-white/80",
      // Spacing
      "p-[1.125rem]",
      // Borders
      "border border-t-0",
      "border-surface-200",
      "dark:border-surface-700",
      // Shape
      "rounded-b-lg",
      //ProgressBar
      "[&>[data-pc-name=pcprogressbar]]:absolute",
      "[&>[data-pc-name=pcprogressbar]]:w-full",
      "[&>[data-pc-name=pcprogressbar]]:top-0",
      "[&>[data-pc-name=pcprogressbar]]:left-0",
      "[&>[data-pc-name=pcprogressbar]]:h-1"
    ]
  },
  file: {
    class: [
      // Flexbox
      "flex",
      "items-center",
      "flex-wrap",
      // Spacing
      "p-4",
      "mb-2",
      "last:mb-0",
      // Borders
      "border",
      "border-surface-200",
      "dark:border-surface-700",
      "gap-2",
      // Shape
      "rounded"
    ]
  },
  fileThumbnail: "shrink-0",
  fileName: "mb-2 break-all",
  fileSize: "mr-2"
}, xi = {
  root: {
    class: [
      "block relative",
      // Base Label Appearance
      "[&>*:last-child]:text-surface-900/60 dark:[&>*:last-child]:text-white/60",
      "[&>*:last-child]:absolute",
      "[&>*:last-child]:left-3",
      "[&>*:last-child]:pointer-events-none",
      "[&>*:last-child]:transition-all",
      "[&>*:last-child]:duration-200",
      "[&>*:last-child]:ease",
      // Position for all labels except those following textarea
      "[&>:not(textarea)~label]:top-1/2 [&>:not(textarea)~label]:-translate-y-1/2 ",
      // Position for labels following textareas
      "[&>textarea~label]:top-4",
      // Focus Label Appearance
      "[&>*:last-child]:has-[:focus]:-top-3",
      "[&>*:last-child]:has-[:focus]:text-sm",
      "[&>*:last-child]:has-[:focus]:z-10",
      // Filled Input Label Appearance
      "[&>*:last-child]:has-[.filled]:-top-3",
      "[&>*:last-child]:has-[.filled]:text-sm",
      "[&>*:last-child]:has-[.filled]:z-10"
    ]
  }
}, wi = {
  content: ({ parent: e, props: t }) => ({
    class: [
      "flex",
      {
        "flex-col": t.fullScreen
      },
      {
        "flex-col": e.props.thumbnailsPosition === "top" || e.props.thumbnailsPosition === "bottom",
        "flex-row": e.props.thumbnailsPosition === "right" || e.props.thumbnailsPosition === "left"
      }
    ]
  }),
  itemsContainer: ({ parent: e, props: t }) => ({
    class: [
      "group",
      "flex relative",
      {
        "grow shrink w-0 justify-center": t.fullScreen
      },
      {
        "flex-col": e.props.indicatorsPosition === "bottom" || e.props.indicatorsPosition === "top",
        "flex-row items-center": e.props.indicatorsPosition === "left" || e.props.indicatorsPosition === "right"
      },
      {
        "order-2": e.props.thumbnailsPosition === "top" || e.props.thumbnailsPosition === "left",
        "flex-row": e.props.thumbnailsPosition === "right"
      }
    ]
  }),
  items: ({ parent: e }) => ({
    class: [
      "flex h-full relative",
      {
        "order-1": e.props.indicatorsPosition === "bottom" || e.props.indicatorsPosition === "right",
        "order-2": e.props.indicatorsPosition === "top" || e.props.indicatorsPosition === "left"
      }
    ]
  }),
  item: {
    class: [
      // Flex
      "flex justify-center items-center h-full w-full",
      // Sizing
      "h-full w-full"
    ]
  },
  thumbnails: ({ parent: e }) => ({
    class: [
      // Flex
      "flex flex-col shrink-0",
      {
        "order-1": e.props.thumbnailsPosition === "top" || e.props.thumbnailsPosition === "left"
      },
      // Misc
      "overflow-auto"
    ]
  }),
  thumbnailContent: ({ parent: e }) => ({
    class: [
      // Flex
      "flex",
      // Spacing
      "py-4 px-1",
      // Colors
      "bg-black/90",
      {
        "flex-row": e.props.thumbnailsPosition === "top" || e.props.thumbnailsPosition === "bottom",
        "flex-col grow": e.props.thumbnailsPosition === "right" || e.props.thumbnailsPosition === "left"
      }
    ]
  }),
  thumbnailPrevButton: {
    class: [
      // Positioning
      "self-center relative",
      // Display & Flexbox
      "flex shrink-0 justify-center items-center overflow-hidden",
      // Spacing
      "m-2",
      // Appearance
      "bg-transparent text-white w-8 h-8 rounded-full transition duration-200 ease-in-out",
      // Hover Effects
      "hover:bg-surface-0/10 hover:text-white",
      // Focus Effects
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  },
  thumbnailsViewport: {
    class: "overflow-hidden w-full"
  },
  thumbnailItems: ({ parent: e }) => ({
    class: [
      "flex",
      {
        "flex-col h-full": e.props.thumbnailsPosition === "right" || e.props.thumbnailsPosition === "left"
      }
    ]
  }),
  thumbnailItem: ({ parent: e }) => ({
    class: [
      // Flexbox
      "flex items-center justify-center",
      "grow shrink-0",
      // Sizing
      {
        "w-full md:w-[25%] lg:w-[20%]": e.props.thumbnailsPosition === "top" || e.props.thumbnailsPosition === "bottom"
      },
      // Misc
      "overflow-auto",
      "cursor-pointer",
      "opacity-50",
      // States
      '[&[data-p-active="true"]]:opacity-100',
      "hover:opacity-100",
      // Transitions
      "transition-opacity duration-300"
    ]
  }),
  thumbnailNextButton: {
    class: [
      // Positioning
      "self-center relative",
      // Display & Flexbox
      "flex shrink-0 justify-center items-center overflow-hidden",
      // Spacing
      "m-2",
      // Appearance
      "bg-transparent text-white w-8 h-8 rounded-full transition duration-200 ease-in-out",
      // Hover Effects
      "hover:bg-surface-0/10 hover:text-white",
      // Focus Effects
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  },
  indicatorList: ({ parent: e }) => ({
    class: [
      // flex
      "flex items-center justify-center",
      // Spacing
      "p-4",
      // Indicators Position
      {
        "order-2": e.props.indicatorsPosition == "bottom",
        "order-1": e.props.indicatorsPosition == "top",
        "order-1 flex-col": e.props.indicatorsPosition == "left",
        "flex-col order-2": e.props.indicatorsPosition == "right"
      },
      {
        "absolute z-10 bg-black/50": e.props.showIndicatorsOnItem
      },
      {
        "bottom-0 left-0 w-full items-start": e.props.indicatorsPosition == "bottom" && e.props.showIndicatorsOnItem,
        "top-0 left-0 w-full items-start": e.props.indicatorsPosition == "top" && e.props.showIndicatorsOnItem,
        "left-0 top-0 h-full items-start": e.props.indicatorsPosition == "left" && e.props.showIndicatorsOnItem,
        "right-0 top-0 h-full items-start": e.props.indicatorsPosition == "right" && e.props.showIndicatorsOnItem
      }
    ]
  }),
  indicator: ({ parent: e }) => ({
    class: [
      {
        "mr-2": e.props.indicatorsPosition == "bottom" || e.props.indicatorsPosition == "top",
        "mb-2": e.props.indicatorsPosition == "left" || e.props.indicatorsPosition == "right"
      }
    ]
  }),
  indicatorButton: ({ context: e }) => ({
    class: [
      // Size
      "w-4 h-4",
      // Appearance
      "rounded-full transition duration-200",
      // Focus Effects
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Conditional Appearance: Not Highlighted
      { "bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 dark:hover:bg-surface-600": !e.highlighted },
      // Conditional Appearance: Highlighted
      { "bg-primary hover:bg-primary-emphasis": e.highlighted }
    ]
  }),
  mask: {
    class: ["fixed top-0 left-0 w-full h-full", "flex items-center justify-center", "bg-black/90"]
  },
  closeButton: {
    class: [
      // Positioning
      "!absolute top-0 right-0",
      // Display & Flexbox
      "flex justify-center items-center overflow-hidden",
      // Spacing
      "m-2",
      // Appearance
      "text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out",
      // Hover Effect
      "hover:text-white hover:bg-surface-0/10",
      // Focus Effects
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  },
  closeIcon: {
    class: "w-6 h-6"
  },
  prevButton: ({ parent: e }) => ({
    class: [
      // Display & Flexbox
      "inline-flex justify-center items-center overflow-hidden",
      // Appearance
      "bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md",
      {
        "opacity-0 group-hover:opacity-100": e.props.showItemNavigatorsOnHover
      },
      // Spacing
      "mx-2",
      // Positioning
      "top-1/2 mt-[-0.5rem] left-0",
      {
        "!absolute": !e.state.containerVisible && e.props.showItemNavigators,
        "!fixed": e.state.containerVisible
      },
      // Hover Effect
      "hover:bg-surface-0/10 hover:text-white",
      // Focus Effects
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  }),
  nextButton: ({ parent: e }) => ({
    class: [
      // Display & Flexbox
      "inline-flex justify-center items-center overflow-hidden",
      // Appearance
      "bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md",
      {
        "opacity-0 group-hover:opacity-100": e.props.showItemNavigatorsOnHover
      },
      // Spacing
      "mx-2",
      // Positioning
      "top-1/2 mt-[-0.5rem] right-0",
      {
        "!absolute": !e.state.containerVisible && e.props.showItemNavigators,
        "!fixed": e.state.containerVisible
      },
      // Hover Effect
      "hover:bg-surface-0/10 hover:text-white",
      // Focus Effects
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400"
    ]
  }),
  caption: {
    class: [
      // Positioning
      "absolute bottom-0 left-0 w-full",
      // Appearance
      "bg-black/50 text-white p-4"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-75",
    enterActiveClass: "transition-all duration-150 ease-in-out",
    leaveActiveClass: "transition-all duration-150 ease-in",
    leaveToClass: "opacity-0 scale-75"
  }
}, ki = {
  css: `
    *[data-pd-ripple="true"]{
        overflow: hidden;
        position: relative;
    }
    span[data-p-ink-active="true"]{
        animation: ripple 0.4s linear;
    }
    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }

    .progress-spinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progress-spinner-dash{
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progress-spinner-color {
        100%, 0% {
            stroke: #ff5757;
        }
        40% {
            stroke: #696cff;
        }
        66% {
            stroke: #1ea97c;
        }
        80%, 90% {
            stroke: #cc8925;
        }
    }

    .progressbar-value-animate::after {
        will-change: left, right;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    }
    .progressbar-value-animate::before {
        will-change: left, right;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }
    @keyframes p-progressbar-indeterminate-anim {
        0% {
            left: -35%;
            right: 100%;
        }
        60% {
            left: 100%;
            right: -90%;
        }
        100% {
            left: 100%;
            right: -90%;
        }
    }

    .p-fadein {
        animation: p-fadein 250ms linear;
    }

    @keyframes p-fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`
}, _i = {
  root: {
    class: [
      "relative",
      "[&>[data-pc-name=inputicon]]:absolute",
      "[&>[data-pc-name=inputicon]]:top-1/2",
      "[&>[data-pc-name=inputicon]]:-mt-2",
      "[&>[data-pc-name=inputicon]]:text-surface-900/60 dark:[&>[data-pc-name=inputicon]]:text-white/60",
      "[&>[data-pc-name=inputicon]:first-child]:left-3",
      "[&>[data-pc-name=inputicon]:last-child]:right-3",
      "[&>[data-pc-name=inputtext]:first-child]:pr-10",
      "[&>[data-pc-name=inputtext]:last-child]:pl-10",
      // filter
      "[&>[data-pc-extend=inputicon]]:absolute",
      "[&>[data-pc-extend=inputicon]]:top-1/2",
      "[&>[data-pc-extend=inputicon]]:-mt-2",
      "[&>[data-pc-extend=inputicon]]:text-surface-900/60 dark:[&>[data-pc-extend=inputicon]]:text-white/60",
      "[&>[data-pc-extend=inputicon]:first-child]:left-3",
      "[&>[data-pc-extend=inputicon]:last-child]:right-3"
    ]
  }
}, Si = {
  root: {
    class: "relative inline-block"
  },
  previewMask: {
    class: [
      // Flexbox & Alignment
      "flex items-center justify-center",
      // Positioning
      "absolute",
      // Shape
      "inset-0 opacity-0 transition-opacity duration-300",
      // Color
      "bg-transparent text-surface-100",
      // States
      "hover:opacity-100 hover:cursor-pointer hover:bg-black/50 hover:bg-opacity-50"
    ]
  },
  mask: {
    class: [
      // Flexbox & Alignment
      "flex items-center justify-center",
      // Positioning
      "fixed top-0 left-0",
      // Sizing
      "w-full h-full",
      // Color
      "bg-black/90"
    ]
  },
  toolbar: {
    class: [
      // Flexbox
      "flex",
      // Positioning
      "absolute top-0 right-0",
      // Spacing
      "p-4"
    ]
  },
  rotateRightButton: {
    class: [
      "z-20",
      // Flexbox & Alignment
      "flex justify-center items-center",
      // Size
      "w-12 h-12",
      // Spacing
      "mr-2",
      // Shape
      "rounded-full",
      // Color
      "text-white bg-transparent",
      // States
      "hover:text-white hover:bg-surface-0/10",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transition
      "transition duration-200 ease-in-out"
    ]
  },
  rotateRightIcon: {
    class: "w-6 h-6"
  },
  rotateLeftButton: {
    class: [
      "z-20",
      // Flexbox & Alignment
      "flex justify-center items-center",
      // Size
      "w-12 h-12",
      // Spacing
      "mr-2",
      // Shape
      "rounded-full",
      // Color
      "text-white bg-transparent",
      // States
      "hover:text-white hover:bg-surface-0/10",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transition
      "transition duration-200 ease-in-out"
    ]
  },
  rotateLeftIcon: {
    class: "w-6 h-6"
  },
  zoomOutButton: {
    class: [
      "z-20",
      // Flexbox & Alignment
      "flex justify-center items-center",
      // Size
      "w-12 h-12",
      // Spacing
      "mr-2",
      // Shape
      "rounded-full",
      // Color
      "text-white bg-transparent",
      // States
      "hover:text-white hover:bg-surface-0/10",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transition
      "transition duration-200 ease-in-out"
    ]
  },
  zoomOutIcon: {
    class: "w-6 h-6"
  },
  zoomInButton: {
    class: [
      "z-20",
      // Flexbox & Alignment
      "flex justify-center items-center",
      // Size
      "w-12 h-12",
      // Spacing
      "mr-2",
      // Shape
      "rounded-full",
      // Color
      "text-white bg-transparent",
      // States
      "hover:text-white hover:bg-surface-0/10",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transition
      "transition duration-200 ease-in-out"
    ]
  },
  zoomInIcon: {
    class: "w-6 h-6"
  },
  closeButton: {
    class: [
      "z-20",
      // Flexbox & Alignment
      "flex justify-center items-center",
      // Size
      "w-12 h-12",
      // Spacing
      "mr-2",
      // Shape
      "rounded-full",
      // Color
      "text-white bg-transparent",
      // States
      "hover:text-white hover:bg-surface-0/10",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transition
      "transition duration-200 ease-in-out"
    ]
  },
  closeIcon: {
    class: "w-6 h-6"
  },
  transition: {
    enterFromClass: "opacity-0 scale-75",
    enterActiveClass: "transition-all duration-150 ease-in-out",
    leaveActiveClass: "transition-all duration-150 ease-in",
    leaveToClass: "opacity-0 scale-75"
  }
}, Ci = {
  display: {
    class: [
      // Display
      "inline",
      // Spacing
      "px-3 py-2",
      // Shape
      "rounded-md",
      // Colors
      "text-surface-700 dark:text-white/80",
      // States
      "hover:bg-surface-100 hover:text-surface-700 dark:hover:bg-surface-800 dark:hover:text-white/80",
      // Transitions
      "transition",
      "duration-200",
      // Misc
      "cursor-pointer"
    ]
  }
}, Ti = {
  root: {
    class: ["flex items-stretch", "w-full"]
  }
}, $i = {
  root: {
    class: [
      // Flex
      "flex items-center justify-center",
      // Shape
      "first:rounded-l-md",
      "last:rounded-r-md",
      "border-y",
      "last:border-r",
      "border-l",
      "border-r-0",
      // Space
      "p-2",
      // Size
      "min-w-[2.5rem]",
      // Color
      "bg-transparent dark:bg-surface-900",
      "text-surface-800 dark:text-white/80",
      "border-surface-300 dark:border-surface-700"
    ]
  }
}, Pi = {
  pcinputtext: {
    root: ({ context: e, props: t, parent: r }) => {
      var n, o, a, s, i, l, c;
      return {
        class: [
          // Font
          "leading-none",
          // Spacing
          "m-0 py-2 px-3",
          // Colors
          "text-surface-800 dark:text-white/80",
          { "bg-surface-0 dark:bg-surface-950": !e.disabled },
          "border",
          { "border-surface-300 dark:border-surface-700": !t.invalid },
          // Invalid State
          "invalid:focus:ring-red-200",
          "invalid:hover:border-red-500",
          { "border-red-500 dark:border-red-400": t.invalid },
          // States
          {
            "hover:border-surface-400 dark:hover:border-surface-600": !e.disabled && !t.invalid,
            "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10": !e.disabled,
            "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled
          },
          // Filled State *for FloatLabel
          {
            filled: ((n = r.instance) == null ? void 0 : n.$name) == "FloatLabel" && e.filled || ((a = (o = r.instance) == null ? void 0 : o.$parentInstance) == null ? void 0 : a.$name) == "FloatLabel" && r.props.modelValue !== null && ((s = r.props.modelValue) == null ? void 0 : s.length) !== 0
          },
          ((i = r.instance) == null ? void 0 : i.$name) == "FloatLabel" || ((c = (l = r.instance) == null ? void 0 : l.$parentInstance) == null ? void 0 : c.$name) == "FloatLabel" ? "placeholder:text-transparent dark:placeholder:text-transparent" : "placeholder:text-surface-400 dark:placeholder:text-surface-500",
          // Misc
          "rounded-md",
          "appearance-none",
          "transition-colors duration-200"
        ]
      };
    }
  }
}, Oi = {
  root: ({ props: e, parent: t }) => ({
    class: [
      // Flex
      "inline-flex",
      "relative",
      { "flex-col": e.showButtons && e.buttonLayout === "vertical" },
      { "flex-1 w-[1%]": t.instance.$name === "InputGroup" },
      { "w-full": e.fluid },
      // Shape
      { "first:rounded-l-md rounded-none last:rounded-r-md": t.instance.$name === "InputGroup" && !e.showButtons },
      { "border-0 border-y border-l last:border-r border-surface-300 dark:border-surface-700": t.instance.$name === "InputGroup" && !e.showButtons },
      { "first:ml-0 -ml-px": t.instance.$name === "InputGroup" && !e.showButtons },
      //Sizing
      { "!w-16": e.showButtons && e.buttonLayout == "vertical" }
    ]
  }),
  pcInput: {
    root: ({ parent: e, context: t }) => {
      var r, n, o;
      return {
        class: [
          // Font
          "leading-none",
          // Display
          "flex-auto",
          { "w-[1%]": e.props.fluid },
          //Text
          { "text-center": e.props.showButtons && e.props.buttonLayout == "vertical" },
          // Spacing
          "py-2 px-3",
          "m-0",
          // Shape
          "rounded-md",
          { "rounded-l-none rounded-r-none": e.props.showButtons && e.props.buttonLayout === "horizontal" },
          { "rounded-none": e.props.showButtons && e.props.buttonLayout === "vertical" },
          { "border-0": ((r = e.instance.$parentInstance) == null ? void 0 : r.$name) === "InputGroup" && !e.props.showButtons },
          // Colors
          "text-surface-800 dark:text-white/80",
          "placeholder:text-surface-400 dark:placeholder:text-surface-500",
          { "bg-surface-0 dark:bg-surface-950": !t.disabled },
          "border",
          { "border-surface-300 dark:border-surface-700": !e.props.invalid },
          // Invalid State
          "invalid:focus:ring-danger-400",
          "invalid:hover:border-danger-400",
          { "border-red-500 dark:border-red-400": e.props.invalid },
          // States
          { "hover:border-secondary-400": !e.props.invalid },
          "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-secondary-500 dark:focus:ring-secondary-400 focus:z-10",
          { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": t.disabled },
          // Filled State *for FloatLabel
          { filled: ((o = (n = e.instance) == null ? void 0 : n.$parentInstance) == null ? void 0 : o.$name) === "FloatLabel" && e.state.d_modelValue !== null },
          //Position
          { "order-2": e.props.buttonLayout == "horizontal" || e.props.buttonLayout === "vertical" }
        ]
      };
    }
  },
  buttonGroup: ({ props: e }) => ({
    class: [
      "absolute",
      "z-20",
      // Flex
      "flex",
      "flex-col",
      "top-px right-px",
      { "h-[calc(100%-2px)]": e.showButtons && e.buttonLayout === "stacked" }
    ]
  }),
  incrementButton: ({ props: e }) => ({
    class: [
      // Display
      { "flex flex-initial shrink-0": e.showButtons && e.buttonLayout === "horizontal" },
      { "flex flex-auto": e.showButtons && e.buttonLayout === "stacked" },
      // Alignment
      "items-center",
      "justify-center",
      "text-center align-bottom",
      //Position
      "relative",
      { "order-3": e.showButtons && e.buttonLayout === "horizontal" },
      { "order-1": e.showButtons && e.buttonLayout === "vertical" },
      //Color
      "text-surface-800 dark:text-surface-0",
      "bg-transparent",
      { "dark:bg-surface-900": e.showButtons && e.buttonLayout !== "stacked" },
      "border border-surface-300 dark:border-surface-700",
      { "border-0": e.showButtons && e.buttonLayout === "stacked" },
      { "border-l-0": e.showButtons && e.buttonLayout !== "stacked" && e.buttonLayout === "horizontal" },
      { "border-b-0": e.showButtons && e.buttonLayout !== "stacked" && e.buttonLayout === "vertical" },
      // Sizing
      "w-[3rem]",
      { "px-3 py-2": e.showButtons && e.buttonLayout !== "stacked" },
      { "p-0": e.showButtons && e.buttonLayout === "stacked" },
      { "w-full": e.showButtons && e.buttonLayout === "vertical" },
      // Shape
      "rounded-md",
      { "rounded-md": e.showButtons && e.buttonLayout == "stacked" },
      { "rounded-bl-none rounded-tl-none": e.showButtons && e.buttonLayout === "horizontal" },
      { "rounded-bl-none rounded-br-none": e.showButtons && e.buttonLayout === "vertical" },
      //States
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]",
      //Misc
      "cursor-pointer overflow-hidden select-none"
    ]
  }),
  incrementIcon: "inline-block w-4 h-4",
  decrementButton: ({ props: e }) => ({
    class: [
      // Display
      { "flex flex-initial shrink-0": e.showButtons && e.buttonLayout === "horizontal" },
      { "flex flex-auto": e.showButtons && e.buttonLayout === "stacked" },
      // Alignment
      "items-center",
      "justify-center",
      "text-center align-bottom",
      //Position
      "relative",
      { "order-1": e.showButtons && e.buttonLayout === "horizontal" },
      { "order-3": e.showButtons && e.buttonLayout === "vertical" },
      //Color
      "text-surface-800 dark:text-surface-0",
      "bg-transparent",
      { "dark:bg-surface-900": e.showButtons && e.buttonLayout !== "stacked" },
      "border border-surface-300 dark:border-surface-700",
      { "border-0": e.showButtons && e.buttonLayout === "stacked" },
      { "border-r-0": e.showButtons && e.buttonLayout !== "stacked" && e.buttonLayout === "horizontal" },
      { "border-t-0": e.showButtons && e.buttonLayout !== "stacked" && e.buttonLayout === "vertical" },
      // Sizing
      "w-[3rem]",
      { "px-3 py-2": e.showButtons && e.buttonLayout !== "stacked" },
      { "p-0": e.showButtons && e.buttonLayout === "stacked" },
      { "w-full": e.showButtons && e.buttonLayout === "vertical" },
      // Shape
      "rounded-md",
      { "rounded-tr-none rounded-tl-none rounded-bl-none": e.showButtons && e.buttonLayout === "stacked" },
      { "rounded-tr-none rounded-br-none ": e.showButtons && e.buttonLayout === "horizontal" },
      { "rounded-tr-none rounded-tl-none ": e.showButtons && e.buttonLayout === "vertical" },
      //States
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]",
      //Misc
      "cursor-pointer overflow-hidden select-none"
    ]
  }),
  decrementIcon: "inline-block w-4 h-4"
}, Ai = {
  root: {
    class: [
      // Alignment
      "flex items-center",
      "gap-2",
      "[&_[data-pc-name^=pcinput]]:w-10"
    ]
  }
}, Ii = {
  root: ({ props: e, context: t, parent: r }) => {
    var n, o, a, s;
    return {
      class: [
        // Font
        "leading-none",
        // Flex
        { "flex-1 w-[1%]": r.instance.$name == "InputGroup" },
        // Spacing
        "m-0",
        { "w-full": e.fluid },
        // Size
        {
          "py-3 px-3.5": e.size == "large",
          "py-1.5 px-2": e.size == "small",
          "py-2 px-3": e.size == null
        },
        // Shape
        { "rounded-md": r.instance.$name !== "InputGroup" },
        { "first:rounded-l-md rounded-none last:rounded-r-md": r.instance.$name == "InputGroup" },
        { "border-0 border-y border-l last:border-r": r.instance.$name == "InputGroup" },
        { "first:ml-0 -ml-px": r.instance.$name == "InputGroup" && !e.showButtons },
        // Colors
        "text-surface-800 dark:text-white/80",
        "placeholder:text-surface-400 dark:placeholder:text-surface-500",
        { "bg-surface-0 dark:bg-surface-950": !t.disabled },
        "border",
        { "border-surface-300 dark:border-surface-700": !e.invalid },
        // Invalid State
        "invalid:focus:ring-danger-400",
        "invalid:hover:border-danger-400",
        { "border-danger-400 dark:border-danger-400": e.invalid },
        // States
        {
          "hover:border-surface-400 dark:hover:border-surface-600": !t.disabled && !e.invalid,
          "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-secondary-500 dark:focus:ring-secondary-400 focus:z-10": !t.disabled,
          "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": t.disabled
        },
        // Filled State *for FloatLabel
        { filled: ((n = r.instance) == null ? void 0 : n.$name) == "FloatLabel" && t.filled || ((a = (o = r.instance) == null ? void 0 : o.$parentInstance) == null ? void 0 : a.$name) == "FloatLabel" && r.props.modelValue !== null && ((s = r.props.modelValue) == null ? void 0 : s.length) !== 0 },
        // Misc
        "appearance-none",
        "transition-colors duration-200"
      ]
    };
  }
}, Li = {
  root: ({ props: e }) => ({
    class: [
      // Misc
      { "opacity-60 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  range: {
    class: [
      // Stroke
      "stroke-current",
      // Color
      "stroke-surface-200 dark:stroke-surface-700",
      // Fill
      "fill-none",
      // Transition
      "transition duration-100 ease-in"
    ]
  },
  value: {
    class: [
      // Animation
      "animate-dash-frame",
      // Color
      "stroke-primary",
      // Fill
      "fill-none"
    ]
  },
  text: {
    class: [
      // Text Style
      "text-center text-xl",
      // Color
      "fill-surface-600 dark:fill-surface-200"
    ]
  }
}, ji = {
  root: ({ props: e }) => ({
    class: [
      "rounded-md",
      // Colors
      { "bg-surface-0 dark:bg-surface-900": !e.disabled },
      "text-surface-700 dark:text-white/80",
      "border",
      { "border-surface-300 dark:border-surface-700": !e.invalid },
      // Disabled State
      { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled },
      // Invalid State
      { "border-red-500 dark:border-red-400": e.invalid }
    ]
  }),
  listContainer: "overflow-auto",
  list: {
    class: "p-1 list-none m-0 outline-none"
  },
  option: ({ context: e, props: t }) => ({
    class: [
      "relative",
      // Flex
      "flex items-center",
      // Font
      "leading-none",
      // Spacing
      "m-0 px-3 py-2",
      "first:mt-0 mt-[2px]",
      // Shape
      "border-0 rounded",
      // Colors
      {
        "bg-surface-200 dark:bg-surface-600/60": e.focused && !e.selected,
        "text-surface-700 dark:text-white/80": e.focused && !e.selected,
        "bg-highlight": e.selected && !t.checkmark,
        "bg-surface-0 dark:bg-surface-900": t.checkmark && e.selected
      },
      //States
      { "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.focused && !e.selected || t.checkmark && e.selected },
      { "hover:bg-highlight-emphasis": e.selected && !t.checkmark },
      { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]": e.focused && !e.selected },
      // Transition
      "transition-shadow duration-200",
      // Misc
      "cursor-pointer overflow-hidden whitespace-nowrap"
    ]
  }),
  optionGroup: {
    class: [
      "font-semibold",
      // Spacing
      "m-0 py-2 px-3",
      // Colors
      "text-surface-400 dark:text-surface-500",
      // Misc
      "cursor-auto"
    ]
  },
  optionCheckIcon: "relative -ms-1.5 me-1.5 text-surface-700 dark:text-white/80 w-4 h-4",
  emptyMessage: {
    class: [
      // Font
      "leading-none",
      // Spacing
      "py-2 px-3",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-transparent"
    ]
  },
  header: {
    class: [
      // Spacing
      "pt-2 px-2 pb-0",
      "m-0",
      //Shape
      "border-b-0",
      "rounded-tl-md",
      "rounded-tr-md",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-300 dark:border-surface-700",
      "[&_[data-pc-name=pcfilter]]:w-full"
    ]
  }
}, Ei = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      // Flexbox
      "flex",
      // Shape & Size
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-200 dark:border-surface-700",
      { "p-2 items-center": e.orientation == "horizontal", "flex-col sm:w-48 p-1": e.orientation !== "horizontal" }
    ]
  }),
  rootList: ({ props: e }) => ({
    class: [
      // Flexbox
      "sm:flex",
      "items-center",
      "flex-wrap",
      "flex-col sm:flex-row",
      { hidden: !(e != null && e.mobileActive), flex: e == null ? void 0 : e.mobileActive },
      // Position
      "absolute sm:relative",
      "top-full left-0",
      "sm:top-auto sm:left-auto",
      // Size
      "w-full sm:w-auto",
      // Spacing
      "m-0",
      "p-1 sm:py-0 sm:p-0",
      "list-none",
      // Shape
      "shadow-md sm:shadow-none",
      "border-0",
      // Color
      "bg-surface-0 dark:bg-surface-900 sm:bg-transparent dark:sm:bg-transparent",
      // Misc
      "outline-none"
    ]
  }),
  item: ({ props: e }) => ({
    class: [
      "sm:relative static my-[2px] [&:first-child]:mt-0",
      {
        "sm:w-auto w-full": e.horizontal,
        "w-full": !e.horizontal
      }
    ]
  }),
  itemContent: ({ context: e }) => ({
    class: [
      "rounded-[4px]",
      //  Colors
      {
        "text-surface-500 dark:text-white/70": !e.focused && !e.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90": e.focused && !e.active,
        "bg-highlight text-highlight-contrast": e.focused && e.active || e.active || !e.focused && e.active
      },
      // Hover States
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.active,
        "hover:bg-highlight-emphasis": e.active
      },
      // Transitions
      "transition-all",
      "duration-200"
    ]
  }),
  itemLink: {
    class: [
      "relative",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      // Size
      "leading-none",
      // Misc
      "select-none",
      "cursor-pointer",
      "no-underline ",
      "overflow-hidden"
    ]
  },
  itemIcon: {
    class: "mr-2"
  },
  submenuIcon: ({ props: e }) => ({
    class: [
      {
        "ml-auto sm:ml-2": e.horizontal,
        "ml-auto": !e.horizontal
      }
    ]
  }),
  overlay: ({ props: e }) => ({
    class: [
      // Size
      "w-auto",
      // Spacing
      "m-0",
      // Shape
      "shadow-none sm:shadow-md",
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      // Position
      "static sm:absolute",
      "z-10",
      {
        "sm:left-full top-0": !e.horizontal
      }
    ]
  }),
  grid: {
    class: "flex flex-wrap sm:flex-nowrap"
  },
  column: {
    class: "w-full sm:w-1/2"
  },
  submenu: {
    class: ["m-0 list-none", "p-1 px-2 w-full sm:min-w-[14rem]"]
  },
  submenuLabel: {
    class: [
      "font-semibold",
      // Spacing
      "py-2 px-3",
      "m-0",
      // Color
      "text-surface-400 dark:text-surface-500",
      "bg-surface-0 dark:bg-surface-900"
    ]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600"
  },
  button: {
    class: [
      // Flexbox
      "flex sm:hidden",
      "items-center justify-center",
      // Size
      "w-7",
      "h-7",
      // Shape
      "rounded-full",
      // Color
      "text-surface-500 dark:text-white/80",
      // States
      "hover:text-surface-600 dark:hover:text-white/60",
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]",
      "focus:outline-none focus:outline-offset-0",
      "focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transitions
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer",
      "no-underline"
    ]
  },
  end: {
    class: "ml-auto self-center"
  }
}, zi = {
  root: {
    class: [
      // Sizing and Shape
      "min-w-[12.5rem]",
      "rounded-md",
      // Spacing
      "p-1",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      "border border-surface-200 dark:border-surface-700"
    ]
  },
  list: {
    class: [
      // Spacings and Shape
      "list-none",
      "m-0",
      "p-0",
      "outline-none"
    ]
  },
  item: {
    class: "relative my-[2px] [&:first-child]:mt-0"
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600"
  },
  itemContent: ({ context: e }) => ({
    class: [
      //Shape
      "rounded-[4px]",
      // Colors
      {
        "text-surface-500 dark:text-white/70": !e.focused && !e.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90": e.focused && !e.active,
        "bg-highlight text-highlight-contrast": e.focused && e.active || e.active || !e.focused && e.active
      },
      // Transitions
      "transition-shadow",
      "duration-200",
      // States
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.active,
        "hover:bg-highlight-emphasis": e.active
      },
      // Disabled
      { "opacity-60 pointer-events-none cursor-default": e.disabled }
    ]
  }),
  itemLink: {
    class: [
      "relative",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      // Misc
      "no-underline",
      "overflow-hidden",
      "cursor-pointer",
      "select-none"
    ]
  },
  itemIcon: {
    class: [
      // Spacing
      "mr-2"
    ]
  },
  itemLabel: {
    class: ["leading-[normal]"]
  },
  submenuLabel: {
    class: [
      // Font
      "font-bold",
      // Spacing
      "m-0",
      "py-2 px-3",
      // Shape
      "rounded-tl-none",
      "rounded-tr-none",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-400 dark:text-surface-600"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Ni = {
  root: {
    class: [
      "relative",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "p-2",
      // Shape
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-800",
      "border border-surface-200 dark:border-none"
    ]
  },
  rootList: ({ props: e }) => ({
    class: [
      // Flexbox
      "sm:flex",
      "items-center",
      "flex-wrap",
      "flex-col sm:flex-row",
      { hidden: !(e != null && e.mobileActive), flex: e == null ? void 0 : e.mobileActive },
      // Position
      "absolute sm:relative",
      "top-full left-0",
      "sm:top-auto sm:left-auto",
      // Size
      "w-full sm:w-auto",
      // Spacing
      "m-0",
      "p-1 sm:py-0 sm:p-0",
      "list-none",
      // Shape
      "shadow-md sm:shadow-none",
      "border-0",
      // Color
      "bg-surface-0 dark:bg-surface-800 sm:bg-transparent",
      // Misc
      "outline-none"
    ]
  }),
  item: {
    class: "sm:relative sm:w-auto w-full static my-[2px] [&:first-child]:mt-0"
  },
  itemContent: ({ context: e }) => ({
    class: [
      // Shape
      "rounded-[4px]",
      // Colors
      {
        "text-surface-500 dark:text-white/70": !e.focused && !e.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90": e.focused && !e.active,
        "bg-highlight text-highlight-contrast": e.focused && e.active || e.active || !e.focused && e.active
      },
      // States
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.active,
        "hover:bg-highlight-emphasis": e.active
      },
      // Disabled State
      { "opacity-60 pointer-events-none cursor-default": e.disabled },
      // Transitions
      "transition-all",
      "duration-200"
    ]
  }),
  itemLink: ({ context: e }) => ({
    class: [
      "relative",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      // Size
      {
        "pl-9 sm:pl-5": e.level === 1,
        "pl-14 sm:pl-5": e.level === 2
      },
      "leading-none",
      // Misc
      "select-none",
      "cursor-pointer",
      "no-underline ",
      "overflow-hidden"
    ]
  }),
  itemIcon: {
    class: "mr-2"
  },
  submenuIcon: ({ props: e }) => ({
    class: [
      {
        "ml-auto sm:ml-2": e.root,
        "ml-auto": !e.root
      }
    ]
  }),
  submenu: ({ props: e }) => ({
    class: [
      "flex flex-col",
      // Size
      "rounded-md",
      "min-w-[12.5rem]",
      // Spacing
      "p-1",
      "m-0",
      "list-none",
      // Shape
      "shadow-none sm:shadow-md",
      "border border-surface-200 dark:border-surface-700",
      // Position
      "static sm:absolute",
      "z-10",
      { "sm:absolute sm:left-full sm:top-0": e.level > 1 },
      // Color
      "bg-surface-0 dark:bg-surface-900"
    ]
  }),
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600"
  },
  button: {
    class: [
      // Flexbox
      "flex sm:hidden",
      "items-center justify-center",
      // Size
      "w-7",
      "h-7",
      // Shape
      "rounded-full",
      // Color
      "text-surface-500 dark:text-white/80",
      // States
      "hover:text-surface-600 dark:hover:text-white/60",
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]",
      "focus:outline-none focus:outline-offset-0",
      "focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transitions
      "transition duration-200 ease-in-out",
      // Misc
      "cursor-pointer",
      "no-underline"
    ]
  },
  end: {
    class: "ml-auto self-center"
  }
}, Ri = {
  root: ({ props: e }) => ({
    class: [
      // Spacing and Shape
      "rounded-md",
      "outline",
      // Colors
      {
        "bg-blue-100/70 dark:bg-blue-500/20": e.severity == "info",
        "bg-green-100/70 dark:bg-green-500/20": e.severity == "success",
        "bg-surface-100/70 dark:bg-surface-500/20": e.severity == "secondary",
        "bg-orange-100/70 dark:bg-orange-500/20": e.severity == "warn",
        "bg-red-100/70 dark:bg-red-500/20": e.severity == "error",
        "bg-surface-950 dark:bg-surface-0": e.severity == "contrast"
      },
      {
        "outline-blue-200 dark:outline-blue-500/20": e.severity == "info",
        "outline-green-200 dark:outline-green-500/20": e.severity == "success",
        "outline-surface-200 dark:outline-surface-500/20": e.severity == "secondary",
        "outline-orange-200 dark:outline-orange-500/20": e.severity == "warn",
        "outline-red-200 dark:outline-red-500/20": e.severity == "error",
        "outline-surface-950 dark:outline-surface-0": e.severity == "contrast"
      },
      {
        "text-blue-700 dark:text-blue-300": e.severity == "info",
        "text-green-700 dark:text-green-300": e.severity == "success",
        "text-surface-700 dark:text-surface-300": e.severity == "secondary",
        "text-orange-700 dark:text-orange-300": e.severity == "warn",
        "text-red-700 dark:text-red-300": e.severity == "error",
        "text-surface-0 dark:text-surface-950": e.severity == "contrast"
      }
    ]
  }),
  content: {
    class: [
      // Flexbox
      "flex items-center h-full",
      // Spacing
      "py-2 px-3 gap-2"
    ]
  },
  icon: {
    class: [
      // Sizing and Spacing
      "shrink-0 w-[1.125rem] h-[1.125rem]"
    ]
  },
  text: {
    class: [
      // Font and Text
      "text-base leading-[normal]",
      "font-medium"
    ]
  },
  closeButton: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex items-center justify-center",
      // Size
      "w-7 h-7",
      // Spacing and Misc
      "ml-auto relative",
      // Shape
      "rounded-full",
      // Colors
      "bg-transparent",
      // Transitions
      "transition duration-200 ease-in-out",
      // States
      "hover:bg-surface-0/30 dark:hover:bg-[rgba(255,255,255,0.03)]",
      "focus:outline-none focus:outline-offset-0 focus:ring-1",
      {
        "focus:ring-blue-500 dark:focus:ring-blue-400": e.severity == "info",
        "focus:ring-green-500 dark:focus:ring-green-400": e.severity == "success",
        "focus:ring-surface-500 dark:focus:ring-surface-400": e.severity == "secondary",
        "focus:ring-orange-500 dark:focus:ring-orange-400": e.severity == "warn",
        "focus:ring-red-500 dark:focus:ring-red-4000": e.severity == "error",
        "focus:ring-surface-0 dark:focus:ring-surface-950": e.severity == "contrast"
      },
      // Misc
      "overflow-hidden"
    ]
  }),
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-300",
    leaveFromClass: "max-h-40",
    leaveActiveClass: "overflow-hidden transition-all duration-300 ease-in",
    leaveToClass: "max-h-0 opacity-0 !m-0"
  }
}, Bi = {
  root: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex gap-4",
      { "flex-col": e.orientation == "horizontal", "flex-row": e.orientation == "vertical" }
    ]
  }),
  meters: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex",
      { "flex-col": e.orientation === "vertical" },
      // Sizing
      { "w-2 h-full": e.orientation === "vertical" },
      { "h-2": e.orientation === "horizontal" },
      // Colors
      "bg-gray-200 dark:bg-gray-700",
      // Border Radius
      "rounded-lg"
    ]
  }),
  meter: ({ props: e }) => ({
    class: [
      // Shape
      "border-0",
      // Rounded Corners - Horizontal
      {
        "first:rounded-l-lg last:rounded-r-lg": e.orientation === "horizontal"
      },
      // Rounded Corners - Vertical
      {
        "first:rounded-t-lg last:rounded-b-lg": e.orientation === "vertical"
      },
      // Colors
      "bg-primary"
    ]
  }),
  labelList: ({ props: e }) => ({
    class: [
      // Display & Flexbox
      "flex flex-wrap",
      { "gap-4": e.labelOrientation === "horizontal" },
      { "gap-2": e.labelOrientation === "vertical" },
      { "flex-col": e.labelOrientation === "vertical" },
      // Conditional Alignment - Horizontal
      {
        "align-end": e.labelOrientation === "horizontal" && e.labelPosition === "end",
        "align-start": e.labelOrientation === "horizontal" && e.labelPosition === "start"
      },
      // Conditional Alignment - Vertical
      {
        "justify-start": e.labelOrientation === "vertical" && e.labelPosition === "start"
      },
      // List Styling
      "m-0 p-0 list-none"
    ]
  }),
  label: {
    class: [
      // Flexbox
      "inline-flex",
      "items-center",
      "gap-2"
    ]
  },
  labelMarker: {
    class: [
      // Display
      "inline-flex",
      // Background Color
      "bg-primary",
      // Size
      "w-2 h-2",
      // Rounded Shape
      "rounded-full"
    ]
  }
}, Vi = {
  root: ({ props: e, state: t }) => ({
    class: [
      // Font
      "leading-none",
      // Display and Position
      "inline-flex",
      "relative",
      // Shape
      "rounded-md",
      // Color and Background
      { "bg-surface-0 dark:bg-surface-950": !e.disabled },
      "border",
      { "border-surface-300 dark:border-surface-600": !e.invalid },
      // Invalid State
      "invalid:focus:ring-red-200",
      "invalid:hover:border-red-500",
      { "border-red-500 dark:border-red-400": e.invalid },
      // Transitions
      "transition-all",
      "duration-200",
      // States
      { "hover:border-surface-400 dark:hover:border-surface-700": !e.invalid },
      { "outline-none outline-offset-0 z-10 ring-1 ring-primary-500 dark:ring-primary-400": t.focused },
      // Misc
      "cursor-pointer",
      "select-none",
      { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  labelContainer: "overflow-hidden flex flex-auto cursor-pointer",
  label: ({ props: e, parent: t }) => {
    var r, n, o, a, s, i, l, c;
    return {
      class: [
        "text-base leading-2",
        // Spacing
        {
          "py-2 px-3": e.display === "comma" || e.display === "chip" && !((r = e == null ? void 0 : e.modelValue) != null && r.length),
          "py-1 px-1": e.display === "chip" && ((n = e == null ? void 0 : e.modelValue) == null ? void 0 : n.length) > 0
        },
        // Color
        { "text-surface-800 dark:text-white/80": (o = e.modelValue) == null ? void 0 : o.length, "text-surface-400 dark:text-surface-500": !((a = e.modelValue) != null && a.length) },
        {
          "placeholder:text-transparent dark:placeholder:text-transparent": ((s = t.instance) == null ? void 0 : s.$name) == "FloatLabel",
          "!text-transparent dark:!text-transparent": ((i = t.instance) == null ? void 0 : i.$name) == "FloatLabel" && e.modelValue == null || ((l = e.modelValue) == null ? void 0 : l.length) == 0
        },
        // Filled State *for FloatLabel
        { filled: ((c = t.instance) == null ? void 0 : c.$name) == "FloatLabel" && e.modelValue !== null },
        // Transitions
        "transition duration-200",
        // Misc
        "overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis"
      ]
    };
  },
  dropdown: {
    class: [
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",
      // Color and Background
      "bg-transparent",
      "text-surface-500",
      // Size
      "w-12",
      // Shape
      "rounded-r-md"
    ]
  },
  overlay: {
    class: [
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      // Shape
      "border border-surface-300 dark:border-surface-700",
      "rounded-md",
      "shadow-md",
      "mt-[2px]"
    ]
  },
  header: {
    class: [
      //Flex
      "flex items-center justify-between",
      // Spacing
      "pt-2 px-4 pb-0 gap-2",
      "m-0",
      //Shape
      "border-b-0",
      "rounded-tl-md",
      "rounded-tr-md",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-300 dark:border-surface-700",
      "[&_[data-pc-name=pcfiltercontainer]]:!flex-auto",
      "[&_[data-pc-name=pcfilter]]:w-full"
    ]
  },
  listContainer: {
    class: [
      // Sizing
      "max-h-[200px]",
      // Misc
      "overflow-auto"
    ]
  },
  list: {
    class: "p-1 list-none m-0"
  },
  option: ({ context: e }) => ({
    class: [
      "relative",
      "flex items-center",
      // Font
      "leading-none",
      // Spacing
      "m-0 px-3 py-2 gap-2",
      "first:mt-0 mt-[2px]",
      // Shape
      "border-0 rounded",
      // Colors
      {
        "bg-surface-200 dark:bg-surface-600/60": e.focused && !e.selected,
        "text-surface-700 dark:text-white/80": e.focused && !e.selected,
        "bg-highlight": e.selected
      },
      //States
      { "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.focused && !e.selected },
      { "hover:bg-highlight-emphasis": e.selected },
      { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]": e.focused && !e.selected },
      // Transition
      "transition-shadow duration-200",
      // Misc
      "cursor-pointer overflow-hidden whitespace-nowrap"
    ]
  }),
  optionGroup: {
    class: [
      "font-semibold",
      // Spacing
      "m-0 py-2 px-3",
      // Colors
      "text-surface-400 dark:text-surface-500",
      // Misc
      "cursor-auto"
    ]
  },
  emptyMessage: {
    class: [
      // Font
      "leading-none",
      // Spacing
      "py-2 px-3",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-transparent"
    ]
  },
  loadingIcon: {
    class: "text-surface-400 dark:text-surface-500 animate-spin"
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Fi = {
  root: "flex",
  controls: {
    class: [
      // Flexbox & Alignment
      "flex xl:flex-col justify-center gap-2",
      // Spacing
      "p-[1.125rem]"
    ]
  },
  container: {
    class: [
      "flex-auto",
      // Shape
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-200 dark:border-surface-700",
      "outline-none"
    ]
  }
}, Mi = {
  table: {
    class: [
      // Spacing & Position
      "mx-auto my-0",
      // Table Style
      "border-spacing-0 border-separate"
    ]
  },
  cell: {
    class: [
      // Alignment
      "text-center align-top",
      // Spacing
      "py-0 px-3"
    ]
  },
  node: ({ context: e }) => ({
    class: [
      "relative inline-block",
      // Spacing
      "py-3 px-4",
      // Shape
      "border",
      "rounded-md",
      "border-surface-200 dark:border-surface-700",
      // Color
      {
        "text-surface-600 dark:text-white/80": !(e != null && e.selected),
        "bg-surface-0 dark:bg-surface-900": !(e != null && e.selected),
        "bg-highlight": e == null ? void 0 : e.selected
      },
      // States
      {
        "hover:bg-surface-100 dark:hover:bg-surface-800": (e == null ? void 0 : e.selectable) && !(e != null && e.selected),
        "hover:bg-highlight-emphasis": (e == null ? void 0 : e.selectable) && (e == null ? void 0 : e.selected)
      },
      { "cursor-pointer": e == null ? void 0 : e.selectable }
    ]
  }),
  lineCell: {
    class: [
      // Alignment
      "text-center align-top",
      // Spacing
      "py-0 px-3"
    ]
  },
  connectorDown: {
    class: [
      // Spacing
      "mx-auto my-0",
      // Size
      "w-px h-[20px]",
      // Color
      "bg-surface-200 dark:bg-surface-700"
    ]
  },
  connectorLeft: ({ context: e }) => ({
    class: [
      // Alignment
      "text-center align-top",
      // Spacing
      "py-0 px-3",
      // Shape
      "rounded-none border-r",
      { "border-t": e.lineTop },
      // Color
      "border-surface-200 dark:border-surface-700"
    ]
  }),
  connectorRight: ({ context: e }) => ({
    class: [
      // Alignment
      "text-center align-top",
      // Spacing
      "py-0 px-3",
      // Shape
      "rounded-none",
      // Color
      { "border-t border-surface-200 dark:border-surface-700": e.lineTop }
    ]
  }),
  nodeCell: {
    class: "text-center align-top py-0 px-3"
  },
  nodeToggleButton: {
    class: [
      // Position
      "absolute bottom-[-0.75rem] left-2/4 -ml-3",
      "z-20",
      // Flexbox
      "flex items-center justify-center",
      // Size
      "w-6 h-6",
      // Shape
      "rounded-full",
      "border border-surface-200 dark:border-surface-700",
      // Color
      "bg-inherit text-inherit",
      // Focus
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Misc
      "cursor-pointer no-underline select-none"
    ]
  },
  nodeToggleButtonIcon: {
    class: [
      // Position
      "static inline-block",
      // Size
      "w-4 h-4"
    ]
  }
}, Di = {
  root: {
    class: [
      "relative",
      "[&>[data-pc-name=pcbadge]]:absolute",
      "[&>[data-pc-name=pcbadge]]:top-0",
      "[&>[data-pc-name=pcbadge]]:right-0",
      "[&>[data-pc-name=pcbadge]]:translate-x-1/2",
      "[&>[data-pc-name=pcbadge]]:-translate-y-1/2",
      "[&>[data-pc-name=pcbadge]]:m-0",
      "[&>[data-pc-name=pcbadge]]:origin-[100%_0]",
      "[&>[data-pc-name=pcbadge]]:outline",
      "[&>[data-pc-name=pcbadge]]:outline-[2px]",
      "[&>[data-pc-name=pcbadge]]:outline-surface-0",
      "dark:[&>[data-pc-name=pcbadge]]:outline-surface-900"
    ]
  }
}, Hi = {
  root: {
    class: [
      // Flex & Alignment
      "flex items-center justify-center flex-wrap",
      // Spacing
      "px-4 py-2",
      // Shape
      "border-0 rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-500 dark:text-white/60"
    ]
  },
  first: ({ context: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-0 rounded-full",
      // Size
      "min-w-[2.5rem] h-10 m-[0.143rem]",
      "leading-none",
      // Color
      "text-surface-500 dark:text-white/60",
      // State
      {
        "hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": e.disabled }
    ]
  }),
  prev: ({ context: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-0 rounded-full",
      // Size
      "min-w-[2.5rem] h-10 m-[0.143rem]",
      "leading-none",
      // Color
      "text-surface-500 dark:text-white/60",
      // State
      {
        "hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": e.disabled }
    ]
  }),
  next: ({ context: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-0 rounded-full",
      // Size
      "min-w-[2.5rem] h-10 m-[0.143rem]",
      "leading-none",
      // Color
      "text-surface-500 dark:text-white/60",
      // State
      {
        "hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": e.disabled }
    ]
  }),
  last: ({ context: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-0 rounded-full",
      // Size
      "min-w-[2.5rem] h-10 m-[0.143rem]",
      "leading-none",
      // Color
      "text-surface-500 dark:text-white/60",
      // State
      {
        "hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.disabled,
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": e.disabled }
    ]
  }),
  page: ({ context: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-0 rounded-full",
      // Size
      "min-w-[2.5rem] h-10 m-[0.143rem]",
      "leading-none",
      // Color
      {
        "bg-highlight text-highlight-contrast border-highlight text-highlight-contrast hover:bg-highlight-emphasis ": e.active,
        "text-surface-500 dark:text-white/60": !e.active
      },
      // State
      {
        "hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.disabled && !e.active,
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400": !e.disabled
      },
      // Transition
      "transition duration-200",
      // Misc
      "user-none overflow-hidden",
      { "cursor-default pointer-events-none opacity-60": e.disabled }
    ]
  }),
  contentStart: "mr-auto",
  contentEnd: "ml-auto"
}, Ui = {
  root: {
    class: [
      //Shape
      "rounded-md",
      //Colors
      "border border-surface-200 dark:border-surface-700",
      "bg-surface-0 dark:bg-surface-900"
    ]
  },
  header: ({ props: e }) => ({
    class: [
      // Flex
      "flex items-center justify-between",
      // Colors
      "text-surface-700 dark:text-surface-0/80",
      "bg-transparent",
      //Shape
      "rounded-tl-md rounded-tr-md",
      "border-0",
      // Conditional Spacing
      { "p-[1.125rem]": !e.toggleable, "py-3 px-[1.125rem]": e.toggleable }
    ]
  }),
  title: {
    class: "leading-none font-semibold"
  },
  pctogglebutton: {
    root: {
      class: [
        // Positioning
        "relative",
        // Flexbox alignment
        "inline-flex items-center justify-center text-center",
        // Line height
        "leading-[normal]",
        // Size
        "w-10 h-10 px-0 py-2",
        // Shape
        "rounded-[50%] rounded-full",
        // Background and border
        "bg-transparent border-transparent",
        // Text color
        "text-surface-500 dark:text-surface-300",
        // Focus states
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-surface-500 dark:focus:ring-surface-400",
        // Hover effect
        "hover:bg-surface-300/10",
        // Transition effects
        "transition duration-200 ease-in-out",
        // Cursor and overflow
        "cursor-pointer overflow-hidden select-none"
      ]
    }
  },
  content: {
    class: [
      // Spacing
      "p-[1.125rem] pt-0",
      // Shape
      "border-0 border-t-0 last:rounded-br-md last:rounded-bl-md",
      //Color
      "text-surface-700 dark:text-surface-0/80"
    ]
  },
  footer: {
    class: [
      // Spacing
      "p-[1.125rem] pt-0",
      // Shape
      "border-0 border-t-0 rounded-br-lg rounded-bl-lg",
      //Color
      "text-surface-700 dark:text-surface-0/80"
    ]
  },
  transition: {
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0"
  }
}, Ki = {
  panel: {
    class: "p-1 overflow-hidden mb-3 border border-surface-200 dark:border-surface-700 rounded-md"
  },
  header: {
    class: ["rounded-[4px]", "outline-none"]
  },
  headerContent: ({ context: e }) => ({
    class: [
      // Shape
      "rounded-[4px]",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-600 dark:text-surface-0/80",
      { "text-surface-900": e.active },
      // States
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]",
      "hover:text-surface-900",
      // Transition
      "transition duration-200 ease-in-out",
      "transition-shadow duration-200"
    ]
  }),
  headerLink: {
    class: [
      "relative",
      // Font
      "font-semibold",
      "leading-none",
      // Flex & Alignments
      "flex items-center",
      // Spacing
      "py-2 px-3",
      // Misc
      "select-none cursor-pointer no-underline"
    ]
  },
  headerLabel: {
    class: "leading-none"
  },
  headerIcon: {
    class: "mr-2"
  },
  submenuIcon: {
    class: "mr-2"
  },
  content: {
    class: [
      // Spacing
      "pl-4",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900"
    ]
  },
  rootList: {
    class: ["outline-none", "m-0 p-0 list-none"]
  },
  menuitem: {
    class: "relative my-[2px]"
  },
  itemContent: {
    class: [
      // Shape
      "border-none rounded-[4px]",
      // Color
      "text-surface-700 dark:text-white/80",
      // Transition
      "transition-shadow duration-200"
    ]
  },
  itemLink: ({ context: e }) => ({
    class: [
      "relative",
      // Font
      "leading-none",
      // Flex & Alignments
      "flex items-center",
      // Spacing
      "py-2 px-3",
      // Shape
      "rounded-[4px]",
      // Color
      "text-surface-700 dark:text-white/80",
      // States
      "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)] hover:text-surface-700 dark:hover:text-white/80",
      {
        "bg-surface-200 text-surface-700 dark:text-white/80 dark:bg-surface-0/10": e.focused
      },
      // Misc
      "cursor-pointer no-underline",
      "select-none overflow-hidden"
    ]
  }),
  itemIcon: {
    class: "mr-2"
  },
  submenu: {
    class: "p-0 pl-4 m-0 list-none"
  },
  transition: {
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0"
  }
}, Wi = {
  root: ({ props: e }) => ({
    class: ["relative [&>input]:w-full", { "[&>input]:pr-10": e.toggleMask }, { "flex [&>input]:w-full": e.fluid, "inline-flex": !e.fluid }]
  }),
  overlay: {
    class: [
      // Spacing
      "p-3",
      // Shape
      "border",
      "shadow-md rounded-md",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      "border-surface-200 dark:border-surface-700"
    ]
  },
  meter: {
    class: [
      // Position and Overflow
      "overflow-hidden",
      "relative",
      // Shape and Size
      "border-0",
      "h-[10px]",
      "rounded-md",
      // Spacing
      "mb-3",
      // Colors
      "bg-surface-100 dark:bg-surface-700"
    ]
  },
  meterLabel: ({ instance: e }) => {
    var t, r, n;
    return {
      class: [
        // Size
        "h-full",
        // Colors
        {
          "bg-red-500 dark:bg-red-400/50": ((t = e == null ? void 0 : e.meter) == null ? void 0 : t.strength) == "weak",
          "bg-orange-500 dark:bg-orange-400/50": ((r = e == null ? void 0 : e.meter) == null ? void 0 : r.strength) == "medium",
          "bg-green-500 dark:bg-green-400/50": ((n = e == null ? void 0 : e.meter) == null ? void 0 : n.strength) == "strong"
        },
        // Transitions
        "transition-all duration-1000 ease-in-out"
      ]
    };
  },
  maskIcon: {
    class: ["absolute top-1/2 right-3 -mt-2 z-10", "text-surface-600 dark:text-white/70"]
  },
  unmaskIcon: {
    class: ["absolute top-1/2 right-3 -mt-2 z-10", "text-surface-600 dark:text-white/70"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Gi = {
  root: "flex [&_[data-pc-name=pclist]]:h-full",
  sourceControls: {
    class: [
      // Flexbox & Alignment
      "flex xl:flex-col justify-center gap-2",
      // Spacing
      "p-[1.125rem]"
    ]
  },
  sourceListContainer: {
    class: [
      // Flexbox
      "grow shrink basis-2/4",
      // Shape
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-200 dark:border-surface-700",
      "outline-none"
    ]
  },
  transferControls: {
    class: [
      // Flexbox & Alignment
      "flex xl:flex-col justify-center gap-2",
      // Spacing
      "p-[1.125rem]"
    ]
  },
  targetListContainer: {
    class: [
      // Flexbox
      "grow shrink basis-2/4",
      // Shape
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-200 dark:border-surface-700",
      "outline-none"
    ]
  },
  targetControls: {
    class: [
      // Flexbox & Alignment
      "flex xl:flex-col justify-center gap-2",
      // Spacing
      "p-[1.125rem]"
    ]
  },
  transition: {
    enterFromClass: "!transition-none",
    enterActiveClass: "!transition-none",
    leaveActiveClass: "!transition-none",
    leaveToClass: "!transition-none"
  }
}, fo = {
  root: {
    class: [
      // Shape
      "rounded-md shadow-lg",
      // Position
      "absolute left-0 top-0 mt-3",
      '[&[data-p-popover-flipped="true"]]:mb-3 [&[data-p-popover-flipped="true"]]:-mt-3',
      "z-40 transform origin-center",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80",
      // Before: Arrow
      "before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-[10px] before:border-x-[10px] before:border-b-[10px] before:border-t-0 before:border-b-surface-200 dark:before:border-b-surface-700",
      "after:absolute after:w-0 after:-top-[0.54rem] after:left-[4px] after:h-0 after:border-transparent after:border-solid after:ml-[8px] after:border-x-[8px] after:border-b-[8px] after:border-t-0 after:border-b-surface-0 dark:after:border-b-surface-900",
      // Flipped: Arrow
      '[&[data-p-popover-flipped="true"]]:before:-bottom-3 [&[data-p-popover-flipped="true"]]:before:top-auto [&[data-p-popover-flipped="true"]]:before:border-b-0 [&[data-p-popover-flipped="true"]]:before:border-t-[10px] [&[data-p-popover-flipped="true"]]:before:border-t-surface-200 dark:[&[data-p-popover-flipped="true"]]:before:border-t-surface-700',
      '[&[data-p-popover-flipped="true"]]:after:-bottom-[0.54rem] [&[data-p-popover-flipped="true"]]:after:top-auto [&[data-p-popover-flipped="true"]]:after:border-b-0 [&[data-p-popover-flipped="true"]]:after:border-t-[8px] [&[data-p-popover-flipped="true"]]:after:border-t-surface-0 dark:[&[data-p-popover-flipped="true"]]:after:border-t-surface-900'
    ]
  },
  content: {
    class: ["p-5 items-center flex", "rounded-lg", "border border-surface-200 dark:border-surface-700"]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, qi = {
  root: {
    class: [
      // Position and Overflow
      "overflow-hidden",
      "relative",
      // Shape and Size
      "border-0",
      "h-5",
      "rounded-md",
      // Colors
      "bg-surface-100 dark:bg-surface-800"
    ]
  },
  value: ({ props: e }) => ({
    class: [
      // Flexbox & Overflow & Position
      { "absolute flex items-center justify-center overflow-hidden": e.mode !== "indeterminate" },
      // Colors
      "bg-primary",
      // Spacing & Sizing
      "m-0",
      { "h-full w-0": e.mode !== "indeterminate" },
      // Shape
      "border-0",
      // Transitions
      {
        "transition-width duration-1000 ease-in-out": e.mode !== "indeterminate",
        "progressbar-value-animate": e.mode == "indeterminate"
      },
      // Before & After (indeterminate)
      {
        "before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-inherit ": e.mode == "indeterminate",
        "after:absolute after:top-0 after:left-0 after:bottom-0 after:bg-inherit after:delay-1000": e.mode == "indeterminate"
      }
    ]
  }),
  label: {
    class: [
      //Font
      "text-xs font-semibold",
      // Flexbox
      "inline-flex",
      // Font and Text
      "text-white dark:text-surface-900",
      "leading-5"
    ]
  }
}, Yi = {
  root: {
    class: [
      // Position
      "relative",
      "mx-auto",
      // Sizing
      "w-28",
      "h-28",
      // Flexbox
      "inline-block",
      // Pseudo-Elements
      "before:block",
      "before:pt-full"
    ]
  },
  spinner: {
    class: [
      // Position
      "absolute",
      "top-0",
      "bottom-0",
      "left-0",
      "right-0",
      "m-auto",
      // Sizing
      "w-full",
      "h-full",
      // Transformations
      "transform",
      "origin-center",
      // Animations
      "animate-spin"
    ]
  },
  circle: {
    class: [
      // Colors
      "text-red-500",
      // Misc
      "progress-spinner-circle"
    ]
  }
}, Ji = {
  root: {
    class: [
      "relative",
      // Flexbox & Alignment
      "inline-flex",
      "align-bottom",
      // Size
      "w-5 h-5",
      // Misc
      "cursor-pointer",
      "select-none"
    ]
  },
  box: ({ props: e, context: t }) => ({
    class: [
      // Flexbox
      "flex justify-center items-center",
      // Size
      "w-5 h-5",
      // Shape
      "border outline-transparent",
      "rounded-full",
      // Transition
      "transition duration-200 ease-in-out",
      // Colors
      {
        "text-surface-700 dark:text-white/80": t.checked,
        "border-surface-300 dark:border-surface-700": !t.checked && !e.invalid,
        "border-primary bg-primary": t.checked && !e.disabled
      },
      // Invalid State
      { "border-red-500 dark:border-red-400": e.invalid },
      // States
      {
        "peer-hover:border-surface-400 dark:peer-hover:border-surface-400": !e.disabled && !e.invalid && !t.checked,
        "peer-hover:border-primary-emphasis": !e.disabled && !t.checked,
        "peer-hover:[&>*:first-child]:bg-primary-600 dark:peer-hover:[&>*:first-child]:bg-primary-300": !e.disabled && !t.checked,
        "peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400": !e.disabled,
        "bg-surface-200 [&>*:first-child]:bg-surface-600 dark:bg-surface-700 dark:[&>*:first-child]:bg-surface-400 border-surface-300 dark:border-surface-700 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  input: {
    class: [
      "peer",
      // Size
      "w-full ",
      "h-full",
      // Position
      "absolute",
      "top-0 left-0",
      "z-10",
      // Spacing
      "p-0",
      "m-0",
      // Shape
      "opacity-0",
      "rounded-md",
      "outline-none",
      "border-1 border-surface-200 dark:border-surface-700",
      // Misc
      "appearance-none",
      "cursor-pointer"
    ]
  },
  icon: ({ context: e }) => ({
    class: [
      "block",
      // Shape
      "rounded-full",
      // Size
      "w-3 h-3",
      // Conditions
      {
        "bg-surface-0 dark:bg-surface-900": e.checked,
        "bg-primary": !e.checked,
        "backface-hidden invisible scale-[0.1]": !e.checked,
        "transform visible translate-z-0 scale-[1,1]": e.checked
      },
      // Transition
      "transition duration-200"
    ]
  })
}, Qi = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      // Flex & Alignment
      "flex items-center",
      "gap-1",
      // Misc
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  option: ({ props: e, context: t }) => ({
    class: [
      // Flex & Alignment
      "inline-flex items-center",
      // State
      {
        "outline-none ring-1 ring-primary-500/50 dark:ring-primary-500": t.focused
      },
      // Misc
      {
        "cursor-pointer": !e.readonly,
        "cursor-default": e.readonly
      }
    ]
  }),
  offIcon: ({ props: e }) => ({
    class: [
      // Size
      "w-4 h-4",
      // Color
      "text-surface-700 dark:text-surface-0/80",
      // State
      { "hover:text-primary-500 dark:hover:text-primary-400": !e.readonly },
      // Transition
      "transition duration-200 ease-in"
    ]
  }),
  onIcon: ({ props: e }) => ({
    class: [
      // Size
      "w-4 h-4",
      // Color
      "text-primary",
      // State
      { "hover:text-primary-600 dark:hover:text-primary-300": !e.readonly },
      // Transition
      "transition duration-200 ease-in"
    ]
  })
}, Zi = {
  root: {
    class: ["block absolute bg-surface-200 dark:bg-surface-700 rounded-full pointer-events-none"],
    style: "transform: scale(0)"
  }
}, Xi = {
  root: {
    class: ["group"]
  },
  contentContainer: {
    class: [
      // Size & Position
      "h-full w-full",
      // Layering
      "z-[1]",
      // Spacing
      "overflow-hidden",
      // Misc
      "relative float-left"
    ]
  },
  content: {
    class: [
      // Size & Spacing
      "h-[calc(100%+18px)] w-[calc(100%+18px)] pr-[18px] pb-[18px] pl-0 pt-0",
      // Overflow & Scrollbar
      "overflow-scroll scrollbar-none",
      // Box Model
      "box-border",
      // Position
      "relative",
      // Webkit Specific
      "[&::-webkit-scrollbar]:hidden"
    ]
  },
  barX: {
    class: [
      // Size & Position
      "h-[9px] bottom-0",
      // Appearance
      "bg-surface-100 dark:bg-surface-800 rounded",
      "opacity-0",
      // Interactivity
      "cursor-pointer",
      "focus:outline-none",
      // Visibility & Layering
      "invisible z-20",
      // Transition
      "transition duration-[250ms] ease-linear",
      // Misc
      "relative",
      "group-hover:opacity-100"
    ]
  },
  barY: {
    class: [
      // Size & Position
      "w-[9px] top-0",
      // Appearance
      "bg-surface-100 dark:bg-surface-800 rounded",
      "opacity-0",
      // Interactivity
      "cursor-pointer",
      "focus:outline-none",
      // Visibility & Layering
      "z-20",
      // Transition
      "transition duration-[250ms] ease-linear",
      // Misc
      "relative",
      "group-hover:opacity-100"
    ]
  }
}, el = {
  button: ({ props: e }) => ({
    root: {
      class: [
        // Flex & Alignment
        "flex items-center justify-center",
        // Positioning
        {
          "!sticky flex ml-auto": e.target === "parent",
          "!fixed": e.target === "window"
        },
        "bottom-[20px] right-[20px]",
        "h-10 w-10 rounded-full shadow-md",
        "text-white dark:text-surface-900 bg-surface-600 dark:bg-surface-700",
        "hover:bg-surface-600 dark:hover:bg-surface-300"
      ]
    }
  }),
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-150",
    leaveActiveClass: "transition-opacity duration-150",
    leaveToClass: "opacity-0"
  }
}, po = {
  root: ({ props: e, state: t, parent: r }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "relative",
      // Shape
      { "rounded-md": r.instance.$name !== "InputGroup" },
      { "first:rounded-l-md rounded-none last:rounded-r-md": r.instance.$name == "InputGroup" },
      { "border-0 border-y border-l last:border-r": r.instance.$name == "InputGroup" },
      { "first:ml-0 ml-[-1px]": r.instance.$name == "InputGroup" && !e.showButtons },
      // Color and Background
      { "bg-surface-0 dark:bg-surface-950": !e.disabled },
      "border",
      { "dark:border-surface-700": r.instance.$name != "InputGroup" },
      { "dark:border-surface-600": r.instance.$name == "InputGroup" },
      { "border-surface-300 dark:border-surface-600": !e.invalid },
      // Invalid State
      "invalid:focus:ring-red-200",
      "invalid:hover:border-red-500",
      { "border-red-500 dark:border-red-400": e.invalid },
      // Transitions
      "transition-all",
      "duration-200",
      // States
      { "hover:border-surface-400 dark:hover:border-surface-600": !e.invalid },
      { "outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-secondary-400 z-10": t.focused },
      // Misc
      "cursor-pointer",
      "select-none",
      { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  label: ({ props: e, parent: t }) => {
    var r;
    return {
      class: [
        //Font
        "leading-[normal]",
        // Display
        "block",
        "flex-auto",
        // Color and Background
        "bg-transparent",
        "border-0",
        { "text-surface-800 dark:text-white/80": e.modelValue != null, "text-surface-400 dark:text-surface-500": e.modelValue == null },
        "placeholder:text-surface-400 dark:placeholder:text-surface-500",
        // Sizing and Spacing
        "w-[1%]",
        "py-2 px-3",
        { "pr-7": e.showClear },
        //Shape
        "rounded-none",
        // Transitions
        "transition",
        "duration-200",
        // States
        "focus:outline-none focus:shadow-none",
        // Filled State *for FloatLabel
        { filled: ((r = t.instance) == null ? void 0 : r.$name) == "FloatLabel" && e.modelValue !== null },
        // Misc
        "relative",
        "cursor-pointer",
        "overflow-hidden overflow-ellipsis",
        "whitespace-nowrap",
        "appearance-none"
      ]
    };
  },
  dropdown: {
    class: [
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",
      // Color and Background
      "bg-transparent",
      "text-surface-500",
      // Size
      "w-12",
      // Shape
      "rounded-r-md"
    ]
  },
  overlay: {
    class: [
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      // Shape
      "border border-surface-300 dark:border-surface-700",
      "rounded-md",
      "shadow-md"
    ]
  },
  listContainer: {
    class: [
      // Sizing
      "max-h-[200px]",
      // Misc
      "overflow-auto"
    ]
  },
  list: {
    class: "p-1 list-none m-0"
  },
  option: ({ context: e }) => ({
    class: [
      "relative",
      "flex items-center",
      // Font
      "leading-none",
      // Spacing
      "m-0 px-3 py-2",
      "first:mt-0 mt-[2px]",
      // Shape
      "border-0 rounded",
      // Colors
      {
        "bg-surface-200 dark:bg-surface-600/60": e.focused && !e.selected,
        "text-surface-700 dark:text-white/80": e.focused && !e.selected,
        "bg-highlight": e.selected
      },
      //States
      { "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.focused && !e.selected },
      { "hover:bg-highlight-emphasis": e.selected },
      { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]": e.focused && !e.selected },
      // Transition
      "transition-shadow duration-200",
      // Misc
      "cursor-pointer overflow-hidden whitespace-nowrap"
    ]
  }),
  optionGroup: {
    class: [
      "font-semibold",
      // Spacing
      "m-0 py-2 px-3",
      // Colors
      "text-surface-400 dark:text-surface-500",
      // Misc
      "cursor-auto"
    ]
  },
  optionCheckIcon: "relative -ms-1.5 me-1.5 text-surface-700 dark:text-white/80 w-4 h-4",
  optionBlankIcon: "w-4 h-4",
  emptyMessage: {
    class: [
      // Font
      "leading-none",
      // Spacing
      "py-2 px-3",
      // Color
      "text-surface-800 dark:text-white/80",
      "bg-transparent"
    ]
  },
  header: {
    class: [
      // Spacing
      "pt-2 px-2 pb-0",
      "m-0",
      //Shape
      "border-b-0",
      "rounded-tl-md",
      "rounded-tr-md",
      // Color
      "text-surface-700 dark:text-white/80",
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-300 dark:border-surface-700"
    ]
  },
  clearIcon: {
    class: [
      // Color
      "text-surface-400 dark:text-surface-500",
      // Position
      "absolute",
      "top-1/2",
      "right-12",
      // Spacing
      "-mt-2"
    ]
  },
  loadingIcon: {
    class: "text-surface-400 dark:text-surface-500 animate-spin"
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, tl = {
  root: ({ props: e }) => ({
    class: [
      "inline-flex select-none align-bottom outline-transparent",
      "border rounded-md [&>button]:rounded-none [&>button]:border-none",
      "[&>button:first-child]:border-r-none [&>button:first-child]:rounded-r-none [&>button:first-child]:rounded-tl-md [&>button:first-child]:rounded-bl-md",
      "[&>button:last-child]:border-l-none [&>button:first-child]:rounded-l-none [&>button:last-child]:rounded-tr-md [&>button:last-child]:rounded-br-md",
      // Invalid State
      {
        "border-red-500 dark:border-red-400": e.invalid,
        "border-transparent": !e.invalid
      }
    ]
  })
}, rl = {
  root: ({ props: e }) => ({
    class: [
      "overflow-hidden",
      {
        "animate-pulse": e.animation !== "none"
      },
      // Round
      { "rounded-full": e.shape === "circle", "rounded-md": e.shape !== "circle" },
      // Colors
      "bg-surface-200 dark:bg-surface-700"
    ]
  })
}, nl = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      // Size
      { "h-[3px]": e.orientation == "horizontal", "w-[3px]": e.orientation == "vertical" },
      // Shape
      "border-0",
      "rounded-md",
      // Colors
      "bg-surface-200 dark:bg-surface-800",
      // States
      { "opacity-60 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  range: ({ props: e }) => ({
    class: [
      // Position
      "block absolute",
      {
        "top-0 left-0": e.orientation == "horizontal",
        "bottom-0 left-0": e.orientation == "vertical"
      },
      //Size
      {
        "h-full": e.orientation == "horizontal",
        "w-full": e.orientation == "vertical"
      },
      // Shape
      "rounded-md",
      // Colors
      "bg-primary"
    ]
  }),
  handle: ({ props: e }) => ({
    class: [
      "flex items-center justify-center",
      // Size
      "h-[20px]",
      "w-[20px]",
      {
        "top-[50%] -mt-[10px] -ml-[10px]": e.orientation == "horizontal",
        "left-[50%] -mb-[10px] -ml-[10px]": e.orientation == "vertical"
      },
      // Shape
      "rounded-full",
      "before:block before:w-[16px] before:h-[16px] before:rounded-full before:bg-surface-0 dark:before:bg-surface-950 before:shadow-md",
      // Colors
      "bg-surface-200 dark:bg-surface-800",
      // States
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1",
      "ring-primary-500 dark:ring-primary-400",
      // Transitions
      "transition duration-200",
      // Misc
      "cursor-grab",
      "touch-action-none"
    ]
  }),
  startHandler: ({ props: e }) => ({
    class: [
      "flex items-center justify-center",
      // Size
      "h-[20px]",
      "w-[20px]",
      {
        "top-[50%] -mt-[10px] -ml-[10px]": e.orientation == "horizontal",
        "left-[50%] -mb-[10px] -ml-[10px]": e.orientation == "vertical"
      },
      // Shape
      "rounded-full",
      "before:block before:w-[16px] before:h-[16px] before:rounded-full before:bg-surface-0 dark:before:bg-surface-950 before:shadow-md",
      // Colors
      "bg-surface-200 dark:bg-surface-800",
      // States
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1",
      "ring-primary-500 dark:ring-primary-400",
      // Transitions
      "transition duration-200",
      // Misc
      "cursor-grab",
      "touch-action-none"
    ]
  }),
  endHandler: ({ props: e }) => ({
    class: [
      "flex items-center justify-center",
      // Size
      "h-[20px]",
      "w-[20px]",
      {
        "top-[50%] -mt-[10px] -ml-[10px]": e.orientation == "horizontal",
        "left-[50%] -mb-[10px] -ml-[10px]": e.orientation == "vertical"
      },
      // Shape
      "rounded-full",
      "before:block before:w-[16px] before:h-[16px] before:rounded-full before:bg-surface-0 dark:before:bg-surface-950 before:shadow-md",
      // Colors
      "bg-surface-200 dark:bg-surface-800",
      // States
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1",
      "ring-primary-500 dark:ring-primary-400",
      // Transitions
      "transition duration-200",
      // Misc
      "cursor-grab",
      "touch-action-none"
    ]
  })
}, ol = {
  root: ({ state: e }) => ({
    class: [
      "static flex gap-2",
      {
        "[&_[data-pc-name=pcbutton]]:rotate-45": e.d_visible,
        "[&_[data-pc-name=pcbutton]]:rotate-0": !e.d_visible
      }
    ]
  }),
  list: {
    class: [
      // Spacing
      "m-0 p-0",
      // Layout & Flexbox
      "list-none flex items-center justify-center",
      // Transitions
      "transition delay-200",
      // Z-Index (Positioning)
      "z-20"
    ]
  },
  item: ({ props: e, context: t }) => ({
    class: [
      "transform transition-transform duration-200 ease-out transition-opacity duration-800",
      // Conditional Appearance
      t.hidden ? "opacity-0 scale-0" : "opacity-100 scale-100",
      // Conditional Spacing
      {
        "my-1 first:mb-2": e.direction == "up" && e.type == "linear",
        "my-1 first:mt-2": e.direction == "down" && e.type == "linear",
        "mx-1 first:mr-2": e.direction == "left" && e.type == "linear",
        "mx-1 first:ml-2": e.direction == "right" && e.type == "linear"
      },
      // Conditional Positioning
      { absolute: e.type !== "linear" }
    ]
  }),
  mask: ({ state: e }) => ({
    class: [
      // Base Styles
      "absolute left-0 top-0 w-full h-full transition-opacity duration-250 ease-in-out bg-black/40 z-0",
      // Conditional Appearance
      {
        "opacity-0 pointer-events-none": !e.d_visible,
        "opacity-100 transition-opacity duration-400 ease-in-out": e.d_visible
      }
    ]
  })
}, al = {
  root: ({ props: e }) => ({
    class: [
      // Flexbox and Position
      "inline-flex",
      "relative",
      // Shape
      "rounded-md",
      { "shadow-lg": e.raised },
      "[&>[data-pc-name=pcbutton]]:rounded-tr-none",
      "[&>[data-pc-name=pcbutton]]:rounded-br-none",
      "[&>[data-pc-name=pcdropdown]]:rounded-tl-none",
      "[&>[data-pc-name=pcdropdown]]:rounded-bl-none",
      "[&>[data-pc-name=pcmenu]]:min-w-full"
    ]
  })
}, sl = {
  root: ({ context: e }) => ({
    class: [
      // Colors
      "bg-surface-0",
      "dark:bg-surface-900",
      "text-surface-700",
      "dark:text-surface-0/80",
      // Shape
      "rounded-md",
      // Borders (Conditional)
      { "border border-solid border-surface-200 dark:border-surface-700": !e.nested },
      // Nested
      { "flex grow border-0": e.nested }
    ]
  }),
  gutter: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex",
      "items-center",
      "justify-center",
      "shrink-0",
      // Colors
      "bg-surface-100",
      "dark:bg-surface-700",
      // Transitions
      "transition-all",
      "duration-200",
      // Misc
      {
        "cursor-col-resize": e.layout == "horizontal",
        "cursor-row-resize": e.layout !== "horizontal"
      }
    ]
  }),
  gutterhandler: ({ props: e }) => ({
    class: [
      "z-20",
      // Colors
      "bg-surface-100",
      "dark:bg-surface-700",
      // Shape
      "rounded-md",
      //States
      "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300",
      // Transitions
      "transition-all",
      "duration-200",
      // Sizing (Conditional)
      {
        "h-[1.70rem]": e.layout == "horizontal",
        "w-[1.70rem] h-2": e.layout !== "horizontal"
      }
    ]
  })
}, il = {
  root: ({ context: e }) => ({
    class: ["grow", { flex: e.nested }]
  })
}, ll = {
  root: ({ context: e }) => ({
    class: ["relative flex flex-auto items-center gap-2 p-2 last-of-type:flex-[initial]", { "cursor-default pointer-events-none select-none opacity-60": e.disabled }, "[&_[data-pc-section=separator]]:has-[~[data-p-active=true]]:bg-primary"]
  }),
  header: ({ props: e, context: t }) => ({
    class: [
      "inline-flex items-center border-0 cursor-pointer rounded-md outline-transparent bg-transparent p-0 gap-2",
      "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300",
      { "!cursor-default": t.active },
      { "cursor-auto": e.linear }
    ]
  }),
  number: ({ context: e }) => ({
    class: [
      // Flexbox
      "flex",
      "items-center",
      "justify-center",
      //Colors
      "border-solid border-2 border-surface-200 dark:border-surface-700",
      // Colors (Conditional)
      e.active ? "text-primary" : "text-surface-900 dark:text-surface-0",
      // Adjust colors as needed
      // Size and Shape
      "min-w-[2rem]",
      "h-[2rem]",
      "line-height-[2rem]",
      "rounded-full",
      // Text
      "text-lg",
      // Transitions
      "transition",
      "transition-colors",
      "transition-shadow",
      "duration-200"
    ]
  }),
  title: ({ context: e }) => ({
    class: [
      // Layout
      "block",
      "whitespace-nowrap",
      "overflow-hidden",
      "text-ellipsis",
      "max-w-full",
      // Text
      e.active ? "text-primary" : "text-surface-700 dark:text-surface-0/80",
      "font-medium",
      // Transitions
      "transition",
      "transition-colors",
      "transition-shadow",
      "duration-200"
    ]
  })
}, cl = {
  root: ({ state: e }) => ({
    class: [
      "flex flex-col flex-[initial] has-[[data-pc-name=steppanels]]:px-2 has-[[data-pc-name=steppanels]]:pt-3.5 has-[[data-pc-name=steppanels]]:pb-[1.125rem]",
      { "flex-auto": e.isActive },
      "[&>[data-pc-name=step]]:flex-[initial]",
      "[&>[data-pc-name=steppanel]]:flex [&>[data-pc-name=steppanel]]:flex-auto [&>[data-pc-name=steppanel]>[data-pc-section=content]]:w-full [&>[data-pc-name=steppanel]>[data-pc-section=content]]:pl-4 [&:last-child>[data-pc-name=steppanel]>[data-pc-section=content]]:ps-8",
      "[&>[data-pc-name=steppanel]>[data-pc-section=separator]]:relative [&>[data-pc-name=steppanel]>[data-pc-section=separator]]:!flex-initial [&>[data-pc-name=steppanel]>[data-pc-section=separator]]:shrink-0 [&>[data-pc-name=steppanel]>[data-pc-section=separator]]:w-[2px] [&>[data-pc-name=steppanel]>[data-pc-section=separator]]:h-auto [&>[data-pc-name=steppanel]>[data-pc-section=separator]]:m-2 [&>[data-pc-name=steppanel]>[data-pc-section=separator]]:left-[-2px] [&>[data-pc-name=steppanel]>[data-pc-section=separator]]:ml-[1.625rem]"
    ]
  })
}, ul = {
  root: "relative flex justify-between items-center m-0 p-0 list-none overflow-x-auto"
}, dl = {
  root: "px-2 pt-3.5 pb-[1.125rem]"
}, fl = {
  root: "has-[[data-pc-name=stepitem]]:flex has-[[data-pc-name=stepitem]]:flex-col",
  separator: "flex-1 w-full h-[2px] bg-surface-200 dark:bg-surface-700 transition-shadow duration-200",
  transition: {
    class: ["flex flex-1", "bg-surface-0 dark:bg-surface-900", "text-surface-900 dark:text-surface-0"],
    enterFromClass: "max-h-0",
    enterActiveClass: "overflow-hidden transition-[max-height] duration-1000 ease-[cubic-bezier(0.42,0,0.58,1)]",
    enterToClass: "max-h-[1000px]",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "overflow-hidden transition-[max-height] duration-[450ms] ease-[cubic-bezier(0,1,0,1)]",
    leaveToClass: "max-h-0"
  }
}, pl = {
  root: {
    class: "relative"
  },
  menu: {
    class: "p-0 m-0 list-none flex"
  },
  menuitem: {
    class: [
      // Flexbox and Position
      "relative",
      "flex",
      "justify-center",
      "flex-1",
      "overflow-hidden",
      // Before
      "before:border-t-2",
      "before:border-surface-200",
      "before:dark:border-surface-700",
      "before:w-full",
      "[&:first-child]:before:w-[calc(50%+1rem)]",
      "[&:last-child]:before:w-1/2",
      "before:absolute",
      "before:top-1/2",
      "before:left-0",
      "before:transform",
      "before:mt-[calc(-1rem+1px)]",
      "[&:first-child]:before:translate-x-[100%]"
    ]
  },
  action: ({ props: e }) => ({
    class: [
      // Flexbox
      "inline-flex items-center",
      "flex-col",
      // Transitions and Shape
      "transition-shadow",
      "rounded-md",
      // Colors
      "bg-surface-0",
      "dark:bg-transparent",
      // States
      "focus:outline-none focus:outline-offset-0 focus:ring",
      "focus:ring-primary-500 dark:focus:ring-primary-400",
      // Misc
      "overflow-hidden",
      { "cursor-pointer": !e.readonly }
    ]
  }),
  step: ({ context: e, props: t }) => ({
    class: [
      // Flexbox
      "flex items-center justify-center",
      // Position
      "z-20",
      // Shape
      "rounded-full",
      "border-2",
      // Size
      "w-8",
      "h-8",
      "text-sm",
      "leading-[2rem]",
      "font-medium",
      // Colors
      "bg-surface-0 dark:bg-surface-800",
      "border-surface-100 dark:border-surface-700",
      {
        "text-surface-400 dark:text-white/60": !e.active,
        "text-primary": e.active
      },
      // States
      {
        "hover:border-surface-300 dark:hover:border-surface-500": !e.active && !t.readonly
      },
      // Transition
      "transition-colors duration-200 ease-in-out"
    ]
  }),
  label: ({ context: e }) => ({
    class: [
      // Font
      "leading-[normal]",
      "font-medium",
      // Display
      "block",
      // Spacing
      "mt-2",
      // Colors
      { "text-surface-700 dark:text-white/70": !e.active, "text-primary": e.active },
      // Text and Overflow
      "whitespace-nowrap",
      "overflow-hidden",
      "overflow-ellipsis",
      "max-w-full"
    ]
  })
}, bl = {
  root: ({ props: e, context: t }) => ({
    class: [
      "relative shrink-0",
      // Shape
      "border-b",
      "rounded-t-md",
      // Spacing
      "py-4 px-[1.125rem]",
      "-mb-px",
      // Colors and Conditions
      "outline-transparent",
      {
        "border-surface-200 dark:border-secondary-400": t.active,
        "border-surface-200 dark:border-transparent": !t.active,
        "text-surface-700 dark:text-surface-0/80": !t.active,
        "bg-surface-0 dark:bg-transparent": t.active,
        "text-secondary-400": t.active,
        "opacity-60 cursor-default user-select-none select-none pointer-events-none": e == null ? void 0 : e.disabled
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-secondary-400",
      // Transitions
      "transition-all duration-200",
      // Misc
      "cursor-pointer select-none whitespace-nowrap",
      "user-select-none"
    ]
  })
}, hl = {
  root: "relative flex",
  content: "overflow-x-auto overflow-y-hidden scroll-smooth overscroll-x-contain overscroll-y-auto [&::-webkit-scrollbar]:hidden grow dark:bg-surface-800",
  tabList: "relative flex border-solid border-b border-surface-200 dark:border-surface-900",
  nextButton: "!absolute top-0 right-0 z-20 h-full w-10 flex items-center justify-center text-surface-700 dark:text-surface-0/80 bg-surface-0 dark:bg-surface-800 outline-transparent cursor-pointer shrink-0",
  prevButton: "!absolute top-0 left-0 z-20 h-full w-10 flex items-center justify-center text-surface-700 dark:text-surface-0/80 bg-surface-0 dark:bg-surface-800 outline-transparent cursor-pointer shrink-0",
  activeBar: "z-10 block absolute h-[1px] bottom-[-1px] bg-primary-400"
}, ml = {
  root: {
    class: "overflow-x-auto"
  },
  menu: {
    class: [
      // Flexbox
      "flex flex-1",
      // Spacing
      "list-none",
      "p-0 m-0",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "border-b-2 border-surface-200 dark:border-surface-700",
      "text-surface-900 dark:text-surface-0/80"
    ]
  },
  menuitem: {
    class: "mr-0"
  },
  action: ({ context: e, state: t }) => ({
    class: [
      "relative",
      // Font
      "font-semibold leading-none",
      // Flexbox and Alignment
      "flex items-center",
      // Spacing
      "py-4 px-[1.125rem]",
      "-mb-px",
      // Shape
      "border-b",
      "rounded-t-md",
      // Colors and Conditions
      {
        "border-surface-200 dark:border-surface-700": t.d_activeIndex !== e.index,
        "text-surface-700 dark:text-surface-0/80": t.d_activeIndex !== e.index,
        "bg-surface-0 dark:bg-surface-900": t.d_activeIndex === e.index,
        "border-primary": t.d_activeIndex === e.index,
        "text-primary": t.d_activeIndex === e.index
      },
      // States
      "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300",
      {
        "hover:text-surface-900 dark:hover:text-surface-0": t.d_activeIndex !== e.index
      },
      // Transitions
      "transition-all duration-200",
      // Misc
      "cursor-pointer select-none text-decoration-none",
      "overflow-hidden",
      "user-select-none"
    ]
  }),
  icon: {
    class: "mr-2"
  }
}, gl = {
  root: "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300"
}, vl = {
  root: "bg-surface-0 dark:bg-surface-800 text-surface-900 dark:text-surface-0/80 outline-0 p-[1.125rem] pt-[0.875rem]"
}, yl = {
  root: ({ props: e }) => ({
    class: ["flex flex-col", { "[&>[data-pc-name=tablist]]:overflow-hidden": e.scrollable }]
  })
}, xl = {
  // For PrimeVue version 3
  navContainer: ({ props: e }) => ({
    class: [
      // Position
      "relative",
      // Misc
      { "overflow-hidden": e.scrollable }
    ]
  }),
  navContent: ({ instance: e }) => ({
    class: [
      // Overflow and Scrolling
      "overflow-y-hidden overscroll-contain",
      "overscroll-auto",
      "scroll-smooth",
      "[&::-webkit-scrollbar]:hidden"
    ]
  }),
  previousButton: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      // Position
      "!absolute",
      "top-0 left-0",
      "z-20",
      // Size and Shape
      "h-full w-10",
      "rounded-none",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-surface-0/80",
      "shadow-sm"
    ]
  },
  nextButton: {
    class: [
      // Flexbox and Alignment
      "flex items-center justify-center",
      // Position
      "!absolute",
      "top-0 right-0",
      "z-20",
      // Size and Shape
      "h-full w-10",
      "rounded-none",
      // Colors
      "text-surface-700 dark:text-surface-0/80",
      "bg-surface-0 dark:bg-surface-900",
      "shadow-sm"
    ]
  },
  nav: {
    class: [
      // Flexbox
      "flex flex-1",
      // Spacing
      "list-none",
      "p-0 m-0",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "border-b border-surface-200 dark:border-surface-700",
      "text-surface-900 dark:text-surface-0/80"
    ]
  },
  tabpanel: {
    header: ({ props: e }) => ({
      class: [
        // Spacing
        "mr-0",
        // Misc
        "outline-none",
        {
          "opacity-60 cursor-default user-select-none select-none pointer-events-none": e == null ? void 0 : e.disabled
        }
      ]
    }),
    headerAction: ({ parent: e, context: t }) => ({
      class: [
        "relative",
        // Font
        "font-semibold",
        // Flexbox and Alignment
        "flex items-center",
        // Spacing
        "py-4 px-[1.125rem]",
        "-mb-px",
        // Shape
        "border-b-2",
        "rounded-t-md",
        // Colors and Conditions
        {
          "border-surface-200 dark:border-surface-700": e.state.d_activeIndex !== t.index,
          "text-surface-700 dark:text-surface-0/80": e.state.d_activeIndex !== t.index,
          "bg-surface-0 dark:bg-surface-900": e.state.d_activeIndex === t.index,
          "border-primary": e.state.d_activeIndex === t.index,
          "text-primary": e.state.d_activeIndex === t.index
        },
        // States
        "focus:outline-none focus:outline-offset-0 focus-visible:ring-1 ring-inset focus-visible:ring-primary-400 dark:focus-visible:ring-primary-300",
        {
          "hover:bg-surface-0 dark:hover:bg-surface-800/80": e.state.d_activeIndex !== t.index,
          "hover:text-surface-900 dark:hover:text-surface-0": e.state.d_activeIndex !== t.index
        },
        // Transitions
        "transition-all duration-200",
        // Misc
        "cursor-pointer select-none text-decoration-none",
        "overflow-hidden",
        "user-select-none"
      ]
    }),
    headerTitle: {
      class: [
        // Text
        "leading-none",
        "whitespace-nowrap"
      ]
    }
  },
  panelcontainer: {
    class: [
      // Spacing
      "p-[1.125rem] pt-[0.875rem]",
      // Shape
      "border-0 rounded-none",
      "border-br-md border-bl-md",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-900 dark:text-surface-0/80"
    ]
  }
}, wl = {
  root: ({ props: e }) => ({
    class: [
      //Font
      "text-xs font-bold",
      //Alignments
      "inline-flex items-center justify-center",
      //Spacing
      "px-[0.4rem] py-1",
      //Shape
      {
        "rounded-md": !e.rounded,
        "rounded-full": e.rounded
      },
      //Colors
      {
        "bg-highlight": e.severity === null || e.severity === "primary",
        "text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-500/20": e.severity === "success",
        "text-surface-700 dark:text-surface-300 bg-surface-100 dark:bg-surface-500/20": e.severity === "secondary",
        "text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-500/20": e.severity === "info",
        "text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-500/20": e.severity === "warn",
        "text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-500/20": e.severity === "danger",
        "text-surface-0 dark:text-surface-900 bg-surface-900 dark:bg-surface-0": e.severity === "contrast"
      }
    ]
  }),
  value: {
    class: "leading-normal"
  },
  icon: {
    class: "mr-1 text-sm"
  }
}, kl = {
  root: {
    class: [
      // Spacing
      "py-2 px-3",
      // Shape
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-950 text-surface-700 dark:text-surface-0",
      "border border-surface-200 dark:border-surface-700",
      // Sizing & Overflow
      "h-72 overflow-auto"
    ]
  },
  container: {
    class: [
      // Flexbox
      "flex items-center"
    ]
  },
  prompt: {
    class: [
      // Color
      "text-surface-700 dark:text-surface-0"
    ]
  },
  response: {
    class: [
      // Color
      "text-surface-700 dark:text-surface-0"
    ]
  },
  command: {
    class: [
      // Color
      "text-surface-700 dark:text-surface-0"
    ]
  },
  commandtext: {
    class: [
      // Flexbox
      "flex-1 shrink grow-0",
      // Shape
      "border-0",
      // Spacing
      "p-0",
      // Color
      "bg-transparent text-inherit",
      // Outline
      "outline-none"
    ]
  }
}, _l = {
  root: ({ context: e, props: t, parent: r }) => {
    var n, o;
    return {
      class: [
        // Font
        "leading-none",
        // Spacing
        "m-0",
        "py-2 px-3",
        // Shape
        "rounded-md",
        // Colors
        "text-surface-800 dark:text-white/80",
        "placeholder:text-surface-400 dark:placeholder:text-surface-500",
        { "bg-surface-0 dark:bg-surface-950": !e.disabled },
        "border",
        { "border-surface-300 dark:border-surface-600": !t.invalid },
        // Invalid State
        "invalid:focus:ring-danger-400",
        "invalid:hover:border-danger-400",
        { "border-danger-400 dark:border-danger-400": t.invalid },
        // States
        {
          "hover:border-surface-400 dark:hover:border-surface-600": !e.disabled && !t.invalid,
          "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-secondary-500 dark:focus:ring-secondary-400 focus:z-10": !e.disabled,
          "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled
        },
        // Filled State *for FloatLabel
        { filled: ((n = r.instance) == null ? void 0 : n.$name) == "FloatLabel" && t.modelValue !== null && ((o = t.modelValue) == null ? void 0 : o.length) !== 0 },
        // Misc
        "appearance-none",
        "transition-colors duration-200"
      ]
    };
  }
}, Sl = {
  root: {
    class: [
      // Shape
      "rounded-md",
      // Size
      "min-w-[12rem]",
      "p-1",
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-200 dark:border-surface-700"
    ]
  },
  rootList: {
    class: [
      // Spacings and Shape
      "list-none",
      "flex flex-col",
      "m-0 p-0",
      "outline-none"
    ]
  },
  item: {
    class: "relative my-[2px] [&:first-child]:mt-0"
  },
  itemContent: ({ context: e }) => ({
    class: [
      //Shape
      "rounded-[4px]",
      // Colors
      {
        "text-surface-500 dark:text-white/70": !e.focused && !e.active,
        "text-surface-500 dark:text-white/70 bg-surface-200 dark:bg-surface-600/90": e.focused && !e.active,
        "bg-highlight text-highlight-contrast": e.focused && e.active || e.active || !e.focused && e.active
      },
      // Transitions
      "transition-shadow",
      "duration-200",
      // States
      {
        "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !e.active,
        "hover:bg-highlight-emphasis": e.active
      },
      // Disabled
      { "opacity-60 pointer-events-none cursor-default": e.disabled }
    ]
  }),
  itemLink: {
    class: [
      "relative",
      // Flexbox
      "flex",
      "items-center",
      // Spacing
      "py-2",
      "px-3",
      // Misc
      "no-underline",
      "overflow-hidden",
      "cursor-pointer",
      "select-none"
    ]
  },
  itemIcon: {
    class: [
      // Spacing
      "mr-2"
    ]
  },
  itemLabel: {
    class: ["leading-none"]
  },
  submenuIcon: {
    class: [
      // Position
      "ml-auto"
    ]
  },
  submenu: {
    class: [
      // Spacing
      "flex flex-col",
      "m-0",
      "p-1",
      "list-none",
      "min-w-[12.5rem]",
      // Shape
      "shadow-none sm:shadow-md",
      "border border-surface-200 dark:border-surface-700",
      // Position
      "static sm:absolute",
      "z-10",
      // Color
      "bg-surface-0 dark:bg-surface-900"
    ]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600"
  },
  transition: {
    enterFromClass: "opacity-0",
    enterActiveClass: "transition-opacity duration-250"
  }
}, Cl = {
  root: ({ props: e }) => ({
    class: [
      "flex grow",
      {
        "flex-col": e.layout === "vertical",
        "flex-row": e.layout === "horizontal"
      }
    ]
  }),
  event: ({ props: e, context: t }) => ({
    class: [
      "flex relative min-h-[70px]",
      {
        "flex-row-reverse": e.align === "right" || e.layout === "vertical" && e.align === "alternate" && t.index % 2 === 1,
        "flex-col [&:not(:last-child)]:flex-1": e.layout === "horizontal",
        "flex-col-reverse ": e.align === "bottom" || e.layout === "horizontal" && e.align === "alternate" && t.index % 2 === 1
      }
    ]
  }),
  eventOpposite: ({ props: e, context: t }) => ({
    class: [
      "flex-1",
      {
        "px-4": e.layout === "vertical",
        "py-4": e.layout === "horizontal"
      },
      {
        "text-right": e.align === "left" || e.layout === "vertical" && e.align === "alternate" && t.index % 2 === 0,
        "text-left": e.align === "right" || e.layout === "vertical" && e.align === "alternate" && t.index % 2 === 1
      }
    ]
  }),
  eventSeparator: ({ props: e }) => ({
    class: [
      "flex items-center flex-initial",
      {
        "flex-col": e.layout === "vertical",
        "flex-row": e.layout === "horizontal"
      }
    ]
  }),
  eventMarker: {
    class: [
      "relative",
      // Display & Flexbox
      "inline-flex items-center justify-center",
      // Size
      "w-[1.125rem] h-[1.125rem]",
      // Appearance
      "rounded-full border-2 border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-950",
      // Before
      "before:rounded-full before:w-[0.375rem] before:h-[0.375rem] before:bg-primary",
      // After
      "after:absolute after:rounded-full after:w-full after:h-full after:shadow-sm"
    ]
  },
  eventConnector: ({ props: e }) => ({
    class: [
      "grow bg-surface-300 dark:bg-surface-700",
      {
        "w-[2px]": e.layout === "vertical",
        "w-full h-[2px]": e.layout === "horizontal"
      }
    ]
  }),
  eventContent: ({ props: e, context: t }) => ({
    class: [
      "flex-1",
      {
        "px-4": e.layout === "vertical",
        "py-4": e.layout === "horizontal"
      },
      {
        "text-left": e.align === "left" || e.layout === "vertical" && e.align === "alternate" && t.index % 2 === 0,
        "text-right": e.align === "right" || e.layout === "vertical" && e.align === "alternate" && t.index % 2 === 1
      },
      {
        "min-h-0": e.layout === "vertical" && t.index === t.count - 1,
        "grow-0": e.layout === "horizontal" && t.index === t.count - 1
      }
    ]
  })
}, Tl = {
  root: ({ props: e }) => ({
    class: [
      //Size and Shape
      "w-96 rounded-md",
      // Positioning
      { "-translate-x-2/4": e.position == "top-center" || e.position == "bottom-center" }
    ]
  }),
  message: ({ props: e }) => ({
    class: [
      "mb-4 rounded-md w-full",
      "border border-transparent",
      "backdrop-blur-[10px] shadow-md",
      // Colors
      {
        "bg-blue-50/90 dark:bg-blue-500/20": e.message.severity == "info",
        "bg-green-50/90 dark:bg-green-500/20": e.message.severity == "success",
        "bg-surface-50 dark:bg-surface-800": e.message.severity == "secondary",
        "bg-orange-50/90 dark:bg-orange-500/20": e.message.severity == "warn",
        "bg-red-50/90 dark:bg-red-500/20": e.message.severity == "error",
        "bg-surface-950 dark:bg-surface-0": e.message.severity == "contrast"
      },
      {
        "border-blue-200 dark:border-blue-500/20": e.message.severity == "info",
        "border-green-200 dark:border-green-500/20": e.message.severity == "success",
        "border-surface-300 dark:border-surface-500/20": e.message.severity == "secondary",
        "border-orange-200 dark:border-orange-500/20": e.message.severity == "warn",
        "border-red-200 dark:border-red-500/20": e.message.severity == "error",
        "border-surface-950 dark:border-surface-0": e.message.severity == "contrast"
      },
      {
        "text-blue-700 dark:text-blue-300": e.message.severity == "info",
        "text-green-700 dark:text-green-300": e.message.severity == "success",
        "text-surface-700 dark:text-surface-300": e.message.severity == "secondary",
        "text-orange-700 dark:text-orange-300": e.message.severity == "warn",
        "text-red-700 dark:text-red-300": e.message.severity == "error",
        "text-surface-0 dark:text-surface-950": e.message.severity == "contrast"
      }
    ]
  }),
  messageContent: ({ props: e }) => ({
    class: [
      "flex p-3",
      {
        "items-start": e.message.summary,
        "items-center": !e.message.summary
      }
    ]
  }),
  messageIcon: ({ props: e }) => ({
    class: [
      // Sizing and Spacing
      e.message.severity === "contrast" || e.message.severity === "secondary" ? "w-0" : "w-[1.125rem] h-[1.125rem] mr-2",
      "text-lg leading-[normal]"
    ]
  }),
  messageText: {
    class: [
      // Font and Text
      "text-base leading-[normal]",
      "ml-2",
      "flex-1"
    ]
  },
  summary: {
    class: "font-medium block"
  },
  detail: ({ props: e }) => ({
    class: ["block", "text-sm", e.message.severity === "contrast" ? "text-surface-0 dark:text-surface-950" : "text-surface-700 dark:text-surface-0", { "mt-2": e.message.summary }]
  }),
  closeButton: ({ props: e }) => ({
    class: [
      // Flexbox
      "flex items-center justify-center",
      // Size
      "w-7 h-7",
      // Spacing and Misc
      "ml-auto  relative",
      // Shape
      "rounded-full",
      // Colors
      "bg-transparent",
      // Transitions
      "transition duration-200 ease-in-out",
      // States
      "hover:bg-surface-0/30 dark:hover:bg-[rgba(255,255,255,0.03)]",
      "focus:outline-none focus:outline-offset-0 focus:ring-1",
      {
        "focus:ring-blue-500 dark:focus:ring-blue-400": e.severity == "info",
        "focus:ring-green-500 dark:focus:ring-green-400": e.severity == "success",
        "focus:ring-surface-500 dark:focus:ring-surface-400": e.severity == "secondary",
        "focus:ring-orange-500 dark:focus:ring-orange-400": e.severity == "warn",
        "focus:ring-red-500 dark:focus:ring-red-4000": e.severity == "error",
        "focus:ring-surface-0 dark:focus:ring-surface-950": e.severity == "contrast"
      },
      // Misc
      "overflow-hidden"
    ]
  }),
  transition: {
    enterFromClass: "opacity-0 translate-y-2/4",
    enterActiveClass: "transition-[transform,opacity] duration-300",
    leaveFromClass: "max-h-[1000px]",
    leaveActiveClass: "!transition-[max-height_.45s_cubic-bezier(0,1,0,1),opacity_.3s,margin-bottom_.3s] overflow-hidden",
    leaveToClass: "max-h-0 opacity-0 mb-0"
  }
}, $l = {
  root: ({ props: e, context: t }) => ({
    class: [
      "relative",
      // Alignment
      "flex items-center justify-center",
      "py-2 px-4",
      "rounded-md border",
      // Color
      "bg-surface-100 dark:bg-surface-950",
      {
        "text-surface-600 dark:text-white/60 before:bg-transparent": !t.active,
        "text-surface-800 dark:text-white/80 before:bg-surface-0 dark:before:bg-surface-800": t.active
      },
      // States
      {
        "hover:text-surface-800 dark:hover:text-white/80": !e.disabled && !e.modelValue,
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 dark:focus-visible:ring-secondary-400": !e.disabled
      },
      // Invalid State
      {
        "border-red-500 dark:border-red-400": e.invalid,
        "border-surface-100 dark:border-surface-950": !e.invalid
      },
      // Before
      "before:absolute before:left-1 before:top-1 before:w-[calc(100%-0.5rem)] before:h-[calc(100%-0.5rem)] before:rounded-[4px] before:z-0",
      // Transitions
      "transition-all duration-200",
      // Misc
      { "cursor-pointer": !e.disabled, "opacity-60 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  content: "relative items-center inline-flex justify-center gap-2",
  label: "font-medium leading-[normal] text-center w-full z-10 relative",
  icon: "relative z-10 mr-2"
}, bo = {
  root: ({ props: e }) => ({
    class: [
      "inline-block relative",
      "w-10 h-6",
      "rounded-2xl",
      {
        "opacity-60 select-none pointer-events-none cursor-default": e.disabled
      }
    ]
  }),
  slider: ({ props: e }) => ({
    class: [
      // Position
      "absolute top-0 left-0 right-0 bottom-0",
      { "before:transform before:translate-x-4": e.modelValue == e.trueValue },
      // Shape
      "rounded-2xl",
      // Before:
      "before:absolute before:top-1/2 before:left-1",
      "before:-mt-2",
      "before:h-4 before:w-4",
      "before:rounded-full",
      "before:duration-200",
      "before:bg-surface-0 before:dark:bg-surface-500",
      // Colors
      "border",
      {
        "bg-surface-300 dark:bg-surface-700": e.modelValue != e.trueValue,
        "bg-secondary-400": e.modelValue == e.trueValue,
        "before:dark:bg-surface-950": e.modelValue == e.trueValue,
        "border-transparent": !e.invalid
      },
      // Invalid State
      { "border-red-500 dark:border-danger-400": e.invalid },
      // States
      { "peer-hover:bg-surface-400 dark:peer-hover:bg-surface-600": e.modelValue != e.trueValue && !e.disabled && !e.invalid },
      { "peer-hover:bg-primary-hover": e.modelValue == e.trueValue && !e.disabled && !e.invalid },
      "peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-secondary-200",
      // Transition
      "transition-colors duration-200",
      // Misc
      "cursor-pointer"
    ]
  }),
  input: {
    class: [
      "peer",
      // Size
      "w-full ",
      "h-full",
      // Position
      "absolute",
      "top-0 left-0",
      "z-10",
      // Spacing
      "p-0",
      "m-0",
      // Shape
      "opacity-0",
      "rounded-2xl",
      "outline-none",
      // Misc
      "appearance-none",
      "cursor-pointer"
    ]
  }
}, Pl = {
  root: {
    class: [
      // Flex & Alignment
      "flex items-center justify-between flex-wrap",
      "gap-2",
      // Spacing
      "p-3",
      // Shape
      "rounded-md",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border border-surface-200 dark:border-surface-700"
    ]
  },
  start: {
    class: "flex items-center"
  },
  center: {
    class: "flex items-center"
  },
  end: {
    class: "flex items-center"
  }
}, Ol = {
  root: ({ context: e }) => ({
    class: [
      // Position and Shadows
      "absolute",
      "p-fadein",
      // Spacing
      {
        '[&[data-p-position="top"]]:py-1 [&[data-p-position="top"]]:px-0 py-0 px-1': (e == null ? void 0 : e.right) || (e == null ? void 0 : e.left) || !(e != null && e.right) && !(e != null && e.left) && !(e != null && e.top) && !(e != null && e.bottom),
        "py-1 px-0": (e == null ? void 0 : e.top) || (e == null ? void 0 : e.bottom)
      },
      // Flipped Tooltip Arrow
      '[&[data-p-position="top"]>[data-pc-section=arrow]]:border-x-[10px] [&[data-p-position="top"]>[data-pc-section=arrow]]:border-t-[10px] [&[data-p-position="top"]>[data-pc-section=arrow]]:border-b-0 [&[data-p-position="top"]>[data-pc-section=arrow]]:border-t-surface-700 [&[data-p-position="top"]>[data-pc-section=arrow]]:border-y-0 [&[data-p-position="top"]>[data-pc-section=arrow]]:border-x-transparent',
      '[&[data-p-position="top"]>[data-pc-section=arrow]]:-ml-[10px] [&[data-p-position="top"]>[data-pc-section=arrow]]:left-1/2 [&[data-p-position="top"]>[data-pc-section=arrow]]:mt-auto [&[data-p-position="top"]>[data-pc-section=arrow]]:top-auto'
    ]
  }),
  arrow: ({ context: e }) => ({
    class: [
      // Position
      "absolute",
      // Size
      "w-0",
      "h-0",
      // Shape
      "border-transparent",
      "border-solid",
      {
        "border-y-[10px] border-r-[10px] border-l-0 border-r-surface-700": (e == null ? void 0 : e.right) || !(e != null && e.right) && !(e != null && e.left) && !(e != null && e.top) && !(e != null && e.bottom),
        "border-y-[10px] border-l-[10px] border-r-0 border-l-surface-700": e == null ? void 0 : e.left,
        "border-x-[10px] border-t-[10px] border-b-0 border-t-surface-700 ": e == null ? void 0 : e.top,
        "border-x-[10px] border-b-[10px] border-t-0 border-b-surface-700": e == null ? void 0 : e.bottom
      },
      // Spacing
      {
        "-mt-[10px] top-1/2": (e == null ? void 0 : e.right) || (e == null ? void 0 : e.left) || !(e != null && e.right) && !(e != null && e.left) && !(e != null && e.top) && !(e != null && e.bottom),
        "-ml-[10px] left-1/2": (e == null ? void 0 : e.top) || (e == null ? void 0 : e.bottom)
      }
    ]
  }),
  text: {
    class: ["p-3", "bg-surface-700", "text-white", "leading-none", "rounded-md", "whitespace-pre-line", "break-words", "shadow-md"]
  }
}, Al = {
  root: {
    class: [
      // Space
      "p-4",
      // Shape
      "rounded-md",
      "border-none",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      "[&_[data-pc-name=pcfilter]]:w-full"
    ]
  },
  wrapper: {
    class: ["overflow-auto"]
  },
  container: {
    class: [
      // Spacing
      "m-0 p-0",
      // Misc
      "list-none overflow-auto"
    ]
  },
  node: {
    class: ["p-0 my-[2px] mx-0 first:mt-0", "rounded-md", "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10"]
  },
  nodeContent: ({ context: e, props: t }) => ({
    class: [
      // Flex and Alignment
      "flex items-center",
      // Shape
      "rounded-md",
      // Spacing
      "py-1 px-2 gap-2",
      // Colors
      e.selected ? "bg-highlight text-highlight-contrast " : "bg-transparent text-surface-600 dark:text-white/70",
      // States
      { "hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]": (t.selectionMode == "single" || t.selectionMode == "multiple") && !e.selected },
      // Transition
      "transition-shadow duration-200",
      { "cursor-pointer select-none": t.selectionMode == "single" || t.selectionMode == "multiple" }
    ]
  }),
  nodeToggleButton: ({ context: e }) => ({
    class: [
      // Flex and Alignment
      "inline-flex items-center justify-center",
      // Shape
      "border-0 rounded-full",
      // Size
      "w-7 h-7",
      // Colors
      "bg-transparent",
      {
        "text-surface-600 dark:text-white/70": !e.selected,
        "text-highlight-contrast": e.selected,
        invisible: e.leaf
      },
      // States
      "hover:bg-surface-200/20 dark:hover:bg-surface-500/20",
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
      // Transition
      "transition duration-200",
      // Misc
      "cursor-pointer select-none"
    ]
  }),
  nodeIcon: ({ context: e }) => ({
    class: [
      // Space
      "mr-2",
      // Color
      {
        "text-surface-600 dark:text-white/70": !e.selected,
        "text-highlight-contrast": e.selected
      }
    ]
  }),
  nodeLabel: ({ context: e }) => ({
    class: [
      {
        "text-surface-600 dark:text-white/70": !e.selected,
        "text-highlight-contrast": e.selected
      }
    ]
  }),
  nodeChildren: {
    class: ["m-0 list-none p-0 pl-4 [&:not(ul)]:pl-0 [&:not(ul)]:my-[2px]"]
  },
  loadingIcon: {
    class: ["text-surface-500 dark:text-surface-0/70", "absolute top-[50%] right-[50%] -mt-2 -mr-2 animate-spin"]
  }
}, Il = {
  root: ({ props: e, state: t }) => ({
    class: [
      // Display and Position
      "inline-flex",
      "relative",
      // Shape
      "rounded-md",
      // Color and Background
      { "bg-surface-0 dark:bg-surface-950": !e.disabled },
      "border",
      { "border-surface-300 dark:border-surface-700": !e.invalid },
      // Invalid State
      "invalid:focus:ring-red-200",
      "invalid:hover:border-red-500",
      { "border-red-500 dark:border-red-400": e.invalid },
      // Transitions
      "transition-all",
      "duration-200",
      // States
      { "hover:border-surface-400 dark:hover:border-surface-600": !e.invalid },
      { "outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400 z-10": t.focused },
      // Misc
      "cursor-pointer",
      "select-none",
      { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": e.disabled }
    ]
  }),
  labelContainer: {
    class: ["overflow-hidden flex flex-auto cursor-pointer"]
  },
  label: ({ props: e, parent: t }) => {
    var r, n, o, a;
    return {
      class: [
        "block leading-[normal]",
        // Space
        "py-2 px-3",
        // Color
        "text-surface-800 dark:text-white/80",
        {
          "placeholder:text-transparent dark:placeholder:text-transparent": ((r = t.instance) == null ? void 0 : r.$name) == "FloatLabel",
          "!text-transparent dark:!text-transparent": ((n = t.instance) == null ? void 0 : n.$name) == "FloatLabel" && e.modelValue == null || ((o = e.modelValue) == null ? void 0 : o.length) == 0
        },
        // Filled State *for FloatLabel
        { filled: ((a = t.instance) == null ? void 0 : a.$name) == "FloatLabel" && e.modelValue !== null },
        // Transition
        "transition duration-200",
        // Misc
        "overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis"
      ]
    };
  },
  dropdown: {
    class: [
      // Flexbox
      "flex items-center justify-center",
      "shrink-0",
      // Color and Background
      "bg-transparent",
      "text-surface-500",
      // Size
      "w-12",
      // Shape
      "rounded-r-md"
    ]
  },
  panel: {
    class: [
      // Colors
      "bg-surface-0 dark:bg-surface-900",
      "text-surface-700 dark:text-white/80",
      // Shape
      "border border-surface-300 dark:border-surface-700",
      "rounded-md",
      "shadow-md"
    ]
  },
  treeContainer: {
    class: [
      // Sizing
      "max-h-[200px]",
      // Misc
      "overflow-auto"
    ]
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}, Ll = {
  root: ({ props: e }) => ({
    class: [
      "relative",
      {
        "flex flex-col h-full": e.scrollHeight === "flex"
      }
    ]
  }),
  mask: {
    class: [
      // Position
      "absolute",
      "top-0 left-0",
      "z-20",
      // Flex & Alignment
      "flex items-center justify-center",
      // Size
      "w-full h-full",
      // Color
      "bg-surface-100/40 dark:bg-surface-800/40",
      // Transition
      "transition duration-200"
    ]
  },
  loadingIcon: {
    class: "w-8 h-8 animate-spin"
  },
  tableContainer: ({ props: e }) => ({
    class: [
      // Overflow
      {
        "relative overflow-auto": e.scrollable,
        "overflow-x-auto": e.resizableColumns
      }
    ]
  }),
  header: ({ props: e }) => ({
    class: [
      "font-semibold",
      // Shape
      e.showGridlines ? "border-x border-t border-b-0" : "border-y border-x-0",
      // Spacing
      "p-4",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-200 dark:border-surface-700",
      "text-surface-700 dark:text-white/80"
    ]
  }),
  footer: {
    class: [
      "font-semibold",
      // Shape
      "border-t-0 border-b border-x-0",
      // Spacing
      "p-4",
      // Color
      "bg-surface-0 dark:bg-surface-900",
      "border-surface-200 dark:border-surface-700",
      "text-surface-700 dark:text-white/80"
    ]
  },
  table: {
    class: [
      // Table & Width
      "border-collapse table-fixed w-full "
    ]
  },
  thead: ({ props: e }) => ({
    class: [
      // Position & Z-index
      {
        "top-0 z-40 sticky": e.scrollable
      }
    ]
  }),
  tbody: ({ props: e }) => ({
    class: [
      // Block Display
      {
        block: e.scrollable
      }
    ]
  }),
  tfoot: ({ props: e }) => ({
    class: [
      // Block Display
      {
        block: e.scrollable
      }
    ]
  }),
  headerRow: ({ props: e }) => ({
    class: [
      // Flexbox & Width
      {
        "flex flex-nowrap w-full": e.scrollable
      }
    ]
  }),
  row: ({ context: e, props: t }) => ({
    class: [
      // Flex
      { "flex flex-nowrap w-full": e.scrollable },
      // Color
      "text-surface-700 dark:text-white/80",
      { "bg-highlight": e.selected },
      { "bg-surface-0 text-surface-600 dark:bg-surface-900": !e.selected },
      // Hover & Flexbox
      {
        "hover:bg-surface-100 dark:bg-surface-800/50": e.selectable && !e.selected
      },
      "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 ring-inset dark:focus:ring-primary-400",
      // Transition
      { "transition duration-200": t.selectionMode && !e.selected || t.rowHover }
    ]
  }),
  headerCell: ({ context: e, props: t }) => ({
    class: [
      "font-semibold",
      "leading-[normal]",
      // Position
      { "sticky z-40": e.scrollable && e.scrollDirection === "both" && e.frozen },
      // Flex & Alignment
      {
        "flex flex-1 items-center": e.scrollable,
        "flex-initial shrink-0": e.scrollable && e.scrollDirection === "both" && !e.frozen
      },
      "text-left",
      // Shape
      { "first:border-l border-y border-r": e == null ? void 0 : e.showGridlines },
      "border-0 border-b border-solid",
      // Spacing
      (e == null ? void 0 : e.size) === "small" ? "py-[0.375rem] px-2" : (e == null ? void 0 : e.size) === "large" ? "py-[0.9375rem] px-5" : "py-3 px-4",
      // Color
      (t.sortable === "" || t.sortable) && e.sorted ? "bg-highlight" : "bg-surface-0 text-surface-700 dark:text-white/80 dark:bg-surface-900",
      "border-surface-200 dark:border-surface-700",
      // States
      { "hover:bg-surface-100 dark:hover:bg-surface-80/50": (t.sortable === "" || t.sortable) && !(e != null && e.sorted) },
      "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      // Transition
      { "transition duration-200": t.sortable === "" || t.sortable },
      // Misc
      {
        "overflow-hidden relative bg-clip-padding": e.resizable && !e.frozen
      }
    ]
  }),
  column: {
    headerCell: ({ context: e, props: t }) => ({
      class: [
        "font-semibold",
        "leading-[normal]",
        // Position
        { "sticky z-40": e.scrollable && e.scrollDirection === "both" && e.frozen },
        // Flex & Alignment
        {
          "flex flex-1 items-center": e.scrollable,
          "flex-initial shrink-0": e.scrollable && e.scrollDirection === "both" && !e.frozen
        },
        "text-left",
        // Shape
        { "first:border-l border-y border-r": e == null ? void 0 : e.showGridlines },
        "border-0 border-b border-solid",
        // Spacing
        (e == null ? void 0 : e.size) === "small" ? "py-[0.375rem] px-2" : (e == null ? void 0 : e.size) === "large" ? "py-[0.9375rem] px-5" : "py-3 px-4",
        // Color
        (t.sortable === "" || t.sortable) && e.sorted ? "bg-highlight" : "bg-surface-0 text-surface-700 dark:text-white/80 dark:bg-surface-900",
        "border-surface-200 dark:border-surface-700",
        // States
        { "hover:bg-surface-100 dark:hover:bg-surface-80/50": (t.sortable === "" || t.sortable) && !(e != null && e.sorted) },
        "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        // Transition
        { "transition duration-200": t.sortable === "" || t.sortable },
        // Misc
        {
          "overflow-hidden relative bg-clip-padding": e.resizable && !e.frozen
        }
      ]
    }),
    bodyCell: ({ context: e }) => ({
      class: [
        // Font
        "leading-[normal]",
        // Position
        {
          sticky: e.scrollable && e.scrollDirection === "both" && e.frozen
        },
        // Flex & Alignment
        {
          "flex flex-1 items-center": e.scrollable,
          "flex-initial shrink-0": e.scrollable && e.scrollDirection === "both" && !e.frozen
        },
        "text-left",
        // Shape
        "border-0 border-b border-solid",
        "border-surface-200 dark:border-surface-700",
        {
          "border-x-0 border-l-0": !e.showGridlines
        },
        { "first:border-l border-r border-b": e == null ? void 0 : e.showGridlines },
        // Spacing
        (e == null ? void 0 : e.size) === "small" ? "py-[0.375rem] px-2" : (e == null ? void 0 : e.size) === "large" ? "py-[0.9375rem] px-5" : "py-3 px-4",
        // Misc
        {
          "cursor-pointer": e.selectable,
          sticky: e.scrollable && e.scrollDirection === "both" && e.frozen,
          "border-x-0 border-l-0": !e.showGridlines
        }
      ]
    }),
    bodyCellContent: "flex items-center gap-2",
    rowToggleButton: {
      class: [
        "relative",
        // Flex & Alignment
        "inline-flex items-center justify-center",
        "text-left align-middle",
        // Spacing
        "m-0 mr-2 p-0",
        // Size
        "w-7 h-7",
        // Shape
        "border-0 rounded-full",
        // Color
        "text-surface-700 dark:text-white/70",
        "border-transparent",
        // States
        "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400",
        "hover:text-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800/50",
        // Transition
        "transition duration-200",
        // Misc
        "overflow-hidden",
        "cursor-pointer select-none"
      ]
    },
    sortIcon: ({ context: e }) => ({
      class: ["ml-2 inline-block", e.sorted ? "text-inherit" : "fill-surface-700 dark:fill-white/70"]
    }),
    columnResizer: {
      class: [
        "block",
        // Position
        "absolute top-0 right-0",
        // Sizing
        "w-2 h-full",
        // Spacing
        "m-0 p-0",
        // Color
        "border border-transparent",
        // Misc
        "cursor-col-resize"
      ]
    },
    transition: {
      enterFromClass: "opacity-0 scale-y-[0.8]",
      enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
      leaveActiveClass: "transition-opacity duration-100 ease-linear",
      leaveToClass: "opacity-0"
    }
  },
  columnResizeIndicator: {
    class: "absolute hidden w-[2px] z-20 bg-primary"
  }
}, jl = {
  global: ki,
  directives: {
    badge: Zs,
    ripple: Zi,
    tooltip: Ol
  },
  //forms
  autocomplete: qs,
  select: po,
  dropdown: po,
  inputnumber: Oi,
  inputtext: Ii,
  datepicker: co,
  calendar: co,
  checkbox: si,
  radiobutton: Ji,
  toggleswitch: bo,
  inputswitch: bo,
  selectbutton: tl,
  slider: nl,
  rating: Qi,
  multiselect: Vi,
  togglebutton: $l,
  cascadeselect: ai,
  listbox: ji,
  colorpicker: li,
  inputgroup: Ti,
  inputgroupaddon: $i,
  inputmask: Pi,
  knob: Li,
  treeselect: Il,
  textarea: _l,
  password: Wi,
  iconfield: _i,
  floatlabel: xi,
  inputotp: Ai,
  //buttons
  button: ti,
  buttongroup: ri,
  splitbutton: al,
  speeddial: ol,
  //data
  paginator: Hi,
  datatable: fi,
  tree: Al,
  dataview: pi,
  organizationchart: Mi,
  orderlist: Fi,
  picklist: Gi,
  treetable: Ll,
  timeline: Cl,
  //panels
  accordion: Us,
  accordionpanel: Gs,
  accordionheader: Ws,
  accordioncontent: Ks,
  panel: Ui,
  fieldset: vi,
  card: ni,
  tabview: xl,
  divider: mi,
  toolbar: Pl,
  scrollpanel: Xi,
  splitter: sl,
  splitterpanel: il,
  stepper: fl,
  steplist: ul,
  step: ll,
  stepitem: cl,
  steppanels: dl,
  deferred: bi,
  tab: bl,
  tabs: yl,
  tablist: hl,
  tabpanels: vl,
  tabpanel: gl,
  //file
  fileupload: yi,
  //menu
  contextmenu: di,
  menu: zi,
  menubar: Ni,
  steps: pl,
  tieredmenu: Sl,
  breadcrumb: ei,
  panelmenu: Ki,
  megamenu: Ei,
  dock: gi,
  tabmenu: ml,
  //overlays
  dialog: hi,
  popover: fo,
  sidebar: fo,
  drawer: uo,
  overlaypanel: uo,
  confirmpopup: ui,
  confirmdialog: ci,
  //messages
  message: Ri,
  toast: Tl,
  //media
  carousel: oi,
  galleria: wi,
  image: Si,
  //misc
  badge: Qs,
  overlaybadge: Di,
  avatar: Ys,
  avatargroup: Js,
  tag: wl,
  chip: ii,
  progressbar: qi,
  skeleton: rl,
  scrolltop: el,
  terminal: kl,
  blockui: Xs,
  metergroup: Bi,
  inplace: Ci,
  progressspinner: Yi
};
var El = Object.defineProperty, ho = Object.getOwnPropertySymbols, zl = Object.prototype.hasOwnProperty, Nl = Object.prototype.propertyIsEnumerable, mo = (e, t, r) => t in e ? El(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Rl = (e, t) => {
  for (var r in t || (t = {}))
    zl.call(t, r) && mo(e, r, t[r]);
  if (ho)
    for (var r of ho(t))
      Nl.call(t, r) && mo(e, r, t[r]);
  return e;
};
function Gt(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function wn(e, t, r = /* @__PURE__ */ new WeakSet()) {
  if (e === t) return !0;
  if (!e || !t || typeof e != "object" || typeof t != "object" || r.has(e) || r.has(t)) return !1;
  r.add(e).add(t);
  let n = Array.isArray(e), o = Array.isArray(t), a, s, i;
  if (n && o) {
    if (s = e.length, s != t.length) return !1;
    for (a = s; a-- !== 0; ) if (!wn(e[a], t[a], r)) return !1;
    return !0;
  }
  if (n != o) return !1;
  let l = e instanceof Date, c = t instanceof Date;
  if (l != c) return !1;
  if (l && c) return e.getTime() == t.getTime();
  let u = e instanceof RegExp, p = t instanceof RegExp;
  if (u != p) return !1;
  if (u && p) return e.toString() == t.toString();
  let b = Object.keys(e);
  if (s = b.length, s !== Object.keys(t).length) return !1;
  for (a = s; a-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(t, b[a])) return !1;
  for (a = s; a-- !== 0; )
    if (i = b[a], !wn(e[i], t[i], r)) return !1;
  return !0;
}
function Bl(e, t) {
  return wn(e, t);
}
function Vn(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function ie(e) {
  return !Gt(e);
}
function Vl(e, t, r) {
  return Bl(e, t);
}
function Xe(e, t = !0) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function Ve(e, ...t) {
  return Vn(e) ? e(...t) : e;
}
function Oe(e, t = !0) {
  return typeof e == "string" && (t || e !== "");
}
function Ke(e) {
  return Oe(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function Fn(e, t = "", r = {}) {
  const n = Ke(t).split("."), o = n.shift();
  return o ? Xe(e) ? Fn(Ve(e[Object.keys(e).find((a) => Ke(a) === o) || ""], r), n.join("."), r) : void 0 : Ve(e, r);
}
function Wr(e, t = !0) {
  return Array.isArray(e) && (t || e.length !== 0);
}
function ga(e) {
  return ie(e) && !isNaN(e);
}
function rt(e, t) {
  if (t) {
    const r = t.test(e);
    return t.lastIndex = 0, r;
  }
  return !1;
}
function Fl(...e) {
  const t = (r = {}, n = {}) => {
    const o = Rl({}, r);
    return Object.keys(n).forEach((a) => {
      Xe(n[a]) && a in r && Xe(r[a]) ? o[a] = t(r[a], n[a]) : o[a] = n[a];
    }), o;
  };
  return e.reduce((r, n, o) => o === 0 ? n : t(r, n), {});
}
function rr(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function Ml(e) {
  return Oe(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function va(e) {
  return Oe(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (t, r) => r === 0 ? t : "-" + t.toLowerCase()).toLowerCase() : e;
}
function go(e) {
  return Oe(e) ? e.replace(/[A-Z]/g, (t, r) => r === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function ya() {
  const e = /* @__PURE__ */ new Map();
  return {
    on(t, r) {
      let n = e.get(t);
      return n ? n.push(r) : n = [r], e.set(t, n), this;
    },
    off(t, r) {
      let n = e.get(t);
      return n && n.splice(n.indexOf(r) >>> 0, 1), this;
    },
    emit(t, r) {
      let n = e.get(t);
      n && n.slice().map((o) => {
        o(r);
      });
    },
    clear() {
      e.clear();
    }
  };
}
var Dl = Object.defineProperty, Hl = Object.defineProperties, Ul = Object.getOwnPropertyDescriptors, Fr = Object.getOwnPropertySymbols, xa = Object.prototype.hasOwnProperty, wa = Object.prototype.propertyIsEnumerable, vo = (e, t, r) => t in e ? Dl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, We = (e, t) => {
  for (var r in t || (t = {}))
    xa.call(t, r) && vo(e, r, t[r]);
  if (Fr)
    for (var r of Fr(t))
      wa.call(t, r) && vo(e, r, t[r]);
  return e;
}, cn = (e, t) => Hl(e, Ul(t)), et = (e, t) => {
  var r = {};
  for (var n in e)
    xa.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && Fr)
    for (var n of Fr(e))
      t.indexOf(n) < 0 && wa.call(e, n) && (r[n] = e[n]);
  return r;
}, Kl = ya(), Ue = Kl;
function yo(e, t) {
  Wr(e) ? e.push(...t || []) : Xe(e) && Object.assign(e, t);
}
function Wl(e) {
  return Xe(e) && e.hasOwnProperty("value") && e.hasOwnProperty("type") ? e.value : e;
}
function xo(e, t = "") {
  return ["opacity", "z-index", "line-height", "font-weight", "flex", "flex-grow", "flex-shrink", "order"].some((n) => t.endsWith(n)) ? e : `${e}`.trim().split(" ").map((a) => ga(a) ? `${a}px` : a).join(" ");
}
function Gl(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function kn(e = "", t = "") {
  return Gl(`${Oe(e, !1) && Oe(t, !1) ? `${e}-` : e}${t}`);
}
function ka(e = "", t = "") {
  return `--${kn(e, t)}`;
}
function _a(e, t = "", r = "", n = [], o) {
  if (Oe(e)) {
    const a = /{([^}]*)}/g, s = e.trim();
    if (rt(s, a)) {
      const i = s.replaceAll(a, (u) => {
        const b = u.replace(/{|}/g, "").split(".").filter((m) => !n.some((k) => rt(m, k)));
        return `var(${ka(r, va(b.join("-")))}${ie(o) ? `, ${o}` : ""})`;
      }), l = /(\d+\s+[\+\-\*\/]\s+\d+)/g, c = /var\([^)]+\)/g;
      return rt(i.replace(c, "0"), l) ? `calc(${i})` : i;
    }
    return xo(s, t);
  } else if (ga(e))
    return xo(e, t);
}
function ql(e, t, r) {
  Oe(t, !1) && e.push(`${t}:${r};`);
}
function Et(e, t) {
  return e ? `${e}{${t}}` : "";
}
var nr = (...e) => Yl(te.getTheme(), ...e), Yl = (e = {}, t, r, n) => {
  if (t) {
    const { variable: o, options: a } = te.defaults || {}, { prefix: s, transform: i } = (e == null ? void 0 : e.options) || a || {}, c = rt(t, /{([^}]*)}/g) ? t : `{${t}}`;
    return n === "value" || Gt(n) && i === "strict" ? te.getTokenValue(t) : _a(c, void 0, s, [o.excludedKeyRegex], r);
  }
  return "";
};
function Jl(e, t = {}) {
  const r = te.defaults.variable, { prefix: n = r.prefix, selector: o = r.selector, excludedKeyRegex: a = r.excludedKeyRegex } = t, s = (c, u = "") => Object.entries(c).reduce(
    (p, [b, m]) => {
      const k = rt(b, a) ? kn(u) : kn(u, va(b)), S = Wl(m);
      if (Xe(S)) {
        const { variables: L, tokens: z } = s(S, k);
        yo(p.tokens, z), yo(p.variables, L);
      } else
        p.tokens.push((n ? k.replace(`${n}-`, "") : k).replaceAll("-", ".")), ql(p.variables, ka(k), _a(S, k, n, [a]));
      return p;
    },
    { variables: [], tokens: [] }
  ), { variables: i, tokens: l } = s(e, n);
  return {
    value: i,
    tokens: l,
    declarations: i.join(""),
    css: Et(o, i.join(""))
  };
}
var De = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(e) {
          return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(e) {
          return { type: "attr", selector: `:root${e}`, matched: this.pattern.test(e.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(e) {
          return { type: "media", selector: `${e}{:root{[CSS]}}`, matched: this.pattern.test(e.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(e) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(e.trim()) };
        }
      },
      custom: {
        resolve(e) {
          return { type: "custom", selector: e, matched: !0 };
        }
      }
    },
    resolve(e) {
      const t = Object.keys(this.rules).filter((r) => r !== "custom").map((r) => this.rules[r]);
      return [e].flat().map((r) => {
        var n;
        return (n = t.map((o) => o.resolve(r)).find((o) => o.matched)) != null ? n : this.rules.custom.resolve(r);
      });
    }
  },
  _toVariables(e, t) {
    return Jl(e, { prefix: t == null ? void 0 : t.prefix });
  },
  getCommon({ name: e = "", theme: t = {}, params: r, set: n, defaults: o }) {
    var a, s, i, l, c, u, p;
    const { preset: b, options: m } = t;
    let k, S, L, z, A, g, O;
    if (ie(b) && m.transform !== "strict") {
      const { primitive: J, semantic: _, extend: F } = b, H = _ || {}, { colorScheme: j } = H, R = et(H, ["colorScheme"]), Y = F || {}, { colorScheme: ne } = Y, pe = et(Y, ["colorScheme"]), be = j || {}, { dark: Ne } = be, re = et(be, ["dark"]), U = ne || {}, { dark: K } = U, Ce = et(U, ["dark"]), Te = ie(J) ? this._toVariables({ primitive: J }, m) : {}, he = ie(R) ? this._toVariables({ semantic: R }, m) : {}, me = ie(re) ? this._toVariables({ light: re }, m) : {}, _t = ie(Ne) ? this._toVariables({ dark: Ne }, m) : {}, at = ie(pe) ? this._toVariables({ semantic: pe }, m) : {}, Sr = ie(Ce) ? this._toVariables({ light: Ce }, m) : {}, st = ie(K) ? this._toVariables({ dark: K }, m) : {}, [Lt, qt] = [(a = Te.declarations) != null ? a : "", Te.tokens], [Cr, St] = [(s = he.declarations) != null ? s : "", he.tokens || []], [ao, d] = [(i = me.declarations) != null ? i : "", me.tokens || []], [f, h] = [(l = _t.declarations) != null ? l : "", _t.tokens || []], [x, v] = [(c = at.declarations) != null ? c : "", at.tokens || []], [w, $] = [(u = Sr.declarations) != null ? u : "", Sr.tokens || []], [C, T] = [(p = st.declarations) != null ? p : "", st.tokens || []];
      k = this.transformCSS(e, Lt, "light", "variable", m, n, o), S = qt;
      const y = this.transformCSS(e, `${Cr}${ao}`, "light", "variable", m, n, o), P = this.transformCSS(e, `${f}`, "dark", "variable", m, n, o);
      L = `${y}${P}`, z = [.../* @__PURE__ */ new Set([...St, ...d, ...h])];
      const E = this.transformCSS(e, `${x}${w}color-scheme:light`, "light", "variable", m, n, o), I = this.transformCSS(e, `${C}color-scheme:dark`, "dark", "variable", m, n, o);
      A = `${E}${I}`, g = [.../* @__PURE__ */ new Set([...v, ...$, ...T])], O = Ve(b.css, { dt: nr });
    }
    return {
      primitive: {
        css: k,
        tokens: S
      },
      semantic: {
        css: L,
        tokens: z
      },
      global: {
        css: A,
        tokens: g
      },
      style: O
    };
  },
  getPreset({ name: e = "", preset: t = {}, options: r, params: n, set: o, defaults: a, selector: s }) {
    var i, l, c;
    let u, p, b;
    if (ie(t) && r.transform !== "strict") {
      const m = e.replace("-directive", ""), k = t, { colorScheme: S, extend: L, css: z } = k, A = et(k, ["colorScheme", "extend", "css"]), g = L || {}, { colorScheme: O } = g, J = et(g, ["colorScheme"]), _ = S || {}, { dark: F } = _, H = et(_, ["dark"]), j = O || {}, { dark: R } = j, Y = et(j, ["dark"]), ne = ie(A) ? this._toVariables({ [m]: We(We({}, A), J) }, r) : {}, pe = ie(H) ? this._toVariables({ [m]: We(We({}, H), Y) }, r) : {}, be = ie(F) ? this._toVariables({ [m]: We(We({}, F), R) }, r) : {}, [Ne, re] = [(i = ne.declarations) != null ? i : "", ne.tokens || []], [U, K] = [(l = pe.declarations) != null ? l : "", pe.tokens || []], [Ce, Te] = [(c = be.declarations) != null ? c : "", be.tokens || []], he = this.transformCSS(m, `${Ne}${U}`, "light", "variable", r, o, a, s), me = this.transformCSS(m, Ce, "dark", "variable", r, o, a, s);
      u = `${he}${me}`, p = [.../* @__PURE__ */ new Set([...re, ...K, ...Te])], b = Ve(z, { dt: nr });
    }
    return {
      css: u,
      tokens: p,
      style: b
    };
  },
  getPresetC({ name: e = "", theme: t = {}, params: r, set: n, defaults: o }) {
    var a;
    const { preset: s, options: i } = t, l = (a = s == null ? void 0 : s.components) == null ? void 0 : a[e];
    return this.getPreset({ name: e, preset: l, options: i, params: r, set: n, defaults: o });
  },
  getPresetD({ name: e = "", theme: t = {}, params: r, set: n, defaults: o }) {
    var a;
    const s = e.replace("-directive", ""), { preset: i, options: l } = t, c = (a = i == null ? void 0 : i.directives) == null ? void 0 : a[s];
    return this.getPreset({ name: s, preset: c, options: l, params: r, set: n, defaults: o });
  },
  applyDarkColorScheme(e) {
    return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
  },
  getColorSchemeOption(e, t) {
    var r;
    return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (r = e.darkModeSelector) != null ? r : t.options.darkModeSelector) : [];
  },
  getLayerOrder(e, t = {}, r, n) {
    const { cssLayer: o } = t;
    return o ? `@layer ${Ve(o.order || "primeui", r)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: t = {}, params: r, props: n = {}, set: o, defaults: a }) {
    const s = this.getCommon({ name: e, theme: t, params: r, set: o, defaults: a }), i = Object.entries(n).reduce((l, [c, u]) => l.push(`${c}="${u}"`) && l, []).join(" ");
    return Object.entries(s || {}).reduce((l, [c, u]) => {
      if (u != null && u.css) {
        const p = rr(u == null ? void 0 : u.css), b = `${c}-variables`;
        l.push(`<style type="text/css" data-primevue-style-id="${b}" ${i}>${p}</style>`);
      }
      return l;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: t = {}, params: r, props: n = {}, set: o, defaults: a }) {
    var s;
    const i = { name: e, theme: t, params: r, set: o, defaults: a }, l = (s = e.includes("-directive") ? this.getPresetD(i) : this.getPresetC(i)) == null ? void 0 : s.css, c = Object.entries(n).reduce((u, [p, b]) => u.push(`${p}="${b}"`) && u, []).join(" ");
    return l ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${rr(l)}</style>` : "";
  },
  createTokens(e = {}, t, r = "", n = "", o = {}) {
    return Object.entries(e).forEach(([a, s]) => {
      const i = rt(a, t.variable.excludedKeyRegex) ? r : r ? `${r}.${go(a)}` : go(a), l = n ? `${n}.${a}` : a;
      Xe(s) ? this.createTokens(s, t, i, l, o) : (o[i] || (o[i] = {
        paths: [],
        computed(c, u = {}) {
          var p, b;
          return this.paths.length === 1 ? (p = this.paths[0]) == null ? void 0 : p.computed(this.paths[0].scheme, u.binding) : c && c !== "none" ? (b = this.paths.find((m) => m.scheme === c)) == null ? void 0 : b.computed(c, u.binding) : this.paths.map((m) => m.computed(m.scheme, u[m.scheme]));
        }
      }), o[i].paths.push({
        path: l,
        value: s,
        scheme: l.includes("colorScheme.light") ? "light" : l.includes("colorScheme.dark") ? "dark" : "none",
        computed(c, u = {}) {
          const p = /{([^}]*)}/g;
          let b = s;
          if (u.name = this.path, u.binding || (u.binding = {}), rt(s, p)) {
            const k = s.trim().replaceAll(p, (z) => {
              var A;
              const g = z.replace(/{|}/g, ""), O = (A = o[g]) == null ? void 0 : A.computed(c, u);
              return Wr(O) && O.length === 2 ? `light-dark(${O[0].value},${O[1].value})` : O == null ? void 0 : O.value;
            }), S = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, L = /var\([^)]+\)/g;
            b = rt(k.replace(L, "0"), S) ? `calc(${k})` : k;
          }
          return Gt(u.binding) && delete u.binding, {
            colorScheme: c,
            path: this.path,
            paths: u,
            value: b.includes("undefined") ? void 0 : b
          };
        }
      }));
    }), o;
  },
  getTokenValue(e, t, r) {
    var n;
    const a = ((l) => l.split(".").filter((u) => !rt(u.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(t), s = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, i = [(n = e[a]) == null ? void 0 : n.computed(s)].flat().filter((l) => l);
    return i.length === 1 ? i[0].value : i.reduce((l = {}, c) => {
      const u = c, { colorScheme: p } = u, b = et(u, ["colorScheme"]);
      return l[p] = b, l;
    }, void 0);
  },
  getSelectorRule(e, t, r, n) {
    return r === "class" || r === "attr" ? Et(ie(t) ? `${e}${t},${e} ${t}` : e, n) : Et(e, ie(t) ? Et(t, n) : n);
  },
  transformCSS(e, t, r, n, o = {}, a, s, i) {
    if (ie(t)) {
      const { cssLayer: l } = o;
      if (n !== "style") {
        const c = this.getColorSchemeOption(o, s);
        t = r === "dark" ? c.reduce((u, { type: p, selector: b }) => (ie(b) && (u += b.includes("[CSS]") ? b.replace("[CSS]", t) : this.getSelectorRule(b, i, p, t)), u), "") : Et(i ?? ":root", t);
      }
      if (l) {
        const c = {
          name: "primeui"
        };
        Xe(l) && (c.name = Ve(l.name, { name: e, type: n })), ie(c.name) && (t = Et(`@layer ${c.name}`, t), a == null || a.layerNames(c.name));
      }
      return t;
    }
    return "";
  }
}, te = {
  defaults: {
    variable: {
      prefix: "p",
      selector: ":root",
      excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi
    },
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: !1
    }
  },
  _theme: void 0,
  _layerNames: /* @__PURE__ */ new Set(),
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  _loadingStyles: /* @__PURE__ */ new Set(),
  _tokens: {},
  update(e = {}) {
    const { theme: t } = e;
    t && (this._theme = cn(We({}, t), {
      options: We(We({}, this.defaults.options), t.options)
    }), this._tokens = De.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.preset) || {};
  },
  get options() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(e) {
    this.update({ theme: e }), Ue.emit("theme:change", e);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(e) {
    this._theme = cn(We({}, this.theme), { preset: e }), this._tokens = De.createTokens(e, this.defaults), this.clearLoadedStyleNames(), Ue.emit("preset:change", e), Ue.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = cn(We({}, this.theme), { options: e }), this.clearLoadedStyleNames(), Ue.emit("options:change", e), Ue.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(e) {
    this._layerNames.add(e);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(e) {
    return De.getTokenValue(this.tokens, e, this.defaults);
  },
  getCommon(e = "", t) {
    return De.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(e = "", t) {
    const r = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return De.getPresetC(r);
  },
  getDirective(e = "", t) {
    const r = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return De.getPresetD(r);
  },
  getCustomPreset(e = "", t, r, n) {
    const o = { name: e, preset: t, options: this.options, selector: r, params: n, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return De.getPreset(o);
  },
  getLayerOrderCSS(e = "") {
    return De.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(e = "", t, r = "style", n) {
    return De.transformCSS(e, t, n, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(e = "", t, r = {}) {
    return De.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(e, t, r = {}) {
    return De.getStyleSheet({ name: e, theme: this.theme, params: t, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(e) {
    this._loadingStyles.add(e);
  },
  onStyleUpdated(e) {
    this._loadingStyles.add(e);
  },
  onStyleLoaded(e, { name: t }) {
    this._loadingStyles.size && (this._loadingStyles.delete(t), Ue.emit(`theme:${t}:load`, e), !this._loadingStyles.size && Ue.emit("theme:load"));
  }
};
function Ql(e, t) {
  return e ? e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1;
}
function Zl(e, t) {
  if (e && t) {
    const r = (n) => {
      Ql(e, n) || (e.classList ? e.classList.add(n) : e.className += " " + n);
    };
    [t].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(r));
  }
}
function un(e, t) {
  if (e && t) {
    const r = (n) => {
      e.classList ? e.classList.remove(n) : e.className = e.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [t].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(r));
  }
}
function Xl(e, t) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function Gr(e) {
  return typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
}
function Mr(e, t = {}) {
  if (Gr(e)) {
    const r = (n, o) => {
      var a, s;
      const i = (a = e == null ? void 0 : e.$attrs) != null && a[n] ? [(s = e == null ? void 0 : e.$attrs) == null ? void 0 : s[n]] : [];
      return [o].flat().reduce((l, c) => {
        if (c != null) {
          const u = typeof c;
          if (u === "string" || u === "number")
            l.push(c);
          else if (u === "object") {
            const p = Array.isArray(c) ? r(n, c) : Object.entries(c).map(([b, m]) => n === "style" && (m || m === 0) ? `${b.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${m}` : m ? b : void 0);
            l = p.length ? l.concat(p.filter((b) => !!b)) : l;
          }
        }
        return l;
      }, i);
    };
    Object.entries(t).forEach(([n, o]) => {
      if (o != null) {
        const a = n.match(/^on(.+)/);
        a ? e.addEventListener(a[1].toLowerCase(), o) : n === "p-bind" ? Mr(e, o) : (o = n === "class" ? [...new Set(r("class", o))].join(" ").trim() : n === "style" ? r("style", o).join(";").trim() : o, (e.$attrs = e.$attrs || {}) && (e.$attrs[n] = o), e.setAttribute(n, o));
      }
    });
  }
}
function ec(e, t = {}, ...r) {
  {
    const n = document.createElement(e);
    return Mr(n, t), n.append(...r), n;
  }
}
function _n(e, t) {
  return Gr(e) ? e.matches(t) ? e : e.querySelector(t) : null;
}
function tc(e, t) {
  e && document.activeElement !== e && e.focus(t);
}
function Zt(e, t) {
  if (Gr(e)) {
    const r = e.getAttribute(t);
    return isNaN(r) ? r === "true" || r === "false" ? r === "true" : r : +r;
  }
}
function wo(e) {
  if (e) {
    let t = e.offsetHeight, r = getComputedStyle(e);
    return t -= parseFloat(r.paddingTop) + parseFloat(r.paddingBottom) + parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth), t;
  }
  return 0;
}
function rc(e) {
  if (e) {
    let t = e.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
  }
  return null;
}
function Sn(e) {
  if (e) {
    let t = e.getBoundingClientRect();
    return {
      top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: t.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function nc(e, t) {
  return e ? e.offsetHeight : 0;
}
function oc(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && rc(e));
}
function $t(e) {
  if (e) {
    let t = e.offsetWidth, r = getComputedStyle(e);
    return t -= parseFloat(r.paddingLeft) + parseFloat(r.paddingRight) + parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth), t;
  }
  return 0;
}
function Sa() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ac(e, t = "", r) {
  Gr(e) && r !== null && r !== void 0 && e.setAttribute(t, r);
}
var Tr = {};
function Mn(e = "pui_id_") {
  return Tr.hasOwnProperty(e) || (Tr[e] = 0), Tr[e]++, `${e}${Tr[e]}`;
}
var we = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
/**
* @vue/shared v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Dn(e, t) {
  const r = new Set(e.split(","));
  return t ? (n) => r.has(n.toLowerCase()) : (n) => r.has(n);
}
const ce = {}, Mt = [], Fe = () => {
}, sc = () => !1, qr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Hn = (e) => e.startsWith("onUpdate:"), Ae = Object.assign, Un = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, ic = Object.prototype.hasOwnProperty, Z = (e, t) => ic.call(e, t), B = Array.isArray, Dt = (e) => Yr(e) === "[object Map]", Ca = (e) => Yr(e) === "[object Set]", D = (e) => typeof e == "function", fe = (e) => typeof e == "string", yt = (e) => typeof e == "symbol", ue = (e) => e !== null && typeof e == "object", Ta = (e) => (ue(e) || D(e)) && D(e.then) && D(e.catch), $a = Object.prototype.toString, Yr = (e) => $a.call(e), lc = (e) => Yr(e).slice(8, -1), Pa = (e) => Yr(e) === "[object Object]", Kn = (e) => fe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, or = /* @__PURE__ */ Dn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Jr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, cc = /-(\w)/g, qe = Jr((e) => e.replace(cc, (t, r) => r ? r.toUpperCase() : "")), uc = /\B([A-Z])/g, xt = Jr(
  (e) => e.replace(uc, "-$1").toLowerCase()
), Qr = Jr((e) => e.charAt(0).toUpperCase() + e.slice(1)), dn = Jr((e) => e ? `on${Qr(e)}` : ""), gt = (e, t) => !Object.is(e, t), zr = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Oa = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Cn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ko;
const Aa = () => ko || (ko = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wn(e) {
  if (B(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], o = fe(n) ? bc(n) : Wn(n);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (fe(e) || ue(e))
    return e;
}
const dc = /;(?![^(]*\))/g, fc = /:([^]+)/, pc = /\/\*[^]*?\*\//g;
function bc(e) {
  const t = {};
  return e.replace(pc, "").split(dc).forEach((r) => {
    if (r) {
      const n = r.split(fc);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Zr(e) {
  let t = "";
  if (fe(e))
    t = e;
  else if (B(e))
    for (let r = 0; r < e.length; r++) {
      const n = Zr(e[r]);
      n && (t += n + " ");
    }
  else if (ue(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const hc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mc = /* @__PURE__ */ Dn(hc);
function Ia(e) {
  return !!e || e === "";
}
const La = (e) => !!(e && e.__v_isRef === !0), ge = (e) => fe(e) ? e : e == null ? "" : B(e) || ue(e) && (e.toString === $a || !D(e.toString)) ? La(e) ? ge(e.value) : JSON.stringify(e, ja, 2) : String(e), ja = (e, t) => La(t) ? ja(e, t.value) : Dt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, o], a) => (r[fn(n, a) + " =>"] = o, r),
    {}
  )
} : Ca(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => fn(r))
} : yt(t) ? fn(t) : ue(t) && !B(t) && !Pa(t) ? String(t) : t, fn = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    yt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let He;
class gc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = He, !t && He && (this.index = (He.scopes || (He.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const r = He;
      try {
        return He = this, t();
      } finally {
        He = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    He = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    He = this.parent;
  }
  stop(t) {
    if (this._active) {
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.scopes)
        for (r = 0, n = this.scopes.length; r < n; r++)
          this.scopes[r].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function vc(e, t = He) {
  t && t.active && t.effects.push(e);
}
function yc() {
  return He;
}
let Ot;
class Gn {
  constructor(t, r, n, o) {
    this.fn = t, this.trigger = r, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, vc(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, wt();
      for (let t = 0; t < this._depsLength; t++) {
        const r = this.deps[t];
        if (r.computed && (xc(r.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), kt();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = ht, r = Ot;
    try {
      return ht = !0, Ot = this, this._runnings++, _o(this), this.fn();
    } finally {
      So(this), this._runnings--, Ot = r, ht = t;
    }
  }
  stop() {
    this.active && (_o(this), So(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function xc(e) {
  return e.value;
}
function _o(e) {
  e._trackId++, e._depsLength = 0;
}
function So(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Ea(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Ea(e, t) {
  const r = e.get(t);
  r !== void 0 && t._trackId !== r && (e.delete(t), e.size === 0 && e.cleanup());
}
let ht = !0, Tn = 0;
const za = [];
function wt() {
  za.push(ht), ht = !1;
}
function kt() {
  const e = za.pop();
  ht = e === void 0 ? !0 : e;
}
function qn() {
  Tn++;
}
function Yn() {
  for (Tn--; !Tn && $n.length; )
    $n.shift()();
}
function Na(e, t, r) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && Ea(n, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const $n = [];
function Ra(e, t, r) {
  qn();
  for (const n of e.keys()) {
    let o;
    n._dirtyLevel < t && (o ?? (o = e.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), n._dirtyLevel = t), n._shouldSchedule && (o ?? (o = e.get(n) === n._trackId)) && (n.trigger(), (!n._runnings || n.allowRecurse) && n._dirtyLevel !== 2 && (n._shouldSchedule = !1, n.scheduler && $n.push(n.scheduler)));
  }
  Yn();
}
const Ba = (e, t) => {
  const r = /* @__PURE__ */ new Map();
  return r.cleanup = e, r.computed = t, r;
}, Pn = /* @__PURE__ */ new WeakMap(), At = Symbol(""), On = Symbol("");
function Ie(e, t, r) {
  if (ht && Ot) {
    let n = Pn.get(e);
    n || Pn.set(e, n = /* @__PURE__ */ new Map());
    let o = n.get(r);
    o || n.set(r, o = Ba(() => n.delete(r))), Na(
      Ot,
      o
    );
  }
}
function nt(e, t, r, n, o, a) {
  const s = Pn.get(e);
  if (!s)
    return;
  let i = [];
  if (t === "clear")
    i = [...s.values()];
  else if (r === "length" && B(e)) {
    const l = Number(n);
    s.forEach((c, u) => {
      (u === "length" || !yt(u) && u >= l) && i.push(c);
    });
  } else
    switch (r !== void 0 && i.push(s.get(r)), t) {
      case "add":
        B(e) ? Kn(r) && i.push(s.get("length")) : (i.push(s.get(At)), Dt(e) && i.push(s.get(On)));
        break;
      case "delete":
        B(e) || (i.push(s.get(At)), Dt(e) && i.push(s.get(On)));
        break;
      case "set":
        Dt(e) && i.push(s.get(At));
        break;
    }
  qn();
  for (const l of i)
    l && Ra(
      l,
      4
    );
  Yn();
}
const wc = /* @__PURE__ */ Dn("__proto__,__v_isRef,__isVue"), Va = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yt)
), Co = /* @__PURE__ */ kc();
function kc() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...r) {
      const n = X(this);
      for (let a = 0, s = this.length; a < s; a++)
        Ie(n, "get", a + "");
      const o = n[t](...r);
      return o === -1 || o === !1 ? n[t](...r.map(X)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...r) {
      wt(), qn();
      const n = X(this)[t].apply(this, r);
      return Yn(), kt(), n;
    };
  }), e;
}
function _c(e) {
  yt(e) || (e = String(e));
  const t = X(this);
  return Ie(t, "has", e), t.hasOwnProperty(e);
}
class Fa {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    const o = this._isReadonly, a = this._isShallow;
    if (r === "__v_isReactive")
      return !o;
    if (r === "__v_isReadonly")
      return o;
    if (r === "__v_isShallow")
      return a;
    if (r === "__v_raw")
      return n === (o ? a ? Nc : Ua : a ? Ha : Da).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = B(t);
    if (!o) {
      if (s && Z(Co, r))
        return Reflect.get(Co, r, n);
      if (r === "hasOwnProperty")
        return _c;
    }
    const i = Reflect.get(t, r, n);
    return (yt(r) ? Va.has(r) : wc(r)) || (o || Ie(t, "get", r), a) ? i : Le(i) ? s && Kn(r) ? i : i.value : ue(i) ? o ? Zn(i) : en(i) : i;
  }
}
class Ma extends Fa {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, o) {
    let a = t[r];
    if (!this._isShallow) {
      const l = It(a);
      if (!Kt(n) && !It(n) && (a = X(a), n = X(n)), !B(t) && Le(a) && !Le(n))
        return l ? !1 : (a.value = n, !0);
    }
    const s = B(t) && Kn(r) ? Number(r) < t.length : Z(t, r), i = Reflect.set(t, r, n, o);
    return t === X(o) && (s ? gt(n, a) && nt(t, "set", r, n) : nt(t, "add", r, n)), i;
  }
  deleteProperty(t, r) {
    const n = Z(t, r);
    t[r];
    const o = Reflect.deleteProperty(t, r);
    return o && n && nt(t, "delete", r, void 0), o;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!yt(r) || !Va.has(r)) && Ie(t, "has", r), n;
  }
  ownKeys(t) {
    return Ie(
      t,
      "iterate",
      B(t) ? "length" : At
    ), Reflect.ownKeys(t);
  }
}
class Sc extends Fa {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const Cc = /* @__PURE__ */ new Ma(), Tc = /* @__PURE__ */ new Sc(), $c = /* @__PURE__ */ new Ma(
  !0
);
const Jn = (e) => e, Xr = (e) => Reflect.getPrototypeOf(e);
function $r(e, t, r = !1, n = !1) {
  e = e.__v_raw;
  const o = X(e), a = X(t);
  r || (gt(t, a) && Ie(o, "get", t), Ie(o, "get", a));
  const { has: s } = Xr(o), i = n ? Jn : r ? eo : dr;
  if (s.call(o, t))
    return i(e.get(t));
  if (s.call(o, a))
    return i(e.get(a));
  e !== o && e.get(t);
}
function Pr(e, t = !1) {
  const r = this.__v_raw, n = X(r), o = X(e);
  return t || (gt(e, o) && Ie(n, "has", e), Ie(n, "has", o)), e === o ? r.has(e) : r.has(e) || r.has(o);
}
function Or(e, t = !1) {
  return e = e.__v_raw, !t && Ie(X(e), "iterate", At), Reflect.get(e, "size", e);
}
function To(e, t = !1) {
  !t && !Kt(e) && !It(e) && (e = X(e));
  const r = X(this);
  return Xr(r).has.call(r, e) || (r.add(e), nt(r, "add", e, e)), this;
}
function $o(e, t, r = !1) {
  !r && !Kt(t) && !It(t) && (t = X(t));
  const n = X(this), { has: o, get: a } = Xr(n);
  let s = o.call(n, e);
  s || (e = X(e), s = o.call(n, e));
  const i = a.call(n, e);
  return n.set(e, t), s ? gt(t, i) && nt(n, "set", e, t) : nt(n, "add", e, t), this;
}
function Po(e) {
  const t = X(this), { has: r, get: n } = Xr(t);
  let o = r.call(t, e);
  o || (e = X(e), o = r.call(t, e)), n && n.call(t, e);
  const a = t.delete(e);
  return o && nt(t, "delete", e, void 0), a;
}
function Oo() {
  const e = X(this), t = e.size !== 0, r = e.clear();
  return t && nt(e, "clear", void 0, void 0), r;
}
function Ar(e, t) {
  return function(n, o) {
    const a = this, s = a.__v_raw, i = X(s), l = t ? Jn : e ? eo : dr;
    return !e && Ie(i, "iterate", At), s.forEach((c, u) => n.call(o, l(c), l(u), a));
  };
}
function Ir(e, t, r) {
  return function(...n) {
    const o = this.__v_raw, a = X(o), s = Dt(a), i = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = o[e](...n), u = r ? Jn : t ? eo : dr;
    return !t && Ie(
      a,
      "iterate",
      l ? On : At
    ), {
      // iterator protocol
      next() {
        const { value: p, done: b } = c.next();
        return b ? { value: p, done: b } : {
          value: i ? [u(p[0]), u(p[1])] : u(p),
          done: b
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function it(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Pc() {
  const e = {
    get(a) {
      return $r(this, a);
    },
    get size() {
      return Or(this);
    },
    has: Pr,
    add: To,
    set: $o,
    delete: Po,
    clear: Oo,
    forEach: Ar(!1, !1)
  }, t = {
    get(a) {
      return $r(this, a, !1, !0);
    },
    get size() {
      return Or(this);
    },
    has: Pr,
    add(a) {
      return To.call(this, a, !0);
    },
    set(a, s) {
      return $o.call(this, a, s, !0);
    },
    delete: Po,
    clear: Oo,
    forEach: Ar(!1, !0)
  }, r = {
    get(a) {
      return $r(this, a, !0);
    },
    get size() {
      return Or(this, !0);
    },
    has(a) {
      return Pr.call(this, a, !0);
    },
    add: it("add"),
    set: it("set"),
    delete: it("delete"),
    clear: it("clear"),
    forEach: Ar(!0, !1)
  }, n = {
    get(a) {
      return $r(this, a, !0, !0);
    },
    get size() {
      return Or(this, !0);
    },
    has(a) {
      return Pr.call(this, a, !0);
    },
    add: it("add"),
    set: it("set"),
    delete: it("delete"),
    clear: it("clear"),
    forEach: Ar(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    e[a] = Ir(a, !1, !1), r[a] = Ir(a, !0, !1), t[a] = Ir(a, !1, !0), n[a] = Ir(
      a,
      !0,
      !0
    );
  }), [
    e,
    r,
    t,
    n
  ];
}
const [
  Oc,
  Ac,
  Ic,
  Lc
] = /* @__PURE__ */ Pc();
function Qn(e, t) {
  const r = t ? e ? Lc : Ic : e ? Ac : Oc;
  return (n, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(
    Z(r, o) && o in n ? r : n,
    o,
    a
  );
}
const jc = {
  get: /* @__PURE__ */ Qn(!1, !1)
}, Ec = {
  get: /* @__PURE__ */ Qn(!1, !0)
}, zc = {
  get: /* @__PURE__ */ Qn(!0, !1)
};
const Da = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakMap(), Nc = /* @__PURE__ */ new WeakMap();
function Rc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Bc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Rc(lc(e));
}
function en(e) {
  return It(e) ? e : Xn(
    e,
    !1,
    Cc,
    jc,
    Da
  );
}
function Vc(e) {
  return Xn(
    e,
    !1,
    $c,
    Ec,
    Ha
  );
}
function Zn(e) {
  return Xn(
    e,
    !0,
    Tc,
    zc,
    Ua
  );
}
function Xn(e, t, r, n, o) {
  if (!ue(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = o.get(e);
  if (a)
    return a;
  const s = Bc(e);
  if (s === 0)
    return e;
  const i = new Proxy(
    e,
    s === 2 ? n : r
  );
  return o.set(e, i), i;
}
function ar(e) {
  return It(e) ? ar(e.__v_raw) : !!(e && e.__v_isReactive);
}
function It(e) {
  return !!(e && e.__v_isReadonly);
}
function Kt(e) {
  return !!(e && e.__v_isShallow);
}
function Ka(e) {
  return e ? !!e.__v_raw : !1;
}
function X(e) {
  const t = e && e.__v_raw;
  return t ? X(t) : e;
}
function Fc(e) {
  return Object.isExtensible(e) && Oa(e, "__v_skip", !0), e;
}
const dr = (e) => ue(e) ? en(e) : e, eo = (e) => ue(e) ? Zn(e) : e;
class Wa {
  constructor(t, r, n, o) {
    this.getter = t, this._setter = r, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Gn(
      () => t(this._value),
      () => Nr(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = n;
  }
  get value() {
    const t = X(this);
    return (!t._cacheable || t.effect.dirty) && gt(t._value, t._value = t.effect.run()) && Nr(t, 4), Ga(t), t.effect._dirtyLevel >= 2 && Nr(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function Mc(e, t, r = !1) {
  let n, o;
  const a = D(e);
  return a ? (n = e, o = Fe) : (n = e.get, o = e.set), new Wa(n, o, a || !o, r);
}
function Ga(e) {
  var t;
  ht && Ot && (e = X(e), Na(
    Ot,
    (t = e.dep) != null ? t : e.dep = Ba(
      () => e.dep = void 0,
      e instanceof Wa ? e : void 0
    )
  ));
}
function Nr(e, t = 4, r, n) {
  e = X(e);
  const o = e.dep;
  o && Ra(
    o,
    t
  );
}
function Le(e) {
  return !!(e && e.__v_isRef === !0);
}
function Be(e) {
  return Dc(e, !1);
}
function Dc(e, t) {
  return Le(e) ? e : new Hc(e, t);
}
class Hc {
  constructor(t, r) {
    this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : X(t), this._value = r ? t : dr(t);
  }
  get value() {
    return Ga(this), this._value;
  }
  set value(t) {
    const r = this.__v_isShallow || Kt(t) || It(t);
    t = r ? t : X(t), gt(t, this._rawValue) && (this._rawValue, this._rawValue = t, this._value = r ? t : dr(t), Nr(this, 4));
  }
}
function zt(e) {
  return Le(e) ? e.value : e;
}
const Uc = {
  get: (e, t, r) => zt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const o = e[t];
    return Le(o) && !Le(r) ? (o.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function qa(e) {
  return ar(e) ? e : new Proxy(e, Uc);
}
/**
* @vue/runtime-core v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function mt(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (o) {
    tn(o, t, r);
  }
}
function Ge(e, t, r, n) {
  if (D(e)) {
    const o = mt(e, t, r, n);
    return o && Ta(o) && o.catch((a) => {
      tn(a, t, r);
    }), o;
  }
  if (B(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(Ge(e[a], t, r, n));
    return o;
  }
}
function tn(e, t, r, n = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const s = t.proxy, i = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, s, i) === !1)
            return;
      }
      a = a.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      wt(), mt(
        l,
        null,
        10,
        [e, s, i]
      ), kt();
      return;
    }
  }
  Kc(e, r, o, n);
}
function Kc(e, t, r, n = !0) {
  console.error(e);
}
let fr = !1, An = !1;
const ke = [];
let Ze = 0;
const Ht = [];
let lt = null, Pt = 0;
const Ya = /* @__PURE__ */ Promise.resolve();
let to = null;
function Ja(e) {
  const t = to || Ya;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Wc(e) {
  let t = Ze + 1, r = ke.length;
  for (; t < r; ) {
    const n = t + r >>> 1, o = ke[n], a = pr(o);
    a < e || a === e && o.pre ? t = n + 1 : r = n;
  }
  return t;
}
function ro(e) {
  (!ke.length || !ke.includes(
    e,
    fr && e.allowRecurse ? Ze + 1 : Ze
  )) && (e.id == null ? ke.push(e) : ke.splice(Wc(e.id), 0, e), Qa());
}
function Qa() {
  !fr && !An && (An = !0, to = Ya.then(Xa));
}
function Gc(e) {
  const t = ke.indexOf(e);
  t > Ze && ke.splice(t, 1);
}
function qc(e) {
  B(e) ? Ht.push(...e) : (!lt || !lt.includes(
    e,
    e.allowRecurse ? Pt + 1 : Pt
  )) && Ht.push(e), Qa();
}
function Ao(e, t, r = fr ? Ze + 1 : 0) {
  for (; r < ke.length; r++) {
    const n = ke[r];
    if (n && n.pre) {
      if (e && n.id !== e.uid)
        continue;
      ke.splice(r, 1), r--, n();
    }
  }
}
function Za(e) {
  if (Ht.length) {
    const t = [...new Set(Ht)].sort(
      (r, n) => pr(r) - pr(n)
    );
    if (Ht.length = 0, lt) {
      lt.push(...t);
      return;
    }
    for (lt = t, Pt = 0; Pt < lt.length; Pt++) {
      const r = lt[Pt];
      r.active !== !1 && r();
    }
    lt = null, Pt = 0;
  }
}
const pr = (e) => e.id == null ? 1 / 0 : e.id, Yc = (e, t) => {
  const r = pr(e) - pr(t);
  if (r === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return r;
};
function Xa(e) {
  An = !1, fr = !0, ke.sort(Yc);
  try {
    for (Ze = 0; Ze < ke.length; Ze++) {
      const t = ke[Ze];
      t && t.active !== !1 && mt(
        t,
        t.i,
        t.i ? 15 : 14
      );
    }
  } finally {
    Ze = 0, ke.length = 0, Za(), fr = !1, to = null, (ke.length || Ht.length) && Xa();
  }
}
let ve = null, es = null;
function Dr(e) {
  const t = ve;
  return ve = e, es = e && e.type.__scopeId || null, t;
}
function Rt(e, t = ve, r) {
  if (!t || e._n)
    return e;
  const n = (...o) => {
    n._d && Fo(-1);
    const a = Dr(t);
    let s;
    try {
      s = e(...o);
    } finally {
      Dr(a), n._d && Fo(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Bt(e, t) {
  if (ve === null)
    return e;
  const r = sn(ve), n = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, s, i, l = ce] = t[o];
    a && (D(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && dt(s), n.push({
      dir: a,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: i,
      modifiers: l
    }));
  }
  return e;
}
function Ct(e, t, r, n) {
  const o = e.dirs, a = t && t.dirs;
  for (let s = 0; s < o.length; s++) {
    const i = o[s];
    a && (i.oldValue = a[s].value);
    let l = i.dir[n];
    l && (wt(), Ge(l, r, 8, [
      e.el,
      i,
      e,
      t
    ]), kt());
  }
}
function ts(e, t) {
  e.shapeFlag & 6 && e.component ? ts(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Jc(e, t) {
  return D(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ae({ name: e.name }, t, { setup: e })
  ) : e;
}
const sr = (e) => !!e.type.__asyncLoader, rs = (e) => e.type.__isKeepAlive;
function Qc(e, t) {
  ns(e, "a", t);
}
function Zc(e, t) {
  ns(e, "da", t);
}
function ns(e, t, r = xe) {
  const n = e.__wdc || (e.__wdc = () => {
    let o = r;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (rn(t, n, r), r) {
    let o = r.parent;
    for (; o && o.parent; )
      rs(o.parent.vnode) && Xc(n, t, r, o), o = o.parent;
  }
}
function Xc(e, t, r, n) {
  const o = rn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  as(() => {
    Un(n[t], o);
  }, r);
}
function rn(e, t, r = xe, n = !1) {
  if (r) {
    const o = r[e] || (r[e] = []), a = t.__weh || (t.__weh = (...s) => {
      wt();
      const i = _r(r), l = Ge(t, r, e, s);
      return i(), kt(), l;
    });
    return n ? o.unshift(a) : o.push(a), a;
  }
}
const ot = (e) => (t, r = xe) => {
  (!an || e === "sp") && rn(e, (...n) => t(...n), r);
}, eu = ot("bm"), os = ot("m"), tu = ot("bu"), ru = ot("u"), nu = ot("bum"), as = ot("um"), ou = ot("sp"), au = ot(
  "rtg"
), su = ot(
  "rtc"
);
function iu(e, t = xe) {
  rn("ec", e, t);
}
const ss = "components", lu = "directives", is = Symbol.for("v-ndc");
function Xt(e) {
  return fe(e) ? ls(ss, e, !1) || e : e || is;
}
function cu(e) {
  return ls(lu, e);
}
function ls(e, t, r = !0, n = !1) {
  const o = ve || xe;
  if (o) {
    const a = o.type;
    if (e === ss) {
      const i = Xu(
        a,
        !1
      );
      if (i && (i === t || i === qe(t) || i === Qr(qe(t))))
        return a;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Io(o[e] || a[e], t) || // global registration
      Io(o.appContext[e], t)
    );
    return !s && n ? a : s;
  }
}
function Io(e, t) {
  return e && (e[t] || e[qe(t)] || e[Qr(qe(t))]);
}
function ct(e, t, r, n) {
  let o;
  const a = r;
  if (B(e) || fe(e)) {
    o = new Array(e.length);
    for (let s = 0, i = e.length; s < i; s++)
      o[s] = t(e[s], s, void 0, a);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let s = 0; s < e; s++)
      o[s] = t(s + 1, s, void 0, a);
  } else if (ue(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (s, i) => t(s, i, void 0, a)
      );
    else {
      const s = Object.keys(e);
      o = new Array(s.length);
      for (let i = 0, l = s.length; i < l; i++) {
        const c = s[i];
        o[i] = t(e[c], c, i, a);
      }
    }
  else
    o = [];
  return o;
}
function ir(e, t, r = {}, n, o) {
  if (ve.isCE || ve.parent && sr(ve.parent) && ve.parent.isCE)
    return t !== "default" && (r.name = t), Pe("slot", r, n && n());
  let a = e[t];
  a && a._c && (a._d = !1), N();
  const s = a && cs(a(r)), i = bt(
    de,
    {
      key: (r.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!s && n ? "_fb" : "")
    },
    s || (n ? n() : []),
    s && e._ === 1 ? 64 : -2
  );
  return i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), a && a._c && (a._d = !0), i;
}
function cs(e) {
  return e.some((t) => Ps(t) ? !(t.type === vt || t.type === de && !cs(t.children)) : !0) ? e : null;
}
const In = (e) => e ? As(e) ? sn(e) : In(e.parent) : null, lr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => In(e.parent),
    $root: (e) => In(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ds(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, ro(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ja.bind(e.proxy)),
    $watch: (e) => ju.bind(e)
  })
), pn = (e, t) => e !== ce && !e.__isScriptSetup && Z(e, t), uu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: o, props: a, accessCache: s, type: i, appContext: l } = e;
    let c;
    if (t[0] !== "$") {
      const m = s[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return n[t];
          case 2:
            return o[t];
          case 4:
            return r[t];
          case 3:
            return a[t];
        }
      else {
        if (pn(n, t))
          return s[t] = 1, n[t];
        if (o !== ce && Z(o, t))
          return s[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && Z(c, t)
        )
          return s[t] = 3, a[t];
        if (r !== ce && Z(r, t))
          return s[t] = 4, r[t];
        Ln && (s[t] = 0);
      }
    }
    const u = lr[t];
    let p, b;
    if (u)
      return t === "$attrs" && Ie(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (p = i.__cssModules) && (p = p[t])
    )
      return p;
    if (r !== ce && Z(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      b = l.config.globalProperties, Z(b, t)
    )
      return b[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: o, ctx: a } = e;
    return pn(o, t) ? (o[t] = r, !0) : n !== ce && Z(n, t) ? (n[t] = r, !0) : Z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: o, propsOptions: a }
  }, s) {
    let i;
    return !!r[s] || e !== ce && Z(e, s) || pn(t, s) || (i = a[0]) && Z(i, s) || Z(n, s) || Z(lr, s) || Z(o.config.globalProperties, s);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Z(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Lo(e) {
  return B(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Ln = !0;
function du(e) {
  const t = ds(e), r = e.proxy, n = e.ctx;
  Ln = !1, t.beforeCreate && jo(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: s,
    watch: i,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: p,
    mounted: b,
    beforeUpdate: m,
    updated: k,
    activated: S,
    deactivated: L,
    beforeDestroy: z,
    beforeUnmount: A,
    destroyed: g,
    unmounted: O,
    render: J,
    renderTracked: _,
    renderTriggered: F,
    errorCaptured: H,
    serverPrefetch: j,
    // public API
    expose: R,
    inheritAttrs: Y,
    // assets
    components: ne,
    directives: pe,
    filters: be
  } = t;
  if (c && fu(c, n, null), s)
    for (const U in s) {
      const K = s[U];
      D(K) && (n[U] = K.bind(r));
    }
  if (o) {
    const U = o.call(r, r);
    ue(U) && (e.data = en(U));
  }
  if (Ln = !0, a)
    for (const U in a) {
      const K = a[U], Ce = D(K) ? K.bind(r, r) : D(K.get) ? K.get.bind(r, r) : Fe, Te = !D(K) && D(K.set) ? K.set.bind(r) : Fe, he = Ls({
        get: Ce,
        set: Te
      });
      Object.defineProperty(n, U, {
        enumerable: !0,
        configurable: !0,
        get: () => he.value,
        set: (me) => he.value = me
      });
    }
  if (i)
    for (const U in i)
      us(i[U], n, r, U);
  if (l) {
    const U = D(l) ? l.call(r) : l;
    Reflect.ownKeys(U).forEach((K) => {
      vu(K, U[K]);
    });
  }
  u && jo(u, e, "c");
  function re(U, K) {
    B(K) ? K.forEach((Ce) => U(Ce.bind(r))) : K && U(K.bind(r));
  }
  if (re(eu, p), re(os, b), re(tu, m), re(ru, k), re(Qc, S), re(Zc, L), re(iu, H), re(su, _), re(au, F), re(nu, A), re(as, O), re(ou, j), B(R))
    if (R.length) {
      const U = e.exposed || (e.exposed = {});
      R.forEach((K) => {
        Object.defineProperty(U, K, {
          get: () => r[K],
          set: (Ce) => r[K] = Ce
        });
      });
    } else e.exposed || (e.exposed = {});
  J && e.render === Fe && (e.render = J), Y != null && (e.inheritAttrs = Y), ne && (e.components = ne), pe && (e.directives = pe);
}
function fu(e, t, r = Fe) {
  B(e) && (e = jn(e));
  for (const n in e) {
    const o = e[n];
    let a;
    ue(o) ? "default" in o ? a = cr(
      o.from || n,
      o.default,
      !0
    ) : a = cr(o.from || n) : a = cr(o), Le(a) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (s) => a.value = s
    }) : t[n] = a;
  }
}
function jo(e, t, r) {
  Ge(
    B(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function us(e, t, r, n) {
  const o = n.includes(".") ? Cs(r, n) : () => r[n];
  if (fe(e)) {
    const a = t[e];
    D(a) && pt(o, a);
  } else if (D(e))
    pt(o, e.bind(r));
  else if (ue(e))
    if (B(e))
      e.forEach((a) => us(a, t, r, n));
    else {
      const a = D(e.handler) ? e.handler.bind(r) : t[e.handler];
      D(a) && pt(o, a, e);
    }
}
function ds(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: s }
  } = e.appContext, i = a.get(t);
  let l;
  return i ? l = i : !o.length && !r && !n ? l = t : (l = {}, o.length && o.forEach(
    (c) => Hr(l, c, s, !0)
  ), Hr(l, t, s)), ue(t) && a.set(t, l), l;
}
function Hr(e, t, r, n = !1) {
  const { mixins: o, extends: a } = t;
  a && Hr(e, a, r, !0), o && o.forEach(
    (s) => Hr(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const i = pu[s] || r && r[s];
      e[s] = i ? i(e[s], t[s]) : t[s];
    }
  return e;
}
const pu = {
  data: Eo,
  props: zo,
  emits: zo,
  // objects
  methods: er,
  computed: er,
  // lifecycle
  beforeCreate: Se,
  created: Se,
  beforeMount: Se,
  mounted: Se,
  beforeUpdate: Se,
  updated: Se,
  beforeDestroy: Se,
  beforeUnmount: Se,
  destroyed: Se,
  unmounted: Se,
  activated: Se,
  deactivated: Se,
  errorCaptured: Se,
  serverPrefetch: Se,
  // assets
  components: er,
  directives: er,
  // watch
  watch: hu,
  // provide / inject
  provide: Eo,
  inject: bu
};
function Eo(e, t) {
  return t ? e ? function() {
    return Ae(
      D(e) ? e.call(this, this) : e,
      D(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function bu(e, t) {
  return er(jn(e), jn(t));
}
function jn(e) {
  if (B(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function Se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function er(e, t) {
  return e ? Ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function zo(e, t) {
  return e ? B(e) && B(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ae(
    /* @__PURE__ */ Object.create(null),
    Lo(e),
    Lo(t ?? {})
  ) : t;
}
function hu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = Ae(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = Se(e[n], t[n]);
  return r;
}
function fs() {
  return {
    app: null,
    config: {
      isNativeTag: sc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let mu = 0;
function gu(e, t) {
  return function(n, o = null) {
    D(n) || (n = Ae({}, n)), o != null && !ue(o) && (o = null);
    const a = fs(), s = /* @__PURE__ */ new WeakSet();
    let i = !1;
    const l = a.app = {
      _uid: mu++,
      _component: n,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: td,
      get config() {
        return a.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return s.has(c) || (c && D(c.install) ? (s.add(c), c.install(l, ...u)) : D(c) && (s.add(c), c(l, ...u))), l;
      },
      mixin(c) {
        return a.mixins.includes(c) || a.mixins.push(c), l;
      },
      component(c, u) {
        return u ? (a.components[c] = u, l) : a.components[c];
      },
      directive(c, u) {
        return u ? (a.directives[c] = u, l) : a.directives[c];
      },
      mount(c, u, p) {
        if (!i) {
          const b = Pe(n, o);
          return b.appContext = a, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(b, c, p), i = !0, l._container = c, c.__vue_app__ = l, sn(b.component);
        }
      },
      unmount() {
        i && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return a.provides[c] = u, l;
      },
      runWithContext(c) {
        const u = Ut;
        Ut = l;
        try {
          return c();
        } finally {
          Ut = u;
        }
      }
    };
    return l;
  };
}
let Ut = null;
function vu(e, t) {
  if (xe) {
    let r = xe.provides;
    const n = xe.parent && xe.parent.provides;
    n === r && (r = xe.provides = Object.create(n)), r[e] = t;
  }
}
function cr(e, t, r = !1) {
  const n = xe || ve;
  if (n || Ut) {
    const o = Ut ? Ut._context.provides : n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return r && D(t) ? t.call(n && n.proxy) : t;
  }
}
const ps = {}, bs = () => Object.create(ps), hs = (e) => Object.getPrototypeOf(e) === ps;
function yu(e, t, r, n = !1) {
  const o = {}, a = bs();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ms(e, t, o, a);
  for (const s in e.propsOptions[0])
    s in o || (o[s] = void 0);
  r ? e.props = n ? o : Vc(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function xu(e, t, r, n) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: s }
  } = e, i = X(o), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        let b = u[p];
        if (nn(e.emitsOptions, b))
          continue;
        const m = t[b];
        if (l)
          if (Z(a, b))
            m !== a[b] && (a[b] = m, c = !0);
          else {
            const k = qe(b);
            o[k] = En(
              l,
              i,
              k,
              m,
              e,
              !1
            );
          }
        else
          m !== a[b] && (a[b] = m, c = !0);
      }
    }
  } else {
    ms(e, t, o, a) && (c = !0);
    let u;
    for (const p in i)
      (!t || // for camelCase
      !Z(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = xt(p)) === p || !Z(t, u))) && (l ? r && // for camelCase
      (r[p] !== void 0 || // for kebab-case
      r[u] !== void 0) && (o[p] = En(
        l,
        i,
        p,
        void 0,
        e,
        !0
      )) : delete o[p]);
    if (a !== i)
      for (const p in a)
        (!t || !Z(t, p)) && (delete a[p], c = !0);
  }
  c && nt(e.attrs, "set", "");
}
function ms(e, t, r, n) {
  const [o, a] = e.propsOptions;
  let s = !1, i;
  if (t)
    for (let l in t) {
      if (or(l))
        continue;
      const c = t[l];
      let u;
      o && Z(o, u = qe(l)) ? !a || !a.includes(u) ? r[u] = c : (i || (i = {}))[u] = c : nn(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (a) {
    const l = X(r), c = i || ce;
    for (let u = 0; u < a.length; u++) {
      const p = a[u];
      r[p] = En(
        o,
        l,
        p,
        c[p],
        e,
        !Z(c, p)
      );
    }
  }
  return s;
}
function En(e, t, r, n, o, a) {
  const s = e[r];
  if (s != null) {
    const i = Z(s, "default");
    if (i && n === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && D(l)) {
        const { propsDefaults: c } = o;
        if (r in c)
          n = c[r];
        else {
          const u = _r(o);
          n = c[r] = l.call(
            null,
            t
          ), u();
        }
      } else
        n = l;
    }
    s[
      0
      /* shouldCast */
    ] && (a && !i ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === xt(r)) && (n = !0));
  }
  return n;
}
const wu = /* @__PURE__ */ new WeakMap();
function gs(e, t, r = !1) {
  const n = r ? wu : t.propsCache, o = n.get(e);
  if (o)
    return o;
  const a = e.props, s = {}, i = [];
  let l = !1;
  if (!D(e)) {
    const u = (p) => {
      l = !0;
      const [b, m] = gs(p, t, !0);
      Ae(s, b), m && i.push(...m);
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!a && !l)
    return ue(e) && n.set(e, Mt), Mt;
  if (B(a))
    for (let u = 0; u < a.length; u++) {
      const p = qe(a[u]);
      No(p) && (s[p] = ce);
    }
  else if (a)
    for (const u in a) {
      const p = qe(u);
      if (No(p)) {
        const b = a[u], m = s[p] = B(b) || D(b) ? { type: b } : Ae({}, b), k = m.type;
        let S = !1, L = !0;
        if (B(k))
          for (let z = 0; z < k.length; ++z) {
            const A = k[z], g = D(A) && A.name;
            if (g === "Boolean") {
              S = !0;
              break;
            } else g === "String" && (L = !1);
          }
        else
          S = D(k) && k.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = S, m[
          1
          /* shouldCastTrue */
        ] = L, (S || Z(m, "default")) && i.push(p);
      }
    }
  const c = [s, i];
  return ue(e) && n.set(e, c), c;
}
function No(e) {
  return e[0] !== "$" && !or(e);
}
const vs = (e) => e[0] === "_" || e === "$stable", no = (e) => B(e) ? e.map(Qe) : [Qe(e)], ku = (e, t, r) => {
  if (t._n)
    return t;
  const n = Rt((...o) => no(t(...o)), r);
  return n._c = !1, n;
}, ys = (e, t, r) => {
  const n = e._ctx;
  for (const o in e) {
    if (vs(o)) continue;
    const a = e[o];
    if (D(a))
      t[o] = ku(o, a, n);
    else if (a != null) {
      const s = no(a);
      t[o] = () => s;
    }
  }
}, xs = (e, t) => {
  const r = no(t);
  e.slots.default = () => r;
}, ws = (e, t, r) => {
  for (const n in t)
    (r || n !== "_") && (e[n] = t[n]);
}, _u = (e, t, r) => {
  const n = e.slots = bs();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (ws(n, t, r), r && Oa(n, "_", o, !0)) : ys(t, n);
  } else t && xs(e, t);
}, Su = (e, t, r) => {
  const { vnode: n, slots: o } = e;
  let a = !0, s = ce;
  if (n.shapeFlag & 32) {
    const i = t._;
    i ? r && i === 1 ? a = !1 : ws(o, t, r) : (a = !t.$stable, ys(t, o)), s = t;
  } else t && (xs(e, t), s = { default: 1 });
  if (a)
    for (const i in o)
      !vs(i) && s[i] == null && delete o[i];
};
function zn(e, t, r, n, o = !1) {
  if (B(e)) {
    e.forEach(
      (b, m) => zn(
        b,
        t && (B(t) ? t[m] : t),
        r,
        n,
        o
      )
    );
    return;
  }
  if (sr(n) && !o)
    return;
  const a = n.shapeFlag & 4 ? sn(n.component) : n.el, s = o ? null : a, { i, r: l } = e, c = t && t.r, u = i.refs === ce ? i.refs = {} : i.refs, p = i.setupState;
  if (c != null && c !== l && (fe(c) ? (u[c] = null, Z(p, c) && (p[c] = null)) : Le(c) && (c.value = null)), D(l))
    mt(l, i, 12, [s, u]);
  else {
    const b = fe(l), m = Le(l);
    if (b || m) {
      const k = () => {
        if (e.f) {
          const S = b ? Z(p, l) ? p[l] : u[l] : l.value;
          o ? B(S) && Un(S, a) : B(S) ? S.includes(a) || S.push(a) : b ? (u[l] = [a], Z(p, l) && (p[l] = u[l])) : (l.value = [a], e.k && (u[e.k] = l.value));
        } else b ? (u[l] = s, Z(p, l) && (p[l] = s)) : m && (l.value = s, e.k && (u[e.k] = s));
      };
      s ? (k.id = -1, $e(k, r)) : k();
    }
  }
}
const Cu = Symbol("_vte"), Tu = (e) => e.__isTeleport, $e = Mu;
function $u(e) {
  return Pu(e);
}
function Pu(e, t) {
  const r = Aa();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: o,
    patchProp: a,
    createElement: s,
    createText: i,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: p,
    nextSibling: b,
    setScopeId: m = Fe,
    insertStaticContent: k
  } = e, S = (d, f, h, x = null, v = null, w = null, $ = void 0, C = null, T = !!f.dynamicChildren) => {
    if (d === f)
      return;
    d && !Jt(d, f) && (x = Lt(d), me(d, v, w, !0), d = null), f.patchFlag === -2 && (T = !1, f.dynamicChildren = null);
    const { type: y, ref: P, shapeFlag: E } = f;
    switch (y) {
      case on:
        L(d, f, h, x);
        break;
      case vt:
        z(d, f, h, x);
        break;
      case hn:
        d == null && A(f, h, x, $);
        break;
      case de:
        ne(
          d,
          f,
          h,
          x,
          v,
          w,
          $,
          C,
          T
        );
        break;
      default:
        E & 1 ? J(
          d,
          f,
          h,
          x,
          v,
          w,
          $,
          C,
          T
        ) : E & 6 ? pe(
          d,
          f,
          h,
          x,
          v,
          w,
          $,
          C,
          T
        ) : (E & 64 || E & 128) && y.process(
          d,
          f,
          h,
          x,
          v,
          w,
          $,
          C,
          T,
          St
        );
    }
    P != null && v && zn(P, d && d.ref, w, f || d, !f);
  }, L = (d, f, h, x) => {
    if (d == null)
      n(
        f.el = i(f.children),
        h,
        x
      );
    else {
      const v = f.el = d.el;
      f.children !== d.children && c(v, f.children);
    }
  }, z = (d, f, h, x) => {
    d == null ? n(
      f.el = l(f.children || ""),
      h,
      x
    ) : f.el = d.el;
  }, A = (d, f, h, x) => {
    [d.el, d.anchor] = k(
      d.children,
      f,
      h,
      x,
      d.el,
      d.anchor
    );
  }, g = ({ el: d, anchor: f }, h, x) => {
    let v;
    for (; d && d !== f; )
      v = b(d), n(d, h, x), d = v;
    n(f, h, x);
  }, O = ({ el: d, anchor: f }) => {
    let h;
    for (; d && d !== f; )
      h = b(d), o(d), d = h;
    o(f);
  }, J = (d, f, h, x, v, w, $, C, T) => {
    f.type === "svg" ? $ = "svg" : f.type === "math" && ($ = "mathml"), d == null ? _(
      f,
      h,
      x,
      v,
      w,
      $,
      C,
      T
    ) : j(
      d,
      f,
      v,
      w,
      $,
      C,
      T
    );
  }, _ = (d, f, h, x, v, w, $, C) => {
    let T, y;
    const { props: P, shapeFlag: E, transition: I, dirs: M } = d;
    if (T = d.el = s(
      d.type,
      w,
      P && P.is,
      P
    ), E & 8 ? u(T, d.children) : E & 16 && H(
      d.children,
      T,
      null,
      x,
      v,
      bn(d, w),
      $,
      C
    ), M && Ct(d, null, x, "created"), F(T, d, d.scopeId, $, x), P) {
      for (const oe in P)
        oe !== "value" && !or(oe) && a(T, oe, null, P[oe], w, x);
      "value" in P && a(T, "value", null, P.value, w), (y = P.onVnodeBeforeMount) && Je(y, x, d);
    }
    M && Ct(d, null, x, "beforeMount");
    const G = Ou(v, I);
    G && I.beforeEnter(T), n(T, f, h), ((y = P && P.onVnodeMounted) || G || M) && $e(() => {
      y && Je(y, x, d), G && I.enter(T), M && Ct(d, null, x, "mounted");
    }, v);
  }, F = (d, f, h, x, v) => {
    if (h && m(d, h), x)
      for (let w = 0; w < x.length; w++)
        m(d, x[w]);
    if (v) {
      let w = v.subTree;
      if (f === w) {
        const $ = v.vnode;
        F(
          d,
          $,
          $.scopeId,
          $.slotScopeIds,
          v.parent
        );
      }
    }
  }, H = (d, f, h, x, v, w, $, C, T = 0) => {
    for (let y = T; y < d.length; y++) {
      const P = d[y] = C ? ut(d[y]) : Qe(d[y]);
      S(
        null,
        P,
        f,
        h,
        x,
        v,
        w,
        $,
        C
      );
    }
  }, j = (d, f, h, x, v, w, $) => {
    const C = f.el = d.el;
    let { patchFlag: T, dynamicChildren: y, dirs: P } = f;
    T |= d.patchFlag & 16;
    const E = d.props || ce, I = f.props || ce;
    let M;
    if (h && Tt(h, !1), (M = I.onVnodeBeforeUpdate) && Je(M, h, f, d), P && Ct(f, d, h, "beforeUpdate"), h && Tt(h, !0), (E.innerHTML && I.innerHTML == null || E.textContent && I.textContent == null) && u(C, ""), y ? R(
      d.dynamicChildren,
      y,
      C,
      h,
      x,
      bn(f, v),
      w
    ) : $ || K(
      d,
      f,
      C,
      null,
      h,
      x,
      bn(f, v),
      w,
      !1
    ), T > 0) {
      if (T & 16)
        Y(C, E, I, h, v);
      else if (T & 2 && E.class !== I.class && a(C, "class", null, I.class, v), T & 4 && a(C, "style", E.style, I.style, v), T & 8) {
        const G = f.dynamicProps;
        for (let oe = 0; oe < G.length; oe++) {
          const ee = G[oe], _e = E[ee], Me = I[ee];
          (Me !== _e || ee === "value") && a(C, ee, _e, Me, v, h);
        }
      }
      T & 1 && d.children !== f.children && u(C, f.children);
    } else !$ && y == null && Y(C, E, I, h, v);
    ((M = I.onVnodeUpdated) || P) && $e(() => {
      M && Je(M, h, f, d), P && Ct(f, d, h, "updated");
    }, x);
  }, R = (d, f, h, x, v, w, $) => {
    for (let C = 0; C < f.length; C++) {
      const T = d[C], y = f[C], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === de || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Jt(T, y) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 70) ? p(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      S(
        T,
        y,
        P,
        null,
        x,
        v,
        w,
        $,
        !0
      );
    }
  }, Y = (d, f, h, x, v) => {
    if (f !== h) {
      if (f !== ce)
        for (const w in f)
          !or(w) && !(w in h) && a(
            d,
            w,
            f[w],
            null,
            v,
            x
          );
      for (const w in h) {
        if (or(w)) continue;
        const $ = h[w], C = f[w];
        $ !== C && w !== "value" && a(d, w, C, $, v, x);
      }
      "value" in h && a(d, "value", f.value, h.value, v);
    }
  }, ne = (d, f, h, x, v, w, $, C, T) => {
    const y = f.el = d ? d.el : i(""), P = f.anchor = d ? d.anchor : i("");
    let { patchFlag: E, dynamicChildren: I, slotScopeIds: M } = f;
    M && (C = C ? C.concat(M) : M), d == null ? (n(y, h, x), n(P, h, x), H(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      P,
      v,
      w,
      $,
      C,
      T
    )) : E > 0 && E & 64 && I && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren ? (R(
      d.dynamicChildren,
      I,
      h,
      v,
      w,
      $,
      C
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || v && f === v.subTree) && ks(
      d,
      f,
      !0
      /* shallow */
    )) : K(
      d,
      f,
      h,
      P,
      v,
      w,
      $,
      C,
      T
    );
  }, pe = (d, f, h, x, v, w, $, C, T) => {
    f.slotScopeIds = C, d == null ? f.shapeFlag & 512 ? v.ctx.activate(
      f,
      h,
      x,
      $,
      T
    ) : be(
      f,
      h,
      x,
      v,
      w,
      $,
      T
    ) : Ne(d, f, T);
  }, be = (d, f, h, x, v, w, $) => {
    const C = d.component = Gu(
      d,
      x,
      v
    );
    if (rs(d) && (C.ctx.renderer = St), Yu(C, !1, $), C.asyncDep) {
      if (v && v.registerDep(C, re, $), !d.el) {
        const T = C.subTree = Pe(vt);
        z(null, T, f, h);
      }
    } else
      re(
        C,
        d,
        f,
        h,
        v,
        w,
        $
      );
  }, Ne = (d, f, h) => {
    const x = f.component = d.component;
    if (Bu(d, f, h))
      if (x.asyncDep && !x.asyncResolved) {
        U(x, f, h);
        return;
      } else
        x.next = f, Gc(x.update), x.effect.dirty = !0, x.update();
    else
      f.el = d.el, x.vnode = f;
  }, re = (d, f, h, x, v, w, $) => {
    const C = () => {
      if (d.isMounted) {
        let { next: P, bu: E, u: I, parent: M, vnode: G } = d;
        {
          const jt = _s(d);
          if (jt) {
            P && (P.el = G.el, U(d, P, $)), jt.asyncDep.then(() => {
              d.isUnmounted || C();
            });
            return;
          }
        }
        let oe = P, ee;
        Tt(d, !1), P ? (P.el = G.el, U(d, P, $)) : P = G, E && zr(E), (ee = P.props && P.props.onVnodeBeforeUpdate) && Je(ee, M, P, G), Tt(d, !0);
        const _e = Bo(d), Me = d.subTree;
        d.subTree = _e, S(
          Me,
          _e,
          // parent may have changed if it's in a teleport
          p(Me.el),
          // anchor may have changed if it's in a fragment
          Lt(Me),
          d,
          v,
          w
        ), P.el = _e.el, oe === null && Vu(d, _e.el), I && $e(I, v), (ee = P.props && P.props.onVnodeUpdated) && $e(
          () => Je(ee, M, P, G),
          v
        );
      } else {
        let P;
        const { el: E, props: I } = f, { bm: M, m: G, parent: oe } = d, ee = sr(f);
        Tt(d, !1), M && zr(M), !ee && (P = I && I.onVnodeBeforeMount) && Je(P, oe, f), Tt(d, !0);
        {
          const _e = d.subTree = Bo(d);
          S(
            null,
            _e,
            h,
            x,
            d,
            v,
            w
          ), f.el = _e.el;
        }
        if (G && $e(G, v), !ee && (P = I && I.onVnodeMounted)) {
          const _e = f;
          $e(
            () => Je(P, oe, _e),
            v
          );
        }
        (f.shapeFlag & 256 || oe && sr(oe.vnode) && oe.vnode.shapeFlag & 256) && d.a && $e(d.a, v), d.isMounted = !0, f = h = x = null;
      }
    }, T = d.effect = new Gn(
      C,
      Fe,
      () => ro(y),
      d.scope
      // track it in component's effect scope
    ), y = d.update = () => {
      T.dirty && T.run();
    };
    y.i = d, y.id = d.uid, Tt(d, !0), y();
  }, U = (d, f, h) => {
    f.component = d;
    const x = d.vnode.props;
    d.vnode = f, d.next = null, xu(d, f.props, x, h), Su(d, f.children, h), wt(), Ao(d), kt();
  }, K = (d, f, h, x, v, w, $, C, T = !1) => {
    const y = d && d.children, P = d ? d.shapeFlag : 0, E = f.children, { patchFlag: I, shapeFlag: M } = f;
    if (I > 0) {
      if (I & 128) {
        Te(
          y,
          E,
          h,
          x,
          v,
          w,
          $,
          C,
          T
        );
        return;
      } else if (I & 256) {
        Ce(
          y,
          E,
          h,
          x,
          v,
          w,
          $,
          C,
          T
        );
        return;
      }
    }
    M & 8 ? (P & 16 && st(y, v, w), E !== y && u(h, E)) : P & 16 ? M & 16 ? Te(
      y,
      E,
      h,
      x,
      v,
      w,
      $,
      C,
      T
    ) : st(y, v, w, !0) : (P & 8 && u(h, ""), M & 16 && H(
      E,
      h,
      x,
      v,
      w,
      $,
      C,
      T
    ));
  }, Ce = (d, f, h, x, v, w, $, C, T) => {
    d = d || Mt, f = f || Mt;
    const y = d.length, P = f.length, E = Math.min(y, P);
    let I;
    for (I = 0; I < E; I++) {
      const M = f[I] = T ? ut(f[I]) : Qe(f[I]);
      S(
        d[I],
        M,
        h,
        null,
        v,
        w,
        $,
        C,
        T
      );
    }
    y > P ? st(
      d,
      v,
      w,
      !0,
      !1,
      E
    ) : H(
      f,
      h,
      x,
      v,
      w,
      $,
      C,
      T,
      E
    );
  }, Te = (d, f, h, x, v, w, $, C, T) => {
    let y = 0;
    const P = f.length;
    let E = d.length - 1, I = P - 1;
    for (; y <= E && y <= I; ) {
      const M = d[y], G = f[y] = T ? ut(f[y]) : Qe(f[y]);
      if (Jt(M, G))
        S(
          M,
          G,
          h,
          null,
          v,
          w,
          $,
          C,
          T
        );
      else
        break;
      y++;
    }
    for (; y <= E && y <= I; ) {
      const M = d[E], G = f[I] = T ? ut(f[I]) : Qe(f[I]);
      if (Jt(M, G))
        S(
          M,
          G,
          h,
          null,
          v,
          w,
          $,
          C,
          T
        );
      else
        break;
      E--, I--;
    }
    if (y > E) {
      if (y <= I) {
        const M = I + 1, G = M < P ? f[M].el : x;
        for (; y <= I; )
          S(
            null,
            f[y] = T ? ut(f[y]) : Qe(f[y]),
            h,
            G,
            v,
            w,
            $,
            C,
            T
          ), y++;
      }
    } else if (y > I)
      for (; y <= E; )
        me(d[y], v, w, !0), y++;
    else {
      const M = y, G = y, oe = /* @__PURE__ */ new Map();
      for (y = G; y <= I; y++) {
        const je = f[y] = T ? ut(f[y]) : Qe(f[y]);
        je.key != null && oe.set(je.key, y);
      }
      let ee, _e = 0;
      const Me = I - G + 1;
      let jt = !1, so = 0;
      const Yt = new Array(Me);
      for (y = 0; y < Me; y++) Yt[y] = 0;
      for (y = M; y <= E; y++) {
        const je = d[y];
        if (_e >= Me) {
          me(je, v, w, !0);
          continue;
        }
        let Ye;
        if (je.key != null)
          Ye = oe.get(je.key);
        else
          for (ee = G; ee <= I; ee++)
            if (Yt[ee - G] === 0 && Jt(je, f[ee])) {
              Ye = ee;
              break;
            }
        Ye === void 0 ? me(je, v, w, !0) : (Yt[Ye - G] = y + 1, Ye >= so ? so = Ye : jt = !0, S(
          je,
          f[Ye],
          h,
          null,
          v,
          w,
          $,
          C,
          T
        ), _e++);
      }
      const io = jt ? Au(Yt) : Mt;
      for (ee = io.length - 1, y = Me - 1; y >= 0; y--) {
        const je = G + y, Ye = f[je], lo = je + 1 < P ? f[je + 1].el : x;
        Yt[y] === 0 ? S(
          null,
          Ye,
          h,
          lo,
          v,
          w,
          $,
          C,
          T
        ) : jt && (ee < 0 || y !== io[ee] ? he(Ye, h, lo, 2) : ee--);
      }
    }
  }, he = (d, f, h, x, v = null) => {
    const { el: w, type: $, transition: C, children: T, shapeFlag: y } = d;
    if (y & 6) {
      he(d.component.subTree, f, h, x);
      return;
    }
    if (y & 128) {
      d.suspense.move(f, h, x);
      return;
    }
    if (y & 64) {
      $.move(d, f, h, St);
      return;
    }
    if ($ === de) {
      n(w, f, h);
      for (let E = 0; E < T.length; E++)
        he(T[E], f, h, x);
      n(d.anchor, f, h);
      return;
    }
    if ($ === hn) {
      g(d, f, h);
      return;
    }
    if (x !== 2 && y & 1 && C)
      if (x === 0)
        C.beforeEnter(w), n(w, f, h), $e(() => C.enter(w), v);
      else {
        const { leave: E, delayLeave: I, afterLeave: M } = C, G = () => n(w, f, h), oe = () => {
          E(w, () => {
            G(), M && M();
          });
        };
        I ? I(w, G, oe) : oe();
      }
    else
      n(w, f, h);
  }, me = (d, f, h, x = !1, v = !1) => {
    const {
      type: w,
      props: $,
      ref: C,
      children: T,
      dynamicChildren: y,
      shapeFlag: P,
      patchFlag: E,
      dirs: I,
      cacheIndex: M
    } = d;
    if (E === -2 && (v = !1), C != null && zn(C, null, h, d, !0), M != null && (f.renderCache[M] = void 0), P & 256) {
      f.ctx.deactivate(d);
      return;
    }
    const G = P & 1 && I, oe = !sr(d);
    let ee;
    if (oe && (ee = $ && $.onVnodeBeforeUnmount) && Je(ee, f, d), P & 6)
      Sr(d.component, h, x);
    else {
      if (P & 128) {
        d.suspense.unmount(h, x);
        return;
      }
      G && Ct(d, null, f, "beforeUnmount"), P & 64 ? d.type.remove(
        d,
        f,
        h,
        St,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (w !== de || E > 0 && E & 64) ? st(
        y,
        f,
        h,
        !1,
        !0
      ) : (w === de && E & 384 || !v && P & 16) && st(T, f, h), x && _t(d);
    }
    (oe && (ee = $ && $.onVnodeUnmounted) || G) && $e(() => {
      ee && Je(ee, f, d), G && Ct(d, null, f, "unmounted");
    }, h);
  }, _t = (d) => {
    const { type: f, el: h, anchor: x, transition: v } = d;
    if (f === de) {
      at(h, x);
      return;
    }
    if (f === hn) {
      O(d);
      return;
    }
    const w = () => {
      o(h), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (d.shapeFlag & 1 && v && !v.persisted) {
      const { leave: $, delayLeave: C } = v, T = () => $(h, w);
      C ? C(d.el, w, T) : T();
    } else
      w();
  }, at = (d, f) => {
    let h;
    for (; d !== f; )
      h = b(d), o(d), d = h;
    o(f);
  }, Sr = (d, f, h) => {
    const { bum: x, scope: v, update: w, subTree: $, um: C, m: T, a: y } = d;
    Ro(T), Ro(y), x && zr(x), v.stop(), w && (w.active = !1, me($, d, f, h)), C && $e(C, f), $e(() => {
      d.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, st = (d, f, h, x = !1, v = !1, w = 0) => {
    for (let $ = w; $ < d.length; $++)
      me(d[$], f, h, x, v);
  }, Lt = (d) => {
    if (d.shapeFlag & 6)
      return Lt(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const f = b(d.anchor || d.el), h = f && f[Cu];
    return h ? b(h) : f;
  };
  let qt = !1;
  const Cr = (d, f, h) => {
    d == null ? f._vnode && me(f._vnode, null, null, !0) : S(
      f._vnode || null,
      d,
      f,
      null,
      null,
      null,
      h
    ), f._vnode = d, qt || (qt = !0, Ao(), Za(), qt = !1);
  }, St = {
    p: S,
    um: me,
    m: he,
    r: _t,
    mt: be,
    mc: H,
    pc: K,
    pbc: R,
    n: Lt,
    o: e
  };
  return {
    render: Cr,
    hydrate: void 0,
    createApp: gu(Cr)
  };
}
function bn({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function Tt({ effect: e, update: t }, r) {
  e.allowRecurse = t.allowRecurse = r;
}
function Ou(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ks(e, t, r = !1) {
  const n = e.children, o = t.children;
  if (B(n) && B(o))
    for (let a = 0; a < n.length; a++) {
      const s = n[a];
      let i = o[a];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[a] = ut(o[a]), i.el = s.el), !r && i.patchFlag !== -2 && ks(s, i)), i.type === on && (i.el = s.el);
    }
}
function Au(e) {
  const t = e.slice(), r = [0];
  let n, o, a, s, i;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (o = r[r.length - 1], e[o] < c) {
        t[n] = o, r.push(n);
        continue;
      }
      for (a = 0, s = r.length - 1; a < s; )
        i = a + s >> 1, e[r[i]] < c ? a = i + 1 : s = i;
      c < e[r[a]] && (a > 0 && (t[n] = r[a - 1]), r[a] = n);
    }
  }
  for (a = r.length, s = r[a - 1]; a-- > 0; )
    r[a] = s, s = t[s];
  return r;
}
function _s(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : _s(t);
}
function Ro(e) {
  if (e)
    for (let t = 0; t < e.length; t++) e[t].active = !1;
}
const Iu = Symbol.for("v-scx"), Lu = () => cr(Iu), Lr = {};
function pt(e, t, r) {
  return Ss(e, t, r);
}
function Ss(e, t, {
  immediate: r,
  deep: n,
  flush: o,
  once: a,
  onTrack: s,
  onTrigger: i
} = ce) {
  if (t && a) {
    const _ = t;
    t = (...F) => {
      _(...F), J();
    };
  }
  const l = xe, c = (_) => n === !0 ? _ : (
    // for deep: false, only traverse root-level properties
    dt(_, n === !1 ? 1 : void 0)
  );
  let u, p = !1, b = !1;
  if (Le(e) ? (u = () => e.value, p = Kt(e)) : ar(e) ? (u = () => c(e), p = !0) : B(e) ? (b = !0, p = e.some((_) => ar(_) || Kt(_)), u = () => e.map((_) => {
    if (Le(_))
      return _.value;
    if (ar(_))
      return c(_);
    if (D(_))
      return mt(_, l, 2);
  })) : D(e) ? t ? u = () => mt(e, l, 2) : u = () => (m && m(), Ge(
    e,
    l,
    3,
    [k]
  )) : u = Fe, t && n) {
    const _ = u;
    u = () => dt(_());
  }
  let m, k = (_) => {
    m = g.onStop = () => {
      mt(_, l, 4), m = g.onStop = void 0;
    };
  }, S;
  if (an)
    if (k = Fe, t ? r && Ge(t, l, 3, [
      u(),
      b ? [] : void 0,
      k
    ]) : u(), o === "sync") {
      const _ = Lu();
      S = _.__watcherHandles || (_.__watcherHandles = []);
    } else
      return Fe;
  let L = b ? new Array(e.length).fill(Lr) : Lr;
  const z = () => {
    if (!(!g.active || !g.dirty))
      if (t) {
        const _ = g.run();
        (n || p || (b ? _.some((F, H) => gt(F, L[H])) : gt(_, L))) && (m && m(), Ge(t, l, 3, [
          _,
          // pass undefined as the old value when it's changed for the first time
          L === Lr ? void 0 : b && L[0] === Lr ? [] : L,
          k
        ]), L = _);
      } else
        g.run();
  };
  z.allowRecurse = !!t;
  let A;
  o === "sync" ? A = z : o === "post" ? A = () => $e(z, l && l.suspense) : (z.pre = !0, l && (z.id = l.uid), A = () => ro(z));
  const g = new Gn(u, Fe, A), O = yc(), J = () => {
    g.stop(), O && Un(O.effects, g);
  };
  return t ? r ? z() : L = g.run() : o === "post" ? $e(
    g.run.bind(g),
    l && l.suspense
  ) : g.run(), S && S.push(J), J;
}
function ju(e, t, r) {
  const n = this.proxy, o = fe(e) ? e.includes(".") ? Cs(n, e) : () => n[e] : e.bind(n, n);
  let a;
  D(t) ? a = t : (a = t.handler, r = t);
  const s = _r(this), i = Ss(o, a.bind(n), r);
  return s(), i;
}
function Cs(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let o = 0; o < r.length && n; o++)
      n = n[r[o]];
    return n;
  };
}
function dt(e, t = 1 / 0, r) {
  if (t <= 0 || !ue(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Set(), r.has(e)))
    return e;
  if (r.add(e), t--, Le(e))
    dt(e.value, t, r);
  else if (B(e))
    for (let n = 0; n < e.length; n++)
      dt(e[n], t, r);
  else if (Ca(e) || Dt(e))
    e.forEach((n) => {
      dt(n, t, r);
    });
  else if (Pa(e)) {
    for (const n in e)
      dt(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && dt(e[n], t, r);
  }
  return e;
}
const Eu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qe(t)}Modifiers`] || e[`${xt(t)}Modifiers`];
function zu(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ce;
  let o = r;
  const a = t.startsWith("update:"), s = a && Eu(n, t.slice(7));
  s && (s.trim && (o = r.map((u) => fe(u) ? u.trim() : u)), s.number && (o = r.map(Cn)));
  let i, l = n[i = dn(t)] || // also try camelCase event handler (#2249)
  n[i = dn(qe(t))];
  !l && a && (l = n[i = dn(xt(t))]), l && Ge(
    l,
    e,
    6,
    o
  );
  const c = n[i + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, Ge(
      c,
      e,
      6,
      o
    );
  }
}
function Ts(e, t, r = !1) {
  const n = t.emitsCache, o = n.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let s = {}, i = !1;
  if (!D(e)) {
    const l = (c) => {
      const u = Ts(c, t, !0);
      u && (i = !0, Ae(s, u));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !a && !i ? (ue(e) && n.set(e, null), null) : (B(a) ? a.forEach((l) => s[l] = null) : Ae(s, a), ue(e) && n.set(e, s), s);
}
function nn(e, t) {
  return !e || !qr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, xt(t)) || Z(e, t));
}
function Bo(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: o,
    propsOptions: [a],
    slots: s,
    attrs: i,
    emit: l,
    render: c,
    renderCache: u,
    props: p,
    data: b,
    setupState: m,
    ctx: k,
    inheritAttrs: S
  } = e, L = Dr(e);
  let z, A;
  try {
    if (r.shapeFlag & 4) {
      const O = o || n, J = O;
      z = Qe(
        c.call(
          J,
          O,
          u,
          p,
          m,
          b,
          k
        )
      ), A = i;
    } else {
      const O = t;
      z = Qe(
        O.length > 1 ? O(
          p,
          { attrs: i, slots: s, emit: l }
        ) : O(
          p,
          null
        )
      ), A = t.props ? i : Nu(i);
    }
  } catch (O) {
    ur.length = 0, tn(O, e, 1), z = Pe(vt);
  }
  let g = z;
  if (A && S !== !1) {
    const O = Object.keys(A), { shapeFlag: J } = g;
    O.length && J & 7 && (a && O.some(Hn) && (A = Ru(
      A,
      a
    )), g = Wt(g, A, !1, !0));
  }
  return r.dirs && (g = Wt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(r.dirs) : r.dirs), r.transition && (g.transition = r.transition), z = g, Dr(L), z;
}
const Nu = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || qr(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, Ru = (e, t) => {
  const r = {};
  for (const n in e)
    (!Hn(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function Bu(e, t, r) {
  const { props: n, children: o, component: a } = e, { props: s, children: i, patchFlag: l } = t, c = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? Vo(n, s, c) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        const b = u[p];
        if (s[b] !== n[b] && !nn(c, b))
          return !0;
      }
    }
  } else
    return (o || i) && (!i || !i.$stable) ? !0 : n === s ? !1 : n ? s ? Vo(n, s, c) : !0 : !!s;
  return !1;
}
function Vo(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    if (t[a] !== e[a] && !nn(r, a))
      return !0;
  }
  return !1;
}
function Vu({ vnode: e, parent: t }, r) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
}
const Fu = (e) => e.__isSuspense;
function Mu(e, t) {
  t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : qc(e);
}
const de = Symbol.for("v-fgt"), on = Symbol.for("v-txt"), vt = Symbol.for("v-cmt"), hn = Symbol.for("v-stc"), ur = [];
let ze = null;
function N(e = !1) {
  ur.push(ze = e ? null : []);
}
function Du() {
  ur.pop(), ze = ur[ur.length - 1] || null;
}
let br = 1;
function Fo(e) {
  br += e, e < 0 && ze && (ze.hasOnce = !0);
}
function $s(e) {
  return e.dynamicChildren = br > 0 ? ze || Mt : null, Du(), br > 0 && ze && ze.push(e), e;
}
function V(e, t, r, n, o, a) {
  return $s(
    le(
      e,
      t,
      r,
      n,
      o,
      a,
      !0
    )
  );
}
function bt(e, t, r, n, o) {
  return $s(
    Pe(
      e,
      t,
      r,
      n,
      o,
      !0
    )
  );
}
function Ps(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Os = ({ key: e }) => e ?? null, Rr = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? fe(e) || Le(e) || D(e) ? { i: ve, r: e, k: t, f: !!r } : e : null);
function le(e, t = null, r = null, n = 0, o = null, a = e === de ? 0 : 1, s = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Os(t),
    ref: t && Rr(t),
    scopeId: es,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: n,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: ve
  };
  return i ? (oo(l, r), a & 128 && e.normalize(l)) : r && (l.shapeFlag |= fe(r) ? 8 : 16), br > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ze && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && ze.push(l), l;
}
const Pe = Hu;
function Hu(e, t = null, r = null, n = 0, o = null, a = !1) {
  if ((!e || e === is) && (e = vt), Ps(e)) {
    const i = Wt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && oo(i, r), br > 0 && !a && ze && (i.shapeFlag & 6 ? ze[ze.indexOf(e)] = i : ze.push(i)), i.patchFlag = -2, i;
  }
  if (ed(e) && (e = e.__vccOpts), t) {
    t = Uu(t);
    let { class: i, style: l } = t;
    i && !fe(i) && (t.class = Zr(i)), ue(l) && (Ka(l) && !B(l) && (l = Ae({}, l)), t.style = Wn(l));
  }
  const s = fe(e) ? 1 : Fu(e) ? 128 : Tu(e) ? 64 : ue(e) ? 4 : D(e) ? 2 : 0;
  return le(
    e,
    t,
    r,
    n,
    o,
    s,
    a,
    !0
  );
}
function Uu(e) {
  return e ? Ka(e) || hs(e) ? Ae({}, e) : e : null;
}
function Wt(e, t, r = !1, n = !1) {
  const { props: o, ref: a, patchFlag: s, children: i, transition: l } = e, c = t ? ae(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Os(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && a ? B(a) ? a.concat(Rr(t)) : [a, Rr(t)] : Rr(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== de ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Wt(e.ssContent),
    ssFallback: e.ssFallback && Wt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && ts(
    u,
    l.clone(u)
  ), u;
}
function Ee(e = " ", t = 0) {
  return Pe(on, null, e, t);
}
function ye(e = "", t = !1) {
  return t ? (N(), bt(vt, null, e)) : Pe(vt, null, e);
}
function Qe(e) {
  return e == null || typeof e == "boolean" ? Pe(vt) : B(e) ? Pe(
    de,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ut(e) : Pe(on, null, String(e));
}
function ut(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wt(e);
}
function oo(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (B(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), oo(e, o()), o._c && (o._d = !0));
      return;
    } else {
      r = 32;
      const o = t._;
      !o && !hs(t) ? t._ctx = ve : o === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else D(t) ? (t = { default: t, _ctx: ve }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Ee(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function ae(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const o in n)
      if (o === "class")
        t.class !== n.class && (t.class = Zr([t.class, n.class]));
      else if (o === "style")
        t.style = Wn([t.style, n.style]);
      else if (qr(o)) {
        const a = t[o], s = n[o];
        s && a !== s && !(B(a) && a.includes(s)) && (t[o] = a ? [].concat(a, s) : s);
      } else o !== "" && (t[o] = n[o]);
  }
  return t;
}
function Je(e, t, r, n = null) {
  Ge(e, t, 7, [
    r,
    n
  ]);
}
const Ku = fs();
let Wu = 0;
function Gu(e, t, r) {
  const n = e.type, o = (t ? t.appContext : e.appContext) || Ku, a = {
    uid: Wu++,
    vnode: e,
    type: n,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new gc(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: gs(n, o),
    emitsOptions: Ts(n, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ce,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ce,
    data: ce,
    props: ce,
    attrs: ce,
    slots: ce,
    refs: ce,
    setupState: ce,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = zu.bind(null, a), e.ce && e.ce(a), a;
}
let xe = null;
const qu = () => xe || ve;
let Ur, Nn;
{
  const e = Aa(), t = (r, n) => {
    let o;
    return (o = e[r]) || (o = e[r] = []), o.push(n), (a) => {
      o.length > 1 ? o.forEach((s) => s(a)) : o[0](a);
    };
  };
  Ur = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => xe = r
  ), Nn = t(
    "__VUE_SSR_SETTERS__",
    (r) => an = r
  );
}
const _r = (e) => {
  const t = xe;
  return Ur(e), e.scope.on(), () => {
    e.scope.off(), Ur(t);
  };
}, Mo = () => {
  xe && xe.scope.off(), Ur(null);
};
function As(e) {
  return e.vnode.shapeFlag & 4;
}
let an = !1;
function Yu(e, t = !1, r = !1) {
  t && Nn(t);
  const { props: n, children: o } = e.vnode, a = As(e);
  yu(e, n, a, t), _u(e, o, r);
  const s = a ? Ju(e, t) : void 0;
  return t && Nn(!1), s;
}
function Ju(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, uu);
  const { setup: n } = r;
  if (n) {
    const o = e.setupContext = n.length > 1 ? Zu(e) : null, a = _r(e);
    wt();
    const s = mt(
      n,
      e,
      0,
      [
        e.props,
        o
      ]
    );
    if (kt(), a(), Ta(s)) {
      if (s.then(Mo, Mo), t)
        return s.then((i) => {
          Do(e, i);
        }).catch((i) => {
          tn(i, e, 0);
        });
      e.asyncDep = s;
    } else
      Do(e, s);
  } else
    Is(e);
}
function Do(e, t, r) {
  D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ue(t) && (e.setupState = qa(t)), Is(e);
}
function Is(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Fe);
  {
    const o = _r(e);
    wt();
    try {
      du(e);
    } finally {
      kt(), o();
    }
  }
}
const Qu = {
  get(e, t) {
    return Ie(e, "get", ""), e[t];
  }
};
function Zu(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Qu),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function sn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(qa(Fc(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in lr)
        return lr[r](e);
    },
    has(t, r) {
      return r in t || r in lr;
    }
  })) : e.proxy;
}
function Xu(e, t = !0) {
  return D(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ed(e) {
  return D(e) && "__vccOpts" in e;
}
const Ls = (e, t) => Mc(e, t, an), td = "3.4.37";
/**
* @vue/runtime-dom v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const rd = "http://www.w3.org/2000/svg", nd = "http://www.w3.org/1998/Math/MathML", tt = typeof document < "u" ? document : null, Ho = tt && /* @__PURE__ */ tt.createElement("template"), od = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const o = t === "svg" ? tt.createElementNS(rd, e) : t === "mathml" ? tt.createElementNS(nd, e) : r ? tt.createElement(e, { is: r }) : tt.createElement(e);
    return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o;
  },
  createText: (e) => tt.createTextNode(e),
  createComment: (e) => tt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => tt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, o, a) {
    const s = r ? r.previousSibling : t.lastChild;
    if (o && (o === a || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), r), !(o === a || !(o = o.nextSibling)); )
        ;
    else {
      Ho.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
      const i = Ho.content;
      if (n === "svg" || n === "mathml") {
        const l = i.firstChild;
        for (; l.firstChild; )
          i.appendChild(l.firstChild);
        i.removeChild(l);
      }
      t.insertBefore(i, r);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, ad = Symbol("_vtc");
function sd(e, t, r) {
  const n = e[ad];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Kr = Symbol("_vod"), js = Symbol("_vsh"), Es = {
  beforeMount(e, { value: t }, { transition: r }) {
    e[Kr] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Qt(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Qt(e, !0), n.enter(e)) : n.leave(e, () => {
      Qt(e, !1);
    }) : Qt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Qt(e, t);
  }
};
function Qt(e, t) {
  e.style.display = t ? e[Kr] : "none", e[js] = !t;
}
const id = Symbol(""), ld = /(^|;)\s*display\s*:/;
function cd(e, t, r) {
  const n = e.style, o = fe(r);
  let a = !1;
  if (r && !o) {
    if (t)
      if (fe(t))
        for (const s of t.split(";")) {
          const i = s.slice(0, s.indexOf(":")).trim();
          r[i] == null && Br(n, i, "");
        }
      else
        for (const s in t)
          r[s] == null && Br(n, s, "");
    for (const s in r)
      s === "display" && (a = !0), Br(n, s, r[s]);
  } else if (o) {
    if (t !== r) {
      const s = n[id];
      s && (r += ";" + s), n.cssText = r, a = ld.test(r);
    }
  } else t && e.removeAttribute("style");
  Kr in e && (e[Kr] = a ? n.display : "", e[js] && (n.display = "none"));
}
const Uo = /\s*!important$/;
function Br(e, t, r) {
  if (B(r))
    r.forEach((n) => Br(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = ud(e, t);
    Uo.test(r) ? e.setProperty(
      xt(n),
      r.replace(Uo, ""),
      "important"
    ) : e[n] = r;
  }
}
const Ko = ["Webkit", "Moz", "ms"], mn = {};
function ud(e, t) {
  const r = mn[t];
  if (r)
    return r;
  let n = qe(t);
  if (n !== "filter" && n in e)
    return mn[t] = n;
  n = Qr(n);
  for (let o = 0; o < Ko.length; o++) {
    const a = Ko[o] + n;
    if (a in e)
      return mn[t] = a;
  }
  return t;
}
const Wo = "http://www.w3.org/1999/xlink";
function Go(e, t, r, n, o, a = mc(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Wo, t.slice(6, t.length)) : e.setAttributeNS(Wo, t, r) : r == null || a && !Ia(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : yt(r) ? String(r) : r
  );
}
function dd(e, t, r, n) {
  if (t === "innerHTML" || t === "textContent") {
    if (r == null) return;
    e[t] = r;
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const s = o === "OPTION" ? e.getAttribute("value") || "" : e.value, i = r == null ? "" : String(r);
    (s !== i || !("_value" in e)) && (e.value = i), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let a = !1;
  if (r === "" || r == null) {
    const s = typeof e[t];
    s === "boolean" ? r = Ia(r) : r == null && s === "string" ? (r = "", a = !0) : s === "number" && (r = 0, a = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  a && e.removeAttribute(t);
}
function Nt(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function fd(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const qo = Symbol("_vei");
function pd(e, t, r, n, o = null) {
  const a = e[qo] || (e[qo] = {}), s = a[t];
  if (n && s)
    s.value = n;
  else {
    const [i, l] = bd(t);
    if (n) {
      const c = a[t] = gd(
        n,
        o
      );
      Nt(e, i, c, l);
    } else s && (fd(e, i, s, l), a[t] = void 0);
  }
}
const Yo = /(?:Once|Passive|Capture)$/;
function bd(e) {
  let t;
  if (Yo.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Yo); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : xt(e.slice(2)), t];
}
let gn = 0;
const hd = /* @__PURE__ */ Promise.resolve(), md = () => gn || (hd.then(() => gn = 0), gn = Date.now());
function gd(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    Ge(
      vd(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = md(), r;
}
function vd(e, t) {
  if (B(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (o) => !o._stopped && n && n(o)
    );
  } else
    return t;
}
const Jo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, yd = (e, t, r, n, o, a) => {
  const s = o === "svg";
  t === "class" ? sd(e, n, s) : t === "style" ? cd(e, r, n) : qr(t) ? Hn(t) || pd(e, t, r, n, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : xd(e, t, n, s)) ? (dd(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Go(e, t, n, s, a, t !== "value")) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Go(e, t, n, s));
};
function xd(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Jo(t) && D(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Jo(t) && fe(r) ? !1 : t in e;
}
const Qo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (r) => zr(t, r) : t;
};
function wd(e) {
  e.target.composing = !0;
}
function Zo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const vn = Symbol("_assign"), kd = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, o) {
    e[vn] = Qo(o);
    const a = n || o.props && o.props.type === "number";
    Nt(e, t ? "change" : "input", (s) => {
      if (s.target.composing) return;
      let i = e.value;
      r && (i = i.trim()), a && (i = Cn(i)), e[vn](i);
    }), r && Nt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Nt(e, "compositionstart", wd), Nt(e, "compositionend", Zo), Nt(e, "change", Zo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: o, number: a } }, s) {
    if (e[vn] = Qo(s), e.composing) return;
    const i = (a || e.type === "number") && !/^0\d/.test(e.value) ? Cn(e.value) : e.value, l = t ?? "";
    i !== l && (document.activeElement === e && e.type !== "range" && (n && t === r || o && e.value.trim() === l) || (e.value = l));
  }
}, _d = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, yn = (e, t) => {
  const r = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return r[n] || (r[n] = (o) => {
    if (!("key" in o))
      return;
    const a = xt(o.key);
    if (t.some((s) => s === a || _d[s] === a))
      return e(o);
  });
}, Sd = /* @__PURE__ */ Ae({ patchProp: yd }, od);
let Xo;
function Cd() {
  return Xo || (Xo = $u(Sd));
}
const Td = (...e) => {
  const t = Cd().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const o = Pd(n);
    if (!o) return;
    const a = t._component;
    !D(a) && !a.render && !a.template && (a.template = o.innerHTML), o.innerHTML = "";
    const s = r(o, !1, $d(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), s;
  }, t;
};
function $d(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Pd(e) {
  return fe(e) ? document.querySelector(e) : e;
}
function hr(e) {
  "@babel/helpers - typeof";
  return hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hr(e);
}
function ea(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ta(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ea(Object(r), !0).forEach(function(n) {
      Od(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ea(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Od(e, t, r) {
  return (t = Ad(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ad(e) {
  var t = Id(e, "string");
  return hr(t) == "symbol" ? t : t + "";
}
function Id(e, t) {
  if (hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ld(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  qu() ? os(e) : t ? e() : Ja(e);
}
var jd = 0;
function Ed(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Be(!1), n = Be(e), o = Be(null), a = Sa() ? window.document : void 0, s = t.document, i = s === void 0 ? a : s, l = t.immediate, c = l === void 0 ? !0 : l, u = t.manual, p = u === void 0 ? !1 : u, b = t.name, m = b === void 0 ? "style_".concat(++jd) : b, k = t.id, S = k === void 0 ? void 0 : k, L = t.media, z = L === void 0 ? void 0 : L, A = t.nonce, g = A === void 0 ? void 0 : A, O = t.first, J = O === void 0 ? !1 : O, _ = t.onMounted, F = _ === void 0 ? void 0 : _, H = t.onUpdated, j = H === void 0 ? void 0 : H, R = t.onLoad, Y = R === void 0 ? void 0 : R, ne = t.props, pe = ne === void 0 ? {} : ne, be = function() {
  }, Ne = function(K) {
    var Ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (i) {
      var Te = ta(ta({}, pe), Ce), he = Te.name || m, me = Te.id || S, _t = Te.nonce || g;
      o.value = i.querySelector('style[data-primevue-style-id="'.concat(he, '"]')) || i.getElementById(me) || i.createElement("style"), o.value.isConnected || (n.value = K || e, Mr(o.value, {
        type: "text/css",
        id: me,
        media: z,
        nonce: _t
      }), J ? i.head.prepend(o.value) : i.head.appendChild(o.value), ac(o.value, "data-primevue-style-id", he), Mr(o.value, Te), o.value.onload = function(at) {
        return Y == null ? void 0 : Y(at, {
          name: he
        });
      }, F == null || F(he)), !r.value && (be = pt(n, function(at) {
        o.value.textContent = at, j == null || j(he);
      }, {
        immediate: !0
      }), r.value = !0);
    }
  }, re = function() {
    !i || !r.value || (be(), oc(o.value) && i.head.removeChild(o.value), r.value = !1);
  };
  return c && !p && Ld(Ne), {
    id: S,
    name: m,
    el: o,
    css: n,
    unload: re,
    load: Ne,
    isLoaded: Zn(r)
  };
}
function mr(e) {
  "@babel/helpers - typeof";
  return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mr(e);
}
function ra(e, t) {
  return Bd(e) || Rd(e, t) || Nd(e, t) || zd();
}
function zd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nd(e, t) {
  if (e) {
    if (typeof e == "string") return na(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? na(e, t) : void 0;
  }
}
function na(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Rd(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, s, i = [], l = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (i.push(n.value), i.length !== t); l = !0) ;
    } catch (u) {
      c = !0, o = u;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw o;
      }
    }
    return i;
  }
}
function Bd(e) {
  if (Array.isArray(e)) return e;
}
function oa(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oa(Object(r), !0).forEach(function(n) {
      Vd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oa(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Vd(e, t, r) {
  return (t = Fd(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Fd(e) {
  var t = Md(e, "string");
  return mr(t) == "symbol" ? t : t + "";
}
function Md(e, t) {
  if (mr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Dd = function(t) {
  var r = t.dt;
  return `
* {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(r("disabled.opacity"), `;
}

.pi {
    font-size: `).concat(r("icon.size"), `;
}

.p-icon {
    width: `).concat(r("icon.size"), `;
    height: `).concat(r("icon.size"), `;
}

.p-overlay-mask {
    background: `).concat(r("mask.background"), `;
    color: `).concat(r("mask.color"), `;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(r("mask.transition.duration"), ` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(r("mask.transition.duration"), ` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(r("mask.background"), `;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(r("mask.background"), `;
    }
    to {
        background: transparent;
    }
}
`);
}, Hd = function(t) {
  var r = t.dt;
  return `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(r("scrollbar.width"), `;
}
`);
}, Ud = {}, Kd = {}, se = {
  name: "base",
  css: Hd,
  theme: Dd,
  classes: Ud,
  inlineStyles: Kd,
  load: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(a) {
      return a;
    }, o = n(Ve(t, {
      dt: nr
    }));
    return ie(o) ? Ed(rr(o), xn({
      name: this.name
    }, r)) : {};
  },
  loadCSS: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, t);
  },
  loadTheme: function() {
    var t = this, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.theme, r, function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return te.transformCSS(r.name || t.name, "".concat(o).concat(n));
    });
  },
  getCommonTheme: function(t) {
    return te.getCommon(this.name, t);
  },
  getComponentTheme: function(t) {
    return te.getComponent(this.name, t);
  },
  getDirectiveTheme: function(t) {
    return te.getDirective(this.name, t);
  },
  getPresetTheme: function(t, r, n) {
    return te.getCustomPreset(this.name, t, r, n);
  },
  getLayerOrderThemeCSS: function() {
    return te.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var n = Ve(this.css, {
        dt: nr
      }) || "", o = rr("".concat(n).concat(t)), a = Object.entries(r).reduce(function(s, i) {
        var l = ra(i, 2), c = l[0], u = l[1];
        return s.push("".concat(c, '="').concat(u, '"')) && s;
      }, []).join(" ");
      return ie(o) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(a, ">").concat(o, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return te.getCommonStyleSheet(this.name, t, r);
  },
  getThemeStyleSheet: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [te.getStyleSheet(this.name, t, r)];
    if (this.theme) {
      var o = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), a = Ve(this.theme, {
        dt: nr
      }), s = rr(te.transformCSS(o, a)), i = Object.entries(r).reduce(function(l, c) {
        var u = ra(c, 2), p = u[0], b = u[1];
        return l.push("".concat(p, '="').concat(b, '"')) && l;
      }, []).join(" ");
      ie(s) && n.push('<style type="text/css" data-primevue-style-id="'.concat(o, '" ').concat(i, ">").concat(s, "</style>"));
    }
    return n.join("");
  },
  extend: function(t) {
    return xn(xn({}, this), {}, {
      css: void 0,
      theme: void 0
    }, t);
  }
}, Vt = ya();
function gr(e) {
  "@babel/helpers - typeof";
  return gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gr(e);
}
function aa(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? aa(Object(r), !0).forEach(function(n) {
      Wd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aa(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wd(e, t, r) {
  return (t = Gd(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Gd(e) {
  var t = qd(e, "string");
  return gr(t) == "symbol" ? t : t + "";
}
function qd(e, t) {
  if (gr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Yd = {
  ripple: !1,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: !1,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [we.STARTS_WITH, we.CONTAINS, we.NOT_CONTAINS, we.ENDS_WITH, we.EQUALS, we.NOT_EQUALS],
    numeric: [we.EQUALS, we.NOT_EQUALS, we.LESS_THAN, we.LESS_THAN_OR_EQUAL_TO, we.GREATER_THAN, we.GREATER_THAN_OR_EQUAL_TO],
    date: [we.DATE_IS, we.DATE_IS_NOT, we.DATE_BEFORE, we.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: !1,
  pt: void 0,
  ptOptions: {
    mergeSections: !0,
    mergeProps: !1
  },
  csp: {
    nonce: void 0
  }
}, Jd = Symbol();
function Qd(e, t) {
  var r = {
    config: en(t)
  };
  return e.config.globalProperties.$primevue = r, e.provide(Jd, r), Zd(), Xd(e, r), r;
}
var Ft = [];
function Zd() {
  Ue.clear(), Ft.forEach(function(e) {
    return e == null ? void 0 : e();
  }), Ft = [];
}
function Xd(e, t) {
  var r = Be(!1), n = function() {
    var c;
    if (((c = t.config) === null || c === void 0 ? void 0 : c.theme) !== "none" && !te.isStyleNameLoaded("common")) {
      var u, p, b = ((u = se.getCommonTheme) === null || u === void 0 ? void 0 : u.call(se)) || {}, m = b.primitive, k = b.semantic, S = b.global, L = b.style, z = {
        nonce: (p = t.config) === null || p === void 0 || (p = p.csp) === null || p === void 0 ? void 0 : p.nonce
      };
      se.load(m == null ? void 0 : m.css, jr({
        name: "primitive-variables"
      }, z)), se.load(k == null ? void 0 : k.css, jr({
        name: "semantic-variables"
      }, z)), se.load(S == null ? void 0 : S.css, jr({
        name: "global-variables"
      }, z)), se.loadTheme(jr({
        name: "global-style"
      }, z), L), te.setLoadedStyleName("common");
    }
  };
  Ue.on("theme:change", function(l) {
    r.value || (e.config.globalProperties.$primevue.config.theme = l, r.value = !0);
  });
  var o = pt(t.config, function(l, c) {
    Vt.emit("config:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), a = pt(function() {
    return t.config.ripple;
  }, function(l, c) {
    Vt.emit("config:ripple:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), s = pt(function() {
    return t.config.theme;
  }, function(l, c) {
    r.value || te.setTheme(l), t.config.unstyled || n(), r.value = !1, Vt.emit("config:theme:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = pt(function() {
    return t.config.unstyled;
  }, function(l, c) {
    !l && t.config.theme && n(), Vt.emit("config:unstyled:change", {
      newValue: l,
      oldValue: c
    });
  }, {
    immediate: !0,
    deep: !0
  });
  Ft.push(o), Ft.push(a), Ft.push(s), Ft.push(i);
}
var ef = {
  install: function(t, r) {
    var n = Fl(Yd, r);
    Qd(t, n);
  }
}, ft = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(t) {
    return this._loadedStyleNames.has(t);
  },
  setLoadedStyleName: function(t) {
    this._loadedStyleNames.add(t);
  },
  deleteLoadedStyleName: function(t) {
    this._loadedStyleNames.delete(t);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
}, sa = se.extend({
  name: "common"
});
function vr(e) {
  "@babel/helpers - typeof";
  return vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vr(e);
}
function tf(e) {
  return Rs(e) || rf(e) || Ns(e) || zs();
}
function rf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Er(e, t) {
  return Rs(e) || nf(e, t) || Ns(e, t) || zs();
}
function zs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ns(e, t) {
  if (e) {
    if (typeof e == "string") return ia(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ia(e, t) : void 0;
  }
}
function ia(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function nf(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, s, i = [], l = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (i.push(n.value), i.length !== t); l = !0) ;
    } catch (u) {
      c = !0, o = u;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw o;
      }
    }
    return i;
  }
}
function Rs(e) {
  if (Array.isArray(e)) return e;
}
function la(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? la(Object(r), !0).forEach(function(n) {
      tr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : la(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tr(e, t, r) {
  return (t = of(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function of(e) {
  var t = af(e, "string");
  return vr(t) == "symbol" ? t : t + "";
}
function af(e, t) {
  if (vr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ln = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    },
    ptOptions: {
      type: Object,
      default: void 0
    },
    unstyled: {
      type: Boolean,
      default: void 0
    },
    dt: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: !0,
      handler: function(t) {
        t || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(t) {
        var r = this;
        t ? (this._loadScopedThemeStyles(t), this._themeChangeListener(function() {
          return r._loadScopedThemeStyles(t);
        })) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var t, r, n, o, a, s, i, l, c, u, p, b = (t = this.pt) === null || t === void 0 ? void 0 : t._usept, m = b ? (r = this.pt) === null || r === void 0 || (r = r.originalValue) === null || r === void 0 ? void 0 : r[this.$.type.name] : void 0, k = b ? (n = this.pt) === null || n === void 0 || (n = n.value) === null || n === void 0 ? void 0 : n[this.$.type.name] : this.pt;
    (o = k || m) === null || o === void 0 || (o = o.hooks) === null || o === void 0 || (a = o.onBeforeCreate) === null || a === void 0 || a.call(o);
    var S = (s = this.$primevueConfig) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s._usept, L = S ? (i = this.$primevue) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.pt) === null || i === void 0 ? void 0 : i.originalValue : void 0, z = S ? (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 || (l = l.pt) === null || l === void 0 ? void 0 : l.value : (c = this.$primevue) === null || c === void 0 || (c = c.config) === null || c === void 0 ? void 0 : c.pt;
    (u = z || L) === null || u === void 0 || (u = u[this.$.type.name]) === null || u === void 0 || (u = u.hooks) === null || u === void 0 || (p = u.onBeforeCreate) === null || p === void 0 || p.call(u), this.$attrSelector = Mn("pc");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    this.rootEl = _n(this.$el, '[data-pc-name="'.concat(Ke(this.$.type.name), '"]')), this.rootEl && (this.$attrSelector && !this.rootEl.hasAttribute(this.$attrSelector) && this.rootEl.setAttribute(this.$attrSelector, ""), this.rootEl.$pc = q({
      name: this.$.type.name,
      attrSelector: this.$attrSelector
    }, this.$params)), this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this._hook("onMounted");
  },
  beforeUpdate: function() {
    this._hook("onBeforeUpdate");
  },
  updated: function() {
    this._hook("onUpdated");
  },
  beforeUnmount: function() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function() {
    this._unloadScopedThemeStyles(), this._hook("onUnmounted");
  },
  methods: {
    _hook: function(t) {
      if (!this.$options.hostName) {
        var r = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(t)), n = this._useDefaultPT(this._getOptionValue, "hooks.".concat(t));
        r == null || r(), n == null || n();
      }
    },
    _mergeProps: function(t) {
      for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
        n[o - 1] = arguments[o];
      return Vn(t) ? t.apply(void 0, n) : ae.apply(void 0, n);
    },
    _loadStyles: function() {
      var t = this, r = function() {
        ft.isStyleNameLoaded("base") || (se.loadCSS(t.$styleOptions), t._loadGlobalStyles(), ft.setLoadedStyleName("base")), t._loadThemeStyles();
      };
      r(), this._themeChangeListener(r);
    },
    _loadCoreStyles: function() {
      var t, r;
      !ft.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (r = this.$style) !== null && r !== void 0 && r.name && (sa.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), ft.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var t = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      ie(t) && se.load(t, q({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var t, r;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!te.isStyleNameLoaded("common")) {
          var n, o, a = ((n = this.$style) === null || n === void 0 || (o = n.getCommonTheme) === null || o === void 0 ? void 0 : o.call(n)) || {}, s = a.primitive, i = a.semantic, l = a.global, c = a.style;
          se.load(s == null ? void 0 : s.css, q({
            name: "primitive-variables"
          }, this.$styleOptions)), se.load(i == null ? void 0 : i.css, q({
            name: "semantic-variables"
          }, this.$styleOptions)), se.load(l == null ? void 0 : l.css, q({
            name: "global-variables"
          }, this.$styleOptions)), se.loadTheme(q({
            name: "global-style"
          }, this.$styleOptions), c), te.setLoadedStyleName("common");
        }
        if (!te.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (r = this.$style) !== null && r !== void 0 && r.name) {
          var u, p, b, m, k = ((u = this.$style) === null || u === void 0 || (p = u.getComponentTheme) === null || p === void 0 ? void 0 : p.call(u)) || {}, S = k.css, L = k.style;
          (b = this.$style) === null || b === void 0 || b.load(S, q({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (m = this.$style) === null || m === void 0 || m.loadTheme(q({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), L), te.setLoadedStyleName(this.$style.name);
        }
        if (!te.isStyleNameLoaded("layer-order")) {
          var z, A, g = (z = this.$style) === null || z === void 0 || (A = z.getLayerOrderThemeCSS) === null || A === void 0 ? void 0 : A.call(z);
          se.load(g, q({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), te.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(t) {
      var r, n, o, a = ((r = this.$style) === null || r === void 0 || (n = r.getPresetTheme) === null || n === void 0 ? void 0 : n.call(r, t, "[".concat(this.$attrSelector, "]"))) || {}, s = a.css, i = (o = this.$style) === null || o === void 0 ? void 0 : o.load(s, q({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = i.el;
    },
    _unloadScopedThemeStyles: function() {
      var t;
      (t = this.scopedStyleEl) === null || t === void 0 || (t = t.value) === null || t === void 0 || t.remove();
    },
    _themeChangeListener: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      ft.clearLoadedStyleNames(), Ue.on("theme:change", t);
    },
    _getHostInstance: function(t) {
      return t ? this.$options.hostName ? t.$.type.name === this.$options.hostName ? t : this._getHostInstance(t.$parentInstance) : t.$parentInstance : void 0;
    },
    _getPropValue: function(t) {
      var r;
      return this[t] || ((r = this._getHostInstance(this)) === null || r === void 0 ? void 0 : r[t]);
    },
    _getOptionValue: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Fn(t, r, n);
    },
    _getPTValue: function() {
      var t, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, s = /./g.test(n) && !!o[n.split(".")[0]], i = this._getPropValue("ptOptions") || ((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, l = i.mergeSections, c = l === void 0 ? !0 : l, u = i.mergeProps, p = u === void 0 ? !1 : u, b = a ? s ? this._useGlobalPT(this._getPTClassValue, n, o) : this._useDefaultPT(this._getPTClassValue, n, o) : void 0, m = s ? void 0 : this._getPTSelf(r, this._getPTClassValue, n, q(q({}, o), {}, {
        global: b || {}
      })), k = this._getPTDatasets(n);
      return c || !c && m ? p ? this._mergeProps(p, b, m, k) : q(q(q({}, b), m), k) : q(q({}, m), k);
    },
    _getPTSelf: function() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
        n[o - 1] = arguments[o];
      return ae(
        this._usePT.apply(this, [this._getPT(t, this.$name)].concat(n)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(n))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var t, r, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = "data-pc-", a = n === "root" && ie((t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"]);
      return n !== "transition" && q(q({}, n === "root" && q(q(tr({}, "".concat(o, "name"), Ke(a ? (r = this.pt) === null || r === void 0 ? void 0 : r["data-pc-section"] : this.$.type.name)), a && tr({}, "".concat(o, "extend"), Ke(this.$.type.name))), Sa() && tr({}, "".concat(this.$attrSelector), ""))), {}, tr({}, "".concat(o, "section"), Ke(n)));
    },
    _getPTClassValue: function() {
      var t = this._getOptionValue.apply(this, arguments);
      return Oe(t) || Wr(t) ? {
        class: t
      } : t;
    },
    _getPT: function(t) {
      var r = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, a = function(i) {
        var l, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = o ? o(i) : i, p = Ke(n), b = Ke(r.$name);
        return (l = c ? p !== b ? u == null ? void 0 : u[p] : void 0 : u == null ? void 0 : u[p]) !== null && l !== void 0 ? l : u;
      };
      return t != null && t.hasOwnProperty("_usept") ? {
        _usept: t._usept,
        originalValue: a(t.originalValue),
        value: a(t.value)
      } : a(t, !0);
    },
    _usePT: function(t, r, n, o) {
      var a = function(S) {
        return r(S, n, o);
      };
      if (t != null && t.hasOwnProperty("_usept")) {
        var s, i = t._usept || ((s = this.$primevueConfig) === null || s === void 0 ? void 0 : s.ptOptions) || {}, l = i.mergeSections, c = l === void 0 ? !0 : l, u = i.mergeProps, p = u === void 0 ? !1 : u, b = a(t.originalValue), m = a(t.value);
        return b === void 0 && m === void 0 ? void 0 : Oe(m) ? m : Oe(b) ? b : c || !c && m ? p ? this._mergeProps(p, b, m) : q(q({}, b), m) : m;
      }
      return a(t);
    },
    _useGlobalPT: function(t, r, n) {
      return this._usePT(this.globalPT, t, r, n);
    },
    _useDefaultPT: function(t, r, n) {
      return this._usePT(this.defaultPT, t, r, n);
    },
    ptm: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, t, q(q({}, this.$params), r));
    },
    ptmi: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return ae(this.$_attrsWithoutPT, this.ptm(t, r));
    },
    ptmo: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(t, r, q({
        instance: this
      }, n), !1);
    },
    cx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, t, q(q({}, this.$params), r));
    },
    sx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (r) {
        var o = this._getOptionValue(this.$style.inlineStyles, t, q(q({}, this.$params), n)), a = this._getOptionValue(sa.inlineStyles, t, q(q({}, this.$params), n));
        return [a, o];
      }
    }
  },
  computed: {
    globalPT: function() {
      var t, r = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(n) {
        return Ve(n, {
          instance: r
        });
      });
    },
    defaultPT: function() {
      var t, r = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(n) {
        return r._getOptionValue(n, r.$name, q({}, r.$params)) || Ve(n, q({}, r.$params));
      });
    },
    isUnstyled: function() {
      var t;
      return this.unstyled !== void 0 ? this.unstyled : (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.unstyled;
    },
    $theme: function() {
      var t;
      return (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.theme;
    },
    $style: function() {
      return q(q({
        classes: void 0,
        inlineStyles: void 0,
        load: function() {
        },
        loadCSS: function() {
        },
        loadTheme: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function() {
      var t;
      return {
        nonce: (t = this.$primevueConfig) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce
      };
    },
    $primevueConfig: function() {
      var t;
      return (t = this.$primevue) === null || t === void 0 ? void 0 : t.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var t = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: t,
          props: t == null ? void 0 : t.$props,
          state: t == null ? void 0 : t.$data,
          attrs: t == null ? void 0 : t.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var r = Er(t, 1), n = r[0];
        return n == null ? void 0 : n.startsWith("pt:");
      }).reduce(function(t, r) {
        var n = Er(r, 2), o = n[0], a = n[1], s = o.split(":"), i = tf(s), l = i.slice(1);
        return l == null || l.reduce(function(c, u, p, b) {
          return !c[u] && (c[u] = p === b.length - 1 ? a : {}), c[u];
        }, t), t;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var r = Er(t, 1), n = r[0];
        return !(n != null && n.startsWith("pt:"));
      }).reduce(function(t, r) {
        var n = Er(r, 2), o = n[0], a = n[1];
        return t[o] = a, t;
      }, {});
    }
  }
}, sf = function(t) {
  var r = t.dt;
  return `
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(r("inputtext.color"), `;
    background: `).concat(r("inputtext.background"), `;
    padding: `).concat(r("inputtext.padding.y"), " ").concat(r("inputtext.padding.x"), `;
    border: 1px solid `).concat(r("inputtext.border.color"), `;
    transition: background `).concat(r("inputtext.transition.duration"), ", color ").concat(r("inputtext.transition.duration"), ", border-color ").concat(r("inputtext.transition.duration"), ", outline-color ").concat(r("inputtext.transition.duration"), ", box-shadow ").concat(r("inputtext.transition.duration"), `;
    appearance: none;
    border-radius: `).concat(r("inputtext.border.radius"), `;
    outline-color: transparent;
    box-shadow: `).concat(r("inputtext.shadow"), `;
}

.p-inputtext:enabled:hover {
    border-color: `).concat(r("inputtext.hover.border.color"), `;
}

.p-inputtext:enabled:focus {
    border-color: `).concat(r("inputtext.focus.border.color"), `;
    box-shadow: `).concat(r("inputtext.focus.ring.shadow"), `;
    outline: `).concat(r("inputtext.focus.ring.width"), " ").concat(r("inputtext.focus.ring.style"), " ").concat(r("inputtext.focus.ring.color"), `;
    outline-offset: `).concat(r("inputtext.focus.ring.offset"), `;
}

.p-inputtext.p-invalid {
    border-color: `).concat(r("inputtext.invalid.border.color"), `;
}

.p-inputtext.p-variant-filled {
    background: `).concat(r("inputtext.filled.background"), `;
}

.p-inputtext.p-variant-filled:enabled:hover {
    border-color: `).concat(r("inputtext.filled.hover.background"), `;
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: `).concat(r("inputtext.filled.focus.background"), `;
}

.p-inputtext:disabled {
    opacity: 1;
    background: `).concat(r("inputtext.disabled.background"), `;
    color: `).concat(r("inputtext.disabled.color"), `;
}

.p-inputtext::placeholder {
    color: `).concat(r("inputtext.placeholder.color"), `;
}

.p-inputtext-sm {
    font-size: `).concat(r("inputtext.sm.font.size"), `;
    padding: `).concat(r("inputtext.sm.padding.y"), " ").concat(r("inputtext.sm.padding.x"), `;
}

.p-inputtext-lg {
    font-size: `).concat(r("inputtext.lg.font.size"), `;
    padding: `).concat(r("inputtext.lg.padding.y"), " ").concat(r("inputtext.lg.padding.x"), `;
}

.p-inputtext-fluid {
    width: 100%;
}
`);
}, lf = {
  root: function(t) {
    var r = t.instance, n = t.props;
    return ["p-inputtext p-component", {
      "p-filled": r.filled,
      "p-inputtext-sm": n.size === "small",
      "p-inputtext-lg": n.size === "large",
      "p-invalid": n.invalid,
      "p-variant-filled": n.variant ? n.variant === "filled" : r.$primevue.config.inputStyle === "filled" || r.$primevue.config.inputVariant === "filled",
      "p-inputtext-fluid": r.hasFluid
    }];
  }
}, cf = se.extend({
  name: "inputtext",
  theme: sf,
  classes: lf
}), uf = {
  name: "BaseInputText",
  extends: ln,
  props: {
    modelValue: null,
    size: {
      type: String,
      default: null
    },
    invalid: {
      type: Boolean,
      default: !1
    },
    variant: {
      type: String,
      default: null
    },
    fluid: {
      type: Boolean,
      default: null
    }
  },
  style: cf,
  provide: function() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
}, Bs = {
  name: "InputText",
  extends: uf,
  inheritAttrs: !1,
  emits: ["update:modelValue"],
  inject: {
    $pcFluid: {
      default: null
    }
  },
  methods: {
    getPTOptions: function(t) {
      var r = t === "root" ? this.ptmi : this.ptm;
      return r(t, {
        context: {
          filled: this.filled,
          disabled: this.$attrs.disabled || this.$attrs.disabled === ""
        }
      });
    },
    onInput: function(t) {
      this.$emit("update:modelValue", t.target.value);
    }
  },
  computed: {
    filled: function() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    },
    hasFluid: function() {
      return Gt(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  }
}, df = ["value", "aria-invalid"];
function ff(e, t, r, n, o, a) {
  return N(), V("input", ae({
    type: "text",
    class: e.cx("root"),
    value: e.modelValue,
    "aria-invalid": e.invalid || void 0,
    onInput: t[0] || (t[0] = function() {
      return a.onInput && a.onInput.apply(a, arguments);
    })
  }, a.getPTOptions("root")), null, 16, df);
}
Bs.render = ff;
function ca() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pv_id_";
  return Mn(e);
}
var pf = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, bf = se.extend({
  name: "baseicon",
  css: pf
});
function yr(e) {
  "@babel/helpers - typeof";
  return yr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yr(e);
}
function ua(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function da(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ua(Object(r), !0).forEach(function(n) {
      hf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ua(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hf(e, t, r) {
  return (t = mf(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mf(e) {
  var t = gf(e, "string");
  return yr(t) == "symbol" ? t : t + "";
}
function gf(e, t) {
  if (yr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Vs = {
  name: "BaseIcon",
  extends: ln,
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  style: bf,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var t = Gt(this.label);
      return da(da({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: t ? void 0 : "img",
        "aria-label": t ? void 0 : this.label,
        "aria-hidden": t
      });
    }
  }
}, Fs = {
  name: "ChevronLeftIcon",
  extends: Vs
};
function vf(e, t, r, n, o, a) {
  return N(), V("svg", ae({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [le("path", {
    d: "M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Fs.render = vf;
var Ms = {
  name: "ChevronRightIcon",
  extends: Vs
};
function yf(e, t, r, n, o, a) {
  return N(), V("svg", ae({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), t[0] || (t[0] = [le("path", {
    d: "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Ms.render = yf;
function xr(e) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xr(e);
}
function fa(e, t) {
  return _f(e) || kf(e, t) || wf(e, t) || xf();
}
function xf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wf(e, t) {
  if (e) {
    if (typeof e == "string") return pa(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? pa(e, t) : void 0;
  }
}
function pa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function kf(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, s, i = [], l = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (i.push(n.value), i.length !== t); l = !0) ;
    } catch (u) {
      c = !0, o = u;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (c) throw o;
      }
    }
    return i;
  }
}
function _f(e) {
  if (Array.isArray(e)) return e;
}
function ba(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ba(Object(r), !0).forEach(function(n) {
      Rn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ba(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Rn(e, t, r) {
  return (t = Sf(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Sf(e) {
  var t = Cf(e, "string");
  return xr(t) == "symbol" ? t : t + "";
}
function Cf(e, t) {
  if (xr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var W = {
  _getMeta: function() {
    return [Xe(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], Ve(Xe(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(t, r) {
    var n, o, a;
    return (n = (t == null || (o = t.instance) === null || o === void 0 ? void 0 : o.$primevue) || (r == null || (a = r.ctx) === null || a === void 0 || (a = a.appContext) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.globalProperties) === null || a === void 0 ? void 0 : a.$primevue)) === null || n === void 0 ? void 0 : n.config;
  },
  _getOptionValue: Fn,
  _getPTValue: function() {
    var t, r, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, l = function() {
      var A = W._getOptionValue.apply(W, arguments);
      return Oe(A) || Wr(A) ? {
        class: A
      } : A;
    }, c = ((t = n.binding) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t.ptOptions) || ((r = n.$primevueConfig) === null || r === void 0 ? void 0 : r.ptOptions) || {}, u = c.mergeSections, p = u === void 0 ? !0 : u, b = c.mergeProps, m = b === void 0 ? !1 : b, k = i ? W._useDefaultPT(n, n.defaultPT(), l, a, s) : void 0, S = W._usePT(n, W._getPT(o, n.$name), l, a, Q(Q({}, s), {}, {
      global: k || {}
    })), L = W._getPTDatasets(n, a);
    return p || !p && S ? m ? W._mergeProps(n, m, k, S, L) : Q(Q(Q({}, k), S), L) : Q(Q({}, S), L);
  },
  _getPTDatasets: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = "data-pc-";
    return Q(Q({}, r === "root" && Rn({}, "".concat(n, "name"), Ke(t.$name))), {}, Rn({}, "".concat(n, "section"), Ke(r)));
  },
  _getPT: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 ? arguments[2] : void 0, o = function(s) {
      var i, l = n ? n(s) : s, c = Ke(r);
      return (i = l == null ? void 0 : l[c]) !== null && i !== void 0 ? i : l;
    };
    return t != null && t.hasOwnProperty("_usept") ? {
      _usept: t._usept,
      originalValue: o(t.originalValue),
      value: o(t.value)
    } : o(t);
  },
  _usePT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0, a = arguments.length > 4 ? arguments[4] : void 0, s = function(L) {
      return n(L, o, a);
    };
    if (r != null && r.hasOwnProperty("_usept")) {
      var i, l = r._usept || ((i = t.$primevueConfig) === null || i === void 0 ? void 0 : i.ptOptions) || {}, c = l.mergeSections, u = c === void 0 ? !0 : c, p = l.mergeProps, b = p === void 0 ? !1 : p, m = s(r.originalValue), k = s(r.value);
      return m === void 0 && k === void 0 ? void 0 : Oe(k) ? k : Oe(m) ? m : u || !u && k ? b ? W._mergeProps(t, b, m, k) : Q(Q({}, m), k) : k;
    }
    return s(r);
  },
  _useDefaultPT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0, a = arguments.length > 4 ? arguments[4] : void 0;
    return W._usePT(t, r, n, o, a);
  },
  _loadStyles: function(t, r, n) {
    var o, a = W._getConfig(r, n), s = {
      nonce: a == null || (o = a.csp) === null || o === void 0 ? void 0 : o.nonce
    };
    W._loadCoreStyles(t.$instance, s), W._loadThemeStyles(t.$instance, s), W._loadScopedThemeStyles(t.$instance, s), W._themeChangeListener(function() {
      return W._loadThemeStyles(t.$instance, s);
    });
  },
  _loadCoreStyles: function() {
    var t, r, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    if (!ft.isStyleNameLoaded((t = n.$style) === null || t === void 0 ? void 0 : t.name) && (r = n.$style) !== null && r !== void 0 && r.name) {
      var a;
      se.loadCSS(o), (a = n.$style) === null || a === void 0 || a.loadCSS(o), ft.setLoadedStyleName(n.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var t, r, n, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
    if (!(o != null && o.isUnstyled() || (o == null || (t = o.theme) === null || t === void 0 ? void 0 : t.call(o)) === "none")) {
      if (!te.isStyleNameLoaded("common")) {
        var s, i, l = ((s = o.$style) === null || s === void 0 || (i = s.getCommonTheme) === null || i === void 0 ? void 0 : i.call(s)) || {}, c = l.primitive, u = l.semantic, p = l.global, b = l.style;
        se.load(c == null ? void 0 : c.css, Q({
          name: "primitive-variables"
        }, a)), se.load(u == null ? void 0 : u.css, Q({
          name: "semantic-variables"
        }, a)), se.load(p == null ? void 0 : p.css, Q({
          name: "global-variables"
        }, a)), se.loadTheme(Q({
          name: "global-style"
        }, a), b), te.setLoadedStyleName("common");
      }
      if (!te.isStyleNameLoaded((r = o.$style) === null || r === void 0 ? void 0 : r.name) && (n = o.$style) !== null && n !== void 0 && n.name) {
        var m, k, S, L, z = ((m = o.$style) === null || m === void 0 || (k = m.getDirectiveTheme) === null || k === void 0 ? void 0 : k.call(m)) || {}, A = z.css, g = z.style;
        (S = o.$style) === null || S === void 0 || S.load(A, Q({
          name: "".concat(o.$style.name, "-variables")
        }, a)), (L = o.$style) === null || L === void 0 || L.loadTheme(Q({
          name: "".concat(o.$style.name, "-style")
        }, a), g), te.setLoadedStyleName(o.$style.name);
      }
      if (!te.isStyleNameLoaded("layer-order")) {
        var O, J, _ = (O = o.$style) === null || O === void 0 || (J = O.getLayerOrderThemeCSS) === null || J === void 0 ? void 0 : J.call(O);
        se.load(_, Q({
          name: "layer-order",
          first: !0
        }, a)), te.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, n = t.preset();
    if (n && t.$attrSelector) {
      var o, a, s, i = ((o = t.$style) === null || o === void 0 || (a = o.getPresetTheme) === null || a === void 0 ? void 0 : a.call(o, n, "[".concat(t.$attrSelector, "]"))) || {}, l = i.css, c = (s = t.$style) === null || s === void 0 ? void 0 : s.load(l, Q({
        name: "".concat(t.$attrSelector, "-").concat(t.$style.name)
      }, r));
      t.scopedStyleEl = c.el;
    }
  },
  _themeChangeListener: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    ft.clearLoadedStyleNames(), Ue.on("theme:change", t);
  },
  _hook: function(t, r, n, o, a, s) {
    var i, l, c = "on".concat(Ml(r)), u = W._getConfig(o, a), p = n == null ? void 0 : n.$instance, b = W._usePT(p, W._getPT(o == null || (i = o.value) === null || i === void 0 ? void 0 : i.pt, t), W._getOptionValue, "hooks.".concat(c)), m = W._useDefaultPT(p, u == null || (l = u.pt) === null || l === void 0 || (l = l.directives) === null || l === void 0 ? void 0 : l[t], W._getOptionValue, "hooks.".concat(c)), k = {
      el: n,
      binding: o,
      vnode: a,
      prevVnode: s
    };
    b == null || b(p, k), m == null || m(p, k);
  },
  _mergeProps: function() {
    for (var t = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
      n[o - 2] = arguments[o];
    return Vn(t) ? t.apply(void 0, n) : ae.apply(void 0, n);
  },
  _extend: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = function(s, i, l, c, u) {
      var p, b, m, k;
      i._$instances = i._$instances || {};
      var S = W._getConfig(l, c), L = i._$instances[t] || {}, z = Gt(L) ? Q(Q({}, r), r == null ? void 0 : r.methods) : {};
      i._$instances[t] = Q(Q({}, L), {}, {
        /* new instance variables to pass in directive methods */
        $name: t,
        $host: i,
        $binding: l,
        $modifiers: l == null ? void 0 : l.modifiers,
        $value: l == null ? void 0 : l.value,
        $el: L.$el || i || void 0,
        $style: Q({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadTheme: function() {
          }
        }, r == null ? void 0 : r.style),
        $primevueConfig: S,
        $attrSelector: (p = i.$pd) === null || p === void 0 || (p = p[t]) === null || p === void 0 ? void 0 : p.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return W._getPT(S == null ? void 0 : S.pt, void 0, function(g) {
            var O;
            return g == null || (O = g.directives) === null || O === void 0 ? void 0 : O[t];
          });
        },
        isUnstyled: function() {
          var g, O;
          return ((g = i.$instance) === null || g === void 0 || (g = g.$binding) === null || g === void 0 || (g = g.value) === null || g === void 0 ? void 0 : g.unstyled) !== void 0 ? (O = i.$instance) === null || O === void 0 || (O = O.$binding) === null || O === void 0 || (O = O.value) === null || O === void 0 ? void 0 : O.unstyled : S == null ? void 0 : S.unstyled;
        },
        theme: function() {
          var g;
          return (g = i.$instance) === null || g === void 0 || (g = g.$primevueConfig) === null || g === void 0 ? void 0 : g.theme;
        },
        preset: function() {
          var g;
          return (g = i.$instance) === null || g === void 0 || (g = g.$binding) === null || g === void 0 || (g = g.value) === null || g === void 0 ? void 0 : g.dt;
        },
        /* instance's methods */
        ptm: function() {
          var g, O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return W._getPTValue(i.$instance, (g = i.$instance) === null || g === void 0 || (g = g.$binding) === null || g === void 0 || (g = g.value) === null || g === void 0 ? void 0 : g.pt, O, Q({}, J));
        },
        ptmo: function() {
          var g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", J = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return W._getPTValue(i.$instance, g, O, J, !1);
        },
        cx: function() {
          var g, O, J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (g = i.$instance) !== null && g !== void 0 && g.isUnstyled() ? void 0 : W._getOptionValue((O = i.$instance) === null || O === void 0 || (O = O.$style) === null || O === void 0 ? void 0 : O.classes, J, Q({}, _));
        },
        sx: function() {
          var g, O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return J ? W._getOptionValue((g = i.$instance) === null || g === void 0 || (g = g.$style) === null || g === void 0 ? void 0 : g.inlineStyles, O, Q({}, _)) : void 0;
        }
      }, z), i.$instance = i._$instances[t], (b = (m = i.$instance)[s]) === null || b === void 0 || b.call(m, i, l, c, u), i["$".concat(t)] = i.$instance, W._hook(t, s, i, l, c, u), i.$pd || (i.$pd = {}), i.$pd[t] = Q(Q({}, (k = i.$pd) === null || k === void 0 ? void 0 : k[t]), {}, {
        name: t,
        instance: i.$instance
      });
    }, o = function(s) {
      var i, l, c, u, p, b = (i = s.$instance) === null || i === void 0 ? void 0 : i.watch;
      b == null || (l = b.config) === null || l === void 0 || l.call(s.$instance, (c = s.$instance) === null || c === void 0 ? void 0 : c.$primevueConfig), Vt.on("config:change", function(m) {
        var k, S = m.newValue, L = m.oldValue;
        return b == null || (k = b.config) === null || k === void 0 ? void 0 : k.call(s.$instance, S, L);
      }), b == null || (u = b["config.ripple"]) === null || u === void 0 || u.call(s.$instance, (p = s.$instance) === null || p === void 0 || (p = p.$primevueConfig) === null || p === void 0 ? void 0 : p.ripple), Vt.on("config:ripple:change", function(m) {
        var k, S = m.newValue, L = m.oldValue;
        return b == null || (k = b["config.ripple"]) === null || k === void 0 ? void 0 : k.call(s.$instance, S, L);
      });
    };
    return {
      created: function(s, i, l, c) {
        s.$pd || (s.$pd = {}), s.$pd[t] = {
          name: t,
          attrSelector: Mn("pd")
        }, n("created", s, i, l, c);
      },
      beforeMount: function(s, i, l, c) {
        W._loadStyles(s, i, l), n("beforeMount", s, i, l, c), o(s);
      },
      mounted: function(s, i, l, c) {
        W._loadStyles(s, i, l), n("mounted", s, i, l, c);
      },
      beforeUpdate: function(s, i, l, c) {
        n("beforeUpdate", s, i, l, c);
      },
      updated: function(s, i, l, c) {
        W._loadStyles(s, i, l), n("updated", s, i, l, c);
      },
      beforeUnmount: function(s, i, l, c) {
        n("beforeUnmount", s, i, l, c);
      },
      unmounted: function(s, i, l, c) {
        var u;
        (u = s.$instance) === null || u === void 0 || (u = u.scopedStyleEl) === null || u === void 0 || (u = u.value) === null || u === void 0 || u.remove(), n("unmounted", s, i, l, c);
      }
    };
  },
  extend: function() {
    var t = W._getMeta.apply(W, arguments), r = fa(t, 2), n = r[0], o = r[1];
    return Q({
      extend: function() {
        var s = W._getMeta.apply(W, arguments), i = fa(s, 2), l = i[0], c = i[1];
        return W.extend(l, Q(Q(Q({}, o), o == null ? void 0 : o.methods), c));
      }
    }, W._extend(n, o));
  }
}, Tf = function(t) {
  var r = t.dt;
  return `
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(r("ripple.background"), `;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`);
}, $f = {
  root: "p-ink"
}, Pf = se.extend({
  name: "ripple-directive",
  theme: Tf,
  classes: $f
}), Of = W.extend({
  style: Pf
});
function wr(e) {
  "@babel/helpers - typeof";
  return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wr(e);
}
function Af(e) {
  return Ef(e) || jf(e) || Lf(e) || If();
}
function If() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lf(e, t) {
  if (e) {
    if (typeof e == "string") return Bn(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Bn(e, t) : void 0;
  }
}
function jf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ef(e) {
  if (Array.isArray(e)) return Bn(e);
}
function Bn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ha(e, t, r) {
  return (t = zf(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zf(e) {
  var t = Nf(e, "string");
  return wr(t) == "symbol" ? t : t + "";
}
function Nf(e, t) {
  if (wr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rf = Of.extend("ripple", {
  watch: {
    "config.ripple": function(t) {
      t ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(t) {
    this.remove(t);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(t) {
      t.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(t) {
      t.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(t) {
      var r = ec("span", ha(ha({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root")));
      t.appendChild(r), this.$el = r;
    },
    remove: function(t) {
      var r = this.getInk(t);
      r && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(t), r.removeEventListener("animationend", this.onAnimationEnd), r.remove());
    },
    onMouseDown: function(t) {
      var r = this, n = t.currentTarget, o = this.getInk(n);
      if (!(!o || getComputedStyle(o, null).display === "none")) {
        if (!this.isUnstyled() && un(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "false"), !wo(o) && !$t(o)) {
          var a = Math.max(Xl(n), nc(n));
          o.style.height = a + "px", o.style.width = a + "px";
        }
        var s = Sn(n), i = t.pageX - s.left + document.body.scrollTop - $t(o) / 2, l = t.pageY - s.top + document.body.scrollLeft - wo(o) / 2;
        o.style.top = l + "px", o.style.left = i + "px", !this.isUnstyled() && Zl(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          o && (!r.isUnstyled() && un(o, "p-ink-active"), o.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(t) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && un(t.currentTarget, "p-ink-active"), t.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(t) {
      return t && t.children ? Af(t.children).find(function(r) {
        return Zt(r, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), Bf = function(t) {
  var r = t.dt;
  return `
.p-tabview-tablist-container {
    position: relative;
}

.p-tabview-scrollable > .p-tabview-tablist-container {
    overflow: hidden;
}

.p-tabview-tablist-scroll-container {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tabview-tablist-scroll-container::-webkit-scrollbar {
    display: none;
}

.p-tabview-tablist {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
    background: `.concat(r("tabview.tab.list.background"), `;
    border: 1px solid `).concat(r("tabview.tab.list.border.color"), `;
    border-width: 0 0 1px 0;
    position: relative;
}

.p-tabview-tab-header {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: transparent transparent `).concat(r("tabview.tab.border.color"), ` transparent;
    color: `).concat(r("tabview.tab.color"), `;
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: `).concat(r("border.radius.md"), `;
    border-top-left-radius: `).concat(r("border.radius.md"), `;
    transition: color `).concat(r("tabview.transition.duration"), ", outline-color ").concat(r("tabview.transition.duration"), `;
    margin: 0 0 -1px 0;
    outline-color: transparent;
}

.p-tabview-tablist-item:not(.p-disabled) .p-tabview-tab-header:focus-visible {
    outline: `).concat(r("focus.ring.width"), " ").concat(r("focus.ring.style"), " ").concat(r("focus.ring.color"), `;
    outline-offset: -1px;
}

.p-tabview-tablist-item:not(.p-highlight):not(.p-disabled):hover > .p-tabview-tab-header {
    color: `).concat(r("tabview.tab.hover.color"), `;
}

.p-tabview-tablist-item.p-highlight > .p-tabview-tab-header {
    color: `).concat(r("tabview.tab.active.color"), `;
}

.p-tabview-tab-title {
    line-height: 1;
    white-space: nowrap;
}

.p-tabview-next-button,
.p-tabview-prev-button {
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(r("tabview.nav.button.background"), `;
    color: `).concat(r("tabview.nav.button.color"), `;
    width: 2.5rem;
    border-radius: 0;
    outline-color: transparent;
    transition: color `).concat(r("tabview.transition.duration"), ", outline-color ").concat(r("tabview.transition.duration"), `;
    box-shadow: `).concat(r("tabview.nav.button.shadow"), `;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-tabview-next-button:focus-visible,
.p-tabview-prev-button:focus-visible {
    outline: `).concat(r("focus.ring.width"), " ").concat(r("focus.ring.style"), " ").concat(r("focus.ring.color"), `;
    outline-offset: `).concat(r("focus.ring.offset"), `;
}

.p-tabview-next-button:hover,
.p-tabview-prev-button:hover {
    color: `).concat(r("tabview.nav.button.hover.color"), `;
}

.p-tabview-prev-button {
    left: 0;
}

.p-tabview-next-button {
    right: 0;
}

.p-tabview-panels {
    background: `).concat(r("tabview.tab.panel.background"), `;
    color: `).concat(r("tabview.tab.panel.color"), `;
    padding: 0.875rem 1.125rem 1.125rem 1.125rem;
}

.p-tabview-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background: `).concat(r("tabview.tab.active.border.color"), `;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`);
}, Vf = {
  root: function(t) {
    var r = t.props;
    return ["p-tabview p-component", {
      "p-tabview-scrollable": r.scrollable
    }];
  },
  navContainer: "p-tabview-tablist-container",
  prevButton: "p-tabview-prev-button",
  navContent: "p-tabview-tablist-scroll-container",
  nav: "p-tabview-tablist",
  tab: {
    header: function(t) {
      var r = t.instance, n = t.tab, o = t.index;
      return ["p-tabview-tablist-item", r.getTabProp(n, "headerClass"), {
        "p-tabview-tablist-item-active": r.d_activeIndex === o,
        "p-disabled": r.getTabProp(n, "disabled")
      }];
    },
    headerAction: "p-tabview-tab-header",
    headerTitle: "p-tabview-tab-title",
    content: function(t) {
      var r = t.instance, n = t.tab;
      return ["p-tabview-panel", r.getTabProp(n, "contentClass")];
    }
  },
  inkbar: "p-tabview-ink-bar",
  nextButton: "p-tabview-next-button",
  panelContainer: "p-tabview-panels"
}, Ff = se.extend({
  name: "tabview",
  theme: Bf,
  classes: Vf
}), Mf = {
  name: "BaseTabView",
  extends: ln,
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    scrollable: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: 0
    },
    selectOnFocus: {
      type: Boolean,
      default: !1
    },
    prevButtonProps: {
      type: null,
      default: null
    },
    nextButtonProps: {
      type: null,
      default: null
    },
    prevIcon: {
      type: String,
      default: void 0
    },
    nextIcon: {
      type: String,
      default: void 0
    }
  },
  style: Ff,
  provide: function() {
    return {
      $pcTabs: void 0,
      // Backwards compatible to prevent <TabPanel> component from breaking
      $pcTabView: this,
      $parentInstance: this
    };
  }
}, Ds = {
  name: "TabView",
  extends: Mf,
  inheritAttrs: !1,
  emits: ["update:activeIndex", "tab-change", "tab-click"],
  data: function() {
    return {
      id: this.$attrs.id,
      d_activeIndex: this.activeIndex,
      isPrevButtonDisabled: !0,
      isNextButtonDisabled: !1
    };
  },
  watch: {
    "$attrs.id": function(t) {
      this.id = t || ca();
    },
    activeIndex: function(t) {
      this.d_activeIndex = t, this.scrollInView({
        index: t
      });
    }
  },
  mounted: function() {
    console.warn("Deprecated since v4. Use Tabs component instead."), this.id = this.id || ca(), this.updateInkBar(), this.scrollable && this.updateButtonState();
  },
  updated: function() {
    this.updateInkBar(), this.scrollable && this.updateButtonState();
  },
  methods: {
    isTabPanel: function(t) {
      return t.type.name === "TabPanel";
    },
    isTabActive: function(t) {
      return this.d_activeIndex === t;
    },
    getTabProp: function(t, r) {
      return t.props ? t.props[r] : void 0;
    },
    getKey: function(t, r) {
      return this.getTabProp(t, "header") || r;
    },
    getTabHeaderActionId: function(t) {
      return "".concat(this.id, "_").concat(t, "_header_action");
    },
    getTabContentId: function(t) {
      return "".concat(this.id, "_").concat(t, "_content");
    },
    getTabPT: function(t, r, n) {
      var o = this.tabs.length, a = {
        props: t.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index: n,
          count: o,
          first: n === 0,
          last: n === o - 1,
          active: this.isTabActive(n)
        }
      };
      return ae(this.ptm("tabpanel.".concat(r), {
        tabpanel: a
      }), this.ptm("tabpanel.".concat(r), a), this.ptmo(this.getTabProp(t, "pt"), r, a));
    },
    onScroll: function(t) {
      this.scrollable && this.updateButtonState(), t.preventDefault();
    },
    onPrevButtonClick: function() {
      var t = this.$refs.content, r = $t(t), n = t.scrollLeft - r;
      t.scrollLeft = n <= 0 ? 0 : n;
    },
    onNextButtonClick: function() {
      var t = this.$refs.content, r = $t(t) - this.getVisibleButtonWidths(), n = t.scrollLeft + r, o = t.scrollWidth - r;
      t.scrollLeft = n >= o ? o : n;
    },
    onTabClick: function(t, r, n) {
      this.changeActiveIndex(t, r, n), this.$emit("tab-click", {
        originalEvent: t,
        index: n
      });
    },
    onTabKeyDown: function(t, r, n) {
      switch (t.code) {
        case "ArrowLeft":
          this.onTabArrowLeftKey(t);
          break;
        case "ArrowRight":
          this.onTabArrowRightKey(t);
          break;
        case "Home":
          this.onTabHomeKey(t);
          break;
        case "End":
          this.onTabEndKey(t);
          break;
        case "PageDown":
          this.onPageDownKey(t);
          break;
        case "PageUp":
          this.onPageUpKey(t);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onTabEnterKey(t, r, n);
          break;
      }
    },
    onTabArrowRightKey: function(t) {
      var r = this.findNextHeaderAction(t.target.parentElement);
      r ? this.changeFocusedTab(t, r) : this.onTabHomeKey(t), t.preventDefault();
    },
    onTabArrowLeftKey: function(t) {
      var r = this.findPrevHeaderAction(t.target.parentElement);
      r ? this.changeFocusedTab(t, r) : this.onTabEndKey(t), t.preventDefault();
    },
    onTabHomeKey: function(t) {
      var r = this.findFirstHeaderAction();
      this.changeFocusedTab(t, r), t.preventDefault();
    },
    onTabEndKey: function(t) {
      var r = this.findLastHeaderAction();
      this.changeFocusedTab(t, r), t.preventDefault();
    },
    onPageDownKey: function(t) {
      this.scrollInView({
        index: this.$refs.nav.children.length - 2
      }), t.preventDefault();
    },
    onPageUpKey: function(t) {
      this.scrollInView({
        index: 0
      }), t.preventDefault();
    },
    onTabEnterKey: function(t, r, n) {
      this.changeActiveIndex(t, r, n), t.preventDefault();
    },
    findNextHeaderAction: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = r ? t : t.nextElementSibling;
      return n ? Zt(n, "data-p-disabled") || Zt(n, "data-pc-section") === "inkbar" ? this.findNextHeaderAction(n) : _n(n, '[data-pc-section="headeraction"]') : null;
    },
    findPrevHeaderAction: function(t) {
      var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = r ? t : t.previousElementSibling;
      return n ? Zt(n, "data-p-disabled") || Zt(n, "data-pc-section") === "inkbar" ? this.findPrevHeaderAction(n) : _n(n, '[data-pc-section="headeraction"]') : null;
    },
    findFirstHeaderAction: function() {
      return this.findNextHeaderAction(this.$refs.nav.firstElementChild, !0);
    },
    findLastHeaderAction: function() {
      return this.findPrevHeaderAction(this.$refs.nav.lastElementChild, !0);
    },
    changeActiveIndex: function(t, r, n) {
      !this.getTabProp(r, "disabled") && this.d_activeIndex !== n && (this.d_activeIndex = n, this.$emit("update:activeIndex", n), this.$emit("tab-change", {
        originalEvent: t,
        index: n
      }), this.scrollInView({
        index: n
      }));
    },
    changeFocusedTab: function(t, r) {
      if (r && (tc(r), this.scrollInView({
        element: r
      }), this.selectOnFocus)) {
        var n = parseInt(r.parentElement.dataset.pcIndex, 10), o = this.tabs[n];
        this.changeActiveIndex(t, o, n);
      }
    },
    scrollInView: function(t) {
      var r = t.element, n = t.index, o = n === void 0 ? -1 : n, a = r || this.$refs.nav.children[o];
      a && a.scrollIntoView && a.scrollIntoView({
        block: "nearest"
      });
    },
    updateInkBar: function() {
      var t = this.$refs.nav.children[this.d_activeIndex];
      this.$refs.inkbar.style.width = $t(t) + "px", this.$refs.inkbar.style.left = Sn(t).left - Sn(this.$refs.nav).left + "px";
    },
    updateButtonState: function() {
      var t = this.$refs.content, r = t.scrollLeft, n = t.scrollWidth, o = $t(t);
      this.isPrevButtonDisabled = r === 0, this.isNextButtonDisabled = parseInt(r) === n - o;
    },
    getVisibleButtonWidths: function() {
      var t = this.$refs, r = t.prevBtn, n = t.nextBtn;
      return [r, n].reduce(function(o, a) {
        return a ? o + $t(a) : o;
      }, 0);
    }
  },
  computed: {
    tabs: function() {
      var t = this;
      return this.$slots.default().reduce(function(r, n) {
        return t.isTabPanel(n) ? r.push(n) : n.children && n.children instanceof Array && n.children.forEach(function(o) {
          t.isTabPanel(o) && r.push(o);
        }), r;
      }, []);
    },
    prevButtonAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.previous : void 0;
    },
    nextButtonAriaLabel: function() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.next : void 0;
    }
  },
  directives: {
    ripple: Rf
  },
  components: {
    ChevronLeftIcon: Fs,
    ChevronRightIcon: Ms
  }
};
function kr(e) {
  "@babel/helpers - typeof";
  return kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kr(e);
}
function ma(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ma(Object(r), !0).forEach(function(n) {
      Df(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ma(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Df(e, t, r) {
  return (t = Hf(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Hf(e) {
  var t = Uf(e, "string");
  return kr(t) == "symbol" ? t : t + "";
}
function Uf(e, t) {
  if (kr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (kr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Kf = ["tabindex", "aria-label"], Wf = ["data-p-active", "data-p-disabled", "data-pc-index"], Gf = ["id", "tabindex", "aria-disabled", "aria-selected", "aria-controls", "onClick", "onKeydown"], qf = ["tabindex", "aria-label"], Yf = ["id", "aria-labelledby", "data-pc-index", "data-p-active"];
function Jf(e, t, r, n, o, a) {
  var s = cu("ripple");
  return N(), V("div", ae({
    class: e.cx("root"),
    role: "tablist"
  }, e.ptmi("root")), [le("div", ae({
    class: e.cx("navContainer")
  }, e.ptm("navContainer")), [e.scrollable && !o.isPrevButtonDisabled ? Bt((N(), V("button", ae({
    key: 0,
    ref: "prevBtn",
    type: "button",
    class: e.cx("prevButton"),
    tabindex: e.tabindex,
    "aria-label": a.prevButtonAriaLabel,
    onClick: t[0] || (t[0] = function() {
      return a.onPrevButtonClick && a.onPrevButtonClick.apply(a, arguments);
    })
  }, Re(Re({}, e.prevButtonProps), e.ptm("prevButton")), {
    "data-pc-group-section": "navbutton"
  }), [ir(e.$slots, "previcon", {}, function() {
    return [(N(), bt(Xt(e.prevIcon ? "span" : "ChevronLeftIcon"), ae({
      "aria-hidden": "true",
      class: e.prevIcon
    }, e.ptm("prevIcon")), null, 16, ["class"]))];
  })], 16, Kf)), [[s]]) : ye("", !0), le("div", ae({
    ref: "content",
    class: e.cx("navContent"),
    onScroll: t[1] || (t[1] = function() {
      return a.onScroll && a.onScroll.apply(a, arguments);
    })
  }, e.ptm("navContent")), [le("ul", ae({
    ref: "nav",
    class: e.cx("nav")
  }, e.ptm("nav")), [(N(!0), V(de, null, ct(a.tabs, function(i, l) {
    return N(), V("li", ae({
      key: a.getKey(i, l),
      style: a.getTabProp(i, "headerStyle"),
      class: e.cx("tab.header", {
        tab: i,
        index: l
      }),
      role: "presentation",
      ref_for: !0
    }, Re(Re(Re({}, a.getTabProp(i, "headerProps")), a.getTabPT(i, "root", l)), a.getTabPT(i, "header", l)), {
      "data-pc-name": "tabpanel",
      "data-p-active": o.d_activeIndex === l,
      "data-p-disabled": a.getTabProp(i, "disabled"),
      "data-pc-index": l
    }), [Bt((N(), V("a", ae({
      id: a.getTabHeaderActionId(l),
      class: e.cx("tab.headerAction"),
      tabindex: a.getTabProp(i, "disabled") || !a.isTabActive(l) ? -1 : e.tabindex,
      role: "tab",
      "aria-disabled": a.getTabProp(i, "disabled"),
      "aria-selected": a.isTabActive(l),
      "aria-controls": a.getTabContentId(l),
      onClick: function(u) {
        return a.onTabClick(u, i, l);
      },
      onKeydown: function(u) {
        return a.onTabKeyDown(u, i, l);
      },
      ref_for: !0
    }, Re(Re({}, a.getTabProp(i, "headerActionProps")), a.getTabPT(i, "headerAction", l))), [i.props && i.props.header ? (N(), V("span", ae({
      key: 0,
      class: e.cx("tab.headerTitle"),
      ref_for: !0
    }, a.getTabPT(i, "headerTitle", l)), ge(i.props.header), 17)) : ye("", !0), i.children && i.children.header ? (N(), bt(Xt(i.children.header), {
      key: 1
    })) : ye("", !0)], 16, Gf)), [[s]])], 16, Wf);
  }), 128)), le("li", ae({
    ref: "inkbar",
    class: e.cx("inkbar"),
    role: "presentation",
    "aria-hidden": "true"
  }, e.ptm("inkbar")), null, 16)], 16)], 16), e.scrollable && !o.isNextButtonDisabled ? Bt((N(), V("button", ae({
    key: 1,
    ref: "nextBtn",
    type: "button",
    class: e.cx("nextButton"),
    tabindex: e.tabindex,
    "aria-label": a.nextButtonAriaLabel,
    onClick: t[2] || (t[2] = function() {
      return a.onNextButtonClick && a.onNextButtonClick.apply(a, arguments);
    })
  }, Re(Re({}, e.nextButtonProps), e.ptm("nextButton")), {
    "data-pc-group-section": "navbutton"
  }), [ir(e.$slots, "nexticon", {}, function() {
    return [(N(), bt(Xt(e.nextIcon ? "span" : "ChevronRightIcon"), ae({
      "aria-hidden": "true",
      class: e.nextIcon
    }, e.ptm("nextIcon")), null, 16, ["class"]))];
  })], 16, qf)), [[s]]) : ye("", !0)], 16), le("div", ae({
    class: e.cx("panelContainer")
  }, e.ptm("panelContainer")), [(N(!0), V(de, null, ct(a.tabs, function(i, l) {
    return N(), V(de, {
      key: a.getKey(i, l)
    }, [!e.lazy || a.isTabActive(l) ? Bt((N(), V("div", ae({
      key: 0,
      id: a.getTabContentId(l),
      style: a.getTabProp(i, "contentStyle"),
      class: e.cx("tab.content", {
        tab: i
      }),
      role: "tabpanel",
      "aria-labelledby": a.getTabHeaderActionId(l),
      ref_for: !0
    }, Re(Re(Re({}, a.getTabProp(i, "contentProps")), a.getTabPT(i, "root", l)), a.getTabPT(i, "content", l)), {
      "data-pc-name": "tabpanel",
      "data-pc-index": l,
      "data-p-active": o.d_activeIndex === l
    }), [(N(), bt(Xt(i)))], 16, Yf)), [[Es, e.lazy ? !0 : a.isTabActive(l)]]) : ye("", !0)], 64);
  }), 128))], 16)], 16);
}
Ds.render = Jf;
var Qf = {
  root: function(t) {
    var r = t.instance;
    return ["p-tabpanel", {
      "p-tabpanel-active": r.active
    }];
  }
}, Zf = se.extend({
  name: "tabpanel",
  classes: Qf
}), Xf = {
  name: "BaseTabPanel",
  extends: ln,
  props: {
    // in Tabs
    value: {
      type: [String, Number],
      default: void 0
    },
    as: {
      type: [String, Object],
      default: "DIV"
    },
    asChild: {
      type: Boolean,
      default: !1
    },
    // in TabView
    header: null,
    headerStyle: null,
    headerClass: null,
    headerProps: null,
    headerActionProps: null,
    contentStyle: null,
    contentClass: null,
    contentProps: null,
    disabled: Boolean
  },
  style: Zf,
  provide: function() {
    return {
      $pcTabPanel: this,
      $parentInstance: this
    };
  }
}, Vr = {
  name: "TabPanel",
  extends: Xf,
  inheritAttrs: !1,
  inject: ["$pcTabs"],
  computed: {
    active: function() {
      var t;
      return Vl((t = this.$pcTabs) === null || t === void 0 ? void 0 : t.d_value, this.value);
    },
    id: function() {
      var t;
      return "".concat((t = this.$pcTabs) === null || t === void 0 ? void 0 : t.id, "_tabpanel_").concat(this.value);
    },
    ariaLabelledby: function() {
      var t;
      return "".concat((t = this.$pcTabs) === null || t === void 0 ? void 0 : t.id, "_tab_").concat(this.value);
    },
    attrs: function() {
      return ae(this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    a11yAttrs: function() {
      var t;
      return {
        id: this.id,
        tabindex: (t = this.$pcTabs) === null || t === void 0 ? void 0 : t.tabindex,
        role: "tabpanel",
        "aria-labelledby": this.ariaLabelledby,
        "data-pc-name": "tabpanel",
        "data-p-active": this.active
      };
    },
    ptParams: function() {
      return {
        context: {
          active: this.active
        }
      };
    }
  }
};
function e0(e, t, r, n, o, a) {
  var s, i;
  return a.$pcTabs ? (N(), V(de, {
    key: 1
  }, [e.asChild ? ir(e.$slots, "default", {
    key: 1,
    class: Zr(e.cx("root")),
    active: a.active,
    a11yAttrs: a.a11yAttrs
  }) : (N(), V(de, {
    key: 0
  }, [!((s = a.$pcTabs) !== null && s !== void 0 && s.lazy) || a.active ? Bt((N(), bt(Xt(e.as), ae({
    key: 0,
    class: e.cx("root")
  }, a.attrs), {
    default: Rt(function() {
      return [ir(e.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"])), [[Es, (i = a.$pcTabs) !== null && i !== void 0 && i.lazy ? !0 : a.active]]) : ye("", !0)], 64))], 64)) : ir(e.$slots, "default", {
    key: 0
  });
}
Vr.render = e0;
const Hs = Symbol("FrontendSDK"), t0 = (e, t) => {
  e.provide(Hs, t);
}, r0 = () => cr(Hs), n0 = { class: "p-4 max-w-8xl mx-auto text-black relative select-text" }, o0 = /* @__PURE__ */ le(
  "h1",
  { class: "text-2xl font-bold mb-4 text-white" },
  "GQLonaut",
  -1
  /* HOISTED */
), a0 = ["disabled"], s0 = {
  key: 1,
  class: "text-red-600 mt-4"
}, i0 = {
  key: 2,
  class: "mt-4 bg-white rounded p-4 shadow-md"
}, l0 = { class: "max-h-[800px] overflow-y-auto pr-2" }, c0 = { key: 0 }, u0 = ["onClick", "onKeydown"], d0 = { key: 0 }, f0 = { key: 0 }, p0 = { class: "text-blue-800" }, b0 = {
  key: 1,
  class: "text-gray-500 italic"
}, h0 = { class: "max-h-[800px] overflow-y-auto pr-2" }, m0 = { key: 0 }, g0 = ["onClick", "onKeydown"], v0 = { key: 0 }, y0 = { key: 0 }, x0 = { class: "text-blue-800" }, w0 = {
  key: 1,
  class: "text-gray-500 italic"
}, k0 = { class: "max-h-[800px] overflow-y-auto pr-2" }, _0 = { key: 0 }, S0 = ["onClick", "onKeydown"], C0 = { key: 0 }, T0 = { key: 0 }, $0 = { class: "text-blue-800" }, P0 = {
  key: 1,
  class: "text-gray-500 italic"
}, O0 = {
  key: 1,
  class: "mt-2 bg-gray-100 p-4 rounded shadow max-h-[800px] overflow-auto relative"
}, A0 = { class: "mb-4 font-semibold text-lg" }, I0 = {
  class: "bg-white p-4 rounded text-sm overflow-auto whitespace-pre-wrap",
  style: { color: "#111" }
}, L0 = /* @__PURE__ */ Jc({
  __name: "App",
  setup(e) {
    const t = r0(), r = Be(""), n = Be(null), o = Be(null), a = Be(null), s = Be(!1), i = Be(null), l = Be(""), c = Be(null);
    function u(_) {
      return _ ? _.kind === "NON_NULL" ? `${u(_.ofType)}!` : _.kind === "LIST" ? `[${u(_.ofType)}]` : _.name || "unknown" : "null";
    }
    function p(_) {
      return _ ? _.kind === "NON_NULL" || _.kind === "LIST" ? p(_.ofType) : _.name || null : null;
    }
    function b(_, F = "introspection.json") {
      const H = JSON.stringify(_, null, 2), j = new Blob([H], { type: "application/json" }), R = URL.createObjectURL(j), Y = document.createElement("a");
      Y.href = R, Y.download = F, Y.click(), URL.revokeObjectURL(R);
    }
    function m() {
      a.value && b(a.value, "introspection.json");
    }
    function k(_) {
      return !_ || _.kind === "SCALAR" || _.kind === "ENUM" || _.kind === "INPUT_OBJECT";
    }
    function S(_, F, H = 1, j = 3) {
      if (!F) return "";
      if (H > j) return `${"  ".repeat(H)}...`;
      const R = p(F);
      if (!R) return "";
      const Y = _.get(R);
      return !Y || !Y.fields || k(Y) ? "" : Y.fields.map((ne) => {
        const pe = S(_, ne.type, H + 1, j);
        return pe ? `${"  ".repeat(H)}${ne.name} {
${pe}
${"  ".repeat(H)}}` : `${"  ".repeat(H)}${ne.name}`;
      }).join(`
`);
    }
    function L(_) {
      var R, Y, ne, pe;
      const F = _.__schema || ((R = _.data) == null ? void 0 : R.__schema);
      if (!F) return { queries: [], mutations: [], subscriptions: [], typesMap: /* @__PURE__ */ new Map() };
      const H = /* @__PURE__ */ new Map();
      F.types.forEach((be) => H.set(be.name, be));
      function j(be, Ne) {
        if (!be) return [];
        const re = H.get(be);
        return !re || !re.fields ? [] : re.fields.map((U) => ({
          name: U.name,
          description: U.description,
          isDeprecated: U.isDeprecated,
          deprecationReason: U.deprecationReason,
          returnType: u(U.type),
          returnTypeObject: U.type,
          args: U.args.map((K) => ({
            name: K.name,
            description: K.description,
            type: u(K.type),
            defaultValue: K.defaultValue
          })),
          kind: Ne
        }));
      }
      return {
        queries: j((Y = F.queryType) == null ? void 0 : Y.name, "query"),
        mutations: j((ne = F.mutationType) == null ? void 0 : ne.name, "mutation"),
        subscriptions: j((pe = F.subscriptionType) == null ? void 0 : pe.name, "subscription"),
        typesMap: H
      };
    }
    const z = async () => {
      if (!t) {
        i.value = "SDK no está disponible";
        return;
      }
      s.value = !0, i.value = null, a.value = null, c.value = null;
      try {
        const _ = await t.backend.introspectGraphQL({
          endpoint: r.value,
          headers: {}
        }), F = JSON.parse(_);
        n.value = F, a.value = L(F.data), o.value = r.value;
      } catch (_) {
        i.value = "No schema found", await t.backend.consoleLog(_ instanceof Error ? _.message : String(_)), await t.backend.consoleLog(i.value);
      } finally {
        s.value = !1;
      }
    }, A = Ls(() => {
      if (!a.value) return { queries: [], mutations: [], subscriptions: [] };
      const _ = l.value.toLowerCase(), F = (H) => H.name.toLowerCase().includes(_);
      return {
        queries: a.value.queries.filter(F),
        mutations: a.value.mutations.filter(F),
        subscriptions: a.value.subscriptions.filter(F)
      };
    });
    function g(_) {
      c.value = _;
    }
    function O() {
      c.value = null;
    }
    function J(_, F) {
      if (!_) return "";
      const H = _.args.length ? "(" + _.args.map((ne) => `$${ne.name}: ${ne.type}`).join(", ") + ")" : "", j = _.args.length ? "(" + _.args.map((ne) => `${ne.name}: $${ne.name}`).join(", ") + ")" : "", R = S(F, _.returnTypeObject), Y = R ? `{
${R}
  }` : "";
      return `${_.kind} ${H} {
  ${_.name}${j} ${Y}
}`;
    }
    return (_, F) => {
      var H;
      return N(), V("div", n0, [
        o0,
        Bt(le(
          "input",
          {
            "onUpdate:modelValue": F[0] || (F[0] = (j) => r.value = j),
            type: "text",
            placeholder: "https://api.example.com/graphql",
            class: "border p-2 w-full mb-2 text-black"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [kd, r.value]
        ]),
        le("button", {
          disabled: s.value || !r.value,
          onClick: z,
          class: "bg-blue-600 text-white px-4 py-2 mb-4 rounded disabled:opacity-50"
        }, ge(s.value ? "Loading..." : "Get Introspection"), 9, a0),
        a.value ? (N(), V("button", {
          key: 0,
          onClick: m,
          class: "mt-4 ml-4 px-4 py-2 bg-green-600 text-white rounded"
        }, " Download introspección ")) : ye("v-if", !0),
        i.value ? (N(), V(
          "div",
          s0,
          ge(i.value),
          1
          /* TEXT */
        )) : ye("v-if", !0),
        a.value ? (N(), V("div", i0, [
          Pe(zt(Bs), {
            modelValue: l.value,
            "onUpdate:modelValue": F[1] || (F[1] = (j) => l.value = j),
            placeholder: "Search operation...",
            class: "w-full mb-4 p-2 text-black"
          }, null, 8, ["modelValue"]),
          c.value ? ye("v-if", !0) : (N(), bt(zt(Ds), { key: 0 }, {
            default: Rt(() => [
              Pe(zt(Vr), { header: "Queries" }, {
                default: Rt(() => [
                  le("div", l0, [
                    A.value.queries.length ? (N(), V("div", c0, [
                      (N(!0), V(
                        de,
                        null,
                        ct(A.value.queries, (j) => (N(), V("div", {
                          key: j.name,
                          class: "mb-2 cursor-pointer hover:bg-gray-200 rounded p-1",
                          onClick: (R) => g(j),
                          tabindex: "0",
                          onKeydown: yn((R) => g(j), ["enter"]),
                          role: "button",
                          "aria-label": "Ver detalles de la query"
                        }, [
                          le(
                            "strong",
                            null,
                            ge(j.name),
                            1
                            /* TEXT */
                          ),
                          j.args.length ? (N(), V("span", d0, [
                            Ee(" ( "),
                            (N(!0), V(
                              de,
                              null,
                              ct(j.args, (R, Y) => (N(), V("span", {
                                key: R.name
                              }, [
                                Ee(
                                  ge(R.name) + ": " + ge(R.type),
                                  1
                                  /* TEXT */
                                ),
                                Y < j.args.length - 1 ? (N(), V("span", f0, ", ")) : ye("v-if", !0)
                              ]))),
                              128
                              /* KEYED_FRAGMENT */
                            )),
                            Ee(" ) ")
                          ])) : ye("v-if", !0),
                          Ee(" : "),
                          le(
                            "span",
                            p0,
                            ge(j.returnType),
                            1
                            /* TEXT */
                          )
                        ], 40, u0))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])) : (N(), V("div", b0, "Any queries found."))
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              Pe(zt(Vr), { header: "Mutations" }, {
                default: Rt(() => [
                  le("div", h0, [
                    A.value.mutations.length ? (N(), V("div", m0, [
                      (N(!0), V(
                        de,
                        null,
                        ct(A.value.mutations, (j) => (N(), V("div", {
                          key: j.name,
                          class: "mb-2 cursor-pointer hover:bg-gray-200 rounded p-1",
                          onClick: (R) => g(j),
                          tabindex: "0",
                          onKeydown: yn((R) => g(j), ["enter"]),
                          role: "button",
                          "aria-label": "Ver detalles de la mutation"
                        }, [
                          le(
                            "strong",
                            null,
                            ge(j.name),
                            1
                            /* TEXT */
                          ),
                          j.args.length ? (N(), V("span", v0, [
                            Ee(" ( "),
                            (N(!0), V(
                              de,
                              null,
                              ct(j.args, (R, Y) => (N(), V("span", {
                                key: R.name
                              }, [
                                Ee(
                                  ge(R.name) + ": " + ge(R.type),
                                  1
                                  /* TEXT */
                                ),
                                Y < j.args.length - 1 ? (N(), V("span", y0, ", ")) : ye("v-if", !0)
                              ]))),
                              128
                              /* KEYED_FRAGMENT */
                            )),
                            Ee(" ) ")
                          ])) : ye("v-if", !0),
                          Ee(" : "),
                          le(
                            "span",
                            x0,
                            ge(j.returnType),
                            1
                            /* TEXT */
                          )
                        ], 40, g0))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])) : (N(), V("div", w0, "Any mutations found."))
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              Pe(zt(Vr), { header: "Subscriptions" }, {
                default: Rt(() => [
                  le("div", k0, [
                    A.value.subscriptions.length ? (N(), V("div", _0, [
                      (N(!0), V(
                        de,
                        null,
                        ct(A.value.subscriptions, (j) => (N(), V("div", {
                          key: j.name,
                          class: "mb-2 cursor-pointer hover:bg-gray-200 rounded p-1",
                          onClick: (R) => g(j),
                          tabindex: "0",
                          onKeydown: yn((R) => g(j), ["enter"]),
                          role: "button",
                          "aria-label": "Ver detalles de la subscription"
                        }, [
                          le(
                            "strong",
                            null,
                            ge(j.name),
                            1
                            /* TEXT */
                          ),
                          j.args.length ? (N(), V("span", C0, [
                            Ee(" ( "),
                            (N(!0), V(
                              de,
                              null,
                              ct(j.args, (R, Y) => (N(), V("span", {
                                key: R.name
                              }, [
                                Ee(
                                  ge(R.name) + ": " + ge(R.type),
                                  1
                                  /* TEXT */
                                ),
                                Y < j.args.length - 1 ? (N(), V("span", T0, ", ")) : ye("v-if", !0)
                              ]))),
                              128
                              /* KEYED_FRAGMENT */
                            )),
                            Ee(" ) ")
                          ])) : ye("v-if", !0),
                          Ee(" : "),
                          le(
                            "span",
                            $0,
                            ge(j.returnType),
                            1
                            /* TEXT */
                          )
                        ], 40, S0))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])) : (N(), V("div", P0, "Any subscriptions found."))
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })),
          c.value ? (N(), V("div", O0, [
            le("button", {
              class: "absolute top-2 right-2 text-red-600 font-bold",
              onClick: O,
              "aria-label": "Cerrar detalles"
            }, " × "),
            le(
              "h2",
              A0,
              ge(c.value.name) + " - Detalle",
              1
              /* TEXT */
            ),
            le(
              "pre",
              I0,
              "" + ge(J(c.value, ((H = a.value) == null ? void 0 : H.typesMap) || /* @__PURE__ */ new Map())) + `
`,
              1
              /* TEXT */
            )
          ])) : ye("v-if", !0)
        ])) : ye("v-if", !0)
      ]);
    };
  }
}), j0 = (e) => {
  const t = Td(L0);
  t.use(ef, {
    unstyled: !0,
    pt: jl
  }), t.use(t0, e);
  const r = document.createElement("div");
  Object.assign(r.style, {
    height: "100%",
    width: "100%"
  }), r.id = "plugin--GQLonaut", t.mount(r), e.navigation.addPage("/GQLonaut", {
    body: r
  }), e.sidebar.registerItem("GQLonaut", "/GQLonaut", {
    icon: "fas fa-rocket"
  });
};
export {
  j0 as init
};
