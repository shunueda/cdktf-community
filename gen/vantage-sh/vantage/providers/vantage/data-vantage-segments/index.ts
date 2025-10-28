// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/segments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVantageSegmentsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataVantageSegmentsSegments {
}

export function dataVantageSegmentsSegmentsToTerraform(struct?: DataVantageSegmentsSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageSegmentsSegmentsToHclTerraform(struct?: DataVantageSegmentsSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageSegmentsSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageSegmentsSegments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageSegmentsSegments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // parent_segment_token - computed: true, optional: false, required: false
  public get parentSegmentToken() {
    return this.getStringAttribute('parent_segment_token');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // report_token - computed: true, optional: false, required: false
  public get reportToken() {
    return this.getStringAttribute('report_token');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // track_unallocated - computed: true, optional: false, required: false
  public get trackUnallocated() {
    return this.getBooleanAttribute('track_unallocated');
  }

  // workspace_token - computed: true, optional: false, required: false
  public get workspaceToken() {
    return this.getStringAttribute('workspace_token');
  }
}

export class DataVantageSegmentsSegmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageSegmentsSegmentsOutputReference {
    return new DataVantageSegmentsSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/segments vantage_segments}
*/
export class DataVantageSegments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_segments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVantageSegments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVantageSegments to import
  * @param importFromId The id of the existing DataVantageSegments that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/segments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVantageSegments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_segments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/segments vantage_segments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVantageSegmentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVantageSegmentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vantage_segments',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // segments - computed: true, optional: false, required: false
  private _segments = new DataVantageSegmentsSegmentsList(this, "segments", false);
  public get segments() {
    return this._segments;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
