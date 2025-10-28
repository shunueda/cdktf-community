// https://registry.terraform.io/providers/uptime-com/uptime/2.15.0/docs/data-sources/statuspage_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUptimeStatuspageMetricsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the status page to retrieve metrics for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.15.0/docs/data-sources/statuspage_metrics#statuspage_id DataUptimeStatuspageMetrics#statuspage_id}
  */
  readonly statuspageId: number;
}
export interface DataUptimeStatuspageMetricsMetrics {
}

export function dataUptimeStatuspageMetricsMetricsToTerraform(struct?: DataUptimeStatuspageMetricsMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUptimeStatuspageMetricsMetricsToHclTerraform(struct?: DataUptimeStatuspageMetricsMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUptimeStatuspageMetricsMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataUptimeStatuspageMetricsMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUptimeStatuspageMetricsMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_visible - computed: true, optional: false, required: false
  public get isVisible() {
    return this.getBooleanAttribute('is_visible');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataUptimeStatuspageMetricsMetricsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataUptimeStatuspageMetricsMetricsOutputReference {
    return new DataUptimeStatuspageMetricsMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.15.0/docs/data-sources/statuspage_metrics uptime_statuspage_metrics}
*/
export class DataUptimeStatuspageMetrics extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_statuspage_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUptimeStatuspageMetrics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUptimeStatuspageMetrics to import
  * @param importFromId The id of the existing DataUptimeStatuspageMetrics that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.15.0/docs/data-sources/statuspage_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUptimeStatuspageMetrics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_statuspage_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.15.0/docs/data-sources/statuspage_metrics uptime_statuspage_metrics} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUptimeStatuspageMetricsConfig
  */
  public constructor(scope: Construct, id: string, config: DataUptimeStatuspageMetricsConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_statuspage_metrics',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._statuspageId = config.statuspageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataUptimeStatuspageMetricsMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }

  // statuspage_id - computed: false, optional: false, required: true
  private _statuspageId?: number; 
  public get statuspageId() {
    return this.getNumberAttribute('statuspage_id');
  }
  public set statuspageId(value: number) {
    this._statuspageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statuspageIdInput() {
    return this._statuspageId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      statuspage_id: cdktf.numberToTerraform(this._statuspageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      statuspage_id: {
        value: cdktf.numberToHclTerraform(this._statuspageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
