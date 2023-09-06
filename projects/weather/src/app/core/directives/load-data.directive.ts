import { Directive, EmbeddedViewRef, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

interface loadDataCtx<T> {  
  $implicit: T;  
  loadData: T;  
} 

// OJO: perdí mucho tiempo por no darme cuenta de que el nombre del selector debe coincidir con el nombre del contexto de la template,
// En este caso el selector es 'loadData' y el contexto debe ser '{$implicit: xxx, loadData: xxx}'
@Directive({
  selector: '[loadData]'
})
export class LoadDataDirective<T> implements OnDestroy {

  @Input() set loadData(value: T) {
    this.setValue(value);
  }

  private context: loadDataCtx<T> = { $implicit: null, loadData: null };
  private viewRef: EmbeddedViewRef<loadDataCtx<T>> =
    this.viewContainer.createEmbeddedView(this.templateRef, this.context);

  constructor(
    private templateRef: TemplateRef<loadDataCtx<T>>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnDestroy() {
    this.viewContainer.clear();
    if (this.viewRef) {
      this.viewRef.destroy();
      this.viewRef = null;
    }
  }

  private setValue(value: T): void {
    this.context.$implicit = this.context.loadData = value;
    if (this.viewRef) {
      this.viewRef.markForCheck();
    }
  }

}
