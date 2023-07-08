// TODO: 未完成。作っているうちにやるべきか悩ましくなった。

type Props = {
  children?: React.ReactNode;
  divprop?: Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'style'>;
  style?: React.CSSProperties;
  /** isContainer - trueにすると、styleに`{display:'flex'}`を設定する。 */
  container: boolean;
  /** styleContainer - コンテナに関するCSSスタイル */
  styleContainer?: {
    /**
     * direction - 並べる方向
     *   - row: 横方向に並べる
     * ```text
     * ■ ■ ■ ■
     * ```
     *   - column: 縦方向に並べる
     * ```text
     *   ■
     *   ■
     *   ■
     *   ■
     * ```
     */
    direction?: 'row' | 'column';
    /**
     * reverse - 並べる順序
     *   - true: 逆向きに並べる
     * ```text
     * 4  3  2  1
     * ```
     *   - false: 順方向に並べる
     * ```text
     * 1  2  3  4
     * ```
     */
    reverse?: boolean;
    /**
     * wrap(flex-wrap) - 子要素の折り返し
     *   - (default): 折り返さない
     * ```text
     * 1  2  3  4  5
     * ```
     *   - wrap: 折り返す
     * ```text
     * 1  2  3
     * 4  5
     * ```
     *   - wrap-reverse: 逆方向へ折り返す
     * ```text
     * 4  5
     * 1  2  3
     * ```
     */
    wrap?: '' | 'wrap' | 'wrap-reverse';
    /**
     * alignHorizontal(justify-content) - 要素配置方向に関する位置揃え（rowの場合は左右、columnの場合は上下の配置）
     *   - flex-start: 左（上）に寄せる
     * ```text
     * 123............
     * ```
     *   - flex-end: 右（下）に寄せる
     * ```text
     * ............123
     * ```
     *   - center: 中央に寄せる
     * ```text
     * ......123......
     * ```
     *   - space-between: 中央に寄せ、要素間に均等のスペースを設定する
     * ```text
     * 1......2......3
     * ```
     *   - space-around: 中央に寄せ、要素の両端に均等のスペースを設定する
     * ```text
     * ..1....2....3..
     * ```
     */
    alignHorizontal?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    /**
     * alignVertical(align-items) - 要素配置方向と直交する方向に関する位置揃え（rowの場合は上下、columnの場合は左右の配置）
     *   - stretch: 上下（左右）に要素を拡張する
     * ```text
     * 1.2.3
     * 1.2.3
     * 1.2.3
     * ```
     *   - flex-start: 上（左）に寄せる
     * ```text
     * 1.2.3
     * .....
     * .....
     * ```
     *   - flex-end: 下（右）に寄せる
     * ```text
     * .....
     * .....
     * 1.2.3
     * ```
     *   - center: 中央に寄せる
     * ```text
     * .....
     * 1.2.3
     * .....
     * ```
     *   - baseline: ベースラインに合わせて配置する
     * ```text
     * 1.2.3
     * .....
     * .....
     * ```
     */
    alignVertical?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
    /** alignContent(align-content) - 要素を改行した時の揃え方 */
    alignContent?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  };
  /** styleItem - 要素に関するCSSスタイル */
  styleItem?: {
    /**
     * order - 要素の順番
     */
    order?: number;
    /**
     * grow(flex-grow) - 要素の伸びる比率。規定値は0で、負の値は無効。
     * "コンテナの大きさ"が"要素の大きさの合計"よりも大きい場合、その差分を flex-grow の割合で各要素に分配し、各要素が膨らむ。
     */
    grow?: number;
    /**
     * shrink(flex-shrink) - 要素の縮む比率。規定値は1で、負の値は無効。
     * "コンテナの大きさ"が"要素の大きさの合計"よりも小さい場合、その差分を flex-shrink の割合で各要素に分配し、各要素が縮む。
     */
    shrink?: number;
  };
};

/**
 * Flexに関するCSSをまとめたdiv要素のカスタマイズ部品。各propsにドキュメントコメントを割り当てている。
 */
export const FlexDiv = (props: Props) => {
  const { divprop, children, container: isContainer, style, styleContainer, styleItem } = props;
  const direction = styleContainer?.direction;
  const reverse = styleContainer?.reverse;
  const wrap = styleContainer?.wrap;
  const alignHorizontal = styleContainer?.alignHorizontal;
  const alignVertical = styleContainer?.alignVertical;
  const alignContent = styleContainer?.alignContent;
  return (
    <>
      <div
        style={{
          display: isContainer ? 'flex' : undefined,
          flexDirection: direction === 'column' ? (reverse ? 'column' : 'column-reverse') : reverse ? 'row-reverse' : 'row',
          flexWrap: wrap || undefined,
          justifyContent: alignHorizontal,
          alignItems: alignVertical,
          alignContent: alignContent,
          order: styleItem?.order,
          flexGrow: styleItem?.grow,
          flexShrink: styleItem?.shrink,
          ...style,
        }}
        {...divprop}
      >
        {children}
      </div>
    </>
  );
};
