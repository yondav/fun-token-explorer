/** Tailwind global color property */
export type TailwindGlobalColor =
  | 'red-50'
  | 'red-100'
  | 'red-200'
  | 'red-300'
  | 'red-400'
  | 'red-500'
  | 'red-600'
  | 'red-700'
  | 'red-800'
  | 'red-900'
  | 'red-950'
  | 'orange-50'
  | 'orange-100'
  | 'orange-200'
  | 'orange-300'
  | 'orange-400'
  | 'orange-500'
  | 'orange-600'
  | 'orange-700'
  | 'orange-800'
  | 'orange-900'
  | 'orange-950'
  | 'amber-50'
  | 'amber-100'
  | 'amber-200'
  | 'amber-300'
  | 'amber-400'
  | 'amber-500'
  | 'amber-600'
  | 'amber-700'
  | 'amber-800'
  | 'amber-900'
  | 'amber-950'
  | 'yellow-50'
  | 'yellow-100'
  | 'yellow-200'
  | 'yellow-300'
  | 'yellow-400'
  | 'yellow-500'
  | 'yellow-600'
  | 'yellow-700'
  | 'yellow-800'
  | 'yellow-900'
  | 'yellow-950'
  | 'lime-50'
  | 'lime-100'
  | 'lime-200'
  | 'lime-300'
  | 'lime-400'
  | 'lime-500'
  | 'lime-600'
  | 'lime-700'
  | 'lime-800'
  | 'lime-900'
  | 'lime-950'
  | 'green-50'
  | 'green-100'
  | 'green-200'
  | 'green-300'
  | 'green-400'
  | 'green-500'
  | 'green-600'
  | 'green-700'
  | 'green-800'
  | 'green-900'
  | 'green-950'
  | 'emerald-50'
  | 'emerald-100'
  | 'emerald-200'
  | 'emerald-300'
  | 'emerald-400'
  | 'emerald-500'
  | 'emerald-600'
  | 'emerald-700'
  | 'emerald-800'
  | 'emerald-900'
  | 'emerald-950'
  | 'teal-50'
  | 'teal-100'
  | 'teal-200'
  | 'teal-300'
  | 'teal-400'
  | 'teal-500'
  | 'teal-600'
  | 'teal-700'
  | 'teal-800'
  | 'teal-900'
  | 'teal-950'
  | 'cyan-50'
  | 'cyan-100'
  | 'cyan-200'
  | 'cyan-300'
  | 'cyan-400'
  | 'cyan-500'
  | 'cyan-600'
  | 'cyan-700'
  | 'cyan-800'
  | 'cyan-900'
  | 'cyan-950'
  | 'sky-50'
  | 'sky-100'
  | 'sky-200'
  | 'sky-300'
  | 'sky-400'
  | 'sky-500'
  | 'sky-600'
  | 'sky-700'
  | 'sky-800'
  | 'sky-900'
  | 'sky-950'
  | 'blue-50'
  | 'blue-100'
  | 'blue-200'
  | 'blue-300'
  | 'blue-400'
  | 'blue-500'
  | 'blue-600'
  | 'blue-700'
  | 'blue-800'
  | 'blue-900'
  | 'blue-950'
  | 'indigo-50'
  | 'indigo-100'
  | 'indigo-200'
  | 'indigo-300'
  | 'indigo-400'
  | 'indigo-500'
  | 'indigo-600'
  | 'indigo-700'
  | 'indigo-800'
  | 'indigo-900'
  | 'indigo-950'
  | 'violet-50'
  | 'violet-100'
  | 'violet-200'
  | 'violet-300'
  | 'violet-400'
  | 'violet-500'
  | 'violet-600'
  | 'violet-700'
  | 'violet-800'
  | 'violet-900'
  | 'violet-950'
  | 'purple-50'
  | 'purple-100'
  | 'purple-200'
  | 'purple-300'
  | 'purple-400'
  | 'purple-500'
  | 'purple-600'
  | 'purple-700'
  | 'purple-800'
  | 'purple-900'
  | 'purple-950'
  | 'fuchsia-50'
  | 'fuchsia-100'
  | 'fuchsia-200'
  | 'fuchsia-300'
  | 'fuchsia-400'
  | 'fuchsia-500'
  | 'fuchsia-600'
  | 'fuchsia-700'
  | 'fuchsia-800'
  | 'fuchsia-900'
  | 'fuchsia-950'
  | 'pink-50'
  | 'pink-100'
  | 'pink-200'
  | 'pink-300'
  | 'pink-400'
  | 'pink-500'
  | 'pink-600'
  | 'pink-700'
  | 'pink-800'
  | 'pink-900'
  | 'pink-950'
  | 'rose-50'
  | 'rose-100'
  | 'rose-200'
  | 'rose-300'
  | 'rose-400'
  | 'rose-500'
  | 'rose-600'
  | 'rose-700'
  | 'rose-800'
  | 'rose-900'
  | 'rose-950'
  | 'slate-50'
  | 'slate-100'
  | 'slate-200'
  | 'slate-300'
  | 'slate-400'
  | 'slate-500'
  | 'slate-600'
  | 'slate-700'
  | 'slate-800'
  | 'slate-900'
  | 'slate-950'
  | 'gray-50'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'gray-950'
  | 'zinc-50'
  | 'zinc-100'
  | 'zinc-200'
  | 'zinc-300'
  | 'zinc-400'
  | 'zinc-500'
  | 'zinc-600'
  | 'zinc-700'
  | 'zinc-800'
  | 'zinc-900'
  | 'zinc-950'
  | 'neutral-50'
  | 'neutral-100'
  | 'neutral-200'
  | 'neutral-300'
  | 'neutral-400'
  | 'neutral-500'
  | 'neutral-600'
  | 'neutral-700'
  | 'neutral-800'
  | 'neutral-900'
  | 'neutral-950'
  | 'stone-50'
  | 'stone-100'
  | 'stone-200'
  | 'stone-300'
  | 'stone-400'
  | 'stone-500'
  | 'stone-600'
  | 'stone-700'
  | 'stone-800'
  | 'stone-900'
  | 'stone-950'
  | 'black'
  | 'white'
  | 'base-100'
  | 'base-200'
  | 'base-300'
  | 'base-content'
  | 'primary'
  | 'primary-content'
  | 'secondary'
  | 'secondary-content'
  | 'accent'
  | 'accent-content'
  | 'neutral'
  | 'neutral-content'
  | 'info'
  | 'info-content'
  | 'success'
  | 'success-content'
  | 'warning'
  | 'warning-content'
  | 'error'
  | 'error-content';
type Variants1316686d =
  | 'oklab'
  | 'oklch'
  | 'srgb'
  | 'hsl'
  | 'longer'
  | 'shorter'
  | 'increasing'
  | 'decreasing'
  | '0'
  | '5'
  | '10'
  | '15'
  | '20'
  | '25'
  | '30'
  | '35'
  | '40'
  | '45'
  | '50'
  | '55'
  | '60'
  | '65'
  | '70'
  | '75'
  | '80'
  | '85'
  | '90'
  | '95'
  | '100'
  | (`${number}` & {});
type VariantsA91e8ba1 =
  | '0'
  | '5'
  | '10'
  | '15'
  | '20'
  | '25'
  | '30'
  | '35'
  | '40'
  | '45'
  | '50'
  | '55'
  | '60'
  | '65'
  | '70'
  | '75'
  | '80'
  | '85'
  | '90'
  | '95'
  | '100'
  | (`${number}` & {});
type Variants1e76e759 = 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
type BackgroundImageRef1 =
  | '0'
  | '30'
  | '60'
  | '90'
  | '120'
  | '150'
  | '180'
  | '210'
  | '240'
  | '270'
  | '300'
  | '330';
type BackgroundImageRef2 = 'b' | 'bl' | 'br' | 'l' | 'r' | 't' | 'tl' | 'tr';
type BackgroundImageRef3 =
  | '0%'
  | '5%'
  | '10%'
  | '15%'
  | '20%'
  | '25%'
  | '30%'
  | '35%'
  | '40%'
  | '45%'
  | '50%'
  | '55%'
  | '60%'
  | '65%'
  | '70%'
  | '75%'
  | '80%'
  | '85%'
  | '90%'
  | '95%'
  | '100%'
  | 'current'
  | 'inherit'
  | 'transparent'
  | TailwindGlobalColor;
type BackgroundImageRef4 = 'conic' | 'none' | 'radial';
type BottomRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'full'
  | 'px'
  | 'auto';
type GridColumnRef1 =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | 'auto';
type GridColumnRef2 =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'full';
type GridColumnRef3 = 'auto';
type EndRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'full'
  | 'px'
  | 'auto';
type TextIndentRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | 'px';
type InsetRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'full'
  | 'px'
  | 'auto';
type LeftRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'full'
  | 'px'
  | 'auto';
type MarginRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | 'px'
  | 'auto';
type MarginRef2 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | 'px'
  | 'reverse';
type MaskImageRef1 =
  | '0'
  | '0%'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '5%'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '10%'
  | '11'
  | '12'
  | '14'
  | '15%'
  | '16'
  | '20'
  | '20%'
  | '24'
  | '25%'
  | '28'
  | '30%'
  | '32'
  | '35%'
  | '36'
  | '40'
  | '40%'
  | '44'
  | '45%'
  | '48'
  | '50%'
  | '52'
  | '55%'
  | '56'
  | '60'
  | '60%'
  | '64'
  | '65%'
  | '70%'
  | '72'
  | '75%'
  | '80'
  | '80%'
  | '85%'
  | '90%'
  | '95%'
  | '96'
  | '100%'
  | 'current'
  | 'inherit'
  | 'transparent'
  | TailwindGlobalColor;
type MaskImageRef2 = 'left' | 'right';
type MaskImageRef3 = 'left' | 'right';
type MaskImageRef4 = '2' | '3' | '4';
type MaskImageRef5 = 'ball' | 'bars' | 'dots' | 'infinity' | 'ring' | 'spinner';
type MaskImageRef6 = 'bottom' | 'center' | 'left' | 'right' | 'top';
type MaskImageRef7 =
  | 'closest-corner'
  | 'closest-side'
  | 'farthest-corner'
  | 'farthest-side';
type MaskImageRef8 = '0' | '1' | '2' | '3' | '6' | '12' | '45' | '90' | '180';
type MaskImageRef9 =
  | 'circle'
  | 'decagon'
  | 'diamond'
  | 'ellipse'
  | 'half-1'
  | 'half-2'
  | 'heart'
  | 'hexagon'
  | 'hexagon-2'
  | 'none'
  | 'pentagon'
  | 'squircle'
  | 'star'
  | 'star-2'
  | 'triangle';
type OrderRef1 =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'first'
  | 'last'
  | 'none';
type OutlineOffsetRef1 = '0' | '1' | '2' | '4' | '8';
type RightRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'full'
  | 'px'
  | 'auto';
type RotateRef1 = '0' | '1' | '2' | '3' | '6' | '12' | '45' | '90' | '180';
type GridRowRef1 =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | 'auto';
type GridRowRef2 =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'full';
type GridRowRef3 = 'auto';
type ScaleRef1 =
  | '0'
  | '50'
  | '75'
  | '90'
  | '95'
  | '100'
  | '105'
  | '110'
  | '125'
  | '150'
  | '200';
type ScrollMarginRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | 'px';
type SkewRef1 = '0' | '1' | '2' | '3' | '6' | '12';
type StartRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'full'
  | 'px'
  | 'auto';
type TopRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'full'
  | 'px'
  | 'auto';
type LetterSpacingRef1 =
  | 'normal'
  | 'tight'
  | 'tighter'
  | 'wide'
  | 'wider'
  | 'widest';
type TranslateRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | 'px';
type TextUnderlineOffsetRef1 = '0' | '1' | '2' | '4' | '8' | 'auto';
type ZIndexRef1 = '0' | '10' | '20' | '30' | '40' | '50' | 'auto';
type CustomRef1 =
  | 'error'
  | 'horizontal'
  | 'info'
  | 'success'
  | 'vertical'
  | 'warning';
type CustomRef2 = 'group' | 'offline' | 'online' | 'placeholder';
type CustomRef3 =
  | 'accent'
  | 'error'
  | 'info'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';
type CustomRef4 =
  | 'accent'
  | 'circle'
  | 'error'
  | 'info'
  | 'lg'
  | 'link'
  | 'md'
  | 'neutral'
  | 'outline'
  | 'primary'
  | 'secondary'
  | 'sm'
  | 'soft'
  | 'square'
  | 'success'
  | 'warning'
  | 'wide'
  | 'xl'
  | 'xs';
type CustomRef5 =
  | 'actions'
  | 'body'
  | 'lg'
  | 'md'
  | 'side'
  | 'sm'
  | 'title'
  | 'xl'
  | 'xs';
type CustomRef6 = 'horizontal' | 'item' | 'vertical';
type CustomRef7 = 'bubble' | 'end' | 'footer' | 'header' | 'image' | 'start';
type CustomRef8 = 'arrow' | 'content' | 'open' | 'plus' | 'title';
type CustomRef9 = 'item-1' | 'item-2' | 'resizer';
type CustomRef10 = 'horizontal' | 'vertical';
type CustomRef11 = 'active' | 'lg' | 'md' | 'sm' | 'xl' | 'xs';
type CustomRef12 = 'content' | 'end' | 'open' | 'side' | 'toggle';
type CustomRef13 =
  | 'bottom'
  | 'center'
  | 'end'
  | 'left'
  | 'right'
  | 'start'
  | 'top';
type CustomRef14 = 'label' | 'legend';
type CustomRef15 =
  | 'input'
  | 'input-ghost'
  | 'input-lg'
  | 'input-md'
  | 'input-sm'
  | 'input-xl'
  | 'input-xs';
type CustomRef16 = 'title';
type CustomRef17 = 'content' | 'overlay';
type CustomRef18 = 'bottom' | 'center' | 'end' | 'middle' | 'start' | 'top';
type CustomRef19 = 'horizontal' | 'item' | 'vertical';
type CustomRef20 =
  | 'horizontal'
  | 'lg'
  | 'md'
  | 'sm'
  | 'title'
  | 'vertical'
  | 'xl'
  | 'xs';
type CustomRef21 = 'camera' | 'display';
type CustomRef22 = 'browser' | 'code' | 'phone' | 'window';
type CustomRef23 =
  | 'action'
  | 'backdrop'
  | 'bottom'
  | 'box'
  | 'end'
  | 'middle'
  | 'start'
  | 'toggle'
  | 'top';
type CustomRef24 = 'center' | 'end' | 'start';
type CustomRef25 = 'lg' | 'md' | 'sm' | 'xl' | 'xs';
type CustomRef26 = 'actions' | 'desc' | 'figure' | 'title' | 'value';
type CustomRef27 = 'horizontal' | 'vertical';
type CustomRef28 = 'horizontal' | 'vertical';
type CustomRef29 = 'lg' | 'md' | 'sm' | 'xl' | 'xs';
type CustomRef30 = 'content' | 'disabled';
type CustomRef31 =
  | 'border'
  | 'bottom'
  | 'box'
  | 'lg'
  | 'lift'
  | 'md'
  | 'sm'
  | 'top'
  | 'xl'
  | 'xs';
type CustomRef32 =
  | 'box'
  | 'compact'
  | 'end'
  | 'horizontal'
  | 'middle'
  | 'snap-icon'
  | 'start'
  | 'vertical';
type CustomRef33 = 'bottom' | 'left' | 'right' | 'top';
type VerticalAlignRef1 =
  | 'baseline'
  | 'bottom'
  | 'middle'
  | 'sub'
  | 'super'
  | 'text-bottom'
  | 'text-top'
  | 'top';
type AnimationRef1 = 'bounce' | 'none' | 'ping' | 'pulse' | 'spin';
type AspectRatioRef1 = 'auto' | 'square' | 'video';
type GridAutoColumnsRef1 = 'auto' | 'fr' | 'max' | 'min';
type GridAutoRowsRef1 = 'auto' | 'fr' | 'max' | 'min';
type BackdropFilterRef1 =
  | '2xl'
  | '3xl'
  | 'lg'
  | 'md'
  | 'none'
  | 'sm'
  | 'xl'
  | 'xs';
type BackdropFilterRef2 = '0' | '50' | '75' | '100' | '125' | '150' | '200';
type BackdropFilterRef3 = '0' | '25' | '50' | '75' | '100';
type BackdropFilterRef4 = '0' | '15' | '30' | '60' | '90' | '180';
type BackdropFilterRef5 = '0' | '25' | '50' | '75' | '100';
type BackdropFilterRef6 =
  | '0'
  | '5'
  | '10'
  | '15'
  | '20'
  | '25'
  | '30'
  | '35'
  | '40'
  | '45'
  | '50'
  | '55'
  | '60'
  | '65'
  | '70'
  | '75'
  | '80'
  | '85'
  | '90'
  | '95'
  | '100';
type BackdropFilterRef7 = '0' | '50' | '100' | '150' | '200';
type BackdropFilterRef8 = '0' | '50' | '100';
type BackdropFilterRef9 = 'grayscale' | 'invert' | 'sepia';
type FlexBasisRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '2xl'
  | '2xs'
  | '3'
  | '3.5'
  | '3xl'
  | '3xs'
  | '4'
  | '4xl'
  | '5'
  | '5xl'
  | '6'
  | '6xl'
  | '7'
  | '7xl'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | 'auto'
  | 'full'
  | 'lg'
  | 'md'
  | 'px'
  | 'sm'
  | 'xl'
  | 'xs'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12';
type BackgroundColorRef1 =
  | 'accent'
  | 'error'
  | 'info'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';
type BackgroundSizeRef1 = 'auto' | 'contain' | 'cover';
type BackgroundBlendModeRef1 =
  | 'color'
  | 'darken'
  | 'difference'
  | 'exclusion'
  | 'hard-light'
  | 'hue'
  | 'lighten'
  | 'luminosity'
  | 'multiply'
  | 'normal'
  | 'overlay'
  | 'saturation'
  | 'screen'
  | 'soft-light';
type BackgroundBlendModeRef2 = 'burn' | 'dodge';
type BackgroundPositionRef1 = 'left' | 'right';
type BackgroundPositionRef2 = 'left' | 'right';
type BackgroundPositionRef3 = 'bottom' | 'center' | 'left' | 'right' | 'top';
type BackgroundClipRef1 = 'border' | 'content' | 'padding' | 'text';
type BackgroundAttachmentRef1 = 'fixed' | 'local' | 'scroll';
type BackgroundRepeatRef1 = 'round' | 'space' | 'x' | 'y';
type BackgroundRepeatRef2 = 'no-repeat' | 'repeat';
type BackgroundOriginRef1 = 'border' | 'content' | 'padding';
type DisplayRef1 = 'block' | 'flex' | 'grid' | 'table';
type DisplayRef2 =
  | 'caption'
  | 'cell'
  | 'column'
  | 'column-group'
  | 'footer-group'
  | 'header-group'
  | 'row'
  | 'row-group';
type FilterRef1 = '2xl' | '3xl' | 'lg' | 'md' | 'none' | 'sm' | 'xl' | 'xs';
type FilterRef2 = '0' | '50' | '75' | '100' | '125' | '150' | '200';
type FilterRef3 =
  | '2xl'
  | 'current'
  | 'inherit'
  | 'lg'
  | 'md'
  | 'none'
  | 'sm'
  | 'transparent'
  | 'xl'
  | 'xs'
  | TailwindGlobalColor;
type FilterRef4 = '0' | '25' | '50' | '75' | '100';
type FilterRef5 = '0' | '15' | '30' | '60' | '90' | '180';
type FilterRef6 = '0' | '25' | '50' | '75' | '100';
type FilterRef7 = '0' | '50' | '100' | '150' | '200';
type FilterRef8 = '0' | '50' | '100';
type BorderWidthRef1 =
  | '0'
  | '2'
  | '4'
  | '8'
  | 'accent'
  | 'error'
  | 'info'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';
type BorderWidthRef2 = '0' | '2' | '4' | '8' | 'reverse';
type BorderWidthRef3 = '0' | '2' | '4' | '8' | 'reverse';
type BorderWidthRef4 = 'x' | 'y';
type BorderColorRef1 =
  | 'accent-content'
  | 'amber-50'
  | 'amber-100'
  | 'amber-200'
  | 'amber-300'
  | 'amber-400'
  | 'amber-500'
  | 'amber-600'
  | 'amber-700'
  | 'amber-800'
  | 'amber-900'
  | 'amber-950'
  | 'base-100'
  | 'base-200'
  | 'base-300'
  | 'base-content'
  | 'black'
  | 'blue-50'
  | 'blue-100'
  | 'blue-200'
  | 'blue-300'
  | 'blue-400'
  | 'blue-500'
  | 'blue-600'
  | 'blue-700'
  | 'blue-800'
  | 'blue-900'
  | 'blue-950'
  | 'current'
  | 'cyan-50'
  | 'cyan-100'
  | 'cyan-200'
  | 'cyan-300'
  | 'cyan-400'
  | 'cyan-500'
  | 'cyan-600'
  | 'cyan-700'
  | 'cyan-800'
  | 'cyan-900'
  | 'cyan-950'
  | 'emerald-50'
  | 'emerald-100'
  | 'emerald-200'
  | 'emerald-300'
  | 'emerald-400'
  | 'emerald-500'
  | 'emerald-600'
  | 'emerald-700'
  | 'emerald-800'
  | 'emerald-900'
  | 'emerald-950'
  | 'error-content'
  | 'fuchsia-50'
  | 'fuchsia-100'
  | 'fuchsia-200'
  | 'fuchsia-300'
  | 'fuchsia-400'
  | 'fuchsia-500'
  | 'fuchsia-600'
  | 'fuchsia-700'
  | 'fuchsia-800'
  | 'fuchsia-900'
  | 'fuchsia-950'
  | 'gray-50'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'gray-950'
  | 'green-50'
  | 'green-100'
  | 'green-200'
  | 'green-300'
  | 'green-400'
  | 'green-500'
  | 'green-600'
  | 'green-700'
  | 'green-800'
  | 'green-900'
  | 'green-950'
  | 'indigo-50'
  | 'indigo-100'
  | 'indigo-200'
  | 'indigo-300'
  | 'indigo-400'
  | 'indigo-500'
  | 'indigo-600'
  | 'indigo-700'
  | 'indigo-800'
  | 'indigo-900'
  | 'indigo-950'
  | 'info-content'
  | 'inherit'
  | 'lime-50'
  | 'lime-100'
  | 'lime-200'
  | 'lime-300'
  | 'lime-400'
  | 'lime-500'
  | 'lime-600'
  | 'lime-700'
  | 'lime-800'
  | 'lime-900'
  | 'lime-950'
  | 'neutral-50'
  | 'neutral-100'
  | 'neutral-200'
  | 'neutral-300'
  | 'neutral-400'
  | 'neutral-500'
  | 'neutral-600'
  | 'neutral-700'
  | 'neutral-800'
  | 'neutral-900'
  | 'neutral-950'
  | 'neutral-content'
  | 'orange-50'
  | 'orange-100'
  | 'orange-200'
  | 'orange-300'
  | 'orange-400'
  | 'orange-500'
  | 'orange-600'
  | 'orange-700'
  | 'orange-800'
  | 'orange-900'
  | 'orange-950'
  | 'pink-50'
  | 'pink-100'
  | 'pink-200'
  | 'pink-300'
  | 'pink-400'
  | 'pink-500'
  | 'pink-600'
  | 'pink-700'
  | 'pink-800'
  | 'pink-900'
  | 'pink-950'
  | 'primary-content'
  | 'purple-50'
  | 'purple-100'
  | 'purple-200'
  | 'purple-300'
  | 'purple-400'
  | 'purple-500'
  | 'purple-600'
  | 'purple-700'
  | 'purple-800'
  | 'purple-900'
  | 'purple-950'
  | 'red-50'
  | 'red-100'
  | 'red-200'
  | 'red-300'
  | 'red-400'
  | 'red-500'
  | 'red-600'
  | 'red-700'
  | 'red-800'
  | 'red-900'
  | 'red-950'
  | 'rose-50'
  | 'rose-100'
  | 'rose-200'
  | 'rose-300'
  | 'rose-400'
  | 'rose-500'
  | 'rose-600'
  | 'rose-700'
  | 'rose-800'
  | 'rose-900'
  | 'rose-950'
  | 'secondary-content'
  | 'sky-50'
  | 'sky-100'
  | 'sky-200'
  | 'sky-300'
  | 'sky-400'
  | 'sky-500'
  | 'sky-600'
  | 'sky-700'
  | 'sky-800'
  | 'sky-900'
  | 'sky-950'
  | 'slate-50'
  | 'slate-100'
  | 'slate-200'
  | 'slate-300'
  | 'slate-400'
  | 'slate-500'
  | 'slate-600'
  | 'slate-700'
  | 'slate-800'
  | 'slate-900'
  | 'slate-950'
  | 'stone-50'
  | 'stone-100'
  | 'stone-200'
  | 'stone-300'
  | 'stone-400'
  | 'stone-500'
  | 'stone-600'
  | 'stone-700'
  | 'stone-800'
  | 'stone-900'
  | 'stone-950'
  | 'success-content'
  | 'teal-50'
  | 'teal-100'
  | 'teal-200'
  | 'teal-300'
  | 'teal-400'
  | 'teal-500'
  | 'teal-600'
  | 'teal-700'
  | 'teal-800'
  | 'teal-900'
  | 'teal-950'
  | 'transparent'
  | 'violet-50'
  | 'violet-100'
  | 'violet-200'
  | 'violet-300'
  | 'violet-400'
  | 'violet-500'
  | 'violet-600'
  | 'violet-700'
  | 'violet-800'
  | 'violet-900'
  | 'violet-950'
  | 'warning-content'
  | 'white'
  | 'yellow-50'
  | 'yellow-100'
  | 'yellow-200'
  | 'yellow-300'
  | 'yellow-400'
  | 'yellow-500'
  | 'yellow-600'
  | 'yellow-700'
  | 'yellow-800'
  | 'yellow-900'
  | 'yellow-950'
  | 'zinc-50'
  | 'zinc-100'
  | 'zinc-200'
  | 'zinc-300'
  | 'zinc-400'
  | 'zinc-500'
  | 'zinc-600'
  | 'zinc-700'
  | 'zinc-800'
  | 'zinc-900'
  | 'zinc-950';
type BorderStyleRef1 =
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'hidden'
  | 'none'
  | 'solid';
type BorderStyleRef2 = 'dashed' | 'dotted' | 'double' | 'none' | 'solid';
type BorderSpacingRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | 'px';
type BreakAfterRef1 =
  | 'all'
  | 'auto'
  | 'avoid'
  | 'avoid-page'
  | 'column'
  | 'left'
  | 'page'
  | 'right';
type WordBreakRef1 = 'all' | 'keep' | 'normal';
type BreakBeforeRef1 =
  | 'all'
  | 'auto'
  | 'avoid'
  | 'avoid-page'
  | 'column'
  | 'left'
  | 'page'
  | 'right';
type BreakInsideRef1 = 'auto' | 'avoid';
type BreakInsideRef2 = 'column' | 'page';
type OverflowWrapRef1 = 'anywhere' | 'break-word' | 'normal';
type WidthRef1 = 'lg' | 'md' | 'sm' | 'xl' | 'xs';
type WidthRef2 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'auto'
  | 'dvh'
  | 'dvw'
  | 'fit'
  | 'full'
  | 'lvh'
  | 'lvw'
  | 'max'
  | 'min'
  | 'px'
  | 'svh'
  | 'svw';
type OutlineColorRef1 =
  | 'accent-content'
  | 'amber-50'
  | 'amber-100'
  | 'amber-200'
  | 'amber-300'
  | 'amber-400'
  | 'amber-500'
  | 'amber-600'
  | 'amber-700'
  | 'amber-800'
  | 'amber-900'
  | 'amber-950'
  | 'base-100'
  | 'base-200'
  | 'base-300'
  | 'base-content'
  | 'black'
  | 'blue-50'
  | 'blue-100'
  | 'blue-200'
  | 'blue-300'
  | 'blue-400'
  | 'blue-500'
  | 'blue-600'
  | 'blue-700'
  | 'blue-800'
  | 'blue-900'
  | 'blue-950'
  | 'current'
  | 'cyan-50'
  | 'cyan-100'
  | 'cyan-200'
  | 'cyan-300'
  | 'cyan-400'
  | 'cyan-500'
  | 'cyan-600'
  | 'cyan-700'
  | 'cyan-800'
  | 'cyan-900'
  | 'cyan-950'
  | 'emerald-50'
  | 'emerald-100'
  | 'emerald-200'
  | 'emerald-300'
  | 'emerald-400'
  | 'emerald-500'
  | 'emerald-600'
  | 'emerald-700'
  | 'emerald-800'
  | 'emerald-900'
  | 'emerald-950'
  | 'error-content'
  | 'fuchsia-50'
  | 'fuchsia-100'
  | 'fuchsia-200'
  | 'fuchsia-300'
  | 'fuchsia-400'
  | 'fuchsia-500'
  | 'fuchsia-600'
  | 'fuchsia-700'
  | 'fuchsia-800'
  | 'fuchsia-900'
  | 'fuchsia-950'
  | 'gray-50'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'gray-950'
  | 'green-50'
  | 'green-100'
  | 'green-200'
  | 'green-300'
  | 'green-400'
  | 'green-500'
  | 'green-600'
  | 'green-700'
  | 'green-800'
  | 'green-900'
  | 'green-950'
  | 'indigo-50'
  | 'indigo-100'
  | 'indigo-200'
  | 'indigo-300'
  | 'indigo-400'
  | 'indigo-500'
  | 'indigo-600'
  | 'indigo-700'
  | 'indigo-800'
  | 'indigo-900'
  | 'indigo-950'
  | 'info-content'
  | 'inherit'
  | 'lime-50'
  | 'lime-100'
  | 'lime-200'
  | 'lime-300'
  | 'lime-400'
  | 'lime-500'
  | 'lime-600'
  | 'lime-700'
  | 'lime-800'
  | 'lime-900'
  | 'lime-950'
  | 'neutral-50'
  | 'neutral-100'
  | 'neutral-200'
  | 'neutral-300'
  | 'neutral-400'
  | 'neutral-500'
  | 'neutral-600'
  | 'neutral-700'
  | 'neutral-800'
  | 'neutral-900'
  | 'neutral-950'
  | 'neutral-content'
  | 'orange-50'
  | 'orange-100'
  | 'orange-200'
  | 'orange-300'
  | 'orange-400'
  | 'orange-500'
  | 'orange-600'
  | 'orange-700'
  | 'orange-800'
  | 'orange-900'
  | 'orange-950'
  | 'pink-50'
  | 'pink-100'
  | 'pink-200'
  | 'pink-300'
  | 'pink-400'
  | 'pink-500'
  | 'pink-600'
  | 'pink-700'
  | 'pink-800'
  | 'pink-900'
  | 'pink-950'
  | 'primary-content'
  | 'purple-50'
  | 'purple-100'
  | 'purple-200'
  | 'purple-300'
  | 'purple-400'
  | 'purple-500'
  | 'purple-600'
  | 'purple-700'
  | 'purple-800'
  | 'purple-900'
  | 'purple-950'
  | 'red-50'
  | 'red-100'
  | 'red-200'
  | 'red-300'
  | 'red-400'
  | 'red-500'
  | 'red-600'
  | 'red-700'
  | 'red-800'
  | 'red-900'
  | 'red-950'
  | 'rose-50'
  | 'rose-100'
  | 'rose-200'
  | 'rose-300'
  | 'rose-400'
  | 'rose-500'
  | 'rose-600'
  | 'rose-700'
  | 'rose-800'
  | 'rose-900'
  | 'rose-950'
  | 'secondary-content'
  | 'sky-50'
  | 'sky-100'
  | 'sky-200'
  | 'sky-300'
  | 'sky-400'
  | 'sky-500'
  | 'sky-600'
  | 'sky-700'
  | 'sky-800'
  | 'sky-900'
  | 'sky-950'
  | 'slate-50'
  | 'slate-100'
  | 'slate-200'
  | 'slate-300'
  | 'slate-400'
  | 'slate-500'
  | 'slate-600'
  | 'slate-700'
  | 'slate-800'
  | 'slate-900'
  | 'slate-950'
  | 'stone-50'
  | 'stone-100'
  | 'stone-200'
  | 'stone-300'
  | 'stone-400'
  | 'stone-500'
  | 'stone-600'
  | 'stone-700'
  | 'stone-800'
  | 'stone-900'
  | 'stone-950'
  | 'success-content'
  | 'teal-50'
  | 'teal-100'
  | 'teal-200'
  | 'teal-300'
  | 'teal-400'
  | 'teal-500'
  | 'teal-600'
  | 'teal-700'
  | 'teal-800'
  | 'teal-900'
  | 'teal-950'
  | 'transparent'
  | 'violet-50'
  | 'violet-100'
  | 'violet-200'
  | 'violet-300'
  | 'violet-400'
  | 'violet-500'
  | 'violet-600'
  | 'violet-700'
  | 'violet-800'
  | 'violet-900'
  | 'violet-950'
  | 'warning-content'
  | 'white'
  | 'yellow-50'
  | 'yellow-100'
  | 'yellow-200'
  | 'yellow-300'
  | 'yellow-400'
  | 'yellow-500'
  | 'yellow-600'
  | 'yellow-700'
  | 'yellow-800'
  | 'yellow-900'
  | 'yellow-950'
  | 'zinc-50'
  | 'zinc-100'
  | 'zinc-200'
  | 'zinc-300'
  | 'zinc-400'
  | 'zinc-500'
  | 'zinc-600'
  | 'zinc-700'
  | 'zinc-800'
  | 'zinc-900'
  | 'zinc-950';
type CaretColorRef1 =
  | 'current'
  | 'inherit'
  | 'transparent'
  | TailwindGlobalColor;
type ScrollSnapAlignRef1 = 'center' | 'end' | 'start';
type ScrollSnapAlignRef2 = 'align-none' | 'center' | 'end' | 'start';
type ColorRef1 =
  | 'accent'
  | 'error'
  | 'info'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';
type PaddingRef1 = 'lg' | 'md' | 'sm' | 'xl' | 'xs';
type PaddingRef2 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | 'px';
type PaddingRef3 = 'lg' | 'md' | 'sm' | 'xl' | 'xs';
type ClearRef1 = 'both' | 'end' | 'left' | 'none' | 'right' | 'start';
type ColumnsRef1 =
  | '1'
  | '2'
  | '2xl'
  | '2xs'
  | '3'
  | '3xl'
  | '3xs'
  | '4'
  | '4xl'
  | '5'
  | '5xl'
  | '6'
  | '6xl'
  | '7'
  | '7xl'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'auto'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xl'
  | 'xs';
type ContainRef1 =
  | 'content'
  | 'inline-size'
  | 'layout'
  | 'none'
  | 'paint'
  | 'size'
  | 'strict'
  | 'style';
type MaxWidthRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '2xl'
  | '2xs'
  | '3'
  | '3.5'
  | '3xl'
  | '3xs'
  | '4'
  | '4xl'
  | '5'
  | '5xl'
  | '6'
  | '6xl'
  | '7'
  | '7xl'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | 'dvh'
  | 'dvw'
  | 'fit'
  | 'full'
  | 'lg'
  | 'lvh'
  | 'lvw'
  | 'max'
  | 'md'
  | 'min'
  | 'none'
  | 'prose'
  | 'px'
  | 'screen'
  | 'sm'
  | 'svh'
  | 'svw'
  | 'xl'
  | 'xs'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12';
type AlignContentRef1 =
  | 'around'
  | 'baseline'
  | 'between'
  | 'center'
  | 'end'
  | 'evenly'
  | 'normal'
  | 'start'
  | 'stretch';
type ContentRef1 = 'center-safe' | 'end-safe' | 'none';
type CursorRef1 = 'resize';
type CursorRef2 = 'resize';
type CursorRef3 = 'resize';
type CursorRef4 = 'drop';
type CursorRef5 = 'resize';
type CursorRef6 = 'resize';
type CursorRef7 =
  | 'alias'
  | 'all-scroll'
  | 'auto'
  | 'cell'
  | 'col-resize'
  | 'context-menu'
  | 'copy'
  | 'crosshair'
  | 'default'
  | 'ew-resize'
  | 'grab'
  | 'grabbing'
  | 'help'
  | 'move'
  | 'nesw-resize'
  | 'none'
  | 'not-allowed'
  | 'ns-resize'
  | 'nw-resize'
  | 'nwse-resize'
  | 'pointer'
  | 'progress'
  | 'row-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'text'
  | 'vertical-text'
  | 'wait'
  | 'zoom-in'
  | 'zoom-out';
type TextDecorationThicknessRef1 =
  | '0'
  | '1'
  | '2'
  | 'accent'
  | 'auto'
  | 'clone'
  | 'error'
  | 'from-font'
  | 'info'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'slice'
  | 'success'
  | 'warning';
type TextDecorationColorRef1 =
  | 'accent-content'
  | 'amber-50'
  | 'amber-100'
  | 'amber-200'
  | 'amber-300'
  | 'amber-400'
  | 'amber-500'
  | 'amber-600'
  | 'amber-700'
  | 'amber-800'
  | 'amber-900'
  | 'amber-950'
  | 'base-100'
  | 'base-200'
  | 'base-300'
  | 'base-content'
  | 'black'
  | 'blue-50'
  | 'blue-100'
  | 'blue-200'
  | 'blue-300'
  | 'blue-400'
  | 'blue-500'
  | 'blue-600'
  | 'blue-700'
  | 'blue-800'
  | 'blue-900'
  | 'blue-950'
  | 'current'
  | 'cyan-50'
  | 'cyan-100'
  | 'cyan-200'
  | 'cyan-300'
  | 'cyan-400'
  | 'cyan-500'
  | 'cyan-600'
  | 'cyan-700'
  | 'cyan-800'
  | 'cyan-900'
  | 'cyan-950'
  | 'emerald-50'
  | 'emerald-100'
  | 'emerald-200'
  | 'emerald-300'
  | 'emerald-400'
  | 'emerald-500'
  | 'emerald-600'
  | 'emerald-700'
  | 'emerald-800'
  | 'emerald-900'
  | 'emerald-950'
  | 'error-content'
  | 'fuchsia-50'
  | 'fuchsia-100'
  | 'fuchsia-200'
  | 'fuchsia-300'
  | 'fuchsia-400'
  | 'fuchsia-500'
  | 'fuchsia-600'
  | 'fuchsia-700'
  | 'fuchsia-800'
  | 'fuchsia-900'
  | 'fuchsia-950'
  | 'gray-50'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'gray-950'
  | 'green-50'
  | 'green-100'
  | 'green-200'
  | 'green-300'
  | 'green-400'
  | 'green-500'
  | 'green-600'
  | 'green-700'
  | 'green-800'
  | 'green-900'
  | 'green-950'
  | 'indigo-50'
  | 'indigo-100'
  | 'indigo-200'
  | 'indigo-300'
  | 'indigo-400'
  | 'indigo-500'
  | 'indigo-600'
  | 'indigo-700'
  | 'indigo-800'
  | 'indigo-900'
  | 'indigo-950'
  | 'info-content'
  | 'inherit'
  | 'lime-50'
  | 'lime-100'
  | 'lime-200'
  | 'lime-300'
  | 'lime-400'
  | 'lime-500'
  | 'lime-600'
  | 'lime-700'
  | 'lime-800'
  | 'lime-900'
  | 'lime-950'
  | 'neutral-50'
  | 'neutral-100'
  | 'neutral-200'
  | 'neutral-300'
  | 'neutral-400'
  | 'neutral-500'
  | 'neutral-600'
  | 'neutral-700'
  | 'neutral-800'
  | 'neutral-900'
  | 'neutral-950'
  | 'neutral-content'
  | 'orange-50'
  | 'orange-100'
  | 'orange-200'
  | 'orange-300'
  | 'orange-400'
  | 'orange-500'
  | 'orange-600'
  | 'orange-700'
  | 'orange-800'
  | 'orange-900'
  | 'orange-950'
  | 'pink-50'
  | 'pink-100'
  | 'pink-200'
  | 'pink-300'
  | 'pink-400'
  | 'pink-500'
  | 'pink-600'
  | 'pink-700'
  | 'pink-800'
  | 'pink-900'
  | 'pink-950'
  | 'primary-content'
  | 'purple-50'
  | 'purple-100'
  | 'purple-200'
  | 'purple-300'
  | 'purple-400'
  | 'purple-500'
  | 'purple-600'
  | 'purple-700'
  | 'purple-800'
  | 'purple-900'
  | 'purple-950'
  | 'red-50'
  | 'red-100'
  | 'red-200'
  | 'red-300'
  | 'red-400'
  | 'red-500'
  | 'red-600'
  | 'red-700'
  | 'red-800'
  | 'red-900'
  | 'red-950'
  | 'rose-50'
  | 'rose-100'
  | 'rose-200'
  | 'rose-300'
  | 'rose-400'
  | 'rose-500'
  | 'rose-600'
  | 'rose-700'
  | 'rose-800'
  | 'rose-900'
  | 'rose-950'
  | 'secondary-content'
  | 'sky-50'
  | 'sky-100'
  | 'sky-200'
  | 'sky-300'
  | 'sky-400'
  | 'sky-500'
  | 'sky-600'
  | 'sky-700'
  | 'sky-800'
  | 'sky-900'
  | 'sky-950'
  | 'slate-50'
  | 'slate-100'
  | 'slate-200'
  | 'slate-300'
  | 'slate-400'
  | 'slate-500'
  | 'slate-600'
  | 'slate-700'
  | 'slate-800'
  | 'slate-900'
  | 'slate-950'
  | 'stone-50'
  | 'stone-100'
  | 'stone-200'
  | 'stone-300'
  | 'stone-400'
  | 'stone-500'
  | 'stone-600'
  | 'stone-700'
  | 'stone-800'
  | 'stone-900'
  | 'stone-950'
  | 'success-content'
  | 'teal-50'
  | 'teal-100'
  | 'teal-200'
  | 'teal-300'
  | 'teal-400'
  | 'teal-500'
  | 'teal-600'
  | 'teal-700'
  | 'teal-800'
  | 'teal-900'
  | 'teal-950'
  | 'transparent'
  | 'violet-50'
  | 'violet-100'
  | 'violet-200'
  | 'violet-300'
  | 'violet-400'
  | 'violet-500'
  | 'violet-600'
  | 'violet-700'
  | 'violet-800'
  | 'violet-900'
  | 'violet-950'
  | 'warning-content'
  | 'white'
  | 'yellow-50'
  | 'yellow-100'
  | 'yellow-200'
  | 'yellow-300'
  | 'yellow-400'
  | 'yellow-500'
  | 'yellow-600'
  | 'yellow-700'
  | 'yellow-800'
  | 'yellow-900'
  | 'yellow-950'
  | 'zinc-50'
  | 'zinc-100'
  | 'zinc-200'
  | 'zinc-300'
  | 'zinc-400'
  | 'zinc-500'
  | 'zinc-600'
  | 'zinc-700'
  | 'zinc-800'
  | 'zinc-900'
  | 'zinc-950';
type TextDecorationStyleRef1 =
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'solid'
  | 'wavy';
type TransitionDelayRef1 =
  | '75'
  | '100'
  | '150'
  | '200'
  | '300'
  | '500'
  | '700'
  | '1000';
type TransitionDurationRef1 =
  | '75'
  | '100'
  | '150'
  | '200'
  | '300'
  | '500'
  | '700'
  | '1000'
  | 'initial';
type TransitionTimingFunctionRef1 = 'out';
type TransitionTimingFunctionRef2 = 'in' | 'initial' | 'linear' | 'out';
type FillRef1 =
  | 'current'
  | 'inherit'
  | 'none'
  | 'transparent'
  | TailwindGlobalColor;
type FlexRef1 =
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'auto'
  | 'initial'
  | 'none';
type FlexDirectionRef1 = 'col' | 'col-reverse' | 'row' | 'row-reverse';
type FlexWrapRef1 = 'reverse';
type FlexWrapRef2 = 'nowrap' | 'wrap';
type FloatRef1 = 'end' | 'left' | 'none' | 'right' | 'start';
type FontWeightRef1 =
  | 'black'
  | 'bold'
  | 'extrabold'
  | 'extralight'
  | 'light'
  | 'medium'
  | 'normal'
  | 'semibold'
  | 'thin';
type FontFamilyRef1 = 'mono' | 'sans' | 'serif';
type FontStretchRef1 =
  | '50%'
  | '75%'
  | '90%'
  | '95%'
  | '100%'
  | '105%'
  | '110%'
  | '125%'
  | '150%'
  | '200%'
  | 'condensed'
  | 'expanded'
  | 'extra-condensed'
  | 'extra-expanded'
  | 'normal'
  | 'semi-condensed'
  | 'semi-expanded'
  | 'ultra-condensed'
  | 'ultra-expanded';
type GridAutoFlowRef1 = 'col' | 'col-dense' | 'dense' | 'row' | 'row-dense';
type GapRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | 'px';
type GridTemplateColumnsRef1 =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'none'
  | 'subgrid';
type GridTemplateRowsRef1 =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'none'
  | 'subgrid';
type HeightRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'auto'
  | 'dvh'
  | 'dvw'
  | 'fit'
  | 'full'
  | 'lvh'
  | 'lvw'
  | 'max'
  | 'min'
  | 'px'
  | 'svh'
  | 'svw';
type HyphensRef1 = 'auto' | 'manual' | 'none';
type BoxShadowRef1 =
  | 'ring'
  | 'ring-0'
  | 'ring-1'
  | 'ring-2'
  | 'ring-4'
  | 'ring-8'
  | 'ring-accent'
  | 'ring-accent-content'
  | 'ring-amber-50'
  | 'ring-amber-100'
  | 'ring-amber-200'
  | 'ring-amber-300'
  | 'ring-amber-400'
  | 'ring-amber-500'
  | 'ring-amber-600'
  | 'ring-amber-700'
  | 'ring-amber-800'
  | 'ring-amber-900'
  | 'ring-amber-950'
  | 'ring-base-100'
  | 'ring-base-200'
  | 'ring-base-300'
  | 'ring-base-content'
  | 'ring-black'
  | 'ring-blue-50'
  | 'ring-blue-100'
  | 'ring-blue-200'
  | 'ring-blue-300'
  | 'ring-blue-400'
  | 'ring-blue-500'
  | 'ring-blue-600'
  | 'ring-blue-700'
  | 'ring-blue-800'
  | 'ring-blue-900'
  | 'ring-blue-950'
  | 'ring-current'
  | 'ring-cyan-50'
  | 'ring-cyan-100'
  | 'ring-cyan-200'
  | 'ring-cyan-300'
  | 'ring-cyan-400'
  | 'ring-cyan-500'
  | 'ring-cyan-600'
  | 'ring-cyan-700'
  | 'ring-cyan-800'
  | 'ring-cyan-900'
  | 'ring-cyan-950'
  | 'ring-emerald-50'
  | 'ring-emerald-100'
  | 'ring-emerald-200'
  | 'ring-emerald-300'
  | 'ring-emerald-400'
  | 'ring-emerald-500'
  | 'ring-emerald-600'
  | 'ring-emerald-700'
  | 'ring-emerald-800'
  | 'ring-emerald-900'
  | 'ring-emerald-950'
  | 'ring-error'
  | 'ring-error-content'
  | 'ring-fuchsia-50'
  | 'ring-fuchsia-100'
  | 'ring-fuchsia-200'
  | 'ring-fuchsia-300'
  | 'ring-fuchsia-400'
  | 'ring-fuchsia-500'
  | 'ring-fuchsia-600'
  | 'ring-fuchsia-700'
  | 'ring-fuchsia-800'
  | 'ring-fuchsia-900'
  | 'ring-fuchsia-950'
  | 'ring-gray-50'
  | 'ring-gray-100'
  | 'ring-gray-200'
  | 'ring-gray-300'
  | 'ring-gray-400'
  | 'ring-gray-500'
  | 'ring-gray-600'
  | 'ring-gray-700'
  | 'ring-gray-800'
  | 'ring-gray-900'
  | 'ring-gray-950'
  | 'ring-green-50'
  | 'ring-green-100'
  | 'ring-green-200'
  | 'ring-green-300'
  | 'ring-green-400'
  | 'ring-green-500'
  | 'ring-green-600'
  | 'ring-green-700'
  | 'ring-green-800'
  | 'ring-green-900'
  | 'ring-green-950'
  | 'ring-indigo-50'
  | 'ring-indigo-100'
  | 'ring-indigo-200'
  | 'ring-indigo-300'
  | 'ring-indigo-400'
  | 'ring-indigo-500'
  | 'ring-indigo-600'
  | 'ring-indigo-700'
  | 'ring-indigo-800'
  | 'ring-indigo-900'
  | 'ring-indigo-950'
  | 'ring-info'
  | 'ring-info-content'
  | 'ring-inherit'
  | 'ring-lime-50'
  | 'ring-lime-100'
  | 'ring-lime-200'
  | 'ring-lime-300'
  | 'ring-lime-400'
  | 'ring-lime-500'
  | 'ring-lime-600'
  | 'ring-lime-700'
  | 'ring-lime-800'
  | 'ring-lime-900'
  | 'ring-lime-950'
  | 'ring-neutral'
  | 'ring-neutral-50'
  | 'ring-neutral-100'
  | 'ring-neutral-200'
  | 'ring-neutral-300'
  | 'ring-neutral-400'
  | 'ring-neutral-500'
  | 'ring-neutral-600'
  | 'ring-neutral-700'
  | 'ring-neutral-800'
  | 'ring-neutral-900'
  | 'ring-neutral-950'
  | 'ring-neutral-content'
  | 'ring-orange-50'
  | 'ring-orange-100'
  | 'ring-orange-200'
  | 'ring-orange-300'
  | 'ring-orange-400'
  | 'ring-orange-500'
  | 'ring-orange-600'
  | 'ring-orange-700'
  | 'ring-orange-800'
  | 'ring-orange-900'
  | 'ring-orange-950'
  | 'ring-pink-50'
  | 'ring-pink-100'
  | 'ring-pink-200'
  | 'ring-pink-300'
  | 'ring-pink-400'
  | 'ring-pink-500'
  | 'ring-pink-600'
  | 'ring-pink-700'
  | 'ring-pink-800'
  | 'ring-pink-900'
  | 'ring-pink-950'
  | 'ring-primary'
  | 'ring-primary-content'
  | 'ring-purple-50'
  | 'ring-purple-100'
  | 'ring-purple-200'
  | 'ring-purple-300'
  | 'ring-purple-400'
  | 'ring-purple-500'
  | 'ring-purple-600'
  | 'ring-purple-700'
  | 'ring-purple-800'
  | 'ring-purple-900'
  | 'ring-purple-950'
  | 'ring-red-50'
  | 'ring-red-100'
  | 'ring-red-200'
  | 'ring-red-300'
  | 'ring-red-400'
  | 'ring-red-500'
  | 'ring-red-600'
  | 'ring-red-700'
  | 'ring-red-800'
  | 'ring-red-900'
  | 'ring-red-950'
  | 'ring-rose-50'
  | 'ring-rose-100'
  | 'ring-rose-200'
  | 'ring-rose-300'
  | 'ring-rose-400'
  | 'ring-rose-500'
  | 'ring-rose-600'
  | 'ring-rose-700'
  | 'ring-rose-800'
  | 'ring-rose-900'
  | 'ring-rose-950'
  | 'ring-secondary'
  | 'ring-secondary-content'
  | 'ring-sky-50'
  | 'ring-sky-100'
  | 'ring-sky-200'
  | 'ring-sky-300'
  | 'ring-sky-400'
  | 'ring-sky-500'
  | 'ring-sky-600'
  | 'ring-sky-700'
  | 'ring-sky-800'
  | 'ring-sky-900'
  | 'ring-sky-950'
  | 'ring-slate-50'
  | 'ring-slate-100'
  | 'ring-slate-200'
  | 'ring-slate-300'
  | 'ring-slate-400'
  | 'ring-slate-500'
  | 'ring-slate-600'
  | 'ring-slate-700'
  | 'ring-slate-800'
  | 'ring-slate-900'
  | 'ring-slate-950'
  | 'ring-stone-50'
  | 'ring-stone-100'
  | 'ring-stone-200'
  | 'ring-stone-300'
  | 'ring-stone-400'
  | 'ring-stone-500'
  | 'ring-stone-600'
  | 'ring-stone-700'
  | 'ring-stone-800'
  | 'ring-stone-900'
  | 'ring-stone-950'
  | 'ring-success'
  | 'ring-success-content'
  | 'ring-teal-50'
  | 'ring-teal-100'
  | 'ring-teal-200'
  | 'ring-teal-300'
  | 'ring-teal-400'
  | 'ring-teal-500'
  | 'ring-teal-600'
  | 'ring-teal-700'
  | 'ring-teal-800'
  | 'ring-teal-900'
  | 'ring-teal-950'
  | 'ring-transparent'
  | 'ring-violet-50'
  | 'ring-violet-100'
  | 'ring-violet-200'
  | 'ring-violet-300'
  | 'ring-violet-400'
  | 'ring-violet-500'
  | 'ring-violet-600'
  | 'ring-violet-700'
  | 'ring-violet-800'
  | 'ring-violet-900'
  | 'ring-violet-950'
  | 'ring-warning'
  | 'ring-warning-content'
  | 'ring-white'
  | 'ring-yellow-50'
  | 'ring-yellow-100'
  | 'ring-yellow-200'
  | 'ring-yellow-300'
  | 'ring-yellow-400'
  | 'ring-yellow-500'
  | 'ring-yellow-600'
  | 'ring-yellow-700'
  | 'ring-yellow-800'
  | 'ring-yellow-900'
  | 'ring-yellow-950'
  | 'ring-zinc-50'
  | 'ring-zinc-100'
  | 'ring-zinc-200'
  | 'ring-zinc-300'
  | 'ring-zinc-400'
  | 'ring-zinc-500'
  | 'ring-zinc-600'
  | 'ring-zinc-700'
  | 'ring-zinc-800'
  | 'ring-zinc-900'
  | 'ring-zinc-950'
  | 'shadow-2xs'
  | 'shadow-accent'
  | 'shadow-accent-content'
  | 'shadow-amber-50'
  | 'shadow-amber-100'
  | 'shadow-amber-200'
  | 'shadow-amber-300'
  | 'shadow-amber-400'
  | 'shadow-amber-500'
  | 'shadow-amber-600'
  | 'shadow-amber-700'
  | 'shadow-amber-800'
  | 'shadow-amber-900'
  | 'shadow-amber-950'
  | 'shadow-base-100'
  | 'shadow-base-200'
  | 'shadow-base-300'
  | 'shadow-base-content'
  | 'shadow-black'
  | 'shadow-blue-50'
  | 'shadow-blue-100'
  | 'shadow-blue-200'
  | 'shadow-blue-300'
  | 'shadow-blue-400'
  | 'shadow-blue-500'
  | 'shadow-blue-600'
  | 'shadow-blue-700'
  | 'shadow-blue-800'
  | 'shadow-blue-900'
  | 'shadow-blue-950'
  | 'shadow-current'
  | 'shadow-cyan-50'
  | 'shadow-cyan-100'
  | 'shadow-cyan-200'
  | 'shadow-cyan-300'
  | 'shadow-cyan-400'
  | 'shadow-cyan-500'
  | 'shadow-cyan-600'
  | 'shadow-cyan-700'
  | 'shadow-cyan-800'
  | 'shadow-cyan-900'
  | 'shadow-cyan-950'
  | 'shadow-emerald-50'
  | 'shadow-emerald-100'
  | 'shadow-emerald-200'
  | 'shadow-emerald-300'
  | 'shadow-emerald-400'
  | 'shadow-emerald-500'
  | 'shadow-emerald-600'
  | 'shadow-emerald-700'
  | 'shadow-emerald-800'
  | 'shadow-emerald-900'
  | 'shadow-emerald-950'
  | 'shadow-error'
  | 'shadow-error-content'
  | 'shadow-fuchsia-50'
  | 'shadow-fuchsia-100'
  | 'shadow-fuchsia-200'
  | 'shadow-fuchsia-300'
  | 'shadow-fuchsia-400'
  | 'shadow-fuchsia-500'
  | 'shadow-fuchsia-600'
  | 'shadow-fuchsia-700'
  | 'shadow-fuchsia-800'
  | 'shadow-fuchsia-900'
  | 'shadow-fuchsia-950'
  | 'shadow-gray-50'
  | 'shadow-gray-100'
  | 'shadow-gray-200'
  | 'shadow-gray-300'
  | 'shadow-gray-400'
  | 'shadow-gray-500'
  | 'shadow-gray-600'
  | 'shadow-gray-700'
  | 'shadow-gray-800'
  | 'shadow-gray-900'
  | 'shadow-gray-950'
  | 'shadow-green-50'
  | 'shadow-green-100'
  | 'shadow-green-200'
  | 'shadow-green-300'
  | 'shadow-green-400'
  | 'shadow-green-500'
  | 'shadow-green-600'
  | 'shadow-green-700'
  | 'shadow-green-800'
  | 'shadow-green-900'
  | 'shadow-green-950'
  | 'shadow-indigo-50'
  | 'shadow-indigo-100'
  | 'shadow-indigo-200'
  | 'shadow-indigo-300'
  | 'shadow-indigo-400'
  | 'shadow-indigo-500'
  | 'shadow-indigo-600'
  | 'shadow-indigo-700'
  | 'shadow-indigo-800'
  | 'shadow-indigo-900'
  | 'shadow-indigo-950'
  | 'shadow-info'
  | 'shadow-info-content'
  | 'shadow-inherit'
  | 'shadow-initial'
  | 'shadow-lime-50'
  | 'shadow-lime-100'
  | 'shadow-lime-200'
  | 'shadow-lime-300'
  | 'shadow-lime-400'
  | 'shadow-lime-500'
  | 'shadow-lime-600'
  | 'shadow-lime-700'
  | 'shadow-lime-800'
  | 'shadow-lime-900'
  | 'shadow-lime-950'
  | 'shadow-neutral'
  | 'shadow-neutral-50'
  | 'shadow-neutral-100'
  | 'shadow-neutral-200'
  | 'shadow-neutral-300'
  | 'shadow-neutral-400'
  | 'shadow-neutral-500'
  | 'shadow-neutral-600'
  | 'shadow-neutral-700'
  | 'shadow-neutral-800'
  | 'shadow-neutral-900'
  | 'shadow-neutral-950'
  | 'shadow-neutral-content'
  | 'shadow-none'
  | 'shadow-orange-50'
  | 'shadow-orange-100'
  | 'shadow-orange-200'
  | 'shadow-orange-300'
  | 'shadow-orange-400'
  | 'shadow-orange-500'
  | 'shadow-orange-600'
  | 'shadow-orange-700'
  | 'shadow-orange-800'
  | 'shadow-orange-900'
  | 'shadow-orange-950'
  | 'shadow-pink-50'
  | 'shadow-pink-100'
  | 'shadow-pink-200'
  | 'shadow-pink-300'
  | 'shadow-pink-400'
  | 'shadow-pink-500'
  | 'shadow-pink-600'
  | 'shadow-pink-700'
  | 'shadow-pink-800'
  | 'shadow-pink-900'
  | 'shadow-pink-950'
  | 'shadow-primary'
  | 'shadow-primary-content'
  | 'shadow-purple-50'
  | 'shadow-purple-100'
  | 'shadow-purple-200'
  | 'shadow-purple-300'
  | 'shadow-purple-400'
  | 'shadow-purple-500'
  | 'shadow-purple-600'
  | 'shadow-purple-700'
  | 'shadow-purple-800'
  | 'shadow-purple-900'
  | 'shadow-purple-950'
  | 'shadow-red-50'
  | 'shadow-red-100'
  | 'shadow-red-200'
  | 'shadow-red-300'
  | 'shadow-red-400'
  | 'shadow-red-500'
  | 'shadow-red-600'
  | 'shadow-red-700'
  | 'shadow-red-800'
  | 'shadow-red-900'
  | 'shadow-red-950'
  | 'shadow-rose-50'
  | 'shadow-rose-100'
  | 'shadow-rose-200'
  | 'shadow-rose-300'
  | 'shadow-rose-400'
  | 'shadow-rose-500'
  | 'shadow-rose-600'
  | 'shadow-rose-700'
  | 'shadow-rose-800'
  | 'shadow-rose-900'
  | 'shadow-rose-950'
  | 'shadow-secondary'
  | 'shadow-secondary-content'
  | 'shadow-sky-50'
  | 'shadow-sky-100'
  | 'shadow-sky-200'
  | 'shadow-sky-300'
  | 'shadow-sky-400'
  | 'shadow-sky-500'
  | 'shadow-sky-600'
  | 'shadow-sky-700'
  | 'shadow-sky-800'
  | 'shadow-sky-900'
  | 'shadow-sky-950'
  | 'shadow-slate-50'
  | 'shadow-slate-100'
  | 'shadow-slate-200'
  | 'shadow-slate-300'
  | 'shadow-slate-400'
  | 'shadow-slate-500'
  | 'shadow-slate-600'
  | 'shadow-slate-700'
  | 'shadow-slate-800'
  | 'shadow-slate-900'
  | 'shadow-slate-950'
  | 'shadow-sm'
  | 'shadow-stone-50'
  | 'shadow-stone-100'
  | 'shadow-stone-200'
  | 'shadow-stone-300'
  | 'shadow-stone-400'
  | 'shadow-stone-500'
  | 'shadow-stone-600'
  | 'shadow-stone-700'
  | 'shadow-stone-800'
  | 'shadow-stone-900'
  | 'shadow-stone-950'
  | 'shadow-success'
  | 'shadow-success-content'
  | 'shadow-teal-50'
  | 'shadow-teal-100'
  | 'shadow-teal-200'
  | 'shadow-teal-300'
  | 'shadow-teal-400'
  | 'shadow-teal-500'
  | 'shadow-teal-600'
  | 'shadow-teal-700'
  | 'shadow-teal-800'
  | 'shadow-teal-900'
  | 'shadow-teal-950'
  | 'shadow-transparent'
  | 'shadow-violet-50'
  | 'shadow-violet-100'
  | 'shadow-violet-200'
  | 'shadow-violet-300'
  | 'shadow-violet-400'
  | 'shadow-violet-500'
  | 'shadow-violet-600'
  | 'shadow-violet-700'
  | 'shadow-violet-800'
  | 'shadow-violet-900'
  | 'shadow-violet-950'
  | 'shadow-warning'
  | 'shadow-warning-content'
  | 'shadow-white'
  | 'shadow-xs'
  | 'shadow-yellow-50'
  | 'shadow-yellow-100'
  | 'shadow-yellow-200'
  | 'shadow-yellow-300'
  | 'shadow-yellow-400'
  | 'shadow-yellow-500'
  | 'shadow-yellow-600'
  | 'shadow-yellow-700'
  | 'shadow-yellow-800'
  | 'shadow-yellow-900'
  | 'shadow-yellow-950'
  | 'shadow-zinc-50'
  | 'shadow-zinc-100'
  | 'shadow-zinc-200'
  | 'shadow-zinc-300'
  | 'shadow-zinc-400'
  | 'shadow-zinc-500'
  | 'shadow-zinc-600'
  | 'shadow-zinc-700'
  | 'shadow-zinc-800'
  | 'shadow-zinc-900'
  | 'shadow-zinc-950';
type BoxShadowRef2 =
  | '0'
  | '1'
  | '2'
  | '4'
  | '8'
  | 'current'
  | 'inherit'
  | 'transparent'
  | TailwindGlobalColor;
type BoxShadowRef3 =
  | '2xl'
  | '2xs'
  | 'current'
  | 'inherit'
  | 'initial'
  | 'inner'
  | 'lg'
  | 'md'
  | 'none'
  | 'sm'
  | 'transparent'
  | 'xl'
  | 'xs'
  | TailwindGlobalColor;
type AlignItemsRef1 =
  | 'baseline'
  | 'baseline-last'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'start'
  | 'stretch';
type JustifyContentRef1 =
  | 'around'
  | 'baseline'
  | 'between'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'evenly'
  | 'normal'
  | 'start'
  | 'stretch';
type JustifyItemsRef1 =
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'normal'
  | 'start'
  | 'stretch';
type JustifySelfRef1 =
  | 'auto'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'start'
  | 'stretch';
type FontSizeRef1 = 'lg' | 'md' | 'sm' | 'xl' | 'xs';
type FontSizeRef2 = 'lg' | 'md' | 'sm' | 'xl' | 'xs';
type FontSizeRef3 = 'lg' | 'md' | 'sm' | 'xl' | 'xs';
type FontSizeRef4 =
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'
  | 'base'
  | 'lg'
  | 'sm'
  | 'xl'
  | 'xs';
type LineHeightRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | 'loose'
  | 'none'
  | 'normal'
  | 'px'
  | 'relaxed'
  | 'snug'
  | 'tight';
type LineClampRef1 = '1' | '2' | '3' | '4' | '5' | '6' | 'none';
type TextDecorationLineRef1 = 'through';
type ListStyleTypeRef1 = 'col-wrap' | 'decimal' | 'disc' | 'none';
type MaskCompositeRef1 = 'add' | 'exclude' | 'intersect' | 'subtract';
type MaskModeRef1 = 'alpha' | 'luminance' | 'match';
type MaskSizeRef1 = 'auto' | 'contain' | 'cover';
type MaskPositionRef1 = 'left' | 'right';
type MaskPositionRef2 = 'left' | 'right';
type MaskPositionRef3 = 'bottom' | 'center' | 'left' | 'right' | 'top';
type MaskClipRef1 =
  | 'border'
  | 'content'
  | 'fill'
  | 'padding'
  | 'stroke'
  | 'view';
type MaskClipRef2 = 'no-clip';
type MaskRepeatRef1 = 'round' | 'space' | 'x' | 'y';
type MaskRepeatRef2 = 'no-repeat' | 'repeat';
type MaskOriginRef1 =
  | 'border'
  | 'content'
  | 'fill'
  | 'padding'
  | 'stroke'
  | 'view';
type MaxHeightRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'dvh'
  | 'dvw'
  | 'fit'
  | 'full'
  | 'lvh'
  | 'lvw'
  | 'max'
  | 'min'
  | 'none'
  | 'px'
  | 'screen'
  | 'svh'
  | 'svw';
type MinHeightRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12'
  | 'auto'
  | 'dvh'
  | 'dvw'
  | 'fit'
  | 'full'
  | 'lvh'
  | 'lvw'
  | 'max'
  | 'min'
  | 'px'
  | 'screen'
  | 'svh'
  | 'svw';
type MinWidthRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '2xl'
  | '2xs'
  | '3'
  | '3.5'
  | '3xl'
  | '3xs'
  | '4'
  | '4xl'
  | '5'
  | '5xl'
  | '6'
  | '6xl'
  | '7'
  | '7xl'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | 'auto'
  | 'dvh'
  | 'dvw'
  | 'fit'
  | 'full'
  | 'lg'
  | 'lvh'
  | 'lvw'
  | 'max'
  | 'md'
  | 'min'
  | 'px'
  | 'screen'
  | 'sm'
  | 'svh'
  | 'svw'
  | 'xl'
  | 'xs'
  | '1/2'
  | '1/3'
  | '1/4'
  | '1/5'
  | '1/6'
  | '1/12'
  | '2/3'
  | '2/4'
  | '2/5'
  | '2/6'
  | '2/12'
  | '3/4'
  | '3/5'
  | '3/6'
  | '3/12'
  | '4/5'
  | '4/6'
  | '4/12'
  | '5/6'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12';
type MixBlendModeRef1 =
  | 'color'
  | 'darken'
  | 'difference'
  | 'exclusion'
  | 'hard-light'
  | 'hue'
  | 'lighten'
  | 'luminosity'
  | 'multiply'
  | 'normal'
  | 'overlay'
  | 'plus-darker'
  | 'plus-lighter'
  | 'saturation'
  | 'screen'
  | 'soft-light';
type MixBlendModeRef2 = 'burn' | 'dodge';
type ObjectPositionRef1 = 'left' | 'right';
type ObjectPositionRef2 = 'bottom' | 'top';
type ObjectPositionRef3 = 'bottom' | 'top';
type ObjectPositionRef4 = 'left' | 'right';
type ObjectPositionRef5 = 'bottom' | 'center' | 'left' | 'right' | 'top';
type ObjectFitRef1 = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
type OpacityRef1 =
  | '0'
  | '5'
  | '10'
  | '15'
  | '20'
  | '25'
  | '30'
  | '35'
  | '40'
  | '45'
  | '50'
  | '55'
  | '60'
  | '65'
  | '70'
  | '75'
  | '80'
  | '85'
  | '90'
  | '95'
  | '100';
type TransformOriginRef1 = 'left' | 'right';
type TransformOriginRef2 = 'left' | 'right';
type TransformOriginRef3 = 'bottom' | 'center' | 'left' | 'right' | 'top';
type OutlineWidthRef1 =
  | '0'
  | '1'
  | '2'
  | '4'
  | '8'
  | 'accent'
  | 'error'
  | 'info'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';
type OutlineStyleRef1 =
  | 'dashed'
  | 'dotted'
  | 'double'
  | 'hidden'
  | 'none'
  | 'solid';
type OverflowRef1 = 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible';
type OverflowRef2 = 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible';
type OverflowRef3 = 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible';
type OverscrollBehaviorRef1 = 'auto' | 'contain' | 'none';
type OverscrollBehaviorRef2 = 'auto' | 'contain' | 'none';
type OverscrollBehaviorRef3 = 'auto' | 'contain' | 'none';
type PerspectiveRef1 =
  | 'distant'
  | 'dramatic'
  | 'midrange'
  | 'near'
  | 'none'
  | 'normal';
type PerspectiveOriginRef1 = 'left' | 'right';
type PerspectiveOriginRef2 = 'left' | 'right';
type PerspectiveOriginRef3 = 'bottom' | 'center' | 'left' | 'right' | 'top';
type PlaceContentRef1 =
  | 'around'
  | 'baseline'
  | 'between'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'evenly'
  | 'start'
  | 'stretch';
type PlaceItemsRef1 =
  | 'baseline'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'start'
  | 'stretch';
type PlaceSelfRef1 =
  | 'auto'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'start'
  | 'stretch';
type ResizeRef1 = 'none' | 'x' | 'y';
type BorderRadiusRef1 =
  | '2xl'
  | '3xl'
  | '4xl'
  | 'box'
  | 'field'
  | 'full'
  | 'lg'
  | 'md'
  | 'none'
  | 'selector'
  | 'sm'
  | 'xl'
  | 'xs';
type ColorSchemeRef1 = 'dark';
type ColorSchemeRef2 = 'dark' | 'light' | 'normal' | 'only-dark' | 'only-light';
type ScrollPaddingRef1 =
  | '0'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96'
  | 'px';
type UserSelectRef1 = 'all' | 'auto' | 'none' | 'text';
type AlignSelfRef1 =
  | 'auto'
  | 'baseline'
  | 'baseline-last'
  | 'center'
  | 'center-safe'
  | 'end'
  | 'end-safe'
  | 'start'
  | 'stretch';
type ScrollSnapTypeRef1 =
  | 'both'
  | 'mandatory'
  | 'none'
  | 'proximity'
  | 'x'
  | 'y';
type StrokeWidthRef1 =
  | '0'
  | '1'
  | '2'
  | '3'
  | 'accent'
  | 'error'
  | 'info'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';
type StrokeRef1 =
  | 'accent-content'
  | 'amber-50'
  | 'amber-100'
  | 'amber-200'
  | 'amber-300'
  | 'amber-400'
  | 'amber-500'
  | 'amber-600'
  | 'amber-700'
  | 'amber-800'
  | 'amber-900'
  | 'amber-950'
  | 'base-100'
  | 'base-200'
  | 'base-300'
  | 'base-content'
  | 'black'
  | 'blue-50'
  | 'blue-100'
  | 'blue-200'
  | 'blue-300'
  | 'blue-400'
  | 'blue-500'
  | 'blue-600'
  | 'blue-700'
  | 'blue-800'
  | 'blue-900'
  | 'blue-950'
  | 'current'
  | 'cyan-50'
  | 'cyan-100'
  | 'cyan-200'
  | 'cyan-300'
  | 'cyan-400'
  | 'cyan-500'
  | 'cyan-600'
  | 'cyan-700'
  | 'cyan-800'
  | 'cyan-900'
  | 'cyan-950'
  | 'emerald-50'
  | 'emerald-100'
  | 'emerald-200'
  | 'emerald-300'
  | 'emerald-400'
  | 'emerald-500'
  | 'emerald-600'
  | 'emerald-700'
  | 'emerald-800'
  | 'emerald-900'
  | 'emerald-950'
  | 'error-content'
  | 'fuchsia-50'
  | 'fuchsia-100'
  | 'fuchsia-200'
  | 'fuchsia-300'
  | 'fuchsia-400'
  | 'fuchsia-500'
  | 'fuchsia-600'
  | 'fuchsia-700'
  | 'fuchsia-800'
  | 'fuchsia-900'
  | 'fuchsia-950'
  | 'gray-50'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'gray-900'
  | 'gray-950'
  | 'green-50'
  | 'green-100'
  | 'green-200'
  | 'green-300'
  | 'green-400'
  | 'green-500'
  | 'green-600'
  | 'green-700'
  | 'green-800'
  | 'green-900'
  | 'green-950'
  | 'indigo-50'
  | 'indigo-100'
  | 'indigo-200'
  | 'indigo-300'
  | 'indigo-400'
  | 'indigo-500'
  | 'indigo-600'
  | 'indigo-700'
  | 'indigo-800'
  | 'indigo-900'
  | 'indigo-950'
  | 'info-content'
  | 'inherit'
  | 'lime-50'
  | 'lime-100'
  | 'lime-200'
  | 'lime-300'
  | 'lime-400'
  | 'lime-500'
  | 'lime-600'
  | 'lime-700'
  | 'lime-800'
  | 'lime-900'
  | 'lime-950'
  | 'neutral-50'
  | 'neutral-100'
  | 'neutral-200'
  | 'neutral-300'
  | 'neutral-400'
  | 'neutral-500'
  | 'neutral-600'
  | 'neutral-700'
  | 'neutral-800'
  | 'neutral-900'
  | 'neutral-950'
  | 'neutral-content'
  | 'none'
  | 'orange-50'
  | 'orange-100'
  | 'orange-200'
  | 'orange-300'
  | 'orange-400'
  | 'orange-500'
  | 'orange-600'
  | 'orange-700'
  | 'orange-800'
  | 'orange-900'
  | 'orange-950'
  | 'pink-50'
  | 'pink-100'
  | 'pink-200'
  | 'pink-300'
  | 'pink-400'
  | 'pink-500'
  | 'pink-600'
  | 'pink-700'
  | 'pink-800'
  | 'pink-900'
  | 'pink-950'
  | 'primary-content'
  | 'purple-50'
  | 'purple-100'
  | 'purple-200'
  | 'purple-300'
  | 'purple-400'
  | 'purple-500'
  | 'purple-600'
  | 'purple-700'
  | 'purple-800'
  | 'purple-900'
  | 'purple-950'
  | 'red-50'
  | 'red-100'
  | 'red-200'
  | 'red-300'
  | 'red-400'
  | 'red-500'
  | 'red-600'
  | 'red-700'
  | 'red-800'
  | 'red-900'
  | 'red-950'
  | 'rose-50'
  | 'rose-100'
  | 'rose-200'
  | 'rose-300'
  | 'rose-400'
  | 'rose-500'
  | 'rose-600'
  | 'rose-700'
  | 'rose-800'
  | 'rose-900'
  | 'rose-950'
  | 'secondary-content'
  | 'sky-50'
  | 'sky-100'
  | 'sky-200'
  | 'sky-300'
  | 'sky-400'
  | 'sky-500'
  | 'sky-600'
  | 'sky-700'
  | 'sky-800'
  | 'sky-900'
  | 'sky-950'
  | 'slate-50'
  | 'slate-100'
  | 'slate-200'
  | 'slate-300'
  | 'slate-400'
  | 'slate-500'
  | 'slate-600'
  | 'slate-700'
  | 'slate-800'
  | 'slate-900'
  | 'slate-950'
  | 'stone-50'
  | 'stone-100'
  | 'stone-200'
  | 'stone-300'
  | 'stone-400'
  | 'stone-500'
  | 'stone-600'
  | 'stone-700'
  | 'stone-800'
  | 'stone-900'
  | 'stone-950'
  | 'success-content'
  | 'teal-50'
  | 'teal-100'
  | 'teal-200'
  | 'teal-300'
  | 'teal-400'
  | 'teal-500'
  | 'teal-600'
  | 'teal-700'
  | 'teal-800'
  | 'teal-900'
  | 'teal-950'
  | 'transparent'
  | 'violet-50'
  | 'violet-100'
  | 'violet-200'
  | 'violet-300'
  | 'violet-400'
  | 'violet-500'
  | 'violet-600'
  | 'violet-700'
  | 'violet-800'
  | 'violet-900'
  | 'violet-950'
  | 'warning-content'
  | 'white'
  | 'yellow-50'
  | 'yellow-100'
  | 'yellow-200'
  | 'yellow-300'
  | 'yellow-400'
  | 'yellow-500'
  | 'yellow-600'
  | 'yellow-700'
  | 'yellow-800'
  | 'yellow-900'
  | 'yellow-950'
  | 'zinc-50'
  | 'zinc-100'
  | 'zinc-200'
  | 'zinc-300'
  | 'zinc-400'
  | 'zinc-500'
  | 'zinc-600'
  | 'zinc-700'
  | 'zinc-800'
  | 'zinc-900'
  | 'zinc-950';
type TextWrapRef1 = 'balance' | 'nowrap' | 'pretty' | 'wrap';
type TextAlignRef1 = 'center' | 'end' | 'justify' | 'left' | 'right' | 'start';
type TextShadowRef1 =
  | '2xs'
  | 'current'
  | 'inherit'
  | 'initial'
  | 'lg'
  | 'md'
  | 'none'
  | 'sm'
  | 'transparent'
  | 'xs'
  | TailwindGlobalColor;
type TouchActionRef1 = 'down' | 'left' | 'right' | 'up' | 'x' | 'y';
type TouchActionRef2 = 'auto' | 'manipulation' | 'none' | 'pinch-zoom';
type TransformRef1 = 'cpu' | 'gpu' | 'none';
type TransformBoxRef1 = 'border' | 'content' | 'fill' | 'stroke' | 'view';
type TransitionPropertyRef1 =
  | 'all'
  | 'colors'
  | 'none'
  | 'opacity'
  | 'shadow'
  | 'transform';
type WhiteSpaceRef1 = 'line' | 'wrap';
type WhiteSpaceRef2 = 'break-spaces' | 'normal' | 'nowrap' | 'pre';
type WillChangeRef1 = 'auto' | 'contents' | 'scroll' | 'transform';
type BackgroundImageBgconicLiteral = `bg-conic-${BackgroundImageRef1}`;
type BackgroundImageBgconicLiteralWithSign =
  | BackgroundImageBgconicLiteral
  | `-${BackgroundImageBgconicLiteral}`;
type BackgroundImageBglinearLiteral = `bg-linear-${BackgroundImageRef1}`;
type BackgroundImageBglinearLiteralWithSign =
  | BackgroundImageBglinearLiteral
  | `-${BackgroundImageBglinearLiteral}`;
type BackgroundImageBglineartoLiteral = `bg-linear-to-${BackgroundImageRef2}`;
type BackgroundImageBglineartoLiteralWithSign =
  | BackgroundImageBglineartoLiteral
  | `-${BackgroundImageBglineartoLiteral}`;
type BackgroundImageFromLiteral = `from-${BackgroundImageRef3}`;
type BackgroundImageFromLiteralWithSign =
  | BackgroundImageFromLiteral
  | `-${BackgroundImageFromLiteral}`;
type BackgroundImageToLiteral = `to-${BackgroundImageRef3}`;
type BackgroundImageToLiteralWithSign =
  | BackgroundImageToLiteral
  | `-${BackgroundImageToLiteral}`;
type BackgroundImageViaLiteral = `via-${BackgroundImageRef3}` | 'via-none';
type BackgroundImageViaLiteralWithSign =
  | BackgroundImageViaLiteral
  | `-${BackgroundImageViaLiteral}`;
type BackgroundImageBgLiteral = `bg-${BackgroundImageRef4}`;
type BackgroundImageBgLiteralWithSign =
  | BackgroundImageBgLiteral
  | `-${BackgroundImageBgLiteral}`;
type BackgroundImageProperty =
  | BackgroundImageBgconicLiteralWithSign
  | BackgroundImageBglinearLiteralWithSign
  | BackgroundImageBglineartoLiteralWithSign
  | BackgroundImageFromLiteralWithSign
  | BackgroundImageToLiteralWithSign
  | BackgroundImageViaLiteralWithSign
  | BackgroundImageBgLiteralWithSign;
type BackgroundImageArbitraryValue =
  | (`bg-conic-${number}` & {})
  | (`bg-conic-${number}` & {})
  | (`-bg-conic-${number}` & {})
  | (`bg-conic-(${string})` & {})
  | (`bg-conic-[${string}]` & {})
  | (`bg-linear-${number}` & {})
  | (`bg-linear-${number}` & {})
  | (`-bg-linear-${number}` & {})
  | (`bg-linear-(${string})` & {})
  | (`bg-linear-[${string}]` & {})
  | (`from-${number}` & {})
  | (`from-(${string})` & {})
  | (`from-[${string}]` & {})
  | (`to-${number}` & {})
  | (`to-(${string})` & {})
  | (`to-[${string}]` & {})
  | (`via-${number}` & {})
  | (`via-(${string})` & {})
  | (`via-[${string}]` & {})
  | (`bg-[${string}]` & {})
  | (`bg-(${string})` & {})
  | (`bg-${number}` & {})
  | (`bg-${number}` & {})
  | (`-bg-${number}` & {});
type BackgroundImageValue =
  | BackgroundImageProperty
  | (`bg-conic-${string}/${Variants1316686d}` & {})
  | (`bg-linear-${string}/${Variants1316686d}` & {})
  | (`bg-linear-to-${string}/${Variants1316686d}` & {})
  | (`from-${string}/${Variants1316686d}` & {})
  | (`to-${string}/${Variants1316686d}` & {})
  | (`via-${string}/${Variants1316686d}` & {})
  | (`bg-${string}/${Variants1316686d}` & {})
  | BackgroundImageArbitraryValue;
interface TailwindBackgroundImage {
  /**
   * `BackgroundImage`
   *
   * Utilities for controlling an element's background image.
   *
   * Arbitrary support
   *
   * `bg-conic-<number>`, `-bg-conic-<number>`, `bg-conic-(<var-name>)`,
   * `bg-conic-[<arbitrary-value>]`, `bg-linear-<number>` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/background-image Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-image , MDN docs}
   */
  backgroundImage: BackgroundImageValue;
}
type BottomLiteral = `bottom-${BottomRef1}`;
type BottomLiteralWithSign = BottomLiteral | `-${BottomLiteral}`;
type BottomProperty = BottomLiteralWithSign;
type BottomArbitraryValue =
  | (`bottom-${number}` & {})
  | (`bottom-${number}` & {})
  | (`-bottom-${number}` & {})
  | (`bottom-(${string})` & {})
  | (`bottom-[${string}]` & {});
type BottomValue = BottomProperty | BottomArbitraryValue;
interface TailwindBottom {
  /**
   * `Bottom`
   *
   * Utilities for controlling the placement of positioned elements.
   *
   * Arbitrary support
   *
   * `bottom-<number>`, `-bottom-<number>`, `bottom-(<var-name>)`,
   * `bottom-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/top-right-bottom-left Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/bottom , MDN docs}
   */
  bottom: BottomValue;
}
type GridColumnColendLiteral = `col-end-${GridColumnRef1}`;
type GridColumnColendLiteralWithSign =
  | GridColumnColendLiteral
  | `-${GridColumnColendLiteral}`;
type GridColumnColstartLiteral = `col-start-${GridColumnRef1}`;
type GridColumnColstartLiteralWithSign =
  | GridColumnColstartLiteral
  | `-${GridColumnColstartLiteral}`;
type GridColumnColspanLiteral = `col-span-${GridColumnRef2}`;
type GridColumnColspanLiteralWithSign =
  | GridColumnColspanLiteral
  | `-${GridColumnColspanLiteral}`;
type GridColumnColLiteral = `col-${GridColumnRef3}`;
type GridColumnColLiteralWithSign =
  | GridColumnColLiteral
  | `-${GridColumnColLiteral}`;
type GridColumnProperty =
  | GridColumnColendLiteralWithSign
  | GridColumnColstartLiteralWithSign
  | GridColumnColspanLiteralWithSign
  | GridColumnColLiteralWithSign;
type GridColumnArbitraryValue =
  | (`col-end-${number}` & {})
  | (`col-end-${number}` & {})
  | (`-col-end-${number}` & {})
  | (`col-end-(${string})` & {})
  | (`col-end-[${string}]` & {})
  | (`col-start-${number}` & {})
  | (`col-start-${number}` & {})
  | (`-col-start-${number}` & {})
  | (`col-start-(${string})` & {})
  | (`col-start-[${string}]` & {})
  | (`col-span-${number}` & {})
  | (`col-span-(${string})` & {})
  | (`col-span-[${string}]` & {})
  | (`col-${number}` & {})
  | (`col-(${string})` & {})
  | (`col-[${string}]` & {})
  | (`col-${number}` & {})
  | (`-col-${number}` & {});
type GridColumnValue = GridColumnProperty | GridColumnArbitraryValue;
interface TailwindGridColumn {
  /**
   * `GridColumn`
   *
   * Utilities for controlling how elements are sized and placed across grid
   * columns.
   *
   * Arbitrary support
   *
   * `col-end-<number>`, `-col-end-<number>`, `col-end-(<var-name>)`,
   * `col-end-[<arbitrary-value>]`, `col-start-<number>` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/grid-column Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column , MDN docs}
   */
  gridColumn: GridColumnValue;
}
type EndLiteral = `end-${EndRef1}`;
type EndLiteralWithSign = EndLiteral | `-${EndLiteral}`;
type EndValue = EndLiteralWithSign;
interface TailwindEnd {
  /**
   * `End`
   *
   * @see
   * {@link https://tailwindcss.com/docs Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/end , MDN docs}
   */
  end: EndValue;
}
type TextIndentIndentLiteral = `indent-${TextIndentRef1}`;
type TextIndentIndentLiteralWithSign =
  | TextIndentIndentLiteral
  | `-${TextIndentIndentLiteral}`;
type TextIndentProperty = TextIndentIndentLiteralWithSign;
type TextIndentArbitraryValue =
  | (`indent-${number}` & {})
  | (`indent-${number}` & {})
  | (`-indent-${number}` & {})
  | (`indent-(${string})` & {})
  | (`indent-[${string}]` & {});
type TextIndentValue = TextIndentProperty | TextIndentArbitraryValue;
interface TailwindTextIndent {
  /**
   * `TextIndent`
   *
   * Utilities for controlling the amount of empty space shown before text in a
   * block.
   *
   * Arbitrary support
   *
   * `indent-<number>`, `-indent-<number>`, `indent-(<var-name>)`,
   * `indent-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/text-indent Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent , MDN docs}
   */
  textIndent: TextIndentValue;
}
type InsetXLiteral = `inset-x-${InsetRef1}`;
type InsetXLiteralWithSign = InsetXLiteral | `-${InsetXLiteral}`;
type InsetYLiteral = `inset-y-${InsetRef1}`;
type InsetYLiteralWithSign = InsetYLiteral | `-${InsetYLiteral}`;
type InsetLiteral = `inset-${InsetRef1}`;
type InsetLiteralWithSign = InsetLiteral | `-${InsetLiteral}`;
type InsetValue =
  | InsetXLiteralWithSign
  | InsetYLiteralWithSign
  | InsetLiteralWithSign;
interface TailwindInset {
  /**
   * `Inset`
   *
   * @see
   * {@link https://tailwindcss.com/docs Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/inset , MDN docs}
   */
  inset: InsetValue;
}
type LeftLiteral = `left-${LeftRef1}`;
type LeftLiteralWithSign = LeftLiteral | `-${LeftLiteral}`;
type LeftProperty = LeftLiteralWithSign;
type LeftArbitraryValue =
  | (`left-${number}` & {})
  | (`left-${number}` & {})
  | (`-left-${number}` & {})
  | (`left-(${string})` & {})
  | (`left-[${string}]` & {});
type LeftValue = LeftProperty | LeftArbitraryValue;
interface TailwindLeft {
  /**
   * `Left`
   *
   * Utilities for controlling the placement of positioned elements.
   *
   * Arbitrary support
   *
   * `left-<number>`, `-left-<number>`, `left-(<var-name>)`,
   * `left-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/top-right-bottom-left Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/left , MDN docs}
   */
  left: LeftValue;
}
type MarginMLiteral = `m-${MarginRef1}`;
type MarginMLiteralWithSign = MarginMLiteral | `-${MarginMLiteral}`;
type MarginMbLiteral = `mb-${MarginRef1}`;
type MarginMbLiteralWithSign = MarginMbLiteral | `-${MarginMbLiteral}`;
type MarginMeLiteral = `me-${MarginRef1}`;
type MarginMeLiteralWithSign = MarginMeLiteral | `-${MarginMeLiteral}`;
type MarginMlLiteral = `ml-${MarginRef1}`;
type MarginMlLiteralWithSign = MarginMlLiteral | `-${MarginMlLiteral}`;
type MarginMrLiteral = `mr-${MarginRef1}`;
type MarginMrLiteralWithSign = MarginMrLiteral | `-${MarginMrLiteral}`;
type MarginMsLiteral = `ms-${MarginRef1}`;
type MarginMsLiteralWithSign = MarginMsLiteral | `-${MarginMsLiteral}`;
type MarginMtLiteral = `mt-${MarginRef1}`;
type MarginMtLiteralWithSign = MarginMtLiteral | `-${MarginMtLiteral}`;
type MarginMxLiteral = `mx-${MarginRef1}`;
type MarginMxLiteralWithSign = MarginMxLiteral | `-${MarginMxLiteral}`;
type MarginMyLiteral = `my-${MarginRef1}`;
type MarginMyLiteralWithSign = MarginMyLiteral | `-${MarginMyLiteral}`;
type MarginSpacexLiteral = `space-x-${MarginRef2}`;
type MarginSpacexLiteralWithSign =
  | MarginSpacexLiteral
  | `-${MarginSpacexLiteral}`;
type MarginSpaceyLiteral = `space-y-${MarginRef2}`;
type MarginSpaceyLiteralWithSign =
  | MarginSpaceyLiteral
  | `-${MarginSpaceyLiteral}`;
type MarginProperty =
  | MarginMLiteralWithSign
  | MarginMbLiteralWithSign
  | MarginMeLiteralWithSign
  | MarginMlLiteralWithSign
  | MarginMrLiteralWithSign
  | MarginMsLiteralWithSign
  | MarginMtLiteralWithSign
  | MarginMxLiteralWithSign
  | MarginMyLiteralWithSign
  | MarginSpacexLiteralWithSign
  | MarginSpaceyLiteralWithSign;
type MarginArbitraryValue =
  | (`m-${number}` & {})
  | (`m-${number}` & {})
  | (`-m-${number}` & {})
  | (`m-(${string})` & {})
  | (`m-[${string}]` & {})
  | (`mb-${number}` & {})
  | (`mb-${number}` & {})
  | (`-mb-${number}` & {})
  | (`mb-(${string})` & {})
  | (`mb-[${string}]` & {})
  | (`me-${number}` & {})
  | (`me-${number}` & {})
  | (`-me-${number}` & {})
  | (`me-(${string})` & {})
  | (`me-[${string}]` & {})
  | (`ml-${number}` & {})
  | (`ml-${number}` & {})
  | (`-ml-${number}` & {})
  | (`ml-(${string})` & {})
  | (`ml-[${string}]` & {})
  | (`mr-${number}` & {})
  | (`mr-${number}` & {})
  | (`-mr-${number}` & {})
  | (`mr-(${string})` & {})
  | (`mr-[${string}]` & {})
  | (`ms-${number}` & {})
  | (`ms-${number}` & {})
  | (`-ms-${number}` & {})
  | (`ms-(${string})` & {})
  | (`ms-[${string}]` & {})
  | (`mt-${number}` & {})
  | (`mt-${number}` & {})
  | (`-mt-${number}` & {})
  | (`mt-(${string})` & {})
  | (`mt-[${string}]` & {})
  | (`mx-${number}` & {})
  | (`mx-${number}` & {})
  | (`-mx-${number}` & {})
  | (`mx-(${string})` & {})
  | (`mx-[${string}]` & {})
  | (`my-${number}` & {})
  | (`my-${number}` & {})
  | (`-my-${number}` & {})
  | (`my-(${string})` & {})
  | (`my-[${string}]` & {})
  | (`space-x-${number}` & {})
  | (`space-x-${number}` & {})
  | (`-space-x-${number}` & {})
  | (`space-x-(${string})` & {})
  | (`space-x-[${string}]` & {})
  | (`space-y-${number}` & {})
  | (`space-y-${number}` & {})
  | (`-space-y-${number}` & {})
  | (`space-y-(${string})` & {})
  | (`space-y-[${string}]` & {});
type MarginValue = MarginProperty | MarginArbitraryValue;
interface TailwindMargin {
  /**
   * `Margin`
   *
   * Utilities for controlling an element's margin.
   *
   * Arbitrary support
   *
   * `m-<number>`, `-m-<number>`, `m-(<var-name>)`, `m-[<arbitrary-value>]`,
   * `mb-<number>` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/margin Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/margin , MDN docs}
   */
  margin: MarginValue;
}
type MaskImageMaskconicfromLiteral = `mask-conic-from-${MaskImageRef1}`;
type MaskImageMaskconicfromLiteralWithSign =
  | MaskImageMaskconicfromLiteral
  | `-${MaskImageMaskconicfromLiteral}`;
type MaskImageMaskconictoLiteral = `mask-conic-to-${MaskImageRef1}`;
type MaskImageMaskconictoLiteralWithSign =
  | MaskImageMaskconictoLiteral
  | `-${MaskImageMaskconictoLiteral}`;
type MaskImageMasklinearfromLiteral = `mask-linear-from-${MaskImageRef1}`;
type MaskImageMasklinearfromLiteralWithSign =
  | MaskImageMasklinearfromLiteral
  | `-${MaskImageMasklinearfromLiteral}`;
type MaskImageMasklineartoLiteral = `mask-linear-to-${MaskImageRef1}`;
type MaskImageMasklineartoLiteralWithSign =
  | MaskImageMasklineartoLiteral
  | `-${MaskImageMasklineartoLiteral}`;
type MaskImageMaskbfromLiteral = `mask-b-from-${MaskImageRef1}`;
type MaskImageMaskbfromLiteralWithSign =
  | MaskImageMaskbfromLiteral
  | `-${MaskImageMaskbfromLiteral}`;
type MaskImageMaskbtoLiteral = `mask-b-to-${MaskImageRef1}`;
type MaskImageMaskbtoLiteralWithSign =
  | MaskImageMaskbtoLiteral
  | `-${MaskImageMaskbtoLiteral}`;
type MaskImageMaskradialatbottomLiteral =
  `mask-radial-at-bottom-${MaskImageRef2}`;
type MaskImageMaskradialatbottomLiteralWithSign =
  | MaskImageMaskradialatbottomLiteral
  | `-${MaskImageMaskradialatbottomLiteral}`;
type MaskImageMaskradialattopLiteral = `mask-radial-at-top-${MaskImageRef3}`;
type MaskImageMaskradialattopLiteralWithSign =
  | MaskImageMaskradialattopLiteral
  | `-${MaskImageMaskradialattopLiteral}`;
type MaskImageMaskradialfromLiteral = `mask-radial-from-${MaskImageRef1}`;
type MaskImageMaskradialfromLiteralWithSign =
  | MaskImageMaskradialfromLiteral
  | `-${MaskImageMaskradialfromLiteral}`;
type MaskImageMaskradialtoLiteral = `mask-radial-to-${MaskImageRef1}`;
type MaskImageMaskradialtoLiteralWithSign =
  | MaskImageMaskradialtoLiteral
  | `-${MaskImageMaskradialtoLiteral}`;
type MaskImageMasktfromLiteral = `mask-t-from-${MaskImageRef1}`;
type MaskImageMasktfromLiteralWithSign =
  | MaskImageMasktfromLiteral
  | `-${MaskImageMasktfromLiteral}`;
type MaskImageMaskttoLiteral = `mask-t-to-${MaskImageRef1}`;
type MaskImageMaskttoLiteralWithSign =
  | MaskImageMaskttoLiteral
  | `-${MaskImageMaskttoLiteral}`;
type MaskImageMasktriangleLiteral = `mask-triangle-${MaskImageRef4}`;
type MaskImageMasktriangleLiteralWithSign =
  | MaskImageMasktriangleLiteral
  | `-${MaskImageMasktriangleLiteral}`;
type MaskImageMaskxfromLiteral = `mask-x-from-${MaskImageRef1}`;
type MaskImageMaskxfromLiteralWithSign =
  | MaskImageMaskxfromLiteral
  | `-${MaskImageMaskxfromLiteral}`;
type MaskImageMaskxtoLiteral = `mask-x-to-${MaskImageRef1}`;
type MaskImageMaskxtoLiteralWithSign =
  | MaskImageMaskxtoLiteral
  | `-${MaskImageMaskxtoLiteral}`;
type MaskImageMaskyfromLiteral = `mask-y-from-${MaskImageRef1}`;
type MaskImageMaskyfromLiteralWithSign =
  | MaskImageMaskyfromLiteral
  | `-${MaskImageMaskyfromLiteral}`;
type MaskImageMaskytoLiteral = `mask-y-to-${MaskImageRef1}`;
type MaskImageMaskytoLiteralWithSign =
  | MaskImageMaskytoLiteral
  | `-${MaskImageMaskytoLiteral}`;
type MaskImageLoadingLiteral = `loading-${MaskImageRef5}`;
type MaskImageLoadingLiteralWithSign =
  | MaskImageLoadingLiteral
  | `-${MaskImageLoadingLiteral}`;
type MaskImageMaskradialatLiteral = `mask-radial-at-${MaskImageRef6}`;
type MaskImageMaskradialatLiteralWithSign =
  | MaskImageMaskradialatLiteral
  | `-${MaskImageMaskradialatLiteral}`;
type MaskImageMaskradialLiteral = `mask-radial-${MaskImageRef7}`;
type MaskImageMaskradialLiteralWithSign =
  | MaskImageMaskradialLiteral
  | `-${MaskImageMaskradialLiteral}`;
type MaskImageMasklinearLiteral = `mask-linear-${MaskImageRef8}`;
type MaskImageMasklinearLiteralWithSign =
  | MaskImageMasklinearLiteral
  | `-${MaskImageMasklinearLiteral}`;
type MaskImageMaskLiteral = `mask-${MaskImageRef9}`;
type MaskImageMaskLiteralWithSign =
  | MaskImageMaskLiteral
  | `-${MaskImageMaskLiteral}`;
type MaskImageMaskconicLiteral = `mask-conic-${MaskImageRef8}`;
type MaskImageMaskconicLiteralWithSign =
  | MaskImageMaskconicLiteral
  | `-${MaskImageMaskconicLiteral}`;
type MaskImageMasklfromLiteral = `mask-l-from-${MaskImageRef1}`;
type MaskImageMasklfromLiteralWithSign =
  | MaskImageMasklfromLiteral
  | `-${MaskImageMasklfromLiteral}`;
type MaskImageMaskltoLiteral = `mask-l-to-${MaskImageRef1}`;
type MaskImageMaskltoLiteralWithSign =
  | MaskImageMaskltoLiteral
  | `-${MaskImageMaskltoLiteral}`;
type MaskImageMaskrfromLiteral = `mask-r-from-${MaskImageRef1}`;
type MaskImageMaskrfromLiteralWithSign =
  | MaskImageMaskrfromLiteral
  | `-${MaskImageMaskrfromLiteral}`;
type MaskImageMaskrtoLiteral = `mask-r-to-${MaskImageRef1}`;
type MaskImageMaskrtoLiteralWithSign =
  | MaskImageMaskrtoLiteral
  | `-${MaskImageMaskrtoLiteral}`;
type MaskImageProperty =
  | MaskImageMaskconicfromLiteralWithSign
  | MaskImageMaskconictoLiteralWithSign
  | MaskImageMasklinearfromLiteralWithSign
  | MaskImageMasklineartoLiteralWithSign
  | MaskImageMaskbfromLiteralWithSign
  | MaskImageMaskbtoLiteralWithSign
  | MaskImageMaskradialatbottomLiteralWithSign
  | MaskImageMaskradialattopLiteralWithSign
  | MaskImageMaskradialfromLiteralWithSign
  | MaskImageMaskradialtoLiteralWithSign
  | MaskImageMasktfromLiteralWithSign
  | MaskImageMaskttoLiteralWithSign
  | MaskImageMasktriangleLiteralWithSign
  | MaskImageMaskxfromLiteralWithSign
  | MaskImageMaskxtoLiteralWithSign
  | MaskImageMaskyfromLiteralWithSign
  | MaskImageMaskytoLiteralWithSign
  | MaskImageLoadingLiteralWithSign
  | MaskImageMaskradialatLiteralWithSign
  | MaskImageMaskradialLiteralWithSign
  | MaskImageMasklinearLiteralWithSign
  | MaskImageMaskLiteralWithSign
  | MaskImageMaskconicLiteralWithSign
  | MaskImageMasklfromLiteralWithSign
  | MaskImageMaskltoLiteralWithSign
  | MaskImageMaskrfromLiteralWithSign
  | MaskImageMaskrtoLiteralWithSign;
type MaskImageArbitraryValue =
  | (`mask-conic-from-${number}` & {})
  | (`mask-conic-from-(${string})` & {})
  | (`mask-conic-from-[${string}]` & {})
  | (`mask-conic-to-${number}` & {})
  | (`mask-conic-to-(${string})` & {})
  | (`mask-conic-to-[${string}]` & {})
  | (`mask-linear-from-${number}` & {})
  | (`mask-linear-from-(${string})` & {})
  | (`mask-linear-from-[${string}]` & {})
  | (`mask-linear-to-${number}` & {})
  | (`mask-linear-to-(${string})` & {})
  | (`mask-linear-to-[${string}]` & {})
  | (`mask-b-from-${number}` & {})
  | (`mask-b-from-(${string})` & {})
  | (`mask-b-from-[${string}]` & {})
  | (`mask-b-to-${number}` & {})
  | (`mask-b-to-(${string})` & {})
  | (`mask-b-to-[${string}]` & {})
  | (`mask-radial-from-${number}` & {})
  | (`mask-radial-from-(${string})` & {})
  | (`mask-radial-from-[${string}]` & {})
  | (`mask-radial-to-${number}` & {})
  | (`mask-radial-to-(${string})` & {})
  | (`mask-radial-to-[${string}]` & {})
  | (`mask-t-from-${number}` & {})
  | (`mask-t-from-(${string})` & {})
  | (`mask-t-from-[${string}]` & {})
  | (`mask-t-to-${number}` & {})
  | (`mask-t-to-(${string})` & {})
  | (`mask-t-to-[${string}]` & {})
  | (`mask-x-from-${number}` & {})
  | (`mask-x-from-(${string})` & {})
  | (`mask-x-from-[${string}]` & {})
  | (`mask-x-to-${number}` & {})
  | (`mask-x-to-(${string})` & {})
  | (`mask-x-to-[${string}]` & {})
  | (`mask-y-from-${number}` & {})
  | (`mask-y-from-(${string})` & {})
  | (`mask-y-from-[${string}]` & {})
  | (`mask-y-to-${number}` & {})
  | (`mask-y-to-(${string})` & {})
  | (`mask-y-to-[${string}]` & {})
  | (`mask-radial-[${string}]` & {})
  | (`mask-radial-${number}` & {})
  | (`mask-radial-(${string})` & {})
  | (`mask-linear-${number}` & {})
  | (`mask-linear-${number}` & {})
  | (`-mask-linear-${number}` & {})
  | (`mask-linear-(${string})` & {})
  | (`mask-linear-[${string}]` & {})
  | (`mask-[${string}]` & {})
  | (`mask-(${string})` & {})
  | (`mask-${number}` & {})
  | (`mask-${number}` & {})
  | (`-mask-${number}` & {})
  | (`mask-conic-${number}` & {})
  | (`mask-conic-${number}` & {})
  | (`-mask-conic-${number}` & {})
  | (`mask-conic-(${string})` & {})
  | (`mask-conic-[${string}]` & {})
  | (`mask-l-from-${number}` & {})
  | (`mask-l-from-(${string})` & {})
  | (`mask-l-from-[${string}]` & {})
  | (`mask-l-to-${number}` & {})
  | (`mask-l-to-(${string})` & {})
  | (`mask-l-to-[${string}]` & {})
  | (`mask-r-from-${number}` & {})
  | (`mask-r-from-(${string})` & {})
  | (`mask-r-from-[${string}]` & {})
  | (`mask-r-to-${number}` & {})
  | (`mask-r-to-(${string})` & {})
  | (`mask-r-to-[${string}]` & {});
type MaskImageValue =
  | MaskImageProperty
  | (`mask-conic-from-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-conic-to-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-linear-from-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-linear-to-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-b-from-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-b-to-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-radial-at-bottom-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-radial-at-top-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-radial-from-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-radial-to-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-t-from-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-t-to-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-triangle-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-x-from-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-x-to-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-y-from-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-y-to-${string}/${VariantsA91e8ba1}` & {})
  | (`loading-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-radial-at-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-radial-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-linear-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-conic-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-l-from-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-l-to-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-r-from-${string}/${VariantsA91e8ba1}` & {})
  | (`mask-r-to-${string}/${VariantsA91e8ba1}` & {})
  | MaskImageArbitraryValue;
interface TailwindMaskImage {
  /**
   * `MaskImage`
   *
   * Utilities for controlling an element's mask image.
   *
   * Arbitrary support
   *
   * `mask-conic-from-<number>`, `mask-conic-from-(<var-name>)`,
   * `mask-conic-from-[<arbitrary-value>]`, `mask-conic-to-<number>`,
   * `mask-conic-to-(<var-name>)` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/mask-image Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image , MDN docs}
   */
  maskImage: MaskImageValue;
}
type OrderLiteral = `order-${OrderRef1}`;
type OrderLiteralWithSign = OrderLiteral | `-${OrderLiteral}`;
type OrderProperty = OrderLiteralWithSign;
type OrderArbitraryValue =
  | (`order-${number}` & {})
  | (`order-${number}` & {})
  | (`-order-${number}` & {})
  | (`order-(${string})` & {})
  | (`order-[${string}]` & {});
type OrderValue = OrderProperty | OrderArbitraryValue;
interface TailwindOrder {
  /**
   * `Order`
   *
   * Utilities for controlling the order of flex and grid items.
   *
   * Arbitrary support
   *
   * `order-<number>`, `-order-<number>`, `order-(<var-name>)`,
   * `order-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/order Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/order , MDN docs}
   */
  order: OrderValue;
}
type OutlineOffsetLiteral = `outline-offset-${OutlineOffsetRef1}`;
type OutlineOffsetLiteralWithSign =
  | OutlineOffsetLiteral
  | `-${OutlineOffsetLiteral}`;
type OutlineOffsetProperty = OutlineOffsetLiteralWithSign;
type OutlineOffsetArbitraryValue =
  | (`outline-offset-${number}` & {})
  | (`outline-offset-${number}` & {})
  | (`-outline-offset-${number}` & {})
  | (`outline-offset-(${string})` & {})
  | (`outline-offset-[${string}]` & {});
type OutlineOffsetValue = OutlineOffsetProperty | OutlineOffsetArbitraryValue;
interface TailwindOutlineOffset {
  /**
   * `OutlineOffset`
   *
   * Utilities for controlling the offset of an element's outline.
   *
   * Arbitrary support
   *
   * `outline-offset-<number>`, `-outline-offset-<number>`,
   * `outline-offset-(<var-name>)`, `outline-offset-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/outline-offset Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/outline-offset , MDN docs}
   */
  outlineOffset: OutlineOffsetValue;
}
type RightLiteral = `right-${RightRef1}`;
type RightLiteralWithSign = RightLiteral | `-${RightLiteral}`;
type RightProperty = RightLiteralWithSign;
type RightArbitraryValue =
  | (`right-${number}` & {})
  | (`right-${number}` & {})
  | (`-right-${number}` & {})
  | (`right-(${string})` & {})
  | (`right-[${string}]` & {});
type RightValue = RightProperty | RightArbitraryValue;
interface TailwindRight {
  /**
   * `Right`
   *
   * Utilities for controlling the placement of positioned elements.
   *
   * Arbitrary support
   *
   * `right-<number>`, `-right-<number>`, `right-(<var-name>)`,
   * `right-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/top-right-bottom-left Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/right , MDN docs}
   */
  right: RightValue;
}
type RotateXLiteral = `rotate-x-${RotateRef1}`;
type RotateXLiteralWithSign = RotateXLiteral | `-${RotateXLiteral}`;
type RotateYLiteral = `rotate-y-${RotateRef1}`;
type RotateYLiteralWithSign = RotateYLiteral | `-${RotateYLiteral}`;
type RotateZLiteral = `rotate-z-${RotateRef1}`;
type RotateZLiteralWithSign = RotateZLiteral | `-${RotateZLiteral}`;
type RotateLiteral = `rotate-${RotateRef1}` | 'rotate-none';
type RotateLiteralWithSign = RotateLiteral | `-${RotateLiteral}`;
type RotateProperty =
  | 'swap-rotate'
  | RotateXLiteralWithSign
  | RotateYLiteralWithSign
  | RotateZLiteralWithSign
  | RotateLiteralWithSign;
type RotateArbitraryValue =
  | (`rotate-x-${number}` & {})
  | (`rotate-x-${number}` & {})
  | (`-rotate-x-${number}` & {})
  | (`rotate-x-(${string})` & {})
  | (`rotate-x-[${string}]` & {})
  | (`rotate-y-${number}` & {})
  | (`rotate-y-${number}` & {})
  | (`-rotate-y-${number}` & {})
  | (`rotate-y-(${string})` & {})
  | (`rotate-y-[${string}]` & {})
  | (`rotate-z-${number}` & {})
  | (`rotate-z-${number}` & {})
  | (`-rotate-z-${number}` & {})
  | (`rotate-z-(${string})` & {})
  | (`rotate-z-[${string}]` & {})
  | (`rotate-${number}` & {})
  | (`rotate-${number}` & {})
  | (`-rotate-${number}` & {})
  | (`rotate-(${string})` & {})
  | (`rotate-[${string}]` & {});
type RotateValue = RotateProperty | RotateArbitraryValue;
interface TailwindRotate {
  /**
   * `Rotate`
   *
   * Utilities for rotating elements.
   *
   * Arbitrary support
   *
   * `rotate-x-<number>`, `-rotate-x-<number>`, `rotate-x-(<var-name>)`,
   * `rotate-x-[<arbitrary-value>]`, `rotate-y-<number>` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/rotate Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/rotate , MDN docs}
   */
  rotate: RotateValue;
}
type GridRowRowendLiteral = `row-end-${GridRowRef1}`;
type GridRowRowendLiteralWithSign =
  | GridRowRowendLiteral
  | `-${GridRowRowendLiteral}`;
type GridRowRowstartLiteral = `row-start-${GridRowRef1}`;
type GridRowRowstartLiteralWithSign =
  | GridRowRowstartLiteral
  | `-${GridRowRowstartLiteral}`;
type GridRowRowspanLiteral = `row-span-${GridRowRef2}`;
type GridRowRowspanLiteralWithSign =
  | GridRowRowspanLiteral
  | `-${GridRowRowspanLiteral}`;
type GridRowRowLiteral = `row-${GridRowRef3}`;
type GridRowRowLiteralWithSign = GridRowRowLiteral | `-${GridRowRowLiteral}`;
type GridRowProperty =
  | GridRowRowendLiteralWithSign
  | GridRowRowstartLiteralWithSign
  | GridRowRowspanLiteralWithSign
  | GridRowRowLiteralWithSign;
type GridRowArbitraryValue =
  | (`row-end-${number}` & {})
  | (`row-end-${number}` & {})
  | (`-row-end-${number}` & {})
  | (`row-end-(${string})` & {})
  | (`row-end-[${string}]` & {})
  | (`row-start-${number}` & {})
  | (`row-start-${number}` & {})
  | (`-row-start-${number}` & {})
  | (`row-start-(${string})` & {})
  | (`row-start-[${string}]` & {})
  | (`row-span-${number}` & {})
  | (`row-span-(${string})` & {})
  | (`row-span-[${string}]` & {})
  | (`row-${number}` & {})
  | (`row-(${string})` & {})
  | (`row-[${string}]` & {})
  | (`row-${number}` & {})
  | (`-row-${number}` & {});
type GridRowValue = GridRowProperty | GridRowArbitraryValue;
interface TailwindGridRow {
  /**
   * `GridRow`
   *
   * Utilities for controlling how elements are sized and placed across grid
   * rows.
   *
   * Arbitrary support
   *
   * `row-end-<number>`, `-row-end-<number>`, `row-end-(<var-name>)`,
   * `row-end-[<arbitrary-value>]`, `row-start-<number>` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/grid-row Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row , MDN docs}
   */
  gridRow: GridRowValue;
}
type ScaleXLiteral = `scale-x-${ScaleRef1}`;
type ScaleXLiteralWithSign = ScaleXLiteral | `-${ScaleXLiteral}`;
type ScaleYLiteral = `scale-y-${ScaleRef1}`;
type ScaleYLiteralWithSign = ScaleYLiteral | `-${ScaleYLiteral}`;
type ScaleZLiteral = `scale-z-${ScaleRef1}`;
type ScaleZLiteralWithSign = ScaleZLiteral | `-${ScaleZLiteral}`;
type ScaleLiteral = `scale-${ScaleRef1}` | 'scale-3d' | 'scale-none';
type ScaleLiteralWithSign = ScaleLiteral | `-${ScaleLiteral}`;
type ScaleProperty =
  | ScaleXLiteralWithSign
  | ScaleYLiteralWithSign
  | ScaleZLiteralWithSign
  | ScaleLiteralWithSign;
type ScaleArbitraryValue =
  | (`scale-x-${number}` & {})
  | (`scale-x-${number}` & {})
  | (`-scale-x-${number}` & {})
  | (`scale-x-(${string})` & {})
  | (`scale-x-[${string}]` & {})
  | (`scale-y-${number}` & {})
  | (`scale-y-${number}` & {})
  | (`-scale-y-${number}` & {})
  | (`scale-y-(${string})` & {})
  | (`scale-y-[${string}]` & {})
  | (`scale-z-${number}` & {})
  | (`scale-z-${number}` & {})
  | (`-scale-z-${number}` & {})
  | (`scale-z-(${string})` & {})
  | (`scale-z-[${string}]` & {})
  | (`scale-${number}` & {})
  | (`scale-${number}` & {})
  | (`-scale-${number}` & {})
  | (`scale-(${string})` & {})
  | (`scale-[${string}]` & {});
type ScaleValue = ScaleProperty | ScaleArbitraryValue;
interface TailwindScale {
  /**
   * `Scale`
   *
   * Utilities for scaling elements.
   *
   * Arbitrary support
   *
   * `scale-x-<number>`, `-scale-x-<number>`, `scale-x-(<var-name>)`,
   * `scale-x-[<arbitrary-value>]`, `scale-y-<number>` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/scale Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scale , MDN docs}
   */
  scale: ScaleValue;
}
type ScrollMarginScrollmLiteral = `scroll-m-${ScrollMarginRef1}`;
type ScrollMarginScrollmLiteralWithSign =
  | ScrollMarginScrollmLiteral
  | `-${ScrollMarginScrollmLiteral}`;
type ScrollMarginScrollmbLiteral = `scroll-mb-${ScrollMarginRef1}`;
type ScrollMarginScrollmbLiteralWithSign =
  | ScrollMarginScrollmbLiteral
  | `-${ScrollMarginScrollmbLiteral}`;
type ScrollMarginScrollmeLiteral = `scroll-me-${ScrollMarginRef1}`;
type ScrollMarginScrollmeLiteralWithSign =
  | ScrollMarginScrollmeLiteral
  | `-${ScrollMarginScrollmeLiteral}`;
type ScrollMarginScrollmlLiteral = `scroll-ml-${ScrollMarginRef1}`;
type ScrollMarginScrollmlLiteralWithSign =
  | ScrollMarginScrollmlLiteral
  | `-${ScrollMarginScrollmlLiteral}`;
type ScrollMarginScrollmrLiteral = `scroll-mr-${ScrollMarginRef1}`;
type ScrollMarginScrollmrLiteralWithSign =
  | ScrollMarginScrollmrLiteral
  | `-${ScrollMarginScrollmrLiteral}`;
type ScrollMarginScrollmsLiteral = `scroll-ms-${ScrollMarginRef1}`;
type ScrollMarginScrollmsLiteralWithSign =
  | ScrollMarginScrollmsLiteral
  | `-${ScrollMarginScrollmsLiteral}`;
type ScrollMarginScrollmtLiteral = `scroll-mt-${ScrollMarginRef1}`;
type ScrollMarginScrollmtLiteralWithSign =
  | ScrollMarginScrollmtLiteral
  | `-${ScrollMarginScrollmtLiteral}`;
type ScrollMarginScrollmxLiteral = `scroll-mx-${ScrollMarginRef1}`;
type ScrollMarginScrollmxLiteralWithSign =
  | ScrollMarginScrollmxLiteral
  | `-${ScrollMarginScrollmxLiteral}`;
type ScrollMarginScrollmyLiteral = `scroll-my-${ScrollMarginRef1}`;
type ScrollMarginScrollmyLiteralWithSign =
  | ScrollMarginScrollmyLiteral
  | `-${ScrollMarginScrollmyLiteral}`;
type ScrollMarginProperty =
  | ScrollMarginScrollmLiteralWithSign
  | ScrollMarginScrollmbLiteralWithSign
  | ScrollMarginScrollmeLiteralWithSign
  | ScrollMarginScrollmlLiteralWithSign
  | ScrollMarginScrollmrLiteralWithSign
  | ScrollMarginScrollmsLiteralWithSign
  | ScrollMarginScrollmtLiteralWithSign
  | ScrollMarginScrollmxLiteralWithSign
  | ScrollMarginScrollmyLiteralWithSign;
type ScrollMarginArbitraryValue =
  | (`scroll-m-${number}` & {})
  | (`scroll-m-${number}` & {})
  | (`-scroll-m-${number}` & {})
  | (`scroll-m-(${string})` & {})
  | (`scroll-m-[${string}]` & {})
  | (`scroll-mb-${number}` & {})
  | (`scroll-mb-${number}` & {})
  | (`-scroll-mb-${number}` & {})
  | (`scroll-mb-(${string})` & {})
  | (`scroll-mb-[${string}]` & {})
  | (`scroll-me-${number}` & {})
  | (`scroll-me-${number}` & {})
  | (`-scroll-me-${number}` & {})
  | (`scroll-me-(${string})` & {})
  | (`scroll-me-[${string}]` & {})
  | (`scroll-ml-${number}` & {})
  | (`scroll-ml-${number}` & {})
  | (`-scroll-ml-${number}` & {})
  | (`scroll-ml-(${string})` & {})
  | (`scroll-ml-[${string}]` & {})
  | (`scroll-mr-${number}` & {})
  | (`scroll-mr-${number}` & {})
  | (`-scroll-mr-${number}` & {})
  | (`scroll-mr-(${string})` & {})
  | (`scroll-mr-[${string}]` & {})
  | (`scroll-ms-${number}` & {})
  | (`scroll-ms-${number}` & {})
  | (`-scroll-ms-${number}` & {})
  | (`scroll-ms-(${string})` & {})
  | (`scroll-ms-[${string}]` & {})
  | (`scroll-mt-${number}` & {})
  | (`scroll-mt-${number}` & {})
  | (`-scroll-mt-${number}` & {})
  | (`scroll-mt-(${string})` & {})
  | (`scroll-mt-[${string}]` & {})
  | (`scroll-mx-${number}` & {})
  | (`scroll-mx-${number}` & {})
  | (`-scroll-mx-${number}` & {})
  | (`scroll-mx-(${string})` & {})
  | (`scroll-mx-[${string}]` & {})
  | (`scroll-my-${number}` & {})
  | (`scroll-my-${number}` & {})
  | (`-scroll-my-${number}` & {})
  | (`scroll-my-(${string})` & {})
  | (`scroll-my-[${string}]` & {});
type ScrollMarginValue = ScrollMarginProperty | ScrollMarginArbitraryValue;
interface TailwindScrollMargin {
  /**
   * `ScrollMargin`
   *
   * Utilities for controlling the scroll offset around items in a snap
   * container.
   *
   * Arbitrary support
   *
   * `scroll-m-<number>`, `-scroll-m-<number>`, `scroll-m-(<var-name>)`,
   * `scroll-m-[<arbitrary-value>]`, `scroll-mb-<number>` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/scroll-margin Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin , MDN docs}
   */
  scrollMargin: ScrollMarginValue;
}
type SkewXLiteral = `skew-x-${SkewRef1}`;
type SkewXLiteralWithSign = SkewXLiteral | `-${SkewXLiteral}`;
type SkewYLiteral = `skew-y-${SkewRef1}`;
type SkewYLiteralWithSign = SkewYLiteral | `-${SkewYLiteral}`;
type SkewLiteral = `skew-${SkewRef1}`;
type SkewLiteralWithSign = SkewLiteral | `-${SkewLiteral}`;
type SkewProperty =
  | SkewXLiteralWithSign
  | SkewYLiteralWithSign
  | SkewLiteralWithSign;
type SkewArbitraryValue =
  | (`skew-x-${number}` & {})
  | (`skew-x-${number}` & {})
  | (`-skew-x-${number}` & {})
  | (`skew-x-(${string})` & {})
  | (`skew-x-[${string}]` & {})
  | (`skew-y-${number}` & {})
  | (`skew-y-${number}` & {})
  | (`-skew-y-${number}` & {})
  | (`skew-y-(${string})` & {})
  | (`skew-y-[${string}]` & {})
  | (`skew-${number}` & {})
  | (`skew-${number}` & {})
  | (`-skew-${number}` & {})
  | (`skew-(${string})` & {})
  | (`skew-[${string}]` & {});
type SkewValue = SkewProperty | SkewArbitraryValue;
interface TailwindSkew {
  /**
   * `Skew`
   *
   * Utilities for skewing elements with transform.
   *
   * Arbitrary support
   *
   * `skew-x-<number>`, `-skew-x-<number>`, `skew-x-(<var-name>)`,
   * `skew-x-[<arbitrary-value>]`, `skew-y-<number>` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/skew Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/skew , MDN docs}
   */
  skew: SkewValue;
}
type StartLiteral = `start-${StartRef1}`;
type StartLiteralWithSign = StartLiteral | `-${StartLiteral}`;
type StartValue = StartLiteralWithSign;
interface TailwindStart {
  /**
   * `Start`
   *
   * @see
   * {@link https://tailwindcss.com/docs Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/start , MDN docs}
   */
  start: StartValue;
}
type TopLiteral = `top-${TopRef1}`;
type TopLiteralWithSign = TopLiteral | `-${TopLiteral}`;
type TopProperty = TopLiteralWithSign;
type TopArbitraryValue =
  | (`top-${number}` & {})
  | (`top-${number}` & {})
  | (`-top-${number}` & {})
  | (`top-(${string})` & {})
  | (`top-[${string}]` & {});
type TopValue = TopProperty | TopArbitraryValue;
interface TailwindTop {
  /**
   * `Top`
   *
   * Utilities for controlling the placement of positioned elements.
   *
   * Arbitrary support
   *
   * `top-<number>`, `-top-<number>`, `top-(<var-name>)`,
   * `top-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/top-right-bottom-left Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/top , MDN docs}
   */
  top: TopValue;
}
type LetterSpacingTrackingLiteral = `tracking-${LetterSpacingRef1}`;
type LetterSpacingTrackingLiteralWithSign =
  | LetterSpacingTrackingLiteral
  | `-${LetterSpacingTrackingLiteral}`;
type LetterSpacingProperty = LetterSpacingTrackingLiteralWithSign;
type LetterSpacingArbitraryValue =
  | (`tracking-(${string})` & {})
  | (`tracking-[${string}]` & {});
type LetterSpacingValue = LetterSpacingProperty | LetterSpacingArbitraryValue;
interface TailwindLetterSpacing {
  /**
   * `LetterSpacing`
   *
   * Utilities for controlling the tracking, or letter spacing, of an element.
   *
   * Arbitrary support
   *
   * `tracking-(<var-name>)`, `tracking-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/letter-spacing Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing , MDN docs}
   */
  letterSpacing: LetterSpacingValue;
}
type TranslateXLiteral =
  | `translate-x-${TranslateRef1}`
  | 'translate-x-1/2'
  | 'translate-x-1/3'
  | 'translate-x-1/4'
  | 'translate-x-1/5'
  | 'translate-x-1/6'
  | 'translate-x-1/12'
  | 'translate-x-2/3'
  | 'translate-x-2/4'
  | 'translate-x-2/5'
  | 'translate-x-2/6'
  | 'translate-x-2/12'
  | 'translate-x-3/4'
  | 'translate-x-3/5'
  | 'translate-x-3/6'
  | 'translate-x-3/12'
  | 'translate-x-4/5'
  | 'translate-x-4/6'
  | 'translate-x-4/12'
  | 'translate-x-5/6'
  | 'translate-x-5/12'
  | 'translate-x-6/12'
  | 'translate-x-7/12'
  | 'translate-x-8/12'
  | 'translate-x-9/12'
  | 'translate-x-10/12'
  | 'translate-x-11/12'
  | 'translate-x-full';
type TranslateXLiteralWithSign = TranslateXLiteral | `-${TranslateXLiteral}`;
type TranslateYLiteral =
  | `translate-y-${TranslateRef1}`
  | 'translate-y-1/2'
  | 'translate-y-1/3'
  | 'translate-y-1/4'
  | 'translate-y-1/5'
  | 'translate-y-1/6'
  | 'translate-y-1/12'
  | 'translate-y-2/3'
  | 'translate-y-2/4'
  | 'translate-y-2/5'
  | 'translate-y-2/6'
  | 'translate-y-2/12'
  | 'translate-y-3/4'
  | 'translate-y-3/5'
  | 'translate-y-3/6'
  | 'translate-y-3/12'
  | 'translate-y-4/5'
  | 'translate-y-4/6'
  | 'translate-y-4/12'
  | 'translate-y-5/6'
  | 'translate-y-5/12'
  | 'translate-y-6/12'
  | 'translate-y-7/12'
  | 'translate-y-8/12'
  | 'translate-y-9/12'
  | 'translate-y-10/12'
  | 'translate-y-11/12'
  | 'translate-y-full';
type TranslateYLiteralWithSign = TranslateYLiteral | `-${TranslateYLiteral}`;
type TranslateZLiteral = `translate-z-${TranslateRef1}`;
type TranslateZLiteralWithSign = TranslateZLiteral | `-${TranslateZLiteral}`;
type TranslateLiteral =
  | `translate-${TranslateRef1}`
  | 'translate-1/2'
  | 'translate-1/3'
  | 'translate-1/4'
  | 'translate-1/5'
  | 'translate-1/6'
  | 'translate-1/12'
  | 'translate-2/3'
  | 'translate-2/4'
  | 'translate-2/5'
  | 'translate-2/6'
  | 'translate-2/12'
  | 'translate-3/4'
  | 'translate-3/5'
  | 'translate-3/6'
  | 'translate-3/12'
  | 'translate-4/5'
  | 'translate-4/6'
  | 'translate-4/12'
  | 'translate-5/6'
  | 'translate-5/12'
  | 'translate-6/12'
  | 'translate-7/12'
  | 'translate-8/12'
  | 'translate-9/12'
  | 'translate-10/12'
  | 'translate-11/12'
  | 'translate-full'
  | 'translate-3d'
  | 'translate-none';
type TranslateLiteralWithSign = TranslateLiteral | `-${TranslateLiteral}`;
type TranslateProperty =
  | TranslateXLiteralWithSign
  | TranslateYLiteralWithSign
  | TranslateZLiteralWithSign
  | TranslateLiteralWithSign;
type TranslateArbitraryValue =
  | (`translate-x-${number}` & {})
  | (`translate-x-${number}` & {})
  | (`-translate-x-${number}` & {})
  | (`translate-x-(${string})` & {})
  | (`translate-x-[${string}]` & {})
  | (`translate-y-${number}` & {})
  | (`translate-y-${number}` & {})
  | (`-translate-y-${number}` & {})
  | (`translate-y-(${string})` & {})
  | (`translate-y-[${string}]` & {})
  | (`translate-z-${number}` & {})
  | (`translate-z-${number}` & {})
  | (`-translate-z-${number}` & {})
  | (`translate-z-(${string})` & {})
  | (`translate-z-[${string}]` & {})
  | (`translate-${number}` & {})
  | (`translate-${number}` & {})
  | (`-translate-${number}` & {})
  | (`translate-(${string})` & {})
  | (`translate-[${string}]` & {});
type TranslateValue = TranslateProperty | TranslateArbitraryValue;
interface TailwindTranslate {
  /**
   * `Translate`
   *
   * Utilities for translating elements.
   *
   * Arbitrary support
   *
   * `translate-x-<number>`, `-translate-x-<number>`,
   * `translate-x-(<var-name>)`, `translate-x-[<arbitrary-value>]`,
   * `translate-y-<number>` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/translate Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/translate , MDN docs}
   */
  translate: TranslateValue;
}
type TextUnderlineOffsetUnderlineoffsetLiteral =
  `underline-offset-${TextUnderlineOffsetRef1}`;
type TextUnderlineOffsetUnderlineoffsetLiteralWithSign =
  | TextUnderlineOffsetUnderlineoffsetLiteral
  | `-${TextUnderlineOffsetUnderlineoffsetLiteral}`;
type TextUnderlineOffsetProperty =
  TextUnderlineOffsetUnderlineoffsetLiteralWithSign;
type TextUnderlineOffsetArbitraryValue =
  | (`underline-offset-${number}` & {})
  | (`underline-offset-${number}` & {})
  | (`-underline-offset-${number}` & {})
  | (`underline-offset-(${string})` & {})
  | (`underline-offset-[${string}]` & {});
type TextUnderlineOffsetValue =
  | TextUnderlineOffsetProperty
  | TextUnderlineOffsetArbitraryValue;
interface TailwindTextUnderlineOffset {
  /**
   * `TextUnderlineOffset`
   *
   * Utilities for controlling the offset of a text underline.
   *
   * Arbitrary support
   *
   * `underline-offset-<number>`, `-underline-offset-<number>`,
   * `underline-offset-(<var-name>)`, `underline-offset-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/text-underline-offset Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset , MDN docs}
   */
  textUnderlineOffset: TextUnderlineOffsetValue;
}
type ZIndexZLiteral = `z-${ZIndexRef1}`;
type ZIndexZLiteralWithSign = ZIndexZLiteral | `-${ZIndexZLiteral}`;
type ZIndexProperty = ZIndexZLiteralWithSign;
type ZIndexArbitraryValue =
  | (`z-${number}` & {})
  | (`z-[${string}]` & {})
  | (`z-(${string})` & {});
type ZIndexValue = ZIndexProperty | ZIndexArbitraryValue;
interface TailwindZIndex {
  /**
   * `ZIndex`
   *
   * Utilities for controlling the stack order of an element.
   *
   * Arbitrary support
   *
   * `z-<number>`, `z-[<arbitrary-value>]`, `z-(<var-name>)`
   *
   * @see
   * {@link https://tailwindcss.com/docs/z-index Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/z-index , MDN docs}
   */
  zIndex: ZIndexValue;
}
type ContainerTypeValue =
  | '@container'
  | '@container-normal'
  | '@container'
  | '@container-normal';
interface TailwindContainerType {
  /**
   * `ContainerType`
   *
   * @see
   * {@link https://tailwindcss.com/docs Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/container-type , MDN docs}
   */
  containerType: ContainerTypeValue;
}
type PositionValue =
  | 'absolute'
  | 'fixed'
  | 'relative'
  | 'static'
  | 'sticky'
  | 'absolute'
  | 'fixed'
  | 'relative'
  | 'static'
  | 'sticky';
interface TailwindPosition {
  /**
   * `Position`
   *
   * Utilities for controlling how an element is positioned in the document.
   *
   * @see
   * {@link https://tailwindcss.com/docs/position Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/position , MDN docs}
   */
  position: PositionValue;
}
type AccentColorProperty =
  | 'accent-accent'
  | 'accent-accent-content'
  | 'accent-amber-50'
  | 'accent-amber-100'
  | 'accent-amber-200'
  | 'accent-amber-300'
  | 'accent-amber-400'
  | 'accent-amber-500'
  | 'accent-amber-600'
  | 'accent-amber-700'
  | 'accent-amber-800'
  | 'accent-amber-900'
  | 'accent-amber-950'
  | 'accent-auto'
  | 'accent-base-100'
  | 'accent-base-200'
  | 'accent-base-300'
  | 'accent-base-content'
  | 'accent-black'
  | 'accent-blue-50'
  | 'accent-blue-100'
  | 'accent-blue-200'
  | 'accent-blue-300'
  | 'accent-blue-400'
  | 'accent-blue-500'
  | 'accent-blue-600'
  | 'accent-blue-700'
  | 'accent-blue-800'
  | 'accent-blue-900'
  | 'accent-blue-950'
  | 'accent-current'
  | 'accent-cyan-50'
  | 'accent-cyan-100'
  | 'accent-cyan-200'
  | 'accent-cyan-300'
  | 'accent-cyan-400'
  | 'accent-cyan-500'
  | 'accent-cyan-600'
  | 'accent-cyan-700'
  | 'accent-cyan-800'
  | 'accent-cyan-900'
  | 'accent-cyan-950'
  | 'accent-emerald-50'
  | 'accent-emerald-100'
  | 'accent-emerald-200'
  | 'accent-emerald-300'
  | 'accent-emerald-400'
  | 'accent-emerald-500'
  | 'accent-emerald-600'
  | 'accent-emerald-700'
  | 'accent-emerald-800'
  | 'accent-emerald-900'
  | 'accent-emerald-950'
  | 'accent-error'
  | 'accent-error-content'
  | 'accent-fuchsia-50'
  | 'accent-fuchsia-100'
  | 'accent-fuchsia-200'
  | 'accent-fuchsia-300'
  | 'accent-fuchsia-400'
  | 'accent-fuchsia-500'
  | 'accent-fuchsia-600'
  | 'accent-fuchsia-700'
  | 'accent-fuchsia-800'
  | 'accent-fuchsia-900'
  | 'accent-fuchsia-950'
  | 'accent-gray-50'
  | 'accent-gray-100'
  | 'accent-gray-200'
  | 'accent-gray-300'
  | 'accent-gray-400'
  | 'accent-gray-500'
  | 'accent-gray-600'
  | 'accent-gray-700'
  | 'accent-gray-800'
  | 'accent-gray-900'
  | 'accent-gray-950'
  | 'accent-green-50'
  | 'accent-green-100'
  | 'accent-green-200'
  | 'accent-green-300'
  | 'accent-green-400'
  | 'accent-green-500'
  | 'accent-green-600'
  | 'accent-green-700'
  | 'accent-green-800'
  | 'accent-green-900'
  | 'accent-green-950'
  | 'accent-indigo-50'
  | 'accent-indigo-100'
  | 'accent-indigo-200'
  | 'accent-indigo-300'
  | 'accent-indigo-400'
  | 'accent-indigo-500'
  | 'accent-indigo-600'
  | 'accent-indigo-700'
  | 'accent-indigo-800'
  | 'accent-indigo-900'
  | 'accent-indigo-950'
  | 'accent-info'
  | 'accent-info-content'
  | 'accent-inherit'
  | 'accent-lime-50'
  | 'accent-lime-100'
  | 'accent-lime-200'
  | 'accent-lime-300'
  | 'accent-lime-400'
  | 'accent-lime-500'
  | 'accent-lime-600'
  | 'accent-lime-700'
  | 'accent-lime-800'
  | 'accent-lime-900'
  | 'accent-lime-950'
  | 'accent-neutral'
  | 'accent-neutral-50'
  | 'accent-neutral-100'
  | 'accent-neutral-200'
  | 'accent-neutral-300'
  | 'accent-neutral-400'
  | 'accent-neutral-500'
  | 'accent-neutral-600'
  | 'accent-neutral-700'
  | 'accent-neutral-800'
  | 'accent-neutral-900'
  | 'accent-neutral-950'
  | 'accent-neutral-content'
  | 'accent-orange-50'
  | 'accent-orange-100'
  | 'accent-orange-200'
  | 'accent-orange-300'
  | 'accent-orange-400'
  | 'accent-orange-500'
  | 'accent-orange-600'
  | 'accent-orange-700'
  | 'accent-orange-800'
  | 'accent-orange-900'
  | 'accent-orange-950'
  | 'accent-pink-50'
  | 'accent-pink-100'
  | 'accent-pink-200'
  | 'accent-pink-300'
  | 'accent-pink-400'
  | 'accent-pink-500'
  | 'accent-pink-600'
  | 'accent-pink-700'
  | 'accent-pink-800'
  | 'accent-pink-900'
  | 'accent-pink-950'
  | 'accent-primary'
  | 'accent-primary-content'
  | 'accent-purple-50'
  | 'accent-purple-100'
  | 'accent-purple-200'
  | 'accent-purple-300'
  | 'accent-purple-400'
  | 'accent-purple-500'
  | 'accent-purple-600'
  | 'accent-purple-700'
  | 'accent-purple-800'
  | 'accent-purple-900'
  | 'accent-purple-950'
  | 'accent-red-50'
  | 'accent-red-100'
  | 'accent-red-200'
  | 'accent-red-300'
  | 'accent-red-400'
  | 'accent-red-500'
  | 'accent-red-600'
  | 'accent-red-700'
  | 'accent-red-800'
  | 'accent-red-900'
  | 'accent-red-950'
  | 'accent-rose-50'
  | 'accent-rose-100'
  | 'accent-rose-200'
  | 'accent-rose-300'
  | 'accent-rose-400'
  | 'accent-rose-500'
  | 'accent-rose-600'
  | 'accent-rose-700'
  | 'accent-rose-800'
  | 'accent-rose-900'
  | 'accent-rose-950'
  | 'accent-secondary'
  | 'accent-secondary-content'
  | 'accent-sky-50'
  | 'accent-sky-100'
  | 'accent-sky-200'
  | 'accent-sky-300'
  | 'accent-sky-400'
  | 'accent-sky-500'
  | 'accent-sky-600'
  | 'accent-sky-700'
  | 'accent-sky-800'
  | 'accent-sky-900'
  | 'accent-sky-950'
  | 'accent-slate-50'
  | 'accent-slate-100'
  | 'accent-slate-200'
  | 'accent-slate-300'
  | 'accent-slate-400'
  | 'accent-slate-500'
  | 'accent-slate-600'
  | 'accent-slate-700'
  | 'accent-slate-800'
  | 'accent-slate-900'
  | 'accent-slate-950'
  | 'accent-stone-50'
  | 'accent-stone-100'
  | 'accent-stone-200'
  | 'accent-stone-300'
  | 'accent-stone-400'
  | 'accent-stone-500'
  | 'accent-stone-600'
  | 'accent-stone-700'
  | 'accent-stone-800'
  | 'accent-stone-900'
  | 'accent-stone-950'
  | 'accent-success'
  | 'accent-success-content'
  | 'accent-teal-50'
  | 'accent-teal-100'
  | 'accent-teal-200'
  | 'accent-teal-300'
  | 'accent-teal-400'
  | 'accent-teal-500'
  | 'accent-teal-600'
  | 'accent-teal-700'
  | 'accent-teal-800'
  | 'accent-teal-900'
  | 'accent-teal-950'
  | 'accent-transparent'
  | 'accent-violet-50'
  | 'accent-violet-100'
  | 'accent-violet-200'
  | 'accent-violet-300'
  | 'accent-violet-400'
  | 'accent-violet-500'
  | 'accent-violet-600'
  | 'accent-violet-700'
  | 'accent-violet-800'
  | 'accent-violet-900'
  | 'accent-violet-950'
  | 'accent-warning'
  | 'accent-warning-content'
  | 'accent-white'
  | 'accent-yellow-50'
  | 'accent-yellow-100'
  | 'accent-yellow-200'
  | 'accent-yellow-300'
  | 'accent-yellow-400'
  | 'accent-yellow-500'
  | 'accent-yellow-600'
  | 'accent-yellow-700'
  | 'accent-yellow-800'
  | 'accent-yellow-900'
  | 'accent-yellow-950'
  | 'accent-zinc-50'
  | 'accent-zinc-100'
  | 'accent-zinc-200'
  | 'accent-zinc-300'
  | 'accent-zinc-400'
  | 'accent-zinc-500'
  | 'accent-zinc-600'
  | 'accent-zinc-700'
  | 'accent-zinc-800'
  | 'accent-zinc-900'
  | 'accent-zinc-950'
  | 'accent-accent'
  | 'accent-accent-content'
  | 'accent-amber-50'
  | 'accent-amber-100'
  | 'accent-amber-200'
  | 'accent-amber-300'
  | 'accent-amber-400'
  | 'accent-amber-500'
  | 'accent-amber-600'
  | 'accent-amber-700'
  | 'accent-amber-800'
  | 'accent-amber-900'
  | 'accent-amber-950'
  | 'accent-auto'
  | 'accent-base-100'
  | 'accent-base-200'
  | 'accent-base-300'
  | 'accent-base-content'
  | 'accent-black'
  | 'accent-blue-50'
  | 'accent-blue-100'
  | 'accent-blue-200'
  | 'accent-blue-300'
  | 'accent-blue-400'
  | 'accent-blue-500'
  | 'accent-blue-600'
  | 'accent-blue-700'
  | 'accent-blue-800'
  | 'accent-blue-900'
  | 'accent-blue-950'
  | 'accent-current'
  | 'accent-cyan-50'
  | 'accent-cyan-100'
  | 'accent-cyan-200'
  | 'accent-cyan-300'
  | 'accent-cyan-400'
  | 'accent-cyan-500'
  | 'accent-cyan-600'
  | 'accent-cyan-700'
  | 'accent-cyan-800'
  | 'accent-cyan-900'
  | 'accent-cyan-950'
  | 'accent-emerald-50'
  | 'accent-emerald-100'
  | 'accent-emerald-200'
  | 'accent-emerald-300'
  | 'accent-emerald-400'
  | 'accent-emerald-500'
  | 'accent-emerald-600'
  | 'accent-emerald-700'
  | 'accent-emerald-800'
  | 'accent-emerald-900'
  | 'accent-emerald-950'
  | 'accent-error'
  | 'accent-error-content'
  | 'accent-fuchsia-50'
  | 'accent-fuchsia-100'
  | 'accent-fuchsia-200'
  | 'accent-fuchsia-300'
  | 'accent-fuchsia-400'
  | 'accent-fuchsia-500'
  | 'accent-fuchsia-600'
  | 'accent-fuchsia-700'
  | 'accent-fuchsia-800'
  | 'accent-fuchsia-900'
  | 'accent-fuchsia-950'
  | 'accent-gray-50'
  | 'accent-gray-100'
  | 'accent-gray-200'
  | 'accent-gray-300'
  | 'accent-gray-400'
  | 'accent-gray-500'
  | 'accent-gray-600'
  | 'accent-gray-700'
  | 'accent-gray-800'
  | 'accent-gray-900'
  | 'accent-gray-950'
  | 'accent-green-50'
  | 'accent-green-100'
  | 'accent-green-200'
  | 'accent-green-300'
  | 'accent-green-400'
  | 'accent-green-500'
  | 'accent-green-600'
  | 'accent-green-700'
  | 'accent-green-800'
  | 'accent-green-900'
  | 'accent-green-950'
  | 'accent-indigo-50'
  | 'accent-indigo-100'
  | 'accent-indigo-200'
  | 'accent-indigo-300'
  | 'accent-indigo-400'
  | 'accent-indigo-500'
  | 'accent-indigo-600'
  | 'accent-indigo-700'
  | 'accent-indigo-800'
  | 'accent-indigo-900'
  | 'accent-indigo-950'
  | 'accent-info'
  | 'accent-info-content'
  | 'accent-inherit'
  | 'accent-lime-50'
  | 'accent-lime-100'
  | 'accent-lime-200'
  | 'accent-lime-300'
  | 'accent-lime-400'
  | 'accent-lime-500'
  | 'accent-lime-600'
  | 'accent-lime-700'
  | 'accent-lime-800'
  | 'accent-lime-900'
  | 'accent-lime-950'
  | 'accent-neutral'
  | 'accent-neutral-50'
  | 'accent-neutral-100'
  | 'accent-neutral-200'
  | 'accent-neutral-300'
  | 'accent-neutral-400'
  | 'accent-neutral-500'
  | 'accent-neutral-600'
  | 'accent-neutral-700'
  | 'accent-neutral-800'
  | 'accent-neutral-900'
  | 'accent-neutral-950'
  | 'accent-neutral-content'
  | 'accent-orange-50'
  | 'accent-orange-100'
  | 'accent-orange-200'
  | 'accent-orange-300'
  | 'accent-orange-400'
  | 'accent-orange-500'
  | 'accent-orange-600'
  | 'accent-orange-700'
  | 'accent-orange-800'
  | 'accent-orange-900'
  | 'accent-orange-950'
  | 'accent-pink-50'
  | 'accent-pink-100'
  | 'accent-pink-200'
  | 'accent-pink-300'
  | 'accent-pink-400'
  | 'accent-pink-500'
  | 'accent-pink-600'
  | 'accent-pink-700'
  | 'accent-pink-800'
  | 'accent-pink-900'
  | 'accent-pink-950'
  | 'accent-primary'
  | 'accent-primary-content'
  | 'accent-purple-50'
  | 'accent-purple-100'
  | 'accent-purple-200'
  | 'accent-purple-300'
  | 'accent-purple-400'
  | 'accent-purple-500'
  | 'accent-purple-600'
  | 'accent-purple-700'
  | 'accent-purple-800'
  | 'accent-purple-900'
  | 'accent-purple-950'
  | 'accent-red-50'
  | 'accent-red-100'
  | 'accent-red-200'
  | 'accent-red-300'
  | 'accent-red-400'
  | 'accent-red-500'
  | 'accent-red-600'
  | 'accent-red-700'
  | 'accent-red-800'
  | 'accent-red-900'
  | 'accent-red-950'
  | 'accent-rose-50'
  | 'accent-rose-100'
  | 'accent-rose-200'
  | 'accent-rose-300'
  | 'accent-rose-400'
  | 'accent-rose-500'
  | 'accent-rose-600'
  | 'accent-rose-700'
  | 'accent-rose-800'
  | 'accent-rose-900'
  | 'accent-rose-950'
  | 'accent-secondary'
  | 'accent-secondary-content'
  | 'accent-sky-50'
  | 'accent-sky-100'
  | 'accent-sky-200'
  | 'accent-sky-300'
  | 'accent-sky-400'
  | 'accent-sky-500'
  | 'accent-sky-600'
  | 'accent-sky-700'
  | 'accent-sky-800'
  | 'accent-sky-900'
  | 'accent-sky-950'
  | 'accent-slate-50'
  | 'accent-slate-100'
  | 'accent-slate-200'
  | 'accent-slate-300'
  | 'accent-slate-400'
  | 'accent-slate-500'
  | 'accent-slate-600'
  | 'accent-slate-700'
  | 'accent-slate-800'
  | 'accent-slate-900'
  | 'accent-slate-950'
  | 'accent-stone-50'
  | 'accent-stone-100'
  | 'accent-stone-200'
  | 'accent-stone-300'
  | 'accent-stone-400'
  | 'accent-stone-500'
  | 'accent-stone-600'
  | 'accent-stone-700'
  | 'accent-stone-800'
  | 'accent-stone-900'
  | 'accent-stone-950'
  | 'accent-success'
  | 'accent-success-content'
  | 'accent-teal-50'
  | 'accent-teal-100'
  | 'accent-teal-200'
  | 'accent-teal-300'
  | 'accent-teal-400'
  | 'accent-teal-500'
  | 'accent-teal-600'
  | 'accent-teal-700'
  | 'accent-teal-800'
  | 'accent-teal-900'
  | 'accent-teal-950'
  | 'accent-transparent'
  | 'accent-violet-50'
  | 'accent-violet-100'
  | 'accent-violet-200'
  | 'accent-violet-300'
  | 'accent-violet-400'
  | 'accent-violet-500'
  | 'accent-violet-600'
  | 'accent-violet-700'
  | 'accent-violet-800'
  | 'accent-violet-900'
  | 'accent-violet-950'
  | 'accent-warning'
  | 'accent-warning-content'
  | 'accent-white'
  | 'accent-yellow-50'
  | 'accent-yellow-100'
  | 'accent-yellow-200'
  | 'accent-yellow-300'
  | 'accent-yellow-400'
  | 'accent-yellow-500'
  | 'accent-yellow-600'
  | 'accent-yellow-700'
  | 'accent-yellow-800'
  | 'accent-yellow-900'
  | 'accent-yellow-950'
  | 'accent-zinc-50'
  | 'accent-zinc-100'
  | 'accent-zinc-200'
  | 'accent-zinc-300'
  | 'accent-zinc-400'
  | 'accent-zinc-500'
  | 'accent-zinc-600'
  | 'accent-zinc-700'
  | 'accent-zinc-800'
  | 'accent-zinc-900'
  | 'accent-zinc-950';
type AccentColorValue = AccentColorProperty;
interface TailwindAccentColor {
  /**
   * `AccentColor`
   *
   * Utilities for controlling the accented color of a form control.
   *
   * @see
   * {@link https://tailwindcss.com/docs/accent-color Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color , MDN docs}
   */
  accentColor: AccentColorValue;
}
type CustomAlertLiteral = `alert-${CustomRef1}`;
type CustomAvatarLiteral = `avatar-${CustomRef2}`;
type CustomBadgeLiteral =
  | `badge-${CustomRef3}`
  | 'badge-ghost'
  | 'badge-lg'
  | 'badge-md'
  | 'badge-sm'
  | 'badge-xl'
  | 'badge-xs';
type CustomBtnLiteral = `btn-${CustomRef4}`;
type CustomCardLiteral = `card-${CustomRef5}`;
type CustomCarouselLiteral = `carousel-${CustomRef6}`;
type CustomChatbubbleLiteral = `chat-bubble-${CustomRef3}`;
type CustomChatLiteral = `chat-${CustomRef7}`;
type CustomCollapseLiteral = `collapse-${CustomRef8}`;
type CustomDiffLiteral = `diff-${CustomRef9}`;
type CustomDividerLiteral = `divider-${CustomRef10}`;
type CustomDockLiteral = `dock-${CustomRef11}`;
type CustomDrawerLiteral = `drawer-${CustomRef12}`;
type CustomDropdownLiteral = `dropdown-${CustomRef13}`;
type CustomFieldsetLiteral = `fieldset-${CustomRef14}`;
type CustomFileLiteral = `file-${CustomRef15}`;
type CustomFooterLiteral = `footer-${CustomRef16}`;
type CustomHeroLiteral = `hero-${CustomRef17}`;
type CustomIndicatorLiteral = `indicator-${CustomRef18}`;
type CustomInputLiteral =
  | `input-${CustomRef3}`
  | 'input-ghost'
  | 'input-lg'
  | 'input-md'
  | 'input-sm'
  | 'input-xl'
  | 'input-xs';
type CustomJoinLiteral = `join-${CustomRef19}`;
type CustomMenuLiteral = `menu-${CustomRef20}`;
type CustomMockupphoneLiteral = `mockup-phone-${CustomRef21}`;
type CustomMockupLiteral = `mockup-${CustomRef22}`;
type CustomModalLiteral = `modal-${CustomRef23}`;
type CustomNavbarLiteral = `navbar-${CustomRef24}`;
type CustomRadioLiteral = `radio-${CustomRef3}`;
type CustomRangeLiteral = `range-${CustomRef25}`;
type CustomSelectLiteral = `select-${CustomRef3}` | 'select-ghost';
type CustomStatusLiteral =
  | `status-${CustomRef3}`
  | 'status-lg'
  | 'status-md'
  | 'status-sm'
  | 'status-xl'
  | 'status-xs';
type CustomStatLiteral = `stat-${CustomRef26}`;
type CustomStatsLiteral = `stats-${CustomRef27}`;
type CustomStepsLiteral = `steps-${CustomRef28}`;
type CustomTableLiteral = `table-${CustomRef29}`;
type CustomTabLiteral = `tab-${CustomRef30}`;
type CustomTabsLiteral = `tabs-${CustomRef31}`;
type CustomTextareaLiteral = `textarea-${CustomRef3}` | 'textarea-ghost';
type CustomTimelineLiteral = `timeline-${CustomRef32}`;
type CustomToggleLiteral =
  | `toggle-${CustomRef3}`
  | 'toggle-lg'
  | 'toggle-md'
  | 'toggle-sm'
  | 'toggle-xl'
  | 'toggle-xs';
type CustomTooltipLiteral = `tooltip-${CustomRef33}`;
type CustomValue =
  | 'alert'
  | 'avatar'
  | 'badge'
  | 'breadcrumbs'
  | 'btn'
  | 'cally'
  | 'card'
  | 'carousel'
  | 'chat'
  | 'checkbox'
  | 'countdown'
  | 'diff'
  | 'divider'
  | 'dock'
  | 'drawer'
  | 'dropdown'
  | 'fieldset'
  | 'filter'
  | 'floating-label'
  | 'footer'
  | 'glass'
  | 'hero'
  | 'indicator'
  | 'input'
  | 'join'
  | 'kbd'
  | 'label'
  | 'link'
  | 'list'
  | 'loading'
  | 'mask'
  | 'menu'
  | 'modal'
  | 'navbar'
  | 'pika-single'
  | 'progress'
  | 'prose'
  | 'radial-progress'
  | 'radio'
  | 'range'
  | 'rating'
  | 'react-day-picker'
  | 'select'
  | 'skeleton'
  | 'stack'
  | 'stat'
  | 'stats'
  | 'status'
  | 'steps'
  | 'swap'
  | 'swap-flip'
  | 'tab'
  | 'tabs'
  | 'textarea'
  | 'timeline'
  | 'toast'
  | 'toggle'
  | 'tooltip'
  | 'validator'
  | 'validator-hint'
  | CustomAlertLiteral
  | CustomAvatarLiteral
  | CustomBadgeLiteral
  | CustomBtnLiteral
  | CustomCardLiteral
  | CustomCarouselLiteral
  | CustomChatbubbleLiteral
  | CustomChatLiteral
  | CustomCollapseLiteral
  | CustomDiffLiteral
  | CustomDividerLiteral
  | CustomDockLiteral
  | CustomDrawerLiteral
  | CustomDropdownLiteral
  | CustomFieldsetLiteral
  | CustomFileLiteral
  | CustomFooterLiteral
  | CustomHeroLiteral
  | CustomIndicatorLiteral
  | CustomInputLiteral
  | CustomJoinLiteral
  | CustomMenuLiteral
  | CustomMockupphoneLiteral
  | CustomMockupLiteral
  | CustomModalLiteral
  | CustomNavbarLiteral
  | CustomRadioLiteral
  | CustomRangeLiteral
  | CustomSelectLiteral
  | CustomStatusLiteral
  | CustomStatLiteral
  | CustomStatsLiteral
  | CustomStepsLiteral
  | CustomTableLiteral
  | CustomTabLiteral
  | CustomTabsLiteral
  | CustomTextareaLiteral
  | CustomTimelineLiteral
  | CustomToggleLiteral
  | CustomTooltipLiteral;
interface TailwindCustom {
  /**
   * `Custom`
   *
   * Custom properties, defined by user.
   */
  custom: CustomValue;
}
type VerticalAlignAlignLiteral = `align-${VerticalAlignRef1}`;
type VerticalAlignProperty = VerticalAlignAlignLiteral;
type VerticalAlignArbitraryValue =
  | (`align-(${string})` & {})
  | (`align-[${string}]` & {});
type VerticalAlignValue = VerticalAlignProperty | VerticalAlignArbitraryValue;
interface TailwindVerticalAlign {
  /**
   * `VerticalAlign`
   *
   * Utilities for controlling the vertical alignment of an inline or table-cell
   * box.
   *
   * Arbitrary support
   *
   * `align-(<var-name>)`, `align-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/vertical-align Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align , MDN docs}
   */
  verticalAlign: VerticalAlignValue;
}
type AnimationAnimateLiteral = `animate-${AnimationRef1}`;
type AnimationProperty = AnimationAnimateLiteral;
type AnimationArbitraryValue =
  | (`animate-(${string})` & {})
  | (`animate-[${string}]` & {});
type AnimationValue = AnimationProperty | AnimationArbitraryValue;
interface TailwindAnimation {
  /**
   * `Animation`
   *
   * Utilities for animating elements with CSS animations.
   *
   * Arbitrary support
   *
   * `animate-(<var-name>)`, `animate-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/animation Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/animation , MDN docs}
   */
  animation: AnimationValue;
}
type FontSmoothingValue =
  | 'antialiased'
  | 'subpixel-antialiased'
  | 'antialiased'
  | 'subpixel-antialiased';
interface TailwindFontSmoothing {
  /**
   * `FontSmoothing`
   *
   * Utilities for controlling the font smoothing of an element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/font-smoothing Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-smoothing , MDN docs}
   */
  fontSmoothing: FontSmoothingValue;
}
type AppearanceValue =
  | 'appearance-auto'
  | 'appearance-none'
  | 'appearance-auto'
  | 'appearance-none';
interface TailwindAppearance {
  /**
   * `Appearance`
   *
   * Utilities for suppressing native form control styling.
   *
   * @see
   * {@link https://tailwindcss.com/docs/appearance Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/appearance , MDN docs}
   */
  appearance: AppearanceValue;
}
type AspectRatioAspectLiteral = `aspect-${AspectRatioRef1}`;
type AspectRatioProperty = AspectRatioAspectLiteral;
type AspectRatioArbitraryValue =
  | (`aspect-${number}` & {})
  | (`aspect-(${string})` & {})
  | (`aspect-[${string}]` & {});
type AspectRatioValue = AspectRatioProperty | AspectRatioArbitraryValue;
interface TailwindAspectRatio {
  /**
   * `AspectRatio`
   *
   * Utilities for controlling the aspect ratio of an element.
   *
   * Arbitrary support
   *
   * `aspect-<number>`, `aspect-(<var-name>)`, `aspect-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/aspect-ratio Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio , MDN docs}
   */
  aspectRatio: AspectRatioValue;
}
type GridAutoColumnsAutocolsLiteral = `auto-cols-${GridAutoColumnsRef1}`;
type GridAutoColumnsProperty = GridAutoColumnsAutocolsLiteral;
type GridAutoColumnsArbitraryValue =
  | (`auto-cols-(${string})` & {})
  | (`auto-cols-[${string}]` & {});
type GridAutoColumnsValue =
  | GridAutoColumnsProperty
  | GridAutoColumnsArbitraryValue;
interface TailwindGridAutoColumns {
  /**
   * `GridAutoColumns`
   *
   * Utilities for controlling the size of implicitly-created grid columns.
   *
   * Arbitrary support
   *
   * `auto-cols-(<var-name>)`, `auto-cols-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/grid-auto-columns Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns , MDN docs}
   */
  gridAutoColumns: GridAutoColumnsValue;
}
type GridAutoRowsAutorowsLiteral = `auto-rows-${GridAutoRowsRef1}`;
type GridAutoRowsProperty = GridAutoRowsAutorowsLiteral;
type GridAutoRowsArbitraryValue =
  | (`auto-rows-(${string})` & {})
  | (`auto-rows-[${string}]` & {});
type GridAutoRowsValue = GridAutoRowsProperty | GridAutoRowsArbitraryValue;
interface TailwindGridAutoRows {
  /**
   * `GridAutoRows`
   *
   * Utilities for controlling the size of implicitly-created grid rows.
   *
   * Arbitrary support
   *
   * `auto-rows-(<var-name>)`, `auto-rows-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/grid-auto-rows Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows , MDN docs}
   */
  gridAutoRows: GridAutoRowsValue;
}
type BackdropFilterBackdropblurLiteral = `backdrop-blur-${BackdropFilterRef1}`;
type BackdropFilterBackdropbrightnessLiteral =
  | `backdrop-brightness-${BackdropFilterRef2}`
  | 'backdrop-brightness-90'
  | 'backdrop-brightness-95'
  | 'backdrop-brightness-105'
  | 'backdrop-brightness-110';
type BackdropFilterBackdropcontrastLiteral =
  `backdrop-contrast-${BackdropFilterRef2}`;
type BackdropFilterBackdropgrayscaleLiteral =
  `backdrop-grayscale-${BackdropFilterRef3}`;
type BackdropFilterBackdrophuerotateLiteral =
  `backdrop-hue-rotate-${BackdropFilterRef4}`;
type BackdropFilterBackdropinvertLiteral =
  `backdrop-invert-${BackdropFilterRef5}`;
type BackdropFilterBackdropopacityLiteral =
  `backdrop-opacity-${BackdropFilterRef6}`;
type BackdropFilterBackdropsaturateLiteral =
  `backdrop-saturate-${BackdropFilterRef7}`;
type BackdropFilterBackdropsepiaLiteral =
  `backdrop-sepia-${BackdropFilterRef8}`;
type BackdropFilterBackdropLiteral = `backdrop-${BackdropFilterRef9}`;
type BackdropFilterProperty =
  | BackdropFilterBackdropblurLiteral
  | BackdropFilterBackdropbrightnessLiteral
  | BackdropFilterBackdropcontrastLiteral
  | BackdropFilterBackdropgrayscaleLiteral
  | BackdropFilterBackdrophuerotateLiteral
  | BackdropFilterBackdropinvertLiteral
  | BackdropFilterBackdropopacityLiteral
  | BackdropFilterBackdropsaturateLiteral
  | BackdropFilterBackdropsepiaLiteral
  | BackdropFilterBackdropLiteral;
type BackdropFilterArbitraryValue =
  | (`backdrop-(${string})` & {})
  | (`backdrop-[${string}]` & {});
type BackdropFilterValue =
  | BackdropFilterProperty
  | BackdropFilterArbitraryValue;
interface TailwindBackdropFilter {
  /**
   * `BackdropFilter`
   *
   * Utilities for applying backdrop filters to an element.
   *
   * Arbitrary support
   *
   * `backdrop-(<var-name>)`, `backdrop-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/backdrop-filter Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter , MDN docs}
   */
  backdropFilter: BackdropFilterValue;
}
type BackfaceVisibilityValue =
  | 'backface-hidden'
  | 'backface-visible'
  | 'backface-hidden'
  | 'backface-visible';
interface TailwindBackfaceVisibility {
  /**
   * `BackfaceVisibility`
   *
   * Utilities for controlling if an element's backface is visible.
   *
   * @see
   * {@link https://tailwindcss.com/docs/backface-visibility Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility , MDN docs}
   */
  backfaceVisibility: BackfaceVisibilityValue;
}
type FlexBasisBasisLiteral = `basis-${FlexBasisRef1}`;
type FlexBasisProperty = FlexBasisBasisLiteral;
type FlexBasisArbitraryValue =
  | (`basis-${number}` & {})
  | (`basis-(${string})` & {})
  | (`basis-[${string}]` & {});
type FlexBasisValue = FlexBasisProperty | FlexBasisArbitraryValue;
interface TailwindFlexBasis {
  /**
   * `FlexBasis`
   *
   * Utilities for controlling the initial size of flex items.
   *
   * Arbitrary support
   *
   * `basis-<number>`, `basis-(<var-name>)`, `basis-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/flex-basis Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis , MDN docs}
   */
  flexBasis: FlexBasisValue;
}
type BackgroundColorBgLiteral =
  | `bg-${BackgroundColorRef1}`
  | 'bg-accent-content'
  | 'bg-amber-50'
  | 'bg-amber-100'
  | 'bg-amber-200'
  | 'bg-amber-300'
  | 'bg-amber-400'
  | 'bg-amber-500'
  | 'bg-amber-600'
  | 'bg-amber-700'
  | 'bg-amber-800'
  | 'bg-amber-900'
  | 'bg-amber-950'
  | 'bg-base-100'
  | 'bg-base-200'
  | 'bg-base-300'
  | 'bg-base-content'
  | 'bg-black'
  | 'bg-blue-50'
  | 'bg-blue-100'
  | 'bg-blue-200'
  | 'bg-blue-300'
  | 'bg-blue-400'
  | 'bg-blue-500'
  | 'bg-blue-600'
  | 'bg-blue-700'
  | 'bg-blue-800'
  | 'bg-blue-900'
  | 'bg-blue-950'
  | 'bg-current'
  | 'bg-cyan-50'
  | 'bg-cyan-100'
  | 'bg-cyan-200'
  | 'bg-cyan-300'
  | 'bg-cyan-400'
  | 'bg-cyan-500'
  | 'bg-cyan-600'
  | 'bg-cyan-700'
  | 'bg-cyan-800'
  | 'bg-cyan-900'
  | 'bg-cyan-950'
  | 'bg-emerald-50'
  | 'bg-emerald-100'
  | 'bg-emerald-200'
  | 'bg-emerald-300'
  | 'bg-emerald-400'
  | 'bg-emerald-500'
  | 'bg-emerald-600'
  | 'bg-emerald-700'
  | 'bg-emerald-800'
  | 'bg-emerald-900'
  | 'bg-emerald-950'
  | 'bg-error-content'
  | 'bg-fuchsia-50'
  | 'bg-fuchsia-100'
  | 'bg-fuchsia-200'
  | 'bg-fuchsia-300'
  | 'bg-fuchsia-400'
  | 'bg-fuchsia-500'
  | 'bg-fuchsia-600'
  | 'bg-fuchsia-700'
  | 'bg-fuchsia-800'
  | 'bg-fuchsia-900'
  | 'bg-fuchsia-950'
  | 'bg-gray-50'
  | 'bg-gray-100'
  | 'bg-gray-200'
  | 'bg-gray-300'
  | 'bg-gray-400'
  | 'bg-gray-500'
  | 'bg-gray-600'
  | 'bg-gray-700'
  | 'bg-gray-800'
  | 'bg-gray-900'
  | 'bg-gray-950'
  | 'bg-green-50'
  | 'bg-green-100'
  | 'bg-green-200'
  | 'bg-green-300'
  | 'bg-green-400'
  | 'bg-green-500'
  | 'bg-green-600'
  | 'bg-green-700'
  | 'bg-green-800'
  | 'bg-green-900'
  | 'bg-green-950'
  | 'bg-indigo-50'
  | 'bg-indigo-100'
  | 'bg-indigo-200'
  | 'bg-indigo-300'
  | 'bg-indigo-400'
  | 'bg-indigo-500'
  | 'bg-indigo-600'
  | 'bg-indigo-700'
  | 'bg-indigo-800'
  | 'bg-indigo-900'
  | 'bg-indigo-950'
  | 'bg-info-content'
  | 'bg-inherit'
  | 'bg-left-bottom'
  | 'bg-left-top'
  | 'bg-lime-50'
  | 'bg-lime-100'
  | 'bg-lime-200'
  | 'bg-lime-300'
  | 'bg-lime-400'
  | 'bg-lime-500'
  | 'bg-lime-600'
  | 'bg-lime-700'
  | 'bg-lime-800'
  | 'bg-lime-900'
  | 'bg-lime-950'
  | 'bg-neutral-50'
  | 'bg-neutral-100'
  | 'bg-neutral-200'
  | 'bg-neutral-300'
  | 'bg-neutral-400'
  | 'bg-neutral-500'
  | 'bg-neutral-600'
  | 'bg-neutral-700'
  | 'bg-neutral-800'
  | 'bg-neutral-900'
  | 'bg-neutral-950'
  | 'bg-neutral-content'
  | 'bg-orange-50'
  | 'bg-orange-100'
  | 'bg-orange-200'
  | 'bg-orange-300'
  | 'bg-orange-400'
  | 'bg-orange-500'
  | 'bg-orange-600'
  | 'bg-orange-700'
  | 'bg-orange-800'
  | 'bg-orange-900'
  | 'bg-orange-950'
  | 'bg-pink-50'
  | 'bg-pink-100'
  | 'bg-pink-200'
  | 'bg-pink-300'
  | 'bg-pink-400'
  | 'bg-pink-500'
  | 'bg-pink-600'
  | 'bg-pink-700'
  | 'bg-pink-800'
  | 'bg-pink-900'
  | 'bg-pink-950'
  | 'bg-primary-content'
  | 'bg-purple-50'
  | 'bg-purple-100'
  | 'bg-purple-200'
  | 'bg-purple-300'
  | 'bg-purple-400'
  | 'bg-purple-500'
  | 'bg-purple-600'
  | 'bg-purple-700'
  | 'bg-purple-800'
  | 'bg-purple-900'
  | 'bg-purple-950'
  | 'bg-red-50'
  | 'bg-red-100'
  | 'bg-red-200'
  | 'bg-red-300'
  | 'bg-red-400'
  | 'bg-red-500'
  | 'bg-red-600'
  | 'bg-red-700'
  | 'bg-red-800'
  | 'bg-red-900'
  | 'bg-red-950'
  | 'bg-right-bottom'
  | 'bg-right-top'
  | 'bg-rose-50'
  | 'bg-rose-100'
  | 'bg-rose-200'
  | 'bg-rose-300'
  | 'bg-rose-400'
  | 'bg-rose-500'
  | 'bg-rose-600'
  | 'bg-rose-700'
  | 'bg-rose-800'
  | 'bg-rose-900'
  | 'bg-rose-950'
  | 'bg-secondary-content'
  | 'bg-sky-50'
  | 'bg-sky-100'
  | 'bg-sky-200'
  | 'bg-sky-300'
  | 'bg-sky-400'
  | 'bg-sky-500'
  | 'bg-sky-600'
  | 'bg-sky-700'
  | 'bg-sky-800'
  | 'bg-sky-900'
  | 'bg-sky-950'
  | 'bg-slate-50'
  | 'bg-slate-100'
  | 'bg-slate-200'
  | 'bg-slate-300'
  | 'bg-slate-400'
  | 'bg-slate-500'
  | 'bg-slate-600'
  | 'bg-slate-700'
  | 'bg-slate-800'
  | 'bg-slate-900'
  | 'bg-slate-950'
  | 'bg-stone-50'
  | 'bg-stone-100'
  | 'bg-stone-200'
  | 'bg-stone-300'
  | 'bg-stone-400'
  | 'bg-stone-500'
  | 'bg-stone-600'
  | 'bg-stone-700'
  | 'bg-stone-800'
  | 'bg-stone-900'
  | 'bg-stone-950'
  | 'bg-success-content'
  | 'bg-teal-50'
  | 'bg-teal-100'
  | 'bg-teal-200'
  | 'bg-teal-300'
  | 'bg-teal-400'
  | 'bg-teal-500'
  | 'bg-teal-600'
  | 'bg-teal-700'
  | 'bg-teal-800'
  | 'bg-teal-900'
  | 'bg-teal-950'
  | 'bg-transparent'
  | 'bg-violet-50'
  | 'bg-violet-100'
  | 'bg-violet-200'
  | 'bg-violet-300'
  | 'bg-violet-400'
  | 'bg-violet-500'
  | 'bg-violet-600'
  | 'bg-violet-700'
  | 'bg-violet-800'
  | 'bg-violet-900'
  | 'bg-violet-950'
  | 'bg-warning-content'
  | 'bg-white'
  | 'bg-yellow-50'
  | 'bg-yellow-100'
  | 'bg-yellow-200'
  | 'bg-yellow-300'
  | 'bg-yellow-400'
  | 'bg-yellow-500'
  | 'bg-yellow-600'
  | 'bg-yellow-700'
  | 'bg-yellow-800'
  | 'bg-yellow-900'
  | 'bg-yellow-950'
  | 'bg-zinc-50'
  | 'bg-zinc-100'
  | 'bg-zinc-200'
  | 'bg-zinc-300'
  | 'bg-zinc-400'
  | 'bg-zinc-500'
  | 'bg-zinc-600'
  | 'bg-zinc-700'
  | 'bg-zinc-800'
  | 'bg-zinc-900'
  | 'bg-zinc-950';
type BackgroundColorDividerLiteral = `divider-${BackgroundColorRef1}`;
type BackgroundColorProperty =
  | 'table-zebra'
  | BackgroundColorBgLiteral
  | BackgroundColorDividerLiteral;
type BackgroundColorArbitraryValue =
  | (`bg-(${string})` & {})
  | (`bg-[${string}]` & {});
type BackgroundColorValue =
  | BackgroundColorProperty
  | (`bg-${string}/${VariantsA91e8ba1}` & {})
  | (`divider-${string}/${VariantsA91e8ba1}` & {})
  | BackgroundColorArbitraryValue;
interface TailwindBackgroundColor {
  /**
   * `BackgroundColor`
   *
   * Utilities for controlling an element's background color.
   *
   * Arbitrary support
   *
   * `bg-(<var-name>)`, `bg-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/background-color Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-color , MDN docs}
   */
  backgroundColor: BackgroundColorValue;
}
type BackgroundSizeBgLiteral = `bg-${BackgroundSizeRef1}`;
type BackgroundSizeProperty = BackgroundSizeBgLiteral;
type BackgroundSizeArbitraryValue =
  | (`bg-(${string})` & {})
  | (`bg-[${string}]` & {});
type BackgroundSizeValue =
  | BackgroundSizeProperty
  | BackgroundSizeArbitraryValue;
interface TailwindBackgroundSize {
  /**
   * `BackgroundSize`
   *
   * Utilities for controlling the background size of an element's background
   * image.
   *
   * Arbitrary support
   *
   * `bg-(<var-name>)`, `bg-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/background-size Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-size , MDN docs}
   */
  backgroundSize: BackgroundSizeValue;
}
type BackgroundBlendModeBgblendLiteral = `bg-blend-${BackgroundBlendModeRef1}`;
type BackgroundBlendModeBgblendcolorLiteral =
  `bg-blend-color-${BackgroundBlendModeRef2}`;
type BackgroundBlendModeValue =
  | BackgroundBlendModeBgblendLiteral
  | BackgroundBlendModeBgblendcolorLiteral;
interface TailwindBackgroundBlendMode {
  /**
   * `BackgroundBlendMode`
   *
   * Utilities for controlling how an element's background image should blend
   * with its background color.
   *
   * @see
   * {@link https://tailwindcss.com/docs/background-blend-mode Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode , MDN docs}
   */
  backgroundBlendMode: BackgroundBlendModeValue;
}
type BackgroundPositionBgbottomLiteral = `bg-bottom-${BackgroundPositionRef1}`;
type BackgroundPositionBgtopLiteral = `bg-top-${BackgroundPositionRef2}`;
type BackgroundPositionBgLiteral = `bg-${BackgroundPositionRef3}`;
type BackgroundPositionProperty =
  | BackgroundPositionBgbottomLiteral
  | BackgroundPositionBgtopLiteral
  | BackgroundPositionBgLiteral;
type BackgroundPositionArbitraryValue =
  | (`bg-(${string})` & {})
  | (`bg-[${string}]` & {});
type BackgroundPositionValue =
  | BackgroundPositionProperty
  | BackgroundPositionArbitraryValue;
interface TailwindBackgroundPosition {
  /**
   * `BackgroundPosition`
   *
   * Utilities for controlling the position of an element's background image.
   *
   * Arbitrary support
   *
   * `bg-(<var-name>)`, `bg-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/background-position Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position , MDN docs}
   */
  backgroundPosition: BackgroundPositionValue;
}
type BackgroundClipBgclipLiteral = `bg-clip-${BackgroundClipRef1}`;
type BackgroundClipValue = BackgroundClipBgclipLiteral;
interface TailwindBackgroundClip {
  /**
   * `BackgroundClip`
   *
   * Utilities for controlling the bounding box of an element's background.
   *
   * @see
   * {@link https://tailwindcss.com/docs/background-clip Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip , MDN docs}
   */
  backgroundClip: BackgroundClipValue;
}
type BackgroundAttachmentBgLiteral = `bg-${BackgroundAttachmentRef1}`;
type BackgroundAttachmentValue = BackgroundAttachmentBgLiteral;
interface TailwindBackgroundAttachment {
  /**
   * `BackgroundAttachment`
   *
   * Utilities for controlling how a background image behaves when scrolling.
   *
   * @see
   * {@link https://tailwindcss.com/docs/background-attachment Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment , MDN docs}
   */
  backgroundAttachment: BackgroundAttachmentValue;
}
type BackgroundRepeatBgrepeatLiteral = `bg-repeat-${BackgroundRepeatRef1}`;
type BackgroundRepeatBgLiteral = `bg-${BackgroundRepeatRef2}`;
type BackgroundRepeatValue =
  | BackgroundRepeatBgrepeatLiteral
  | BackgroundRepeatBgLiteral;
interface TailwindBackgroundRepeat {
  /**
   * `BackgroundRepeat`
   *
   * Utilities for controlling the repetition of an element's background image.
   *
   * @see
   * {@link https://tailwindcss.com/docs/background-repeat Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat , MDN docs}
   */
  backgroundRepeat: BackgroundRepeatValue;
}
type BackgroundOriginBgoriginLiteral = `bg-origin-${BackgroundOriginRef1}`;
type BackgroundOriginValue = BackgroundOriginBgoriginLiteral;
interface TailwindBackgroundOrigin {
  /**
   * `BackgroundOrigin`
   *
   * Utilities for controlling how an element's background is positioned
   * relative to borders, padding, and content.
   *
   * @see
   * {@link https://tailwindcss.com/docs/background-origin Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/background-origin , MDN docs}
   */
  backgroundOrigin: BackgroundOriginValue;
}
type DisplayInlineLiteral = `inline-${DisplayRef1}`;
type DisplayTableLiteral = `table-${DisplayRef2}`;
type DisplayValue =
  | 'block'
  | 'contents'
  | 'divider-end'
  | 'divider-start'
  | 'flex'
  | 'flow-root'
  | 'grid'
  | 'hidden'
  | 'inline'
  | 'list-item'
  | 'not-sr-only'
  | 'sr-only'
  | 'table'
  | DisplayInlineLiteral
  | DisplayTableLiteral;
interface TailwindDisplay {
  /**
   * `Display`
   *
   * Utilities for controlling the display box type of an element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/display Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/display , MDN docs}
   */
  display: DisplayValue;
}
type FilterBlurLiteral = `blur-${FilterRef1}`;
type FilterBrightnessLiteral =
  | `brightness-${FilterRef2}`
  | 'brightness-90'
  | 'brightness-95'
  | 'brightness-105'
  | 'brightness-110';
type FilterContrastLiteral = `contrast-${FilterRef2}`;
type FilterDropshadowLiteral = `drop-shadow-${FilterRef3}`;
type FilterGrayscaleLiteral = `grayscale-${FilterRef4}`;
type FilterHuerotateLiteral = `hue-rotate-${FilterRef5}`;
type FilterInvertLiteral = `invert-${FilterRef6}`;
type FilterSaturateLiteral = `saturate-${FilterRef7}`;
type FilterSepiaLiteral = `sepia-${FilterRef8}`;
type FilterProperty =
  | 'grayscale'
  | 'invert'
  | 'sepia'
  | FilterBlurLiteral
  | FilterBrightnessLiteral
  | FilterContrastLiteral
  | FilterDropshadowLiteral
  | FilterGrayscaleLiteral
  | FilterHuerotateLiteral
  | FilterInvertLiteral
  | FilterSaturateLiteral
  | FilterSepiaLiteral;
type FilterValue =
  | FilterProperty
  | (`blur-${string}/${VariantsA91e8ba1}` & {})
  | (`brightness-${string}/${VariantsA91e8ba1}` & {})
  | (`contrast-${string}/${VariantsA91e8ba1}` & {})
  | (`drop-shadow-${string}/${VariantsA91e8ba1}` & {})
  | (`grayscale-${string}/${VariantsA91e8ba1}` & {})
  | (`hue-rotate-${string}/${VariantsA91e8ba1}` & {})
  | (`invert-${string}/${VariantsA91e8ba1}` & {})
  | (`saturate-${string}/${VariantsA91e8ba1}` & {})
  | (`sepia-${string}/${VariantsA91e8ba1}` & {});
interface TailwindFilter {
  /**
   * `Filter`
   *
   * Utilities for applying filters to an element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/filter Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/filter , MDN docs}
   */
  filter: FilterValue;
}
type BorderWidthBorderbLiteral = `border-b-${BorderWidthRef1}`;
type BorderWidthBordereLiteral = `border-e-${BorderWidthRef1}`;
type BorderWidthBorderlLiteral = `border-l-${BorderWidthRef1}`;
type BorderWidthBorderrLiteral = `border-r-${BorderWidthRef1}`;
type BorderWidthBordersLiteral = `border-s-${BorderWidthRef1}`;
type BorderWidthBordertLiteral = `border-t-${BorderWidthRef1}`;
type BorderWidthBorderxLiteral = `border-x-${BorderWidthRef1}`;
type BorderWidthBorderyLiteral = `border-y-${BorderWidthRef1}`;
type BorderWidthDividexLiteral = `divide-x-${BorderWidthRef2}`;
type BorderWidthDivideyLiteral = `divide-y-${BorderWidthRef3}`;
type BorderWidthBorderLiteral =
  | `border-${BorderWidthRef1}`
  | 'border-b'
  | 'border-e'
  | 'border-l'
  | 'border-r'
  | 'border-s'
  | 'border-t'
  | 'border-x'
  | 'border-y';
type BorderWidthDivideLiteral = `divide-${BorderWidthRef4}`;
type BorderWidthProperty =
  | 'border'
  | BorderWidthBorderbLiteral
  | BorderWidthBordereLiteral
  | BorderWidthBorderlLiteral
  | BorderWidthBorderrLiteral
  | BorderWidthBordersLiteral
  | BorderWidthBordertLiteral
  | BorderWidthBorderxLiteral
  | BorderWidthBorderyLiteral
  | BorderWidthDividexLiteral
  | BorderWidthDivideyLiteral
  | BorderWidthBorderLiteral
  | BorderWidthDivideLiteral;
type BorderWidthArbitraryValue =
  | (`border-${number}` & {})
  | (`border-(${string})` & {})
  | (`border-[${string}]` & {})
  | (`border-b-${number}` & {})
  | (`border-b-(${string})` & {})
  | (`border-b-[${string}]` & {})
  | (`border-e-${number}` & {})
  | (`border-e-(${string})` & {})
  | (`border-e-[${string}]` & {})
  | (`border-l-${number}` & {})
  | (`border-l-(${string})` & {})
  | (`border-l-[${string}]` & {})
  | (`border-r-${number}` & {})
  | (`border-r-(${string})` & {})
  | (`border-r-[${string}]` & {})
  | (`border-s-${number}` & {})
  | (`border-s-(${string})` & {})
  | (`border-s-[${string}]` & {})
  | (`border-t-${number}` & {})
  | (`border-t-(${string})` & {})
  | (`border-t-[${string}]` & {})
  | (`border-x-${number}` & {})
  | (`border-x-(${string})` & {})
  | (`border-x-[${string}]` & {})
  | (`border-y-${number}` & {})
  | (`border-y-(${string})` & {})
  | (`border-y-[${string}]` & {})
  | (`divide-x-${number}` & {})
  | (`divide-x-(${string})` & {})
  | (`divide-x-[${string}]` & {})
  | (`divide-y-${number}` & {})
  | (`divide-y-(${string})` & {})
  | (`divide-y-[${string}]` & {})
  | (`divide-${number}` & {})
  | (`divide-(${string})` & {})
  | (`divide-[${string}]` & {});
type BorderWidthValue =
  | BorderWidthProperty
  | (`border-b-${string}/${VariantsA91e8ba1}` & {})
  | (`border-e-${string}/${VariantsA91e8ba1}` & {})
  | (`border-l-${string}/${VariantsA91e8ba1}` & {})
  | (`border-r-${string}/${VariantsA91e8ba1}` & {})
  | (`border-s-${string}/${VariantsA91e8ba1}` & {})
  | (`border-t-${string}/${VariantsA91e8ba1}` & {})
  | (`border-x-${string}/${VariantsA91e8ba1}` & {})
  | (`border-y-${string}/${VariantsA91e8ba1}` & {})
  | (`divide-x-${string}/${VariantsA91e8ba1}` & {})
  | (`divide-y-${string}/${VariantsA91e8ba1}` & {})
  | (`border-${string}/${VariantsA91e8ba1}` & {})
  | (`divide-${string}/${VariantsA91e8ba1}` & {})
  | BorderWidthArbitraryValue;
interface TailwindBorderWidth {
  /**
   * `BorderWidth`
   *
   * Utilities for controlling the width of an element's borders.
   *
   * Arbitrary support
   *
   * `border-<number>`, `border-(<var-name>)`, `border-[<arbitrary-value>]`,
   * `border-b-<number>`, `border-b-(<var-name>)` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/border-width Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-width , MDN docs}
   */
  borderWidth: BorderWidthValue;
}
type BorderColorBorderbLiteral = `border-b-${BorderColorRef1}`;
type BorderColorBordereLiteral = `border-e-${BorderColorRef1}`;
type BorderColorBorderlLiteral = `border-l-${BorderColorRef1}`;
type BorderColorBorderrLiteral = `border-r-${BorderColorRef1}`;
type BorderColorBordersLiteral = `border-s-${BorderColorRef1}`;
type BorderColorBordertLiteral = `border-t-${BorderColorRef1}`;
type BorderColorBorderxLiteral = `border-x-${BorderColorRef1}`;
type BorderColorBorderyLiteral = `border-y-${BorderColorRef1}`;
type BorderColorDivideLiteral =
  | `divide-${BorderColorRef1}`
  | 'divide-accent'
  | 'divide-error'
  | 'divide-info'
  | 'divide-neutral'
  | 'divide-primary'
  | 'divide-secondary'
  | 'divide-success'
  | 'divide-warning';
type BorderColorBorderLiteral = `border-${BorderColorRef1}`;
type BorderColorProperty =
  | BorderColorBorderbLiteral
  | BorderColorBordereLiteral
  | BorderColorBorderlLiteral
  | BorderColorBorderrLiteral
  | BorderColorBordersLiteral
  | BorderColorBordertLiteral
  | BorderColorBorderxLiteral
  | BorderColorBorderyLiteral
  | BorderColorDivideLiteral
  | BorderColorBorderLiteral;
type BorderColorArbitraryValue =
  | (`border-b-(${string})` & {})
  | (`border-b-[${string}]` & {})
  | (`border-e-(${string})` & {})
  | (`border-e-[${string}]` & {})
  | (`border-l-(${string})` & {})
  | (`border-l-[${string}]` & {})
  | (`border-r-(${string})` & {})
  | (`border-r-[${string}]` & {})
  | (`border-s-(${string})` & {})
  | (`border-s-[${string}]` & {})
  | (`border-t-(${string})` & {})
  | (`border-t-[${string}]` & {})
  | (`border-x-(${string})` & {})
  | (`border-x-[${string}]` & {})
  | (`border-y-(${string})` & {})
  | (`border-y-[${string}]` & {})
  | (`divide-(${string})` & {})
  | (`divide-[${string}]` & {})
  | (`border-(${string})` & {})
  | (`border-[${string}]` & {});
type BorderColorValue =
  | BorderColorProperty
  | (`border-b-${string}/${VariantsA91e8ba1}` & {})
  | (`border-e-${string}/${VariantsA91e8ba1}` & {})
  | (`border-l-${string}/${VariantsA91e8ba1}` & {})
  | (`border-r-${string}/${VariantsA91e8ba1}` & {})
  | (`border-s-${string}/${VariantsA91e8ba1}` & {})
  | (`border-t-${string}/${VariantsA91e8ba1}` & {})
  | (`border-x-${string}/${VariantsA91e8ba1}` & {})
  | (`border-y-${string}/${VariantsA91e8ba1}` & {})
  | (`divide-${string}/${VariantsA91e8ba1}` & {})
  | (`border-${string}/${VariantsA91e8ba1}` & {})
  | BorderColorArbitraryValue;
interface TailwindBorderColor {
  /**
   * `BorderColor`
   *
   * Utilities for controlling the color of an element's borders.
   *
   * Arbitrary support
   *
   * `border-b-(<var-name>)`, `border-b-[<arbitrary-value>]`,
   * `border-e-(<var-name>)`, `border-e-[<arbitrary-value>]`,
   * `border-l-(<var-name>)` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/border-color Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-color , MDN docs}
   */
  borderColor: BorderColorValue;
}
type BorderCollapseValue =
  | 'border-collapse'
  | 'border-separate'
  | 'border-collapse'
  | 'border-separate';
interface TailwindBorderCollapse {
  /**
   * `BorderCollapse`
   *
   * Utilities for controlling whether table borders should collapse or be
   * separated.
   *
   * @see
   * {@link https://tailwindcss.com/docs/border-collapse Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse , MDN docs}
   */
  borderCollapse: BorderCollapseValue;
}
type BorderStyleBorderLiteral = `border-${BorderStyleRef1}`;
type BorderStyleDivideLiteral = `divide-${BorderStyleRef2}`;
type BorderStyleValue =
  | 'btn-dash'
  | BorderStyleBorderLiteral
  | BorderStyleDivideLiteral;
interface TailwindBorderStyle {
  /**
   * `BorderStyle`
   *
   * Utilities for controlling the style of an element's borders.
   *
   * @see
   * {@link https://tailwindcss.com/docs/border-style Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-style , MDN docs}
   */
  borderStyle: BorderStyleValue;
}
type BorderSpacingXLiteral = `border-spacing-x-${BorderSpacingRef1}`;
type BorderSpacingYLiteral = `border-spacing-y-${BorderSpacingRef1}`;
type BorderSpacingLiteral = `border-spacing-${BorderSpacingRef1}`;
type BorderSpacingProperty =
  | BorderSpacingXLiteral
  | BorderSpacingYLiteral
  | BorderSpacingLiteral;
type BorderSpacingArbitraryValue =
  | (`border-spacing-x-${number}` & {})
  | (`border-spacing-x-(${string})` & {})
  | (`border-spacing-x-[${string}]` & {})
  | (`border-spacing-y-${number}` & {})
  | (`border-spacing-y-(${string})` & {})
  | (`border-spacing-y-[${string}]` & {})
  | (`border-spacing-${number}` & {})
  | (`border-spacing-(${string})` & {})
  | (`border-spacing-[${string}]` & {});
type BorderSpacingValue = BorderSpacingProperty | BorderSpacingArbitraryValue;
interface TailwindBorderSpacing {
  /**
   * `BorderSpacing`
   *
   * Utilities for controlling the spacing between table borders.
   *
   * Arbitrary support
   *
   * `border-spacing-x-<number>`, `border-spacing-x-(<var-name>)`,
   * `border-spacing-x-[<arbitrary-value>]`, `border-spacing-y-<number>`,
   * `border-spacing-y-(<var-name>)` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/border-spacing Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-spacing , MDN docs}
   */
  borderSpacing: BorderSpacingValue;
}
type BoxSizingValue =
  | 'box-border'
  | 'box-content'
  | 'box-border'
  | 'box-content';
interface TailwindBoxSizing {
  /**
   * `BoxSizing`
   *
   * Utilities for controlling how the browser should calculate an element's
   * total size.
   *
   * @see
   * {@link https://tailwindcss.com/docs/box-sizing Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing , MDN docs}
   */
  boxSizing: BoxSizingValue;
}
type BoxDecorationBreakValue =
  | 'box-decoration-clone'
  | 'box-decoration-slice'
  | 'box-decoration-clone'
  | 'box-decoration-slice';
interface TailwindBoxDecorationBreak {
  /**
   * `BoxDecorationBreak`
   *
   * Utilities for controlling how element fragments should be rendered across
   * multiple lines, columns, or pages.
   *
   * @see
   * {@link https://tailwindcss.com/docs/box-decoration-break Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/box-decoration-break , MDN docs}
   */
  boxDecorationBreak: BoxDecorationBreakValue;
}
type BreakAfterLiteral = `break-after-${BreakAfterRef1}`;
type BreakAfterValue = BreakAfterLiteral;
interface TailwindBreakAfter {
  /**
   * `BreakAfter`
   *
   * Utilities for controlling how a column or page should break after an
   * element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/break-after Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/break-after , MDN docs}
   */
  breakAfter: BreakAfterValue;
}
type WordBreakBreakLiteral = `break-${WordBreakRef1}`;
type WordBreakValue = WordBreakBreakLiteral;
interface TailwindWordBreak {
  /**
   * `WordBreak`
   *
   * Utilities for controlling word breaks in an element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/word-break Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/word-break , MDN docs}
   */
  wordBreak: WordBreakValue;
}
type BreakBeforeLiteral = `break-before-${BreakBeforeRef1}`;
type BreakBeforeValue = BreakBeforeLiteral;
interface TailwindBreakBefore {
  /**
   * `BreakBefore`
   *
   * Utilities for controlling how a column or page should break before an
   * element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/break-before Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/break-before , MDN docs}
   */
  breakBefore: BreakBeforeValue;
}
type BreakInsideLiteral = `break-inside-${BreakInsideRef1}`;
type BreakInsideAvoidLiteral = `break-inside-avoid-${BreakInsideRef2}`;
type BreakInsideValue = BreakInsideLiteral | BreakInsideAvoidLiteral;
interface TailwindBreakInside {
  /**
   * `BreakInside`
   *
   * Utilities for controlling how a column or page should break within an
   * element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/break-inside Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside , MDN docs}
   */
  breakInside: BreakInsideValue;
}
type OverflowWrapWrapLiteral = `wrap-${OverflowWrapRef1}`;
type OverflowWrapValue = 'break-words' | OverflowWrapWrapLiteral;
interface TailwindOverflowWrap {
  /**
   * `OverflowWrap`
   *
   * Utilities for controlling line breaks within words in an overflowing
   * element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/overflow-wrap Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap , MDN docs}
   */
  overflowWrap: OverflowWrapValue;
}
type IsolationValue =
  | 'btn-active'
  | 'isolate'
  | 'isolation-auto'
  | 'btn-active'
  | 'isolate'
  | 'isolation-auto';
interface TailwindIsolation {
  /**
   * `Isolation`
   *
   * Utilities for controlling whether an element should explicitly create a new
   * stacking context.
   *
   * @see
   * {@link https://tailwindcss.com/docs/isolation Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/isolation , MDN docs}
   */
  isolation: IsolationValue;
}
type WidthLoadingLiteral = `loading-${WidthRef1}`;
type WidthSizeLiteral = `size-${WidthRef2}`;
type WidthWLiteral =
  | `w-${WidthRef2}`
  | 'w-2xl'
  | 'w-2xs'
  | 'w-3xl'
  | 'w-3xs'
  | 'w-4xl'
  | 'w-5xl'
  | 'w-6xl'
  | 'w-7xl'
  | 'w-lg'
  | 'w-md'
  | 'w-screen'
  | 'w-sm'
  | 'w-xl'
  | 'w-xs';
type WidthProperty =
  | 'btn-block'
  | 'rating-half'
  | WidthLoadingLiteral
  | WidthSizeLiteral
  | WidthWLiteral;
type WidthArbitraryValue =
  | (`size-${number}` & {})
  | (`size-(${string})` & {})
  | (`size-[${string}]` & {})
  | (`w-${number}` & {})
  | (`w-(${string})` & {})
  | (`w-[${string}]` & {});
type WidthValue = WidthProperty | WidthArbitraryValue;
interface TailwindWidth {
  /**
   * `Width`
   *
   * Utilities for setting the width of an element.
   *
   * Arbitrary support
   *
   * `size-<number>`, `size-(<var-name>)`, `size-[<arbitrary-value>]`,
   * `w-<number>`, `w-(<var-name>)` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/width Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/width , MDN docs}
   */
  width: WidthValue;
}
type OutlineColorOutlineLiteral = `outline-${OutlineColorRef1}`;
type OutlineColorProperty = 'btn-ghost' | OutlineColorOutlineLiteral;
type OutlineColorArbitraryValue =
  | (`outline-(${string})` & {})
  | (`outline-[${string}]` & {});
type OutlineColorValue =
  | OutlineColorProperty
  | (`outline-${string}/${VariantsA91e8ba1}` & {})
  | OutlineColorArbitraryValue;
interface TailwindOutlineColor {
  /**
   * `OutlineColor`
   *
   * Utilities for controlling the color of an element's outline.
   *
   * Arbitrary support
   *
   * `outline-(<var-name>)`, `outline-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/outline-color Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/outline-color , MDN docs}
   */
  outlineColor: OutlineColorValue;
}
type TextTransformValue =
  | 'capitalize'
  | 'lowercase'
  | 'normal-case'
  | 'uppercase'
  | 'capitalize'
  | 'lowercase'
  | 'normal-case'
  | 'uppercase';
interface TailwindTextTransform {
  /**
   * `TextTransform`
   *
   * Utilities for controlling the capitalization of text.
   *
   * @see
   * {@link https://tailwindcss.com/docs/text-transform Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform , MDN docs}
   */
  textTransform: TextTransformValue;
}
type CaptionSideValue =
  | 'caption-bottom'
  | 'caption-top'
  | 'caption-bottom'
  | 'caption-top';
interface TailwindCaptionSide {
  /**
   * `CaptionSide`
   *
   * Utilities for controlling the alignment of a caption element inside of a
   * table.
   *
   * @see
   * {@link https://tailwindcss.com/docs/caption-side Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side , MDN docs}
   */
  captionSide: CaptionSideValue;
}
type CaretColorCaretLiteral = `caret-${CaretColorRef1}`;
type CaretColorProperty = CaretColorCaretLiteral;
type CaretColorArbitraryValue =
  | (`caret-${number}` & {})
  | (`caret-[${string}]` & {});
type CaretColorValue =
  | CaretColorProperty
  | (`caret-${string}/${VariantsA91e8ba1}` & {})
  | CaretColorArbitraryValue;
interface TailwindCaretColor {
  /**
   * `CaretColor`
   *
   * Utilities for controlling the color of the text input cursor.
   *
   * Arbitrary support
   *
   * `caret-<number>`, `caret-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/caret-color Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/caret-color , MDN docs}
   */
  caretColor: CaretColorValue;
}
type ScrollSnapAlignCarouselLiteral = `carousel-${ScrollSnapAlignRef1}`;
type ScrollSnapAlignSnapLiteral = `snap-${ScrollSnapAlignRef2}`;
type ScrollSnapAlignValue =
  | ScrollSnapAlignCarouselLiteral
  | ScrollSnapAlignSnapLiteral;
interface TailwindScrollSnapAlign {
  /**
   * `ScrollSnapAlign`
   *
   * Utilities for controlling the scroll snap alignment of an element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/scroll-snap-align Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align , MDN docs}
   */
  scrollSnapAlign: ScrollSnapAlignValue;
}
type ColorCheckboxLiteral = `checkbox-${ColorRef1}` | 'checkbox-neutral';
type ColorFileinputLiteral = `file-input-${ColorRef1}` | 'file-input-neutral';
type ColorLinkLiteral = `link-${ColorRef1}` | 'link-neutral';
type ColorPlaceholderLiteral =
  | `placeholder-${ColorRef1}`
  | 'placeholder-accent-content'
  | 'placeholder-amber-50'
  | 'placeholder-amber-100'
  | 'placeholder-amber-200'
  | 'placeholder-amber-300'
  | 'placeholder-amber-400'
  | 'placeholder-amber-500'
  | 'placeholder-amber-600'
  | 'placeholder-amber-700'
  | 'placeholder-amber-800'
  | 'placeholder-amber-900'
  | 'placeholder-amber-950'
  | 'placeholder-base-100'
  | 'placeholder-base-200'
  | 'placeholder-base-300'
  | 'placeholder-base-content'
  | 'placeholder-black'
  | 'placeholder-blue-50'
  | 'placeholder-blue-100'
  | 'placeholder-blue-200'
  | 'placeholder-blue-300'
  | 'placeholder-blue-400'
  | 'placeholder-blue-500'
  | 'placeholder-blue-600'
  | 'placeholder-blue-700'
  | 'placeholder-blue-800'
  | 'placeholder-blue-900'
  | 'placeholder-blue-950'
  | 'placeholder-current'
  | 'placeholder-cyan-50'
  | 'placeholder-cyan-100'
  | 'placeholder-cyan-200'
  | 'placeholder-cyan-300'
  | 'placeholder-cyan-400'
  | 'placeholder-cyan-500'
  | 'placeholder-cyan-600'
  | 'placeholder-cyan-700'
  | 'placeholder-cyan-800'
  | 'placeholder-cyan-900'
  | 'placeholder-cyan-950'
  | 'placeholder-emerald-50'
  | 'placeholder-emerald-100'
  | 'placeholder-emerald-200'
  | 'placeholder-emerald-300'
  | 'placeholder-emerald-400'
  | 'placeholder-emerald-500'
  | 'placeholder-emerald-600'
  | 'placeholder-emerald-700'
  | 'placeholder-emerald-800'
  | 'placeholder-emerald-900'
  | 'placeholder-emerald-950'
  | 'placeholder-error-content'
  | 'placeholder-fuchsia-50'
  | 'placeholder-fuchsia-100'
  | 'placeholder-fuchsia-200'
  | 'placeholder-fuchsia-300'
  | 'placeholder-fuchsia-400'
  | 'placeholder-fuchsia-500'
  | 'placeholder-fuchsia-600'
  | 'placeholder-fuchsia-700'
  | 'placeholder-fuchsia-800'
  | 'placeholder-fuchsia-900'
  | 'placeholder-fuchsia-950'
  | 'placeholder-gray-50'
  | 'placeholder-gray-100'
  | 'placeholder-gray-200'
  | 'placeholder-gray-300'
  | 'placeholder-gray-400'
  | 'placeholder-gray-500'
  | 'placeholder-gray-600'
  | 'placeholder-gray-700'
  | 'placeholder-gray-800'
  | 'placeholder-gray-900'
  | 'placeholder-gray-950'
  | 'placeholder-green-50'
  | 'placeholder-green-100'
  | 'placeholder-green-200'
  | 'placeholder-green-300'
  | 'placeholder-green-400'
  | 'placeholder-green-500'
  | 'placeholder-green-600'
  | 'placeholder-green-700'
  | 'placeholder-green-800'
  | 'placeholder-green-900'
  | 'placeholder-green-950'
  | 'placeholder-indigo-50'
  | 'placeholder-indigo-100'
  | 'placeholder-indigo-200'
  | 'placeholder-indigo-300'
  | 'placeholder-indigo-400'
  | 'placeholder-indigo-500'
  | 'placeholder-indigo-600'
  | 'placeholder-indigo-700'
  | 'placeholder-indigo-800'
  | 'placeholder-indigo-900'
  | 'placeholder-indigo-950'
  | 'placeholder-info-content'
  | 'placeholder-inherit'
  | 'placeholder-lime-50'
  | 'placeholder-lime-100'
  | 'placeholder-lime-200'
  | 'placeholder-lime-300'
  | 'placeholder-lime-400'
  | 'placeholder-lime-500'
  | 'placeholder-lime-600'
  | 'placeholder-lime-700'
  | 'placeholder-lime-800'
  | 'placeholder-lime-900'
  | 'placeholder-lime-950'
  | 'placeholder-neutral'
  | 'placeholder-neutral-50'
  | 'placeholder-neutral-100'
  | 'placeholder-neutral-200'
  | 'placeholder-neutral-300'
  | 'placeholder-neutral-400'
  | 'placeholder-neutral-500'
  | 'placeholder-neutral-600'
  | 'placeholder-neutral-700'
  | 'placeholder-neutral-800'
  | 'placeholder-neutral-900'
  | 'placeholder-neutral-950'
  | 'placeholder-neutral-content'
  | 'placeholder-orange-50'
  | 'placeholder-orange-100'
  | 'placeholder-orange-200'
  | 'placeholder-orange-300'
  | 'placeholder-orange-400'
  | 'placeholder-orange-500'
  | 'placeholder-orange-600'
  | 'placeholder-orange-700'
  | 'placeholder-orange-800'
  | 'placeholder-orange-900'
  | 'placeholder-orange-950'
  | 'placeholder-pink-50'
  | 'placeholder-pink-100'
  | 'placeholder-pink-200'
  | 'placeholder-pink-300'
  | 'placeholder-pink-400'
  | 'placeholder-pink-500'
  | 'placeholder-pink-600'
  | 'placeholder-pink-700'
  | 'placeholder-pink-800'
  | 'placeholder-pink-900'
  | 'placeholder-pink-950'
  | 'placeholder-primary-content'
  | 'placeholder-purple-50'
  | 'placeholder-purple-100'
  | 'placeholder-purple-200'
  | 'placeholder-purple-300'
  | 'placeholder-purple-400'
  | 'placeholder-purple-500'
  | 'placeholder-purple-600'
  | 'placeholder-purple-700'
  | 'placeholder-purple-800'
  | 'placeholder-purple-900'
  | 'placeholder-purple-950'
  | 'placeholder-red-50'
  | 'placeholder-red-100'
  | 'placeholder-red-200'
  | 'placeholder-red-300'
  | 'placeholder-red-400'
  | 'placeholder-red-500'
  | 'placeholder-red-600'
  | 'placeholder-red-700'
  | 'placeholder-red-800'
  | 'placeholder-red-900'
  | 'placeholder-red-950'
  | 'placeholder-rose-50'
  | 'placeholder-rose-100'
  | 'placeholder-rose-200'
  | 'placeholder-rose-300'
  | 'placeholder-rose-400'
  | 'placeholder-rose-500'
  | 'placeholder-rose-600'
  | 'placeholder-rose-700'
  | 'placeholder-rose-800'
  | 'placeholder-rose-900'
  | 'placeholder-rose-950'
  | 'placeholder-secondary-content'
  | 'placeholder-sky-50'
  | 'placeholder-sky-100'
  | 'placeholder-sky-200'
  | 'placeholder-sky-300'
  | 'placeholder-sky-400'
  | 'placeholder-sky-500'
  | 'placeholder-sky-600'
  | 'placeholder-sky-700'
  | 'placeholder-sky-800'
  | 'placeholder-sky-900'
  | 'placeholder-sky-950'
  | 'placeholder-slate-50'
  | 'placeholder-slate-100'
  | 'placeholder-slate-200'
  | 'placeholder-slate-300'
  | 'placeholder-slate-400'
  | 'placeholder-slate-500'
  | 'placeholder-slate-600'
  | 'placeholder-slate-700'
  | 'placeholder-slate-800'
  | 'placeholder-slate-900'
  | 'placeholder-slate-950'
  | 'placeholder-stone-50'
  | 'placeholder-stone-100'
  | 'placeholder-stone-200'
  | 'placeholder-stone-300'
  | 'placeholder-stone-400'
  | 'placeholder-stone-500'
  | 'placeholder-stone-600'
  | 'placeholder-stone-700'
  | 'placeholder-stone-800'
  | 'placeholder-stone-900'
  | 'placeholder-stone-950'
  | 'placeholder-success-content'
  | 'placeholder-teal-50'
  | 'placeholder-teal-100'
  | 'placeholder-teal-200'
  | 'placeholder-teal-300'
  | 'placeholder-teal-400'
  | 'placeholder-teal-500'
  | 'placeholder-teal-600'
  | 'placeholder-teal-700'
  | 'placeholder-teal-800'
  | 'placeholder-teal-900'
  | 'placeholder-teal-950'
  | 'placeholder-transparent'
  | 'placeholder-violet-50'
  | 'placeholder-violet-100'
  | 'placeholder-violet-200'
  | 'placeholder-violet-300'
  | 'placeholder-violet-400'
  | 'placeholder-violet-500'
  | 'placeholder-violet-600'
  | 'placeholder-violet-700'
  | 'placeholder-violet-800'
  | 'placeholder-violet-900'
  | 'placeholder-violet-950'
  | 'placeholder-warning-content'
  | 'placeholder-white'
  | 'placeholder-yellow-50'
  | 'placeholder-yellow-100'
  | 'placeholder-yellow-200'
  | 'placeholder-yellow-300'
  | 'placeholder-yellow-400'
  | 'placeholder-yellow-500'
  | 'placeholder-yellow-600'
  | 'placeholder-yellow-700'
  | 'placeholder-yellow-800'
  | 'placeholder-yellow-900'
  | 'placeholder-yellow-950'
  | 'placeholder-zinc-50'
  | 'placeholder-zinc-100'
  | 'placeholder-zinc-200'
  | 'placeholder-zinc-300'
  | 'placeholder-zinc-400'
  | 'placeholder-zinc-500'
  | 'placeholder-zinc-600'
  | 'placeholder-zinc-700'
  | 'placeholder-zinc-800'
  | 'placeholder-zinc-900'
  | 'placeholder-zinc-950';
type ColorProgressLiteral = `progress-${ColorRef1}` | 'progress-neutral';
type ColorRangeLiteral = `range-${ColorRef1}` | 'range-neutral';
type ColorTextLiteral =
  | `text-${ColorRef1}`
  | 'text-accent-content'
  | 'text-amber-50'
  | 'text-amber-100'
  | 'text-amber-200'
  | 'text-amber-300'
  | 'text-amber-400'
  | 'text-amber-500'
  | 'text-amber-600'
  | 'text-amber-700'
  | 'text-amber-800'
  | 'text-amber-900'
  | 'text-amber-950'
  | 'text-base-100'
  | 'text-base-200'
  | 'text-base-300'
  | 'text-base-content'
  | 'text-black'
  | 'text-blue-50'
  | 'text-blue-100'
  | 'text-blue-200'
  | 'text-blue-300'
  | 'text-blue-400'
  | 'text-blue-500'
  | 'text-blue-600'
  | 'text-blue-700'
  | 'text-blue-800'
  | 'text-blue-900'
  | 'text-blue-950'
  | 'text-current'
  | 'text-cyan-50'
  | 'text-cyan-100'
  | 'text-cyan-200'
  | 'text-cyan-300'
  | 'text-cyan-400'
  | 'text-cyan-500'
  | 'text-cyan-600'
  | 'text-cyan-700'
  | 'text-cyan-800'
  | 'text-cyan-900'
  | 'text-cyan-950'
  | 'text-emerald-50'
  | 'text-emerald-100'
  | 'text-emerald-200'
  | 'text-emerald-300'
  | 'text-emerald-400'
  | 'text-emerald-500'
  | 'text-emerald-600'
  | 'text-emerald-700'
  | 'text-emerald-800'
  | 'text-emerald-900'
  | 'text-emerald-950'
  | 'text-error-content'
  | 'text-fuchsia-50'
  | 'text-fuchsia-100'
  | 'text-fuchsia-200'
  | 'text-fuchsia-300'
  | 'text-fuchsia-400'
  | 'text-fuchsia-500'
  | 'text-fuchsia-600'
  | 'text-fuchsia-700'
  | 'text-fuchsia-800'
  | 'text-fuchsia-900'
  | 'text-fuchsia-950'
  | 'text-gray-50'
  | 'text-gray-100'
  | 'text-gray-200'
  | 'text-gray-300'
  | 'text-gray-400'
  | 'text-gray-500'
  | 'text-gray-600'
  | 'text-gray-700'
  | 'text-gray-800'
  | 'text-gray-900'
  | 'text-gray-950'
  | 'text-green-50'
  | 'text-green-100'
  | 'text-green-200'
  | 'text-green-300'
  | 'text-green-400'
  | 'text-green-500'
  | 'text-green-600'
  | 'text-green-700'
  | 'text-green-800'
  | 'text-green-900'
  | 'text-green-950'
  | 'text-indigo-50'
  | 'text-indigo-100'
  | 'text-indigo-200'
  | 'text-indigo-300'
  | 'text-indigo-400'
  | 'text-indigo-500'
  | 'text-indigo-600'
  | 'text-indigo-700'
  | 'text-indigo-800'
  | 'text-indigo-900'
  | 'text-indigo-950'
  | 'text-info-content'
  | 'text-inherit'
  | 'text-lime-50'
  | 'text-lime-100'
  | 'text-lime-200'
  | 'text-lime-300'
  | 'text-lime-400'
  | 'text-lime-500'
  | 'text-lime-600'
  | 'text-lime-700'
  | 'text-lime-800'
  | 'text-lime-900'
  | 'text-lime-950'
  | 'text-neutral'
  | 'text-neutral-50'
  | 'text-neutral-100'
  | 'text-neutral-200'
  | 'text-neutral-300'
  | 'text-neutral-400'
  | 'text-neutral-500'
  | 'text-neutral-600'
  | 'text-neutral-700'
  | 'text-neutral-800'
  | 'text-neutral-900'
  | 'text-neutral-950'
  | 'text-neutral-content'
  | 'text-orange-50'
  | 'text-orange-100'
  | 'text-orange-200'
  | 'text-orange-300'
  | 'text-orange-400'
  | 'text-orange-500'
  | 'text-orange-600'
  | 'text-orange-700'
  | 'text-orange-800'
  | 'text-orange-900'
  | 'text-orange-950'
  | 'text-pink-50'
  | 'text-pink-100'
  | 'text-pink-200'
  | 'text-pink-300'
  | 'text-pink-400'
  | 'text-pink-500'
  | 'text-pink-600'
  | 'text-pink-700'
  | 'text-pink-800'
  | 'text-pink-900'
  | 'text-pink-950'
  | 'text-primary-content'
  | 'text-purple-50'
  | 'text-purple-100'
  | 'text-purple-200'
  | 'text-purple-300'
  | 'text-purple-400'
  | 'text-purple-500'
  | 'text-purple-600'
  | 'text-purple-700'
  | 'text-purple-800'
  | 'text-purple-900'
  | 'text-purple-950'
  | 'text-red-50'
  | 'text-red-100'
  | 'text-red-200'
  | 'text-red-300'
  | 'text-red-400'
  | 'text-red-500'
  | 'text-red-600'
  | 'text-red-700'
  | 'text-red-800'
  | 'text-red-900'
  | 'text-red-950'
  | 'text-rose-50'
  | 'text-rose-100'
  | 'text-rose-200'
  | 'text-rose-300'
  | 'text-rose-400'
  | 'text-rose-500'
  | 'text-rose-600'
  | 'text-rose-700'
  | 'text-rose-800'
  | 'text-rose-900'
  | 'text-rose-950'
  | 'text-secondary-content'
  | 'text-sky-50'
  | 'text-sky-100'
  | 'text-sky-200'
  | 'text-sky-300'
  | 'text-sky-400'
  | 'text-sky-500'
  | 'text-sky-600'
  | 'text-sky-700'
  | 'text-sky-800'
  | 'text-sky-900'
  | 'text-sky-950'
  | 'text-slate-50'
  | 'text-slate-100'
  | 'text-slate-200'
  | 'text-slate-300'
  | 'text-slate-400'
  | 'text-slate-500'
  | 'text-slate-600'
  | 'text-slate-700'
  | 'text-slate-800'
  | 'text-slate-900'
  | 'text-slate-950'
  | 'text-stone-50'
  | 'text-stone-100'
  | 'text-stone-200'
  | 'text-stone-300'
  | 'text-stone-400'
  | 'text-stone-500'
  | 'text-stone-600'
  | 'text-stone-700'
  | 'text-stone-800'
  | 'text-stone-900'
  | 'text-stone-950'
  | 'text-success-content'
  | 'text-teal-50'
  | 'text-teal-100'
  | 'text-teal-200'
  | 'text-teal-300'
  | 'text-teal-400'
  | 'text-teal-500'
  | 'text-teal-600'
  | 'text-teal-700'
  | 'text-teal-800'
  | 'text-teal-900'
  | 'text-teal-950'
  | 'text-transparent'
  | 'text-violet-50'
  | 'text-violet-100'
  | 'text-violet-200'
  | 'text-violet-300'
  | 'text-violet-400'
  | 'text-violet-500'
  | 'text-violet-600'
  | 'text-violet-700'
  | 'text-violet-800'
  | 'text-violet-900'
  | 'text-violet-950'
  | 'text-warning-content'
  | 'text-white'
  | 'text-yellow-50'
  | 'text-yellow-100'
  | 'text-yellow-200'
  | 'text-yellow-300'
  | 'text-yellow-400'
  | 'text-yellow-500'
  | 'text-yellow-600'
  | 'text-yellow-700'
  | 'text-yellow-800'
  | 'text-yellow-900'
  | 'text-yellow-950'
  | 'text-zinc-50'
  | 'text-zinc-100'
  | 'text-zinc-200'
  | 'text-zinc-300'
  | 'text-zinc-400'
  | 'text-zinc-500'
  | 'text-zinc-600'
  | 'text-zinc-700'
  | 'text-zinc-800'
  | 'text-zinc-900'
  | 'text-zinc-950';
type ColorTooltipLiteral = `tooltip-${ColorRef1}`;
type ColorProperty =
  | ColorCheckboxLiteral
  | ColorFileinputLiteral
  | ColorLinkLiteral
  | ColorPlaceholderLiteral
  | ColorProgressLiteral
  | ColorRangeLiteral
  | ColorTextLiteral
  | ColorTooltipLiteral;
type ColorArbitraryValue =
  | (`text-(${string})` & {})
  | (`text-[${string}]` & {});
type ColorValue =
  | ColorProperty
  | (`checkbox-${string}/${VariantsA91e8ba1}` & {})
  | (`file-input-${string}/${VariantsA91e8ba1}` & {})
  | (`link-${string}/${VariantsA91e8ba1}` & {})
  | (`placeholder-${string}/${VariantsA91e8ba1}` & {})
  | (`progress-${string}/${VariantsA91e8ba1}` & {})
  | (`range-${string}/${VariantsA91e8ba1}` & {})
  | (`text-${string}/${VariantsA91e8ba1}` & {})
  | (`tooltip-${string}/${VariantsA91e8ba1}` & {})
  | ColorArbitraryValue;
interface TailwindColor {
  /**
   * `Color`
   *
   * Utilities for controlling the text color of an element.
   *
   * Arbitrary support
   *
   * `text-(<var-name>)`, `text-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/color Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color , MDN docs}
   */
  color: ColorValue;
}
type PaddingCheckboxLiteral = `checkbox-${PaddingRef1}`;
type PaddingPbLiteral = `pb-${PaddingRef2}`;
type PaddingPLiteral = `p-${PaddingRef2}`;
type PaddingPeLiteral = `pe-${PaddingRef2}`;
type PaddingPlLiteral = `pl-${PaddingRef2}`;
type PaddingPrLiteral = `pr-${PaddingRef2}`;
type PaddingPsLiteral = `ps-${PaddingRef2}`;
type PaddingPtLiteral = `pt-${PaddingRef2}`;
type PaddingPxLiteral = `px-${PaddingRef2}`;
type PaddingPyLiteral = `py-${PaddingRef2}`;
type PaddingRadioLiteral = `radio-${PaddingRef3}`;
type PaddingProperty =
  | PaddingCheckboxLiteral
  | PaddingPbLiteral
  | PaddingPLiteral
  | PaddingPeLiteral
  | PaddingPlLiteral
  | PaddingPrLiteral
  | PaddingPsLiteral
  | PaddingPtLiteral
  | PaddingPxLiteral
  | PaddingPyLiteral
  | PaddingRadioLiteral;
type PaddingArbitraryValue =
  | (`pb-${number}` & {})
  | (`pb-(${string})` & {})
  | (`pb-[${string}]` & {})
  | (`p-${number}` & {})
  | (`p-(${string})` & {})
  | (`p-[${string}]` & {})
  | (`pe-${number}` & {})
  | (`pe-(${string})` & {})
  | (`pe-[${string}]` & {})
  | (`pl-${number}` & {})
  | (`pl-(${string})` & {})
  | (`pl-[${string}]` & {})
  | (`pr-${number}` & {})
  | (`pr-(${string})` & {})
  | (`pr-[${string}]` & {})
  | (`ps-${number}` & {})
  | (`ps-(${string})` & {})
  | (`ps-[${string}]` & {})
  | (`pt-${number}` & {})
  | (`pt-(${string})` & {})
  | (`pt-[${string}]` & {})
  | (`px-${number}` & {})
  | (`px-(${string})` & {})
  | (`px-[${string}]` & {})
  | (`py-${number}` & {})
  | (`py-(${string})` & {})
  | (`py-[${string}]` & {});
type PaddingValue = PaddingProperty | PaddingArbitraryValue;
interface TailwindPadding {
  /**
   * `Padding`
   *
   * Utilities for controlling an element's padding.
   *
   * Arbitrary support
   *
   * `pb-<number>`, `pb-(<var-name>)`, `pb-[<arbitrary-value>]`, `p-<number>`,
   * `p-(<var-name>)` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/padding Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/padding , MDN docs}
   */
  padding: PaddingValue;
}
type ClearLiteral = `clear-${ClearRef1}`;
type ClearValue = ClearLiteral;
interface TailwindClear {
  /**
   * `Clear`
   *
   * Utilities for controlling the wrapping of content around an element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/clear Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/clear , MDN docs}
   */
  clear: ClearValue;
}
type VisibilityValue =
  | 'collapse'
  | 'invisible'
  | 'visible'
  | 'collapse'
  | 'invisible'
  | 'visible';
interface TailwindVisibility {
  /**
   * `Visibility`
   *
   * Utilities for controlling the visibility of an element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/visibility Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/visibility , MDN docs}
   */
  visibility: VisibilityValue;
}
type ColumnsLiteral = `columns-${ColumnsRef1}`;
type ColumnsProperty = ColumnsLiteral;
type ColumnsArbitraryValue =
  | (`columns-${number}` & {})
  | (`columns-(${string})` & {})
  | (`columns-[${string}]` & {});
type ColumnsValue = ColumnsProperty | ColumnsArbitraryValue;
interface TailwindColumns {
  /**
   * `Columns`
   *
   * Utilities for controlling the number of columns within an element.
   *
   * Arbitrary support
   *
   * `columns-<number>`, `columns-(<var-name>)`, `columns-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/columns Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/columns , MDN docs}
   */
  columns: ColumnsValue;
}
type ContainLiteral = `contain-${ContainRef1}`;
type ContainValue = ContainLiteral;
interface TailwindContain {
  /**
   * `Contain`
   *
   * @see
   * {@link https://tailwindcss.com/docs Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/contain , MDN docs}
   */
  contain: ContainValue;
}
type MaxWidthMaxwLiteral = `max-w-${MaxWidthRef1}`;
type MaxWidthProperty = 'container' | MaxWidthMaxwLiteral;
type MaxWidthArbitraryValue =
  | (`max-w-${number}` & {})
  | (`max-w-(${string})` & {})
  | (`max-w-[${string}]` & {});
type MaxWidthValue = MaxWidthProperty | MaxWidthArbitraryValue;
interface TailwindMaxWidth {
  /**
   * `MaxWidth`
   *
   * Utilities for setting the maximum width of an element.
   *
   * Arbitrary support
   *
   * `max-w-<number>`, `max-w-(<var-name>)`, `max-w-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/max-width Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/max-width , MDN docs}
   */
  maxWidth: MaxWidthValue;
}
type AlignContentContentLiteral = `content-${AlignContentRef1}`;
type AlignContentValue = AlignContentContentLiteral;
interface TailwindAlignContent {
  /**
   * `AlignContent`
   *
   * Utilities for controlling how rows are positioned in multi-row flex and
   * grid containers.
   *
   * @see
   * {@link https://tailwindcss.com/docs/align-content Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-content , MDN docs}
   */
  alignContent: AlignContentValue;
}
type ContentLiteral = `content-${ContentRef1}`;
type ContentProperty = ContentLiteral;
type ContentArbitraryValue =
  | (`content-[${string}]` & {})
  | (`content-(${string})` & {});
type ContentValue = ContentProperty | ContentArbitraryValue;
interface TailwindContent {
  /**
   * `Content`
   *
   * Utilities for controlling the content of the before and after
   * pseudo-elements.
   *
   * Arbitrary support
   *
   * `content-[<arbitrary-value>]`, `content-(<var-name>)`
   *
   * @see
   * {@link https://tailwindcss.com/docs/content Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/content , MDN docs}
   */
  content: ContentValue;
}
type CursorELiteral = `cursor-e-${CursorRef1}`;
type CursorNLiteral = `cursor-n-${CursorRef2}`;
type CursorNeLiteral = `cursor-ne-${CursorRef3}`;
type CursorNoLiteral = `cursor-no-${CursorRef4}`;
type CursorSLiteral = `cursor-s-${CursorRef5}`;
type CursorWLiteral = `cursor-w-${CursorRef6}`;
type CursorLiteral = `cursor-${CursorRef7}`;
type CursorProperty =
  | CursorELiteral
  | CursorNLiteral
  | CursorNeLiteral
  | CursorNoLiteral
  | CursorSLiteral
  | CursorWLiteral
  | CursorLiteral;
type CursorArbitraryValue =
  | (`cursor-(${string})` & {})
  | (`cursor-[${string}]` & {});
type CursorValue = CursorProperty | CursorArbitraryValue;
interface TailwindCursor {
  /**
   * `Cursor`
   *
   * Utilities for controlling the cursor style when hovering over an element.
   *
   * Arbitrary support
   *
   * `cursor-(<var-name>)`, `cursor-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/cursor Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/cursor , MDN docs}
   */
  cursor: CursorValue;
}
type TextDecorationThicknessDecorationLiteral =
  `decoration-${TextDecorationThicknessRef1}`;
type TextDecorationThicknessProperty = TextDecorationThicknessDecorationLiteral;
type TextDecorationThicknessArbitraryValue =
  | (`decoration-${number}` & {})
  | (`decoration-(${string})` & {})
  | (`decoration-[${string}]` & {});
type TextDecorationThicknessValue =
  | TextDecorationThicknessProperty
  | (`decoration-${string}/${VariantsA91e8ba1}` & {})
  | TextDecorationThicknessArbitraryValue;
interface TailwindTextDecorationThickness {
  /**
   * `TextDecorationThickness`
   *
   * Utilities for controlling the thickness of text decorations.
   *
   * Arbitrary support
   *
   * `decoration-<number>`, `decoration-(<var-name>)`,
   * `decoration-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/text-decoration-thickness Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness , MDN docs}
   */
  textDecorationThickness: TextDecorationThicknessValue;
}
type TextDecorationColorDecorationLiteral =
  `decoration-${TextDecorationColorRef1}`;
type TextDecorationColorProperty = TextDecorationColorDecorationLiteral;
type TextDecorationColorArbitraryValue =
  | (`decoration-(${string})` & {})
  | (`decoration-[${string}]` & {});
type TextDecorationColorValue =
  | TextDecorationColorProperty
  | (`decoration-${string}/${VariantsA91e8ba1}` & {})
  | TextDecorationColorArbitraryValue;
interface TailwindTextDecorationColor {
  /**
   * `TextDecorationColor`
   *
   * Utilities for controlling the color of text decorations.
   *
   * Arbitrary support
   *
   * `decoration-(<var-name>)`, `decoration-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/text-decoration-color Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color , MDN docs}
   */
  textDecorationColor: TextDecorationColorValue;
}
type TextDecorationStyleDecorationLiteral =
  `decoration-${TextDecorationStyleRef1}`;
type TextDecorationStyleValue = TextDecorationStyleDecorationLiteral;
interface TailwindTextDecorationStyle {
  /**
   * `TextDecorationStyle`
   *
   * Utilities for controlling the style of text decorations.
   *
   * @see
   * {@link https://tailwindcss.com/docs/text-decoration-style Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style , MDN docs}
   */
  textDecorationStyle: TextDecorationStyleValue;
}
type TransitionDelayDelayLiteral = `delay-${TransitionDelayRef1}`;
type TransitionDelayProperty = TransitionDelayDelayLiteral;
type TransitionDelayArbitraryValue =
  | (`delay-${number}` & {})
  | (`delay-(${string})` & {})
  | (`delay-[${string}]` & {});
type TransitionDelayValue =
  | TransitionDelayProperty
  | TransitionDelayArbitraryValue;
interface TailwindTransitionDelay {
  /**
   * `TransitionDelay`
   *
   * Utilities for controlling the delay of CSS transitions.
   *
   * Arbitrary support
   *
   * `delay-<number>`, `delay-(<var-name>)`, `delay-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/transition-delay Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay , MDN docs}
   */
  transitionDelay: TransitionDelayValue;
}
type FontVariantNumericValue =
  | 'diagonal-fractions'
  | 'lining-nums'
  | 'normal-nums'
  | 'oldstyle-nums'
  | 'ordinal'
  | 'proportional-nums'
  | 'slashed-zero'
  | 'stacked-fractions'
  | 'tabular-nums'
  | 'diagonal-fractions'
  | 'lining-nums'
  | 'normal-nums'
  | 'oldstyle-nums'
  | 'ordinal'
  | 'proportional-nums'
  | 'slashed-zero'
  | 'stacked-fractions'
  | 'tabular-nums';
interface TailwindFontVariantNumeric {
  /**
   * `FontVariantNumeric`
   *
   * Utilities for controlling the variant of numbers.
   *
   * @see
   * {@link https://tailwindcss.com/docs/font-variant-numeric Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric , MDN docs}
   */
  fontVariantNumeric: FontVariantNumericValue;
}
type TransitionDurationDurationLiteral = `duration-${TransitionDurationRef1}`;
type TransitionDurationProperty = TransitionDurationDurationLiteral;
type TransitionDurationArbitraryValue =
  | (`duration-${number}` & {})
  | (`duration-(${string})` & {})
  | (`duration-[${string}]` & {});
type TransitionDurationValue =
  | TransitionDurationProperty
  | TransitionDurationArbitraryValue;
interface TailwindTransitionDuration {
  /**
   * `TransitionDuration`
   *
   * Utilities for controlling the duration of CSS transitions.
   *
   * Arbitrary support
   *
   * `duration-<number>`, `duration-(<var-name>)`,
   * `duration-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/transition-duration Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration , MDN docs}
   */
  transitionDuration: TransitionDurationValue;
}
type TransitionTimingFunctionEaseinLiteral =
  `ease-in-${TransitionTimingFunctionRef1}`;
type TransitionTimingFunctionEaseLiteral =
  `ease-${TransitionTimingFunctionRef2}`;
type TransitionTimingFunctionProperty =
  | TransitionTimingFunctionEaseinLiteral
  | TransitionTimingFunctionEaseLiteral;
type TransitionTimingFunctionArbitraryValue =
  | (`ease-(${string})` & {})
  | (`ease-[${string}]` & {});
type TransitionTimingFunctionValue =
  | TransitionTimingFunctionProperty
  | TransitionTimingFunctionArbitraryValue;
interface TailwindTransitionTimingFunction {
  /**
   * `TransitionTimingFunction`
   *
   * Utilities for controlling the easing of CSS transitions.
   *
   * Arbitrary support
   *
   * `ease-(<var-name>)`, `ease-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/transition-timing-function Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function , MDN docs}
   */
  transitionTimingFunction: TransitionTimingFunctionValue;
}
type FieldSizingValue =
  | 'field-sizing-content'
  | 'field-sizing-fixed'
  | 'field-sizing-content'
  | 'field-sizing-fixed';
interface TailwindFieldSizing {
  /**
   * `FieldSizing`
   *
   * Utilities for controlling the sizing of form controls.
   *
   * @see
   * {@link https://tailwindcss.com/docs/field-sizing Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing , MDN docs}
   */
  fieldSizing: FieldSizingValue;
}
type FillLiteral = `fill-${FillRef1}`;
type FillProperty = FillLiteral;
type FillArbitraryValue = (`fill-(${string})` & {}) | (`fill-[${string}]` & {});
type FillValue =
  | FillProperty
  | (`fill-${string}/${VariantsA91e8ba1}` & {})
  | FillArbitraryValue;
interface TailwindFill {
  /**
   * `Fill`
   *
   * Utilities for styling the fill of SVG elements.
   *
   * Arbitrary support
   *
   * `fill-(<var-name>)`, `fill-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/fill Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/fill , MDN docs}
   */
  fill: FillValue;
}
type FlexLiteral = `flex-${FlexRef1}`;
type FlexProperty = FlexLiteral;
type FlexArbitraryValue =
  | (`flex-${number}` & {})
  | (`flex-(${string})` & {})
  | (`flex-[${string}]` & {});
type FlexValue = FlexProperty | FlexArbitraryValue;
interface TailwindFlex {
  /**
   * `Flex`
   *
   * Utilities for controlling how flex items both grow and shrink.
   *
   * Arbitrary support
   *
   * `flex-<number>`, `flex-(<var-name>)`, `flex-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/flex Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex , MDN docs}
   */
  flex: FlexValue;
}
type FlexDirectionFlexLiteral = `flex-${FlexDirectionRef1}`;
type FlexDirectionValue = FlexDirectionFlexLiteral;
interface TailwindFlexDirection {
  /**
   * `FlexDirection`
   *
   * Utilities for controlling the direction of flex items.
   *
   * @see
   * {@link https://tailwindcss.com/docs/flex-direction Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction , MDN docs}
   */
  flexDirection: FlexDirectionValue;
}
type FlexWrapLiteral = `flex-wrap-${FlexWrapRef1}`;
type FlexWrapFlexLiteral = `flex-${FlexWrapRef2}`;
type FlexWrapValue = FlexWrapLiteral | FlexWrapFlexLiteral;
interface TailwindFlexWrap {
  /**
   * `FlexWrap`
   *
   * Utilities for controlling how flex items wrap.
   *
   * @see
   * {@link https://tailwindcss.com/docs/flex-wrap Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap , MDN docs}
   */
  flexWrap: FlexWrapValue;
}
type FloatLiteral = `float-${FloatRef1}`;
type FloatValue = FloatLiteral;
interface TailwindFloat {
  /**
   * `Float`
   *
   * Utilities for controlling the wrapping of content around an element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/float Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/float , MDN docs}
   */
  float: FloatValue;
}
type FontWeightFontLiteral = `font-${FontWeightRef1}`;
type FontWeightProperty = FontWeightFontLiteral;
type FontWeightArbitraryValue =
  | (`font-(${string})` & {})
  | (`font-[${string}]` & {});
type FontWeightValue = FontWeightProperty | FontWeightArbitraryValue;
interface TailwindFontWeight {
  /**
   * `FontWeight`
   *
   * Utilities for controlling the font weight of an element.
   *
   * Arbitrary support
   *
   * `font-(<var-name>)`, `font-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/font-weight Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight , MDN docs}
   */
  fontWeight: FontWeightValue;
}
type FontFamilyFontLiteral = `font-${FontFamilyRef1}`;
type FontFamilyProperty = FontFamilyFontLiteral;
type FontFamilyArbitraryValue =
  | (`font-(${string})` & {})
  | (`font-[${string}]` & {});
type FontFamilyValue = FontFamilyProperty | FontFamilyArbitraryValue;
interface TailwindFontFamily {
  /**
   * `FontFamily`
   *
   * Utilities for controlling the font family of an element.
   *
   * Arbitrary support
   *
   * `font-(<var-name>)`, `font-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/font-family Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-family , MDN docs}
   */
  fontFamily: FontFamilyValue;
}
type FontStretchLiteral = `font-stretch-${FontStretchRef1}`;
type FontStretchProperty = FontStretchLiteral;
type FontStretchArbitraryValue =
  | (`font-stretch-${number}` & {})
  | (`font-stretch-(${string})` & {})
  | (`font-stretch-[${string}]` & {});
type FontStretchValue = FontStretchProperty | FontStretchArbitraryValue;
interface TailwindFontStretch {
  /**
   * `FontStretch`
   *
   * Utilities for selecting the width of a font face.
   *
   * Arbitrary support
   *
   * `font-stretch-<number>`, `font-stretch-(<var-name>)`,
   * `font-stretch-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/font-stretch Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch , MDN docs}
   */
  fontStretch: FontStretchValue;
}
type GridAutoFlowGridflowLiteral = `grid-flow-${GridAutoFlowRef1}`;
type GridAutoFlowValue =
  | 'footer-horizontal'
  | 'footer-vertical'
  | GridAutoFlowGridflowLiteral;
interface TailwindGridAutoFlow {
  /**
   * `GridAutoFlow`
   *
   * Utilities for controlling how elements in a grid are auto-placed.
   *
   * @see
   * {@link https://tailwindcss.com/docs/grid-auto-flow Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow , MDN docs}
   */
  gridAutoFlow: GridAutoFlowValue;
}
type ForcedColorAdjustValue =
  | 'forced-color-adjust-auto'
  | 'forced-color-adjust-none'
  | 'forced-color-adjust-auto'
  | 'forced-color-adjust-none';
interface TailwindForcedColorAdjust {
  /**
   * `ForcedColorAdjust`
   *
   * Utilities for opting in and out of forced colors.
   *
   * @see
   * {@link https://tailwindcss.com/docs/forced-color-adjust Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/forced-color-adjust , MDN docs}
   */
  forcedColorAdjust: ForcedColorAdjustValue;
}
type GapXLiteral = `gap-x-${GapRef1}`;
type GapYLiteral = `gap-y-${GapRef1}`;
type GapLiteral = `gap-${GapRef1}`;
type GapProperty = GapXLiteral | GapYLiteral | GapLiteral;
type GapArbitraryValue =
  | (`gap-x-${number}` & {})
  | (`gap-x-(${string})` & {})
  | (`gap-x-[${string}]` & {})
  | (`gap-y-${number}` & {})
  | (`gap-y-(${string})` & {})
  | (`gap-y-[${string}]` & {})
  | (`gap-${number}` & {})
  | (`gap-(${string})` & {})
  | (`gap-[${string}]` & {});
type GapValue = GapProperty | GapArbitraryValue;
interface TailwindGap {
  /**
   * `Gap`
   *
   * Utilities for controlling gutters between grid and flexbox items.
   *
   * Arbitrary support
   *
   * `gap-x-<number>`, `gap-x-(<var-name>)`, `gap-x-[<arbitrary-value>]`,
   * `gap-y-<number>`, `gap-y-(<var-name>)` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/gap Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/gap , MDN docs}
   */
  gap: GapValue;
}
type GridTemplateColumnsGridcolsLiteral =
  `grid-cols-${GridTemplateColumnsRef1}`;
type GridTemplateColumnsProperty = GridTemplateColumnsGridcolsLiteral;
type GridTemplateColumnsArbitraryValue =
  | (`grid-cols-${number}` & {})
  | (`grid-cols-[${string}]` & {})
  | (`grid-cols-(${string})` & {});
type GridTemplateColumnsValue =
  | GridTemplateColumnsProperty
  | GridTemplateColumnsArbitraryValue;
interface TailwindGridTemplateColumns {
  /**
   * `GridTemplateColumns`
   *
   * Utilities for specifying the columns in a grid layout.
   *
   * Arbitrary support
   *
   * `grid-cols-<number>`, `grid-cols-[<arbitrary-value>]`,
   * `grid-cols-(<var-name>)`
   *
   * @see
   * {@link https://tailwindcss.com/docs/grid-template-columns Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns , MDN docs}
   */
  gridTemplateColumns: GridTemplateColumnsValue;
}
type GridTemplateRowsGridrowsLiteral = `grid-rows-${GridTemplateRowsRef1}`;
type GridTemplateRowsProperty = GridTemplateRowsGridrowsLiteral;
type GridTemplateRowsArbitraryValue =
  | (`grid-rows-${number}` & {})
  | (`grid-rows-[${string}]` & {})
  | (`grid-rows-(${string})` & {});
type GridTemplateRowsValue =
  | GridTemplateRowsProperty
  | GridTemplateRowsArbitraryValue;
interface TailwindGridTemplateRows {
  /**
   * `GridTemplateRows`
   *
   * Utilities for specifying the rows in a grid layout.
   *
   * Arbitrary support
   *
   * `grid-rows-<number>`, `grid-rows-[<arbitrary-value>]`,
   * `grid-rows-(<var-name>)`
   *
   * @see
   * {@link https://tailwindcss.com/docs/grid-template-rows Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows , MDN docs}
   */
  gridTemplateRows: GridTemplateRowsValue;
}
type FlexGrowProperty = 'grow' | 'grow-0' | 'grow' | 'grow-0';
type FlexGrowArbitraryValue =
  | (`grow-${number}` & {})
  | (`grow-[${string}]` & {})
  | (`grow-(${string})` & {});
type FlexGrowValue = FlexGrowProperty | FlexGrowArbitraryValue;
interface TailwindFlexGrow {
  /**
   * `FlexGrow`
   *
   * Utilities for controlling how flex items grow.
   *
   * Arbitrary support
   *
   * `grow-<number>`, `grow-[<arbitrary-value>]`, `grow-(<var-name>)`
   *
   * @see
   * {@link https://tailwindcss.com/docs/flex-grow Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow , MDN docs}
   */
  flexGrow: FlexGrowValue;
}
type HeightHLiteral = `h-${HeightRef1}` | 'h-screen';
type HeightSizeLiteral = `size-${HeightRef1}`;
type HeightProperty = HeightHLiteral | HeightSizeLiteral;
type HeightArbitraryValue =
  | (`h-${number}` & {})
  | (`h-(${string})` & {})
  | (`h-[${string}]` & {})
  | (`size-${number}` & {})
  | (`size-(${string})` & {})
  | (`size-[${string}]` & {});
type HeightValue = HeightProperty | HeightArbitraryValue;
interface TailwindHeight {
  /**
   * `Height`
   *
   * Utilities for setting the height of an element.
   *
   * Arbitrary support
   *
   * `h-<number>`, `h-(<var-name>)`, `h-[<arbitrary-value>]`, `size-<number>`,
   * `size-(<var-name>)` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/height Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/height , MDN docs}
   */
  height: HeightValue;
}
type HyphensLiteral = `hyphens-${HyphensRef1}`;
type HyphensValue = HyphensLiteral;
interface TailwindHyphens {
  /**
   * `Hyphens`
   *
   * Utilities for controlling how words should be hyphenated.
   *
   * @see
   * {@link https://tailwindcss.com/docs/hyphens Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens , MDN docs}
   */
  hyphens: HyphensValue;
}
type BoxShadowInsetLiteral = `inset-${BoxShadowRef1}`;
type BoxShadowRingoffsetLiteral = `ring-offset-${BoxShadowRef2}`;
type BoxShadowRingLiteral = `ring-${BoxShadowRef2}` | 'ring-inset';
type BoxShadowShadowLiteral = `shadow-${BoxShadowRef3}`;
type BoxShadowProperty =
  | 'ring'
  | 'shadow'
  | BoxShadowInsetLiteral
  | BoxShadowRingoffsetLiteral
  | BoxShadowRingLiteral
  | BoxShadowShadowLiteral;
type BoxShadowArbitraryValue =
  | (`ring-${number}` & {})
  | (`ring-(${string})` & {})
  | (`ring-[${string}]` & {})
  | (`shadow-(${string})` & {})
  | (`shadow-[${string}]` & {})
  | (`inset-(${string})` & {})
  | (`inset-[${string}]` & {})
  | (`inset-${number}` & {});
type BoxShadowValue =
  | BoxShadowProperty
  | (`inset-${string}/${VariantsA91e8ba1}` & {})
  | (`ring-offset-${string}/${VariantsA91e8ba1}` & {})
  | (`ring-${string}/${VariantsA91e8ba1}` & {})
  | (`shadow-${string}/${VariantsA91e8ba1}` & {})
  | BoxShadowArbitraryValue;
interface TailwindBoxShadow {
  /**
   * `BoxShadow`
   *
   * Utilities for controlling the box shadow of an element.
   *
   * Arbitrary support
   *
   * `ring-<number>`, `ring-(<var-name>)`, `ring-[<arbitrary-value>]`,
   * `shadow-(<var-name>)`, `shadow-[<arbitrary-value>]` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/box-shadow Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow , MDN docs}
   */
  boxShadow: BoxShadowValue;
}
type FontStyleValue = 'italic' | 'not-italic' | 'italic' | 'not-italic';
interface TailwindFontStyle {
  /**
   * `FontStyle`
   *
   * Utilities for controlling the style of text.
   *
   * @see
   * {@link https://tailwindcss.com/docs/font-style Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-style , MDN docs}
   */
  fontStyle: FontStyleValue;
}
type AlignItemsItemsLiteral = `items-${AlignItemsRef1}`;
type AlignItemsValue = AlignItemsItemsLiteral;
interface TailwindAlignItems {
  /**
   * `AlignItems`
   *
   * Utilities for controlling how flex and grid items are positioned along a
   * container's cross axis.
   *
   * @see
   * {@link https://tailwindcss.com/docs/align-items Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items , MDN docs}
   */
  alignItems: AlignItemsValue;
}
type JustifyContentJustifyLiteral = `justify-${JustifyContentRef1}`;
type JustifyContentValue = JustifyContentJustifyLiteral;
interface TailwindJustifyContent {
  /**
   * `JustifyContent`
   *
   * Utilities for controlling how flex and grid items are positioned along a
   * container's main axis.
   *
   * @see
   * {@link https://tailwindcss.com/docs/justify-content Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content , MDN docs}
   */
  justifyContent: JustifyContentValue;
}
type JustifyItemsLiteral = `justify-items-${JustifyItemsRef1}`;
type JustifyItemsValue = JustifyItemsLiteral;
interface TailwindJustifyItems {
  /**
   * `JustifyItems`
   *
   * Utilities for controlling how grid items are aligned along their inline
   * axis.
   *
   * @see
   * {@link https://tailwindcss.com/docs/justify-items Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items , MDN docs}
   */
  justifyItems: JustifyItemsValue;
}
type JustifySelfLiteral = `justify-self-${JustifySelfRef1}`;
type JustifySelfValue = JustifySelfLiteral;
interface TailwindJustifySelf {
  /**
   * `JustifySelf`
   *
   * Utilities for controlling how an individual grid item is aligned along its
   * inline axis.
   *
   * @see
   * {@link https://tailwindcss.com/docs/justify-self Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self , MDN docs}
   */
  justifySelf: JustifySelfValue;
}
type FontSizeKbdLiteral = `kbd-${FontSizeRef1}`;
type FontSizeSelectLiteral = `select-${FontSizeRef2}`;
type FontSizeTextareaLiteral = `textarea-${FontSizeRef3}`;
type FontSizeTextLiteral = `text-${FontSizeRef4}`;
type FontSizeProperty =
  | FontSizeKbdLiteral
  | FontSizeSelectLiteral
  | FontSizeTextareaLiteral
  | FontSizeTextLiteral;
type FontSizeArbitraryValue =
  | (`text-(${string})` & {})
  | (`text-[${string}]` & {});
type FontSizeValue =
  | FontSizeProperty
  | (`kbd-${string}/${Variants1e76e759}` & {})
  | (`select-${string}/${Variants1e76e759}` & {})
  | (`textarea-${string}/${Variants1e76e759}` & {})
  | (`text-${string}/${Variants1e76e759}` & {})
  | FontSizeArbitraryValue;
interface TailwindFontSize {
  /**
   * `FontSize`
   *
   * Utilities for controlling the font size of an element.
   *
   * Arbitrary support
   *
   * `text-(<var-name>)`, `text-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/font-size Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/font-size , MDN docs}
   */
  fontSize: FontSizeValue;
}
type LineHeightLeadingLiteral = `leading-${LineHeightRef1}`;
type LineHeightProperty = LineHeightLeadingLiteral;
type LineHeightArbitraryValue =
  | (`leading-${number}` & {})
  | (`leading-(${string})` & {})
  | (`leading-[${string}]` & {});
type LineHeightValue = LineHeightProperty | LineHeightArbitraryValue;
interface TailwindLineHeight {
  /**
   * `LineHeight`
   *
   * Utilities for controlling the leading, or line height, of an element.
   *
   * Arbitrary support
   *
   * `leading-<number>`, `leading-(<var-name>)`, `leading-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/line-height Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/line-height , MDN docs}
   */
  lineHeight: LineHeightValue;
}
type LineClampLiteral = `line-clamp-${LineClampRef1}`;
type LineClampProperty = LineClampLiteral;
type LineClampArbitraryValue =
  | (`line-clamp-${number}` & {})
  | (`line-clamp-(${string})` & {})
  | (`line-clamp-[${string}]` & {});
type LineClampValue = LineClampProperty | LineClampArbitraryValue;
interface TailwindLineClamp {
  /**
   * `LineClamp`
   *
   * Utilities for clamping text to a specific number of lines.
   *
   * Arbitrary support
   *
   * `line-clamp-<number>`, `line-clamp-(<var-name>)`,
   * `line-clamp-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/line-clamp Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/line-clamp , MDN docs}
   */
  lineClamp: LineClampValue;
}
type TextDecorationLineLineLiteral = `line-${TextDecorationLineRef1}`;
type TextDecorationLineValue =
  | 'link-hover'
  | 'no-underline'
  | 'overline'
  | 'underline'
  | TextDecorationLineLineLiteral;
interface TailwindTextDecorationLine {
  /**
   * `TextDecorationLine`
   *
   * Utilities for controlling the decoration of text.
   *
   * @see
   * {@link https://tailwindcss.com/docs/text-decoration-line Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line , MDN docs}
   */
  textDecorationLine: TextDecorationLineValue;
}
type ListStyleTypeListLiteral = `list-${ListStyleTypeRef1}`;
type ListStyleTypeProperty = ListStyleTypeListLiteral;
type ListStyleTypeArbitraryValue =
  | (`list-(${string})` & {})
  | (`list-[${string}]` & {});
type ListStyleTypeValue = ListStyleTypeProperty | ListStyleTypeArbitraryValue;
interface TailwindListStyleType {
  /**
   * `ListStyleType`
   *
   * Utilities for controlling the marker style of a list.
   *
   * Arbitrary support
   *
   * `list-(<var-name>)`, `list-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/list-style-type Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type , MDN docs}
   */
  listStyleType: ListStyleTypeValue;
}
type ListStyleImageValue = 'list-image-none' | 'list-image-none';
interface TailwindListStyleImage {
  /**
   * `ListStyleImage`
   *
   * Utilities for controlling the marker images for list items.
   *
   * @see
   * {@link https://tailwindcss.com/docs/list-style-image Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image , MDN docs}
   */
  listStyleImage: ListStyleImageValue;
}
type ListStylePositionValue =
  | 'list-inside'
  | 'list-outside'
  | 'list-inside'
  | 'list-outside';
interface TailwindListStylePosition {
  /**
   * `ListStylePosition`
   *
   * Utilities for controlling the position of bullets and numbers in lists.
   *
   * @see
   * {@link https://tailwindcss.com/docs/list-style-position Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position , MDN docs}
   */
  listStylePosition: ListStylePositionValue;
}
type MaskCompositeMaskLiteral = `mask-${MaskCompositeRef1}`;
type MaskCompositeValue = MaskCompositeMaskLiteral;
interface TailwindMaskComposite {
  /**
   * `MaskComposite`
   *
   * Utilities for controlling how multiple masks are combined together.
   *
   * @see
   * {@link https://tailwindcss.com/docs/mask-composite Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-composite , MDN docs}
   */
  maskComposite: MaskCompositeValue;
}
type MaskModeMaskLiteral = `mask-${MaskModeRef1}`;
type MaskModeValue = MaskModeMaskLiteral;
interface TailwindMaskMode {
  /**
   * `MaskMode`
   *
   * Utilities for controlling an element's mask mode.
   *
   * @see
   * {@link https://tailwindcss.com/docs/mask-mode Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-mode , MDN docs}
   */
  maskMode: MaskModeValue;
}
type MaskSizeMaskLiteral = `mask-${MaskSizeRef1}`;
type MaskSizeProperty = MaskSizeMaskLiteral;
type MaskSizeArbitraryValue =
  | (`mask-(${string})` & {})
  | (`mask-[${string}]` & {});
type MaskSizeValue = MaskSizeProperty | MaskSizeArbitraryValue;
interface TailwindMaskSize {
  /**
   * `MaskSize`
   *
   * Utilities for controlling the size of an element's mask image.
   *
   * Arbitrary support
   *
   * `mask-(<var-name>)`, `mask-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/mask-size Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-size , MDN docs}
   */
  maskSize: MaskSizeValue;
}
type MaskPositionMaskbottomLiteral = `mask-bottom-${MaskPositionRef1}`;
type MaskPositionMasktopLiteral = `mask-top-${MaskPositionRef2}`;
type MaskPositionMaskLiteral = `mask-${MaskPositionRef3}`;
type MaskPositionProperty =
  | MaskPositionMaskbottomLiteral
  | MaskPositionMasktopLiteral
  | MaskPositionMaskLiteral;
type MaskPositionArbitraryValue =
  | (`mask-(${string})` & {})
  | (`mask-[${string}]` & {});
type MaskPositionValue = MaskPositionProperty | MaskPositionArbitraryValue;
interface TailwindMaskPosition {
  /**
   * `MaskPosition`
   *
   * Utilities for controlling the position of an element's mask image.
   *
   * Arbitrary support
   *
   * `mask-(<var-name>)`, `mask-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/mask-position Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-position , MDN docs}
   */
  maskPosition: MaskPositionValue;
}
type MaskClipLiteral = `mask-clip-${MaskClipRef1}`;
type MaskClipMaskLiteral = `mask-${MaskClipRef2}`;
type MaskClipValue = MaskClipLiteral | MaskClipMaskLiteral;
interface TailwindMaskClip {
  /**
   * `MaskClip`
   *
   * Utilities for controlling the bounding box of an element's mask.
   *
   * @see
   * {@link https://tailwindcss.com/docs/mask-clip Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-clip , MDN docs}
   */
  maskClip: MaskClipValue;
}
type MaskRepeatLiteral = `mask-repeat-${MaskRepeatRef1}`;
type MaskRepeatMaskLiteral = `mask-${MaskRepeatRef2}`;
type MaskRepeatValue = MaskRepeatLiteral | MaskRepeatMaskLiteral;
interface TailwindMaskRepeat {
  /**
   * `MaskRepeat`
   *
   * Utilities for controlling the repetition of an element's mask image.
   *
   * @see
   * {@link https://tailwindcss.com/docs/mask-repeat Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-repeat , MDN docs}
   */
  maskRepeat: MaskRepeatValue;
}
type MaskOriginLiteral = `mask-origin-${MaskOriginRef1}`;
type MaskOriginValue = MaskOriginLiteral;
interface TailwindMaskOrigin {
  /**
   * `MaskOrigin`
   *
   * Utilities for controlling how an element's mask image is positioned
   * relative to borders, padding, and content.
   *
   * @see
   * {@link https://tailwindcss.com/docs/mask-origin Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-origin , MDN docs}
   */
  maskOrigin: MaskOriginValue;
}
type MaskTypeValue =
  | 'mask-type-alpha'
  | 'mask-type-luminance'
  | 'mask-type-alpha'
  | 'mask-type-luminance';
interface TailwindMaskType {
  /**
   * `MaskType`
   *
   * Utilities for controlling how an SVG mask is interpreted.
   *
   * @see
   * {@link https://tailwindcss.com/docs/mask-type Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mask-type , MDN docs}
   */
  maskType: MaskTypeValue;
}
type MaxHeightMaxhLiteral = `max-h-${MaxHeightRef1}`;
type MaxHeightProperty = MaxHeightMaxhLiteral;
type MaxHeightArbitraryValue =
  | (`max-h-${number}` & {})
  | (`max-h-(${string})` & {})
  | (`max-h-[${string}]` & {});
type MaxHeightValue = MaxHeightProperty | MaxHeightArbitraryValue;
interface TailwindMaxHeight {
  /**
   * `MaxHeight`
   *
   * Utilities for setting the maximum height of an element.
   *
   * Arbitrary support
   *
   * `max-h-<number>`, `max-h-(<var-name>)`, `max-h-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/max-height Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/max-height , MDN docs}
   */
  maxHeight: MaxHeightValue;
}
type MinHeightMinhLiteral = `min-h-${MinHeightRef1}`;
type MinHeightProperty = MinHeightMinhLiteral;
type MinHeightArbitraryValue =
  | (`min-h-${number}` & {})
  | (`min-h-(${string})` & {})
  | (`min-h-[${string}]` & {});
type MinHeightValue = MinHeightProperty | MinHeightArbitraryValue;
interface TailwindMinHeight {
  /**
   * `MinHeight`
   *
   * Utilities for setting the minimum height of an element.
   *
   * Arbitrary support
   *
   * `min-h-<number>`, `min-h-(<var-name>)`, `min-h-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/min-height Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/min-height , MDN docs}
   */
  minHeight: MinHeightValue;
}
type MinWidthMinwLiteral = `min-w-${MinWidthRef1}`;
type MinWidthProperty = MinWidthMinwLiteral;
type MinWidthArbitraryValue =
  | (`min-w-${number}` & {})
  | (`min-w-(${string})` & {})
  | (`min-w-[${string}]` & {});
type MinWidthValue = MinWidthProperty | MinWidthArbitraryValue;
interface TailwindMinWidth {
  /**
   * `MinWidth`
   *
   * Utilities for setting the minimum width of an element.
   *
   * Arbitrary support
   *
   * `min-w-<number>`, `min-w-(<var-name>)`, `min-w-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/min-width Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/min-width , MDN docs}
   */
  minWidth: MinWidthValue;
}
type MixBlendModeMixblendLiteral = `mix-blend-${MixBlendModeRef1}`;
type MixBlendModeMixblendcolorLiteral = `mix-blend-color-${MixBlendModeRef2}`;
type MixBlendModeValue =
  | MixBlendModeMixblendLiteral
  | MixBlendModeMixblendcolorLiteral;
interface TailwindMixBlendMode {
  /**
   * `MixBlendMode`
   *
   * Utilities for controlling how an element should blend with the background.
   *
   * @see
   * {@link https://tailwindcss.com/docs/mix-blend-mode Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode , MDN docs}
   */
  mixBlendMode: MixBlendModeValue;
}
type ObjectPositionObjectbottomLiteral = `object-bottom-${ObjectPositionRef1}`;
type ObjectPositionObjectleftLiteral = `object-left-${ObjectPositionRef2}`;
type ObjectPositionObjectrightLiteral = `object-right-${ObjectPositionRef3}`;
type ObjectPositionObjecttopLiteral = `object-top-${ObjectPositionRef4}`;
type ObjectPositionObjectLiteral = `object-${ObjectPositionRef5}`;
type ObjectPositionProperty =
  | ObjectPositionObjectbottomLiteral
  | ObjectPositionObjectleftLiteral
  | ObjectPositionObjectrightLiteral
  | ObjectPositionObjecttopLiteral
  | ObjectPositionObjectLiteral;
type ObjectPositionArbitraryValue =
  | (`object-(${string})` & {})
  | (`object-[${string}]` & {});
type ObjectPositionValue =
  | ObjectPositionProperty
  | ObjectPositionArbitraryValue;
interface TailwindObjectPosition {
  /**
   * `ObjectPosition`
   *
   * Utilities for controlling how a replaced element's content should be
   * positioned within its container.
   *
   * Arbitrary support
   *
   * `object-(<var-name>)`, `object-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/object-position Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/object-position , MDN docs}
   */
  objectPosition: ObjectPositionValue;
}
type ObjectFitObjectLiteral = `object-${ObjectFitRef1}`;
type ObjectFitValue = ObjectFitObjectLiteral;
interface TailwindObjectFit {
  /**
   * `ObjectFit`
   *
   * Utilities for controlling how a replaced element's content should be
   * resized.
   *
   * @see
   * {@link https://tailwindcss.com/docs/object-fit Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit , MDN docs}
   */
  objectFit: ObjectFitValue;
}
type OpacityLiteral = `opacity-${OpacityRef1}`;
type OpacityProperty = 'swap-active' | OpacityLiteral;
type OpacityArbitraryValue =
  | (`opacity-${number}` & {})
  | (`opacity-(${string})` & {})
  | (`opacity-[${string}]` & {});
type OpacityValue = OpacityProperty | OpacityArbitraryValue;
interface TailwindOpacity {
  /**
   * `Opacity`
   *
   * Utilities for controlling the opacity of an element.
   *
   * Arbitrary support
   *
   * `opacity-<number>`, `opacity-(<var-name>)`, `opacity-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/opacity Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/opacity , MDN docs}
   */
  opacity: OpacityValue;
}
type TransformOriginOriginbottomLiteral =
  `origin-bottom-${TransformOriginRef1}`;
type TransformOriginOrigintopLiteral = `origin-top-${TransformOriginRef2}`;
type TransformOriginOriginLiteral = `origin-${TransformOriginRef3}`;
type TransformOriginProperty =
  | TransformOriginOriginbottomLiteral
  | TransformOriginOrigintopLiteral
  | TransformOriginOriginLiteral;
type TransformOriginArbitraryValue =
  | (`origin-(${string})` & {})
  | (`origin-[${string}]` & {});
type TransformOriginValue =
  | TransformOriginProperty
  | TransformOriginArbitraryValue;
interface TailwindTransformOrigin {
  /**
   * `TransformOrigin`
   *
   * Utilities for specifying the origin for an element's transformations.
   *
   * Arbitrary support
   *
   * `origin-(<var-name>)`, `origin-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/transform-origin Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin , MDN docs}
   */
  transformOrigin: TransformOriginValue;
}
type OutlineWidthOutlineLiteral = `outline-${OutlineWidthRef1}`;
type OutlineWidthProperty = 'outline' | OutlineWidthOutlineLiteral;
type OutlineWidthArbitraryValue =
  | (`outline-${number}` & {})
  | (`outline-(${string})` & {})
  | (`outline-[${string}]` & {});
type OutlineWidthValue =
  | OutlineWidthProperty
  | (`outline-${string}/${VariantsA91e8ba1}` & {})
  | OutlineWidthArbitraryValue;
interface TailwindOutlineWidth {
  /**
   * `OutlineWidth`
   *
   * Utilities for controlling the width of an element's outline.
   *
   * Arbitrary support
   *
   * `outline-<number>`, `outline-(<var-name>)`, `outline-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/outline-width Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/outline-width , MDN docs}
   */
  outlineWidth: OutlineWidthValue;
}
type OutlineStyleOutlineLiteral = `outline-${OutlineStyleRef1}`;
type OutlineStyleValue = OutlineStyleOutlineLiteral;
interface TailwindOutlineStyle {
  /**
   * `OutlineStyle`
   *
   * Utilities for controlling the style of an element's outline.
   *
   * @see
   * {@link https://tailwindcss.com/docs/outline-style Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/outline-style , MDN docs}
   */
  outlineStyle: OutlineStyleValue;
}
type OverflowXLiteral = `overflow-x-${OverflowRef1}`;
type OverflowYLiteral = `overflow-y-${OverflowRef2}`;
type OverflowLiteral = `overflow-${OverflowRef3}`;
type OverflowValue = OverflowXLiteral | OverflowYLiteral | OverflowLiteral;
interface TailwindOverflow {
  /**
   * `Overflow`
   *
   * Utilities for controlling how an element handles content that is too large
   * for the container.
   *
   * @see
   * {@link https://tailwindcss.com/docs/overflow Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overflow , MDN docs}
   */
  overflow: OverflowValue;
}
type TextOverflowValue =
  | 'overflow-ellipsis'
  | 'text-clip'
  | 'text-ellipsis'
  | 'truncate'
  | 'overflow-ellipsis'
  | 'text-clip'
  | 'text-ellipsis'
  | 'truncate';
interface TailwindTextOverflow {
  /**
   * `TextOverflow`
   *
   * Utilities for controlling how the text of an element overflows.
   *
   * @see
   * {@link https://tailwindcss.com/docs/text-overflow Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow , MDN docs}
   */
  textOverflow: TextOverflowValue;
}
type OverscrollBehaviorOverscrollxLiteral =
  `overscroll-x-${OverscrollBehaviorRef1}`;
type OverscrollBehaviorOverscrollyLiteral =
  `overscroll-y-${OverscrollBehaviorRef2}`;
type OverscrollBehaviorOverscrollLiteral =
  `overscroll-${OverscrollBehaviorRef3}`;
type OverscrollBehaviorValue =
  | OverscrollBehaviorOverscrollxLiteral
  | OverscrollBehaviorOverscrollyLiteral
  | OverscrollBehaviorOverscrollLiteral;
interface TailwindOverscrollBehavior {
  /**
   * `OverscrollBehavior`
   *
   * Utilities for controlling how the browser behaves when reaching the
   * boundary of a scrolling area.
   *
   * @see
   * {@link https://tailwindcss.com/docs/overscroll-behavior Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior , MDN docs}
   */
  overscrollBehavior: OverscrollBehaviorValue;
}
type PerspectiveLiteral = `perspective-${PerspectiveRef1}`;
type PerspectiveProperty = PerspectiveLiteral;
type PerspectiveArbitraryValue =
  | (`perspective-(${string})` & {})
  | (`perspective-[${string}]` & {});
type PerspectiveValue = PerspectiveProperty | PerspectiveArbitraryValue;
interface TailwindPerspective {
  /**
   * `Perspective`
   *
   * Utilities for controlling an element's perspective when placed in 3D space.
   *
   * Arbitrary support
   *
   * `perspective-(<var-name>)`, `perspective-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/perspective Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/perspective , MDN docs}
   */
  perspective: PerspectiveValue;
}
type PerspectiveOriginBottomLiteral =
  `perspective-origin-bottom-${PerspectiveOriginRef1}`;
type PerspectiveOriginTopLiteral =
  `perspective-origin-top-${PerspectiveOriginRef2}`;
type PerspectiveOriginLiteral = `perspective-origin-${PerspectiveOriginRef3}`;
type PerspectiveOriginProperty =
  | PerspectiveOriginBottomLiteral
  | PerspectiveOriginTopLiteral
  | PerspectiveOriginLiteral;
type PerspectiveOriginArbitraryValue =
  | (`perspective-origin-(${string})` & {})
  | (`perspective-origin-[${string}]` & {});
type PerspectiveOriginValue =
  | PerspectiveOriginProperty
  | PerspectiveOriginArbitraryValue;
interface TailwindPerspectiveOrigin {
  /**
   * `PerspectiveOrigin`
   *
   * Utilities for controlling an element's perspective origin when placed in 3D
   * space.
   *
   * Arbitrary support
   *
   * `perspective-origin-(<var-name>)`, `perspective-origin-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/perspective-origin Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin , MDN docs}
   */
  perspectiveOrigin: PerspectiveOriginValue;
}
type PlaceContentLiteral = `place-content-${PlaceContentRef1}`;
type PlaceContentValue = PlaceContentLiteral;
interface TailwindPlaceContent {
  /**
   * `PlaceContent`
   *
   * Utilities for controlling how content is justified and aligned at the same
   * time.
   *
   * @see
   * {@link https://tailwindcss.com/docs/place-content Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/place-content , MDN docs}
   */
  placeContent: PlaceContentValue;
}
type PlaceItemsLiteral = `place-items-${PlaceItemsRef1}`;
type PlaceItemsValue = PlaceItemsLiteral;
interface TailwindPlaceItems {
  /**
   * `PlaceItems`
   *
   * Utilities for controlling how items are justified and aligned at the same
   * time.
   *
   * @see
   * {@link https://tailwindcss.com/docs/place-items Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/place-items , MDN docs}
   */
  placeItems: PlaceItemsValue;
}
type PlaceSelfLiteral = `place-self-${PlaceSelfRef1}`;
type PlaceSelfValue = PlaceSelfLiteral;
interface TailwindPlaceSelf {
  /**
   * `PlaceSelf`
   *
   * Utilities for controlling how an individual item is justified and aligned
   * at the same time.
   *
   * @see
   * {@link https://tailwindcss.com/docs/place-self Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/place-self , MDN docs}
   */
  placeSelf: PlaceSelfValue;
}
type PointerEventsValue =
  | 'pointer-events-auto'
  | 'pointer-events-none'
  | 'pointer-events-auto'
  | 'pointer-events-none';
interface TailwindPointerEvents {
  /**
   * `PointerEvents`
   *
   * Utilities for controlling whether an element responds to pointer events.
   *
   * @see
   * {@link https://tailwindcss.com/docs/pointer-events Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events , MDN docs}
   */
  pointerEvents: PointerEventsValue;
}
type ResizeLiteral = `resize-${ResizeRef1}`;
type ResizeValue = 'resize' | ResizeLiteral;
interface TailwindResize {
  /**
   * `Resize`
   *
   * Utilities for controlling how an element can be resized.
   *
   * @see
   * {@link https://tailwindcss.com/docs/resize Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/resize , MDN docs}
   */
  resize: ResizeValue;
}
type BorderRadiusRoundedbLiteral = `rounded-b-${BorderRadiusRef1}`;
type BorderRadiusRoundedblLiteral = `rounded-bl-${BorderRadiusRef1}`;
type BorderRadiusRoundedbrLiteral = `rounded-br-${BorderRadiusRef1}`;
type BorderRadiusRoundedeLiteral = `rounded-e-${BorderRadiusRef1}`;
type BorderRadiusRoundedeeLiteral = `rounded-ee-${BorderRadiusRef1}`;
type BorderRadiusRoundedesLiteral = `rounded-es-${BorderRadiusRef1}`;
type BorderRadiusRoundedlLiteral = `rounded-l-${BorderRadiusRef1}`;
type BorderRadiusRoundedrLiteral = `rounded-r-${BorderRadiusRef1}`;
type BorderRadiusRoundedsLiteral = `rounded-s-${BorderRadiusRef1}`;
type BorderRadiusRoundedseLiteral = `rounded-se-${BorderRadiusRef1}`;
type BorderRadiusRoundedssLiteral = `rounded-ss-${BorderRadiusRef1}`;
type BorderRadiusRoundedtLiteral = `rounded-t-${BorderRadiusRef1}`;
type BorderRadiusRoundedtlLiteral = `rounded-tl-${BorderRadiusRef1}`;
type BorderRadiusRoundedtrLiteral = `rounded-tr-${BorderRadiusRef1}`;
type BorderRadiusRoundedLiteral = `rounded-${BorderRadiusRef1}`;
type BorderRadiusProperty =
  | BorderRadiusRoundedbLiteral
  | BorderRadiusRoundedblLiteral
  | BorderRadiusRoundedbrLiteral
  | BorderRadiusRoundedeLiteral
  | BorderRadiusRoundedeeLiteral
  | BorderRadiusRoundedesLiteral
  | BorderRadiusRoundedlLiteral
  | BorderRadiusRoundedrLiteral
  | BorderRadiusRoundedsLiteral
  | BorderRadiusRoundedseLiteral
  | BorderRadiusRoundedssLiteral
  | BorderRadiusRoundedtLiteral
  | BorderRadiusRoundedtlLiteral
  | BorderRadiusRoundedtrLiteral
  | BorderRadiusRoundedLiteral;
type BorderRadiusArbitraryValue =
  | (`rounded-b-(${string})` & {})
  | (`rounded-b-[${string}]` & {})
  | (`rounded-bl-(${string})` & {})
  | (`rounded-bl-[${string}]` & {})
  | (`rounded-br-(${string})` & {})
  | (`rounded-br-[${string}]` & {})
  | (`rounded-e-(${string})` & {})
  | (`rounded-e-[${string}]` & {})
  | (`rounded-ee-(${string})` & {})
  | (`rounded-ee-[${string}]` & {})
  | (`rounded-es-(${string})` & {})
  | (`rounded-es-[${string}]` & {})
  | (`rounded-l-(${string})` & {})
  | (`rounded-l-[${string}]` & {})
  | (`rounded-r-(${string})` & {})
  | (`rounded-r-[${string}]` & {})
  | (`rounded-s-(${string})` & {})
  | (`rounded-s-[${string}]` & {})
  | (`rounded-se-(${string})` & {})
  | (`rounded-se-[${string}]` & {})
  | (`rounded-ss-(${string})` & {})
  | (`rounded-ss-[${string}]` & {})
  | (`rounded-t-(${string})` & {})
  | (`rounded-t-[${string}]` & {})
  | (`rounded-tl-(${string})` & {})
  | (`rounded-tl-[${string}]` & {})
  | (`rounded-tr-(${string})` & {})
  | (`rounded-tr-[${string}]` & {})
  | (`rounded-(${string})` & {})
  | (`rounded-[${string}]` & {});
type BorderRadiusValue = BorderRadiusProperty | BorderRadiusArbitraryValue;
interface TailwindBorderRadius {
  /**
   * `BorderRadius`
   *
   * Utilities for controlling the border radius of an element.
   *
   * Arbitrary support
   *
   * `rounded-b-(<var-name>)`, `rounded-b-[<arbitrary-value>]`,
   * `rounded-bl-(<var-name>)`, `rounded-bl-[<arbitrary-value>]`,
   * `rounded-br-(<var-name>)` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/border-radius Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius , MDN docs}
   */
  borderRadius: BorderRadiusValue;
}
type ColorSchemeSchemelightLiteral = `scheme-light-${ColorSchemeRef1}`;
type ColorSchemeSchemeLiteral = `scheme-${ColorSchemeRef2}`;
type ColorSchemeValue =
  | ColorSchemeSchemelightLiteral
  | ColorSchemeSchemeLiteral;
interface TailwindColorScheme {
  /**
   * `ColorScheme`
   *
   * Utilities for controlling the color scheme of an element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/color-scheme Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme , MDN docs}
   */
  colorScheme: ColorSchemeValue;
}
type ScrollBehaviorValue =
  | 'scroll-auto'
  | 'scroll-smooth'
  | 'scroll-auto'
  | 'scroll-smooth';
interface TailwindScrollBehavior {
  /**
   * `ScrollBehavior`
   *
   * Utilities for controlling the scroll behavior of an element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/scroll-behavior Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior , MDN docs}
   */
  scrollBehavior: ScrollBehaviorValue;
}
type ScrollPaddingScrollpLiteral = `scroll-p-${ScrollPaddingRef1}`;
type ScrollPaddingScrollpbLiteral = `scroll-pb-${ScrollPaddingRef1}`;
type ScrollPaddingScrollpeLiteral = `scroll-pe-${ScrollPaddingRef1}`;
type ScrollPaddingScrollplLiteral = `scroll-pl-${ScrollPaddingRef1}`;
type ScrollPaddingScrollprLiteral = `scroll-pr-${ScrollPaddingRef1}`;
type ScrollPaddingScrollpsLiteral = `scroll-ps-${ScrollPaddingRef1}`;
type ScrollPaddingScrollptLiteral = `scroll-pt-${ScrollPaddingRef1}`;
type ScrollPaddingScrollpxLiteral = `scroll-px-${ScrollPaddingRef1}`;
type ScrollPaddingScrollpyLiteral = `scroll-py-${ScrollPaddingRef1}`;
type ScrollPaddingProperty =
  | ScrollPaddingScrollpLiteral
  | ScrollPaddingScrollpbLiteral
  | ScrollPaddingScrollpeLiteral
  | ScrollPaddingScrollplLiteral
  | ScrollPaddingScrollprLiteral
  | ScrollPaddingScrollpsLiteral
  | ScrollPaddingScrollptLiteral
  | ScrollPaddingScrollpxLiteral
  | ScrollPaddingScrollpyLiteral;
type ScrollPaddingArbitraryValue =
  | (`scroll-p-${number}` & {})
  | (`scroll-p-${number}` & {})
  | (`-scroll-p-${number}` & {})
  | (`scroll-p-(${string})` & {})
  | (`scroll-p-[${string}]` & {})
  | (`scroll-pb-${number}` & {})
  | (`scroll-pb-${number}` & {})
  | (`-scroll-pb-${number}` & {})
  | (`scroll-pb-(${string})` & {})
  | (`scroll-pb-[${string}]` & {})
  | (`scroll-pe-${number}` & {})
  | (`scroll-pe-${number}` & {})
  | (`-scroll-pe-${number}` & {})
  | (`scroll-pe-(${string})` & {})
  | (`scroll-pe-[${string}]` & {})
  | (`scroll-pl-${number}` & {})
  | (`scroll-pl-${number}` & {})
  | (`-scroll-pl-${number}` & {})
  | (`scroll-pl-(${string})` & {})
  | (`scroll-pl-[${string}]` & {})
  | (`scroll-pr-${number}` & {})
  | (`scroll-pr-${number}` & {})
  | (`-scroll-pr-${number}` & {})
  | (`scroll-pr-(${string})` & {})
  | (`scroll-pr-[${string}]` & {})
  | (`scroll-ps-${number}` & {})
  | (`scroll-ps-${number}` & {})
  | (`-scroll-ps-${number}` & {})
  | (`scroll-ps-(${string})` & {})
  | (`scroll-ps-[${string}]` & {})
  | (`scroll-pt-${number}` & {})
  | (`scroll-pt-${number}` & {})
  | (`-scroll-pt-${number}` & {})
  | (`scroll-pt-(${string})` & {})
  | (`scroll-pt-[${string}]` & {})
  | (`scroll-px-${number}` & {})
  | (`scroll-px-${number}` & {})
  | (`-scroll-px-${number}` & {})
  | (`scroll-px-(${string})` & {})
  | (`scroll-px-[${string}]` & {})
  | (`scroll-py-${number}` & {})
  | (`scroll-py-${number}` & {})
  | (`-scroll-py-${number}` & {})
  | (`scroll-py-(${string})` & {})
  | (`scroll-py-[${string}]` & {});
type ScrollPaddingValue = ScrollPaddingProperty | ScrollPaddingArbitraryValue;
interface TailwindScrollPadding {
  /**
   * `ScrollPadding`
   *
   * Utilities for controlling an element's scroll offset within a snap
   * container.
   *
   * Arbitrary support
   *
   * `scroll-p-<number>`, `-scroll-p-<number>`, `scroll-p-(<var-name>)`,
   * `scroll-p-[<arbitrary-value>]`, `scroll-pb-<number>` ...
   *
   * @see
   * {@link https://tailwindcss.com/docs/scroll-padding Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding , MDN docs}
   */
  scrollPadding: ScrollPaddingValue;
}
type UserSelectSelectLiteral = `select-${UserSelectRef1}`;
type UserSelectValue = UserSelectSelectLiteral;
interface TailwindUserSelect {
  /**
   * `UserSelect`
   *
   * Utilities for controlling whether the user can select text in an element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/user-select Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/user-select , MDN docs}
   */
  userSelect: UserSelectValue;
}
type AlignSelfSelfLiteral = `self-${AlignSelfRef1}`;
type AlignSelfValue = AlignSelfSelfLiteral;
interface TailwindAlignSelf {
  /**
   * `AlignSelf`
   *
   * Utilities for controlling how an individual flex or grid item is positioned
   * along its container's cross axis.
   *
   * @see
   * {@link https://tailwindcss.com/docs/align-self Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-self , MDN docs}
   */
  alignSelf: AlignSelfValue;
}
type FlexShrinkProperty = 'shrink' | 'shrink-0' | 'shrink' | 'shrink-0';
type FlexShrinkArbitraryValue =
  | (`shrink-${number}` & {})
  | (`shrink-[${string}]` & {})
  | (`shrink-(${string})` & {});
type FlexShrinkValue = FlexShrinkProperty | FlexShrinkArbitraryValue;
interface TailwindFlexShrink {
  /**
   * `FlexShrink`
   *
   * Utilities for controlling how flex items shrink.
   *
   * Arbitrary support
   *
   * `shrink-<number>`, `shrink-[<arbitrary-value>]`, `shrink-(<var-name>)`
   *
   * @see
   * {@link https://tailwindcss.com/docs/flex-shrink Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink , MDN docs}
   */
  flexShrink: FlexShrinkValue;
}
type ScrollSnapStopValue =
  | 'snap-always'
  | 'snap-normal'
  | 'snap-always'
  | 'snap-normal';
interface TailwindScrollSnapStop {
  /**
   * `ScrollSnapStop`
   *
   * Utilities for controlling whether you can skip past possible snap
   * positions.
   *
   * @see
   * {@link https://tailwindcss.com/docs/scroll-snap-stop Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop , MDN docs}
   */
  scrollSnapStop: ScrollSnapStopValue;
}
type ScrollSnapTypeSnapLiteral = `snap-${ScrollSnapTypeRef1}`;
type ScrollSnapTypeValue = ScrollSnapTypeSnapLiteral;
interface TailwindScrollSnapType {
  /**
   * `ScrollSnapType`
   *
   * Utilities for controlling how strictly snap points are enforced in a snap
   * container.
   *
   * @see
   * {@link https://tailwindcss.com/docs/scroll-snap-type Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type , MDN docs}
   */
  scrollSnapType: ScrollSnapTypeValue;
}
type StrokeWidthStrokeLiteral = `stroke-${StrokeWidthRef1}`;
type StrokeWidthProperty = StrokeWidthStrokeLiteral;
type StrokeWidthArbitraryValue =
  | (`stroke-${number}` & {})
  | (`stroke-(${string})` & {})
  | (`stroke-[${string}]` & {});
type StrokeWidthValue =
  | StrokeWidthProperty
  | (`stroke-${string}/${VariantsA91e8ba1}` & {})
  | StrokeWidthArbitraryValue;
interface TailwindStrokeWidth {
  /**
   * `StrokeWidth`
   *
   * Utilities for styling the stroke width of SVG elements.
   *
   * Arbitrary support
   *
   * `stroke-<number>`, `stroke-(<var-name>)`, `stroke-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/stroke-width Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/stroke-width , MDN docs}
   */
  strokeWidth: StrokeWidthValue;
}
type StrokeLiteral = `stroke-${StrokeRef1}`;
type StrokeProperty = StrokeLiteral;
type StrokeArbitraryValue =
  | (`stroke-(${string})` & {})
  | (`stroke-[${string}]` & {});
type StrokeValue =
  | StrokeProperty
  | (`stroke-${string}/${VariantsA91e8ba1}` & {})
  | StrokeArbitraryValue;
interface TailwindStroke {
  /**
   * `Stroke`
   *
   * Utilities for styling the stroke of SVG elements.
   *
   * Arbitrary support
   *
   * `stroke-(<var-name>)`, `stroke-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/stroke Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/stroke , MDN docs}
   */
  stroke: StrokeValue;
}
type TableLayoutValue =
  | 'table-auto'
  | 'table-fixed'
  | 'table-auto'
  | 'table-fixed';
interface TailwindTableLayout {
  /**
   * `TableLayout`
   *
   * Utilities for controlling the table layout algorithm.
   *
   * @see
   * {@link https://tailwindcss.com/docs/table-layout Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout , MDN docs}
   */
  tableLayout: TableLayoutValue;
}
type TextWrapTextLiteral = `text-${TextWrapRef1}`;
type TextWrapValue = TextWrapTextLiteral;
interface TailwindTextWrap {
  /**
   * `TextWrap`
   *
   * Utilities for controlling how text wraps within an element.
   *
   * @see
   * {@link https://tailwindcss.com/docs/text-wrap Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap , MDN docs}
   */
  textWrap: TextWrapValue;
}
type TextAlignTextLiteral = `text-${TextAlignRef1}`;
type TextAlignValue = TextAlignTextLiteral;
interface TailwindTextAlign {
  /**
   * `TextAlign`
   *
   * Utilities for controlling the alignment of text.
   *
   * @see
   * {@link https://tailwindcss.com/docs/text-align Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-align , MDN docs}
   */
  textAlign: TextAlignValue;
}
type TextShadowLiteral = `text-shadow-${TextShadowRef1}`;
type TextShadowProperty = TextShadowLiteral;
type TextShadowArbitraryValue =
  | (`text-shadow-(${string})` & {})
  | (`text-shadow-[${string}]` & {});
type TextShadowValue =
  | TextShadowProperty
  | (`text-shadow-${string}/${VariantsA91e8ba1}` & {})
  | TextShadowArbitraryValue;
interface TailwindTextShadow {
  /**
   * `TextShadow`
   *
   * Utilities for controlling the shadow of a text element.
   *
   * Arbitrary support
   *
   * `text-shadow-(<var-name>)`, `text-shadow-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/text-shadow Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow , MDN docs}
   */
  textShadow: TextShadowValue;
}
type TouchActionTouchpanLiteral = `touch-pan-${TouchActionRef1}`;
type TouchActionTouchLiteral = `touch-${TouchActionRef2}`;
type TouchActionValue = TouchActionTouchpanLiteral | TouchActionTouchLiteral;
interface TailwindTouchAction {
  /**
   * `TouchAction`
   *
   * Utilities for controlling how an element can be scrolled and zoomed on
   * touchscreens.
   *
   * @see
   * {@link https://tailwindcss.com/docs/touch-action Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action , MDN docs}
   */
  touchAction: TouchActionValue;
}
type TransformLiteral = `transform-${TransformRef1}`;
type TransformProperty = 'transform' | TransformLiteral;
type TransformArbitraryValue =
  | (`transform-(${string})` & {})
  | (`transform-[${string}]` & {});
type TransformValue = TransformProperty | TransformArbitraryValue;
interface TailwindTransform {
  /**
   * `Transform`
   *
   * Utilities for transforming elements.
   *
   * Arbitrary support
   *
   * `transform-(<var-name>)`, `transform-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/transform Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform , MDN docs}
   */
  transform: TransformValue;
}
type TransformStyleValue =
  | 'transform-3d'
  | 'transform-flat'
  | 'transform-3d'
  | 'transform-flat';
interface TailwindTransformStyle {
  /**
   * `TransformStyle`
   *
   * Utilities for controlling if an elements children are placed in 3D space.
   *
   * @see
   * {@link https://tailwindcss.com/docs/transform-style Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style , MDN docs}
   */
  transformStyle: TransformStyleValue;
}
type TransformBoxTransformLiteral = `transform-${TransformBoxRef1}`;
type TransformBoxValue = TransformBoxTransformLiteral;
interface TailwindTransformBox {
  /**
   * `TransformBox`
   *
   * @see
   * {@link https://tailwindcss.com/docs Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-box , MDN docs}
   */
  transformBox: TransformBoxValue;
}
type TransitionPropertyTransitionLiteral =
  `transition-${TransitionPropertyRef1}`;
type TransitionPropertyProperty =
  | 'transition'
  | TransitionPropertyTransitionLiteral;
type TransitionPropertyArbitraryValue =
  | (`transition-(${string})` & {})
  | (`transition-[${string}]` & {});
type TransitionPropertyValue =
  | TransitionPropertyProperty
  | TransitionPropertyArbitraryValue;
interface TailwindTransitionProperty {
  /**
   * `TransitionProperty`
   *
   * Utilities for controlling which CSS properties transition.
   *
   * Arbitrary support
   *
   * `transition-(<var-name>)`, `transition-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/transition-property Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property , MDN docs}
   */
  transitionProperty: TransitionPropertyValue;
}
type TransitionBehaviorValue =
  | 'transition-discrete'
  | 'transition-normal'
  | 'transition-discrete'
  | 'transition-normal';
interface TailwindTransitionBehavior {
  /**
   * `TransitionBehavior`
   *
   * Utilities to control the behavior of CSS transitions.
   *
   * @see
   * {@link https://tailwindcss.com/docs/transition-behavior Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/transition-behavior , MDN docs}
   */
  transitionBehavior: TransitionBehaviorValue;
}
type WhiteSpacePreLiteral = `whitespace-pre-${WhiteSpaceRef1}`;
type WhiteSpaceLiteral = `whitespace-${WhiteSpaceRef2}`;
type WhiteSpaceValue = WhiteSpacePreLiteral | WhiteSpaceLiteral;
interface TailwindWhiteSpace {
  /**
   * `WhiteSpace`
   *
   * Utilities for controlling an element's white-space property.
   *
   * @see
   * {@link https://tailwindcss.com/docs/white-space Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/white-space , MDN docs}
   */
  whiteSpace: WhiteSpaceValue;
}
type WillChangeLiteral = `will-change-${WillChangeRef1}`;
type WillChangeProperty = WillChangeLiteral;
type WillChangeArbitraryValue =
  | (`will-change-${number}` & {})
  | (`will-change-[${string}]` & {});
type WillChangeValue = WillChangeProperty | WillChangeArbitraryValue;
interface TailwindWillChange {
  /**
   * `WillChange`
   *
   * Utilities for optimizing upcoming animations of elements that are expected
   * to change.
   *
   * Arbitrary support
   *
   * `will-change-<number>`, `will-change-[<arbitrary-value>]`
   *
   * @see
   * {@link https://tailwindcss.com/docs/will-change Tailwind docs}
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/will-change , MDN docs}
   */
  willChange: WillChangeValue;
}
export interface Tailwind
  extends TailwindBackgroundImage,
    TailwindBottom,
    TailwindGridColumn,
    TailwindEnd,
    TailwindTextIndent,
    TailwindInset,
    TailwindLeft,
    TailwindMargin,
    TailwindMaskImage,
    TailwindOrder,
    TailwindOutlineOffset,
    TailwindRight,
    TailwindRotate,
    TailwindGridRow,
    TailwindScale,
    TailwindScrollMargin,
    TailwindSkew,
    TailwindStart,
    TailwindTop,
    TailwindLetterSpacing,
    TailwindTranslate,
    TailwindTextUnderlineOffset,
    TailwindZIndex,
    TailwindContainerType,
    TailwindPosition,
    TailwindAccentColor,
    TailwindCustom,
    TailwindVerticalAlign,
    TailwindAnimation,
    TailwindFontSmoothing,
    TailwindAppearance,
    TailwindAspectRatio,
    TailwindGridAutoColumns,
    TailwindGridAutoRows,
    TailwindBackdropFilter,
    TailwindBackfaceVisibility,
    TailwindFlexBasis,
    TailwindBackgroundColor,
    TailwindBackgroundSize,
    TailwindBackgroundBlendMode,
    TailwindBackgroundPosition,
    TailwindBackgroundClip,
    TailwindBackgroundAttachment,
    TailwindBackgroundRepeat,
    TailwindBackgroundOrigin,
    TailwindDisplay,
    TailwindFilter,
    TailwindBorderWidth,
    TailwindBorderColor,
    TailwindBorderCollapse,
    TailwindBorderStyle,
    TailwindBorderSpacing,
    TailwindBoxSizing,
    TailwindBoxDecorationBreak,
    TailwindBreakAfter,
    TailwindWordBreak,
    TailwindBreakBefore,
    TailwindBreakInside,
    TailwindOverflowWrap,
    TailwindIsolation,
    TailwindWidth,
    TailwindOutlineColor,
    TailwindTextTransform,
    TailwindCaptionSide,
    TailwindCaretColor,
    TailwindScrollSnapAlign,
    TailwindColor,
    TailwindPadding,
    TailwindClear,
    TailwindVisibility,
    TailwindColumns,
    TailwindContain,
    TailwindMaxWidth,
    TailwindAlignContent,
    TailwindContent,
    TailwindCursor,
    TailwindTextDecorationThickness,
    TailwindTextDecorationColor,
    TailwindTextDecorationStyle,
    TailwindTransitionDelay,
    TailwindFontVariantNumeric,
    TailwindTransitionDuration,
    TailwindTransitionTimingFunction,
    TailwindFieldSizing,
    TailwindFill,
    TailwindFlex,
    TailwindFlexDirection,
    TailwindFlexWrap,
    TailwindFloat,
    TailwindFontWeight,
    TailwindFontFamily,
    TailwindFontStretch,
    TailwindGridAutoFlow,
    TailwindForcedColorAdjust,
    TailwindGap,
    TailwindGridTemplateColumns,
    TailwindGridTemplateRows,
    TailwindFlexGrow,
    TailwindHeight,
    TailwindHyphens,
    TailwindBoxShadow,
    TailwindFontStyle,
    TailwindAlignItems,
    TailwindJustifyContent,
    TailwindJustifyItems,
    TailwindJustifySelf,
    TailwindFontSize,
    TailwindLineHeight,
    TailwindLineClamp,
    TailwindTextDecorationLine,
    TailwindListStyleType,
    TailwindListStyleImage,
    TailwindListStylePosition,
    TailwindMaskComposite,
    TailwindMaskMode,
    TailwindMaskSize,
    TailwindMaskPosition,
    TailwindMaskClip,
    TailwindMaskRepeat,
    TailwindMaskOrigin,
    TailwindMaskType,
    TailwindMaxHeight,
    TailwindMinHeight,
    TailwindMinWidth,
    TailwindMixBlendMode,
    TailwindObjectPosition,
    TailwindObjectFit,
    TailwindOpacity,
    TailwindTransformOrigin,
    TailwindOutlineWidth,
    TailwindOutlineStyle,
    TailwindOverflow,
    TailwindTextOverflow,
    TailwindOverscrollBehavior,
    TailwindPerspective,
    TailwindPerspectiveOrigin,
    TailwindPlaceContent,
    TailwindPlaceItems,
    TailwindPlaceSelf,
    TailwindPointerEvents,
    TailwindResize,
    TailwindBorderRadius,
    TailwindColorScheme,
    TailwindScrollBehavior,
    TailwindScrollPadding,
    TailwindUserSelect,
    TailwindAlignSelf,
    TailwindFlexShrink,
    TailwindScrollSnapStop,
    TailwindScrollSnapType,
    TailwindStrokeWidth,
    TailwindStroke,
    TailwindTableLayout,
    TailwindTextWrap,
    TailwindTextAlign,
    TailwindTextShadow,
    TailwindTouchAction,
    TailwindTransform,
    TailwindTransformStyle,
    TailwindTransformBox,
    TailwindTransitionProperty,
    TailwindTransitionBehavior,
    TailwindWhiteSpace,
    TailwindWillChange {}
/**
 * Tailwind nest groups
 *
 * @see
 * {@link https://tailwindcss.com/docs Tailwind docs}
 */
export type TailwindNestGroups =
  | '*'
  | '**'
  | 'not-first'
  | 'not-last'
  | 'not-only'
  | 'not-odd'
  | 'not-even'
  | 'not-first-of-type'
  | 'not-last-of-type'
  | 'not-only-of-type'
  | 'not-visited'
  | 'not-target'
  | 'not-open'
  | 'not-default'
  | 'not-checked'
  | 'not-indeterminate'
  | 'not-placeholder-shown'
  | 'not-autofill'
  | 'not-optional'
  | 'not-required'
  | 'not-valid'
  | 'not-invalid'
  | 'not-user-valid'
  | 'not-user-invalid'
  | 'not-in-range'
  | 'not-out-of-range'
  | 'not-read-only'
  | 'not-empty'
  | 'not-focus-within'
  | 'not-hover'
  | 'not-focus'
  | 'not-focus-visible'
  | 'not-active'
  | 'not-enabled'
  | 'not-disabled'
  | 'not-inert'
  | 'not-in'
  | 'not-has'
  | 'not-aria'
  | 'not-data'
  | 'not-nth'
  | 'not-nth-last'
  | 'not-nth-of-type'
  | 'not-nth-last-of-type'
  | 'not-supports'
  | 'not-motion-safe'
  | 'not-motion-reduce'
  | 'not-contrast-more'
  | 'not-contrast-less'
  | 'not-max'
  | 'not-sm'
  | 'not-md'
  | 'not-lg'
  | 'not-xl'
  | 'not-2xl'
  | 'not-min'
  | 'not-@max'
  | 'not-@'
  | 'not-@min'
  | 'not-portrait'
  | 'not-landscape'
  | 'not-ltr'
  | 'not-rtl'
  | 'not-dark'
  | 'not-print'
  | 'not-forced-colors'
  | 'not-inverted-colors'
  | 'not-pointer-none'
  | 'not-pointer-coarse'
  | 'not-pointer-fine'
  | 'not-any-pointer-none'
  | 'not-any-pointer-coarse'
  | 'not-any-pointer-fine'
  | 'not-noscript'
  | 'group-first'
  | 'group-last'
  | 'group-only'
  | 'group-odd'
  | 'group-even'
  | 'group-first-of-type'
  | 'group-last-of-type'
  | 'group-only-of-type'
  | 'group-visited'
  | 'group-target'
  | 'group-open'
  | 'group-default'
  | 'group-checked'
  | 'group-indeterminate'
  | 'group-placeholder-shown'
  | 'group-autofill'
  | 'group-optional'
  | 'group-required'
  | 'group-valid'
  | 'group-invalid'
  | 'group-user-valid'
  | 'group-user-invalid'
  | 'group-in-range'
  | 'group-out-of-range'
  | 'group-read-only'
  | 'group-empty'
  | 'group-focus-within'
  | 'group-hover'
  | 'group-focus'
  | 'group-focus-visible'
  | 'group-active'
  | 'group-enabled'
  | 'group-disabled'
  | 'group-inert'
  | 'group-in'
  | 'group-has'
  | 'group-aria'
  | 'group-data'
  | 'group-nth'
  | 'group-nth-last'
  | 'group-nth-of-type'
  | 'group-nth-last-of-type'
  | 'group-ltr'
  | 'group-rtl'
  | 'peer-first'
  | 'peer-last'
  | 'peer-only'
  | 'peer-odd'
  | 'peer-even'
  | 'peer-first-of-type'
  | 'peer-last-of-type'
  | 'peer-only-of-type'
  | 'peer-visited'
  | 'peer-target'
  | 'peer-open'
  | 'peer-default'
  | 'peer-checked'
  | 'peer-indeterminate'
  | 'peer-placeholder-shown'
  | 'peer-autofill'
  | 'peer-optional'
  | 'peer-required'
  | 'peer-valid'
  | 'peer-invalid'
  | 'peer-user-valid'
  | 'peer-user-invalid'
  | 'peer-in-range'
  | 'peer-out-of-range'
  | 'peer-read-only'
  | 'peer-empty'
  | 'peer-focus-within'
  | 'peer-hover'
  | 'peer-focus'
  | 'peer-focus-visible'
  | 'peer-active'
  | 'peer-enabled'
  | 'peer-disabled'
  | 'peer-inert'
  | 'peer-in'
  | 'peer-has'
  | 'peer-aria'
  | 'peer-data'
  | 'peer-nth'
  | 'peer-nth-last'
  | 'peer-nth-of-type'
  | 'peer-nth-last-of-type'
  | 'peer-ltr'
  | 'peer-rtl'
  | 'first-letter'
  | 'first-line'
  | 'marker'
  | 'selection'
  | 'file'
  | 'placeholder'
  | 'backdrop'
  | 'details-content'
  | 'before'
  | 'after'
  | 'first'
  | 'last'
  | 'only'
  | 'odd'
  | 'even'
  | 'first-of-type'
  | 'last-of-type'
  | 'only-of-type'
  | 'visited'
  | 'target'
  | 'open'
  | 'default'
  | 'checked'
  | 'indeterminate'
  | 'placeholder-shown'
  | 'autofill'
  | 'optional'
  | 'required'
  | 'valid'
  | 'invalid'
  | 'user-valid'
  | 'user-invalid'
  | 'in-range'
  | 'out-of-range'
  | 'read-only'
  | 'empty'
  | 'focus-within'
  | 'hover'
  | 'focus'
  | 'focus-visible'
  | 'active'
  | 'enabled'
  | 'disabled'
  | 'inert'
  | 'in-first'
  | 'in-last'
  | 'in-only'
  | 'in-odd'
  | 'in-even'
  | 'in-first-of-type'
  | 'in-last-of-type'
  | 'in-only-of-type'
  | 'in-visited'
  | 'in-target'
  | 'in-open'
  | 'in-default'
  | 'in-checked'
  | 'in-indeterminate'
  | 'in-placeholder-shown'
  | 'in-autofill'
  | 'in-optional'
  | 'in-required'
  | 'in-valid'
  | 'in-invalid'
  | 'in-user-valid'
  | 'in-user-invalid'
  | 'in-in-range'
  | 'in-out-of-range'
  | 'in-read-only'
  | 'in-empty'
  | 'in-focus-within'
  | 'in-hover'
  | 'in-focus'
  | 'in-focus-visible'
  | 'in-active'
  | 'in-enabled'
  | 'in-disabled'
  | 'in-inert'
  | 'in-in'
  | 'in-has'
  | 'in-aria'
  | 'in-data'
  | 'in-nth'
  | 'in-nth-last'
  | 'in-nth-of-type'
  | 'in-nth-last-of-type'
  | 'in-ltr'
  | 'in-rtl'
  | 'has-first'
  | 'has-last'
  | 'has-only'
  | 'has-odd'
  | 'has-even'
  | 'has-first-of-type'
  | 'has-last-of-type'
  | 'has-only-of-type'
  | 'has-visited'
  | 'has-target'
  | 'has-open'
  | 'has-default'
  | 'has-checked'
  | 'has-indeterminate'
  | 'has-placeholder-shown'
  | 'has-autofill'
  | 'has-optional'
  | 'has-required'
  | 'has-valid'
  | 'has-invalid'
  | 'has-user-valid'
  | 'has-user-invalid'
  | 'has-in-range'
  | 'has-out-of-range'
  | 'has-read-only'
  | 'has-empty'
  | 'has-focus-within'
  | 'has-hover'
  | 'has-focus'
  | 'has-focus-visible'
  | 'has-active'
  | 'has-enabled'
  | 'has-disabled'
  | 'has-inert'
  | 'has-in'
  | 'has-has'
  | 'has-aria'
  | 'has-data'
  | 'has-nth'
  | 'has-nth-last'
  | 'has-nth-of-type'
  | 'has-nth-last-of-type'
  | 'has-ltr'
  | 'has-rtl'
  | 'aria-busy'
  | 'aria-checked'
  | 'aria-disabled'
  | 'aria-expanded'
  | 'aria-hidden'
  | 'aria-pressed'
  | 'aria-readonly'
  | 'aria-required'
  | 'aria-selected'
  | 'data'
  | 'nth'
  | 'nth-last'
  | 'nth-of-type'
  | 'nth-last-of-type'
  | 'supports'
  | 'motion-safe'
  | 'motion-reduce'
  | 'contrast-more'
  | 'contrast-less'
  | 'max-sm'
  | 'max-md'
  | 'max-lg'
  | 'max-xl'
  | 'max-2xl'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | 'min-sm'
  | 'min-md'
  | 'min-lg'
  | 'min-xl'
  | 'min-2xl'
  | '@max-3xs'
  | '@max-2xs'
  | '@max-xs'
  | '@max-sm'
  | '@max-md'
  | '@max-lg'
  | '@max-xl'
  | '@max-2xl'
  | '@max-3xl'
  | '@max-4xl'
  | '@max-5xl'
  | '@max-6xl'
  | '@max-7xl'
  | '@3xs'
  | '@2xs'
  | '@xs'
  | '@sm'
  | '@md'
  | '@lg'
  | '@xl'
  | '@2xl'
  | '@3xl'
  | '@4xl'
  | '@5xl'
  | '@6xl'
  | '@7xl'
  | '@min-3xs'
  | '@min-2xs'
  | '@min-xs'
  | '@min-sm'
  | '@min-md'
  | '@min-lg'
  | '@min-xl'
  | '@min-2xl'
  | '@min-3xl'
  | '@min-4xl'
  | '@min-5xl'
  | '@min-6xl'
  | '@min-7xl'
  | 'portrait'
  | 'landscape'
  | 'ltr'
  | 'rtl'
  | 'dark'
  | 'starting'
  | 'print'
  | 'forced-colors'
  | 'inverted-colors'
  | 'pointer-none'
  | 'pointer-coarse'
  | 'pointer-fine'
  | 'any-pointer-none'
  | 'any-pointer-coarse'
  | 'any-pointer-fine'
  | 'noscript';
