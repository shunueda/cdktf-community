// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/openpipeline_v2_davis_problems_routing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenpipelineV2DavisProblemsRoutingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/openpipeline_v2_davis_problems_routing#id OpenpipelineV2DavisProblemsRouting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * routing_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/openpipeline_v2_davis_problems_routing#routing_entries OpenpipelineV2DavisProblemsRouting#routing_entries}
  */
  readonly routingEntries?: OpenpipelineV2DavisProblemsRoutingRoutingEntries;
}
export interface OpenpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntry {
  /**
  * Builtin Pipeline ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/openpipeline_v2_davis_problems_routing#builtin_pipeline_id OpenpipelineV2DavisProblemsRouting#builtin_pipeline_id}
  */
  readonly builtinPipelineId?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/openpipeline_v2_davis_problems_routing#description OpenpipelineV2DavisProblemsRouting#description}
  */
  readonly description: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/openpipeline_v2_davis_problems_routing#enabled OpenpipelineV2DavisProblemsRouting#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Query which determines whether the record should be routed to the target pipeline of this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/openpipeline_v2_davis_problems_routing#matcher OpenpipelineV2DavisProblemsRouting#matcher}
  */
  readonly matcher: string;
  /**
  * Pipeline ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/openpipeline_v2_davis_problems_routing#pipeline_id OpenpipelineV2DavisProblemsRouting#pipeline_id}
  */
  readonly pipelineId?: string;
  /**
  * Pipeline Type. Possible Values: `builtin`, `custom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/openpipeline_v2_davis_problems_routing#pipeline_type OpenpipelineV2DavisProblemsRouting#pipeline_type}
  */
  readonly pipelineType: string;
}

export function openpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntryToTerraform(struct?: OpenpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    builtin_pipeline_id: cdktf.stringToTerraform(struct!.builtinPipelineId),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    matcher: cdktf.stringToTerraform(struct!.matcher),
    pipeline_id: cdktf.stringToTerraform(struct!.pipelineId),
    pipeline_type: cdktf.stringToTerraform(struct!.pipelineType),
  }
}


export function openpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntryToHclTerraform(struct?: OpenpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    builtin_pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.builtinPipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    matcher: {
      value: cdktf.stringToHclTerraform(struct!.matcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_id: {
      value: cdktf.stringToHclTerraform(struct!.pipelineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_type: {
      value: cdktf.stringToHclTerraform(struct!.pipelineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OpenpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtinPipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtinPipelineId = this._builtinPipelineId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._matcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.matcher = this._matcher;
    }
    if (this._pipelineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineId = this._pipelineId;
    }
    if (this._pipelineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineType = this._pipelineType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._builtinPipelineId = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._matcher = undefined;
      this._pipelineId = undefined;
      this._pipelineType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._builtinPipelineId = value.builtinPipelineId;
      this._description = value.description;
      this._enabled = value.enabled;
      this._matcher = value.matcher;
      this._pipelineId = value.pipelineId;
      this._pipelineType = value.pipelineType;
    }
  }

  // builtin_pipeline_id - computed: false, optional: true, required: false
  private _builtinPipelineId?: string; 
  public get builtinPipelineId() {
    return this.getStringAttribute('builtin_pipeline_id');
  }
  public set builtinPipelineId(value: string) {
    this._builtinPipelineId = value;
  }
  public resetBuiltinPipelineId() {
    this._builtinPipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtinPipelineIdInput() {
    return this._builtinPipelineId;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // matcher - computed: false, optional: false, required: true
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
  }

  // pipeline_id - computed: false, optional: true, required: false
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  public resetPipelineId() {
    this._pipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // pipeline_type - computed: false, optional: false, required: true
  private _pipelineType?: string; 
  public get pipelineType() {
    return this.getStringAttribute('pipeline_type');
  }
  public set pipelineType(value: string) {
    this._pipelineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineTypeInput() {
    return this._pipelineType;
  }
}

export class OpenpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntryList extends cdktf.ComplexList {
  public internalValue? : OpenpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntry[] | cdktf.IResolvable

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
  public get(index: number): OpenpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntryOutputReference {
    return new OpenpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpenpipelineV2DavisProblemsRoutingRoutingEntries {
  /**
  * routing_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/openpipeline_v2_davis_problems_routing#routing_entry OpenpipelineV2DavisProblemsRouting#routing_entry}
  */
  readonly routingEntry: OpenpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntry[] | cdktf.IResolvable;
}

export function openpipelineV2DavisProblemsRoutingRoutingEntriesToTerraform(struct?: OpenpipelineV2DavisProblemsRoutingRoutingEntriesOutputReference | OpenpipelineV2DavisProblemsRoutingRoutingEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_entry: cdktf.listMapper(openpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntryToTerraform, true)(struct!.routingEntry),
  }
}


export function openpipelineV2DavisProblemsRoutingRoutingEntriesToHclTerraform(struct?: OpenpipelineV2DavisProblemsRoutingRoutingEntriesOutputReference | OpenpipelineV2DavisProblemsRoutingRoutingEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_entry: {
      value: cdktf.listMapperHcl(openpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntryToHclTerraform, true)(struct!.routingEntry),
      isBlock: true,
      type: "list",
      storageClassType: "OpenpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenpipelineV2DavisProblemsRoutingRoutingEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenpipelineV2DavisProblemsRoutingRoutingEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingEntry = this._routingEntry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenpipelineV2DavisProblemsRoutingRoutingEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routingEntry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routingEntry.internalValue = value.routingEntry;
    }
  }

  // routing_entry - computed: false, optional: false, required: true
  private _routingEntry = new OpenpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntryList(this, "routing_entry", false);
  public get routingEntry() {
    return this._routingEntry;
  }
  public putRoutingEntry(value: OpenpipelineV2DavisProblemsRoutingRoutingEntriesRoutingEntry[] | cdktf.IResolvable) {
    this._routingEntry.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingEntryInput() {
    return this._routingEntry.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/openpipeline_v2_davis_problems_routing dynatrace_openpipeline_v2_davis_problems_routing}
*/
export class OpenpipelineV2DavisProblemsRouting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_openpipeline_v2_davis_problems_routing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenpipelineV2DavisProblemsRouting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenpipelineV2DavisProblemsRouting to import
  * @param importFromId The id of the existing OpenpipelineV2DavisProblemsRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/openpipeline_v2_davis_problems_routing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenpipelineV2DavisProblemsRouting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_openpipeline_v2_davis_problems_routing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/openpipeline_v2_davis_problems_routing dynatrace_openpipeline_v2_davis_problems_routing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenpipelineV2DavisProblemsRoutingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpenpipelineV2DavisProblemsRoutingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_openpipeline_v2_davis_problems_routing',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._routingEntries.internalValue = config.routingEntries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // routing_entries - computed: false, optional: true, required: false
  private _routingEntries = new OpenpipelineV2DavisProblemsRoutingRoutingEntriesOutputReference(this, "routing_entries");
  public get routingEntries() {
    return this._routingEntries;
  }
  public putRoutingEntries(value: OpenpipelineV2DavisProblemsRoutingRoutingEntries) {
    this._routingEntries.internalValue = value;
  }
  public resetRoutingEntries() {
    this._routingEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingEntriesInput() {
    return this._routingEntries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      routing_entries: openpipelineV2DavisProblemsRoutingRoutingEntriesToTerraform(this._routingEntries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_entries: {
        value: openpipelineV2DavisProblemsRoutingRoutingEntriesToHclTerraform(this._routingEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpenpipelineV2DavisProblemsRoutingRoutingEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
