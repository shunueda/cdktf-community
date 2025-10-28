// https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssertsLogConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * DataSource to be queried (e.g., a Loki instance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#data_source_uid AssertsLogConfig#data_source_uid}
  */
  readonly dataSourceUid: string;
  /**
  * Is it the default config, therefore undeletable?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#default_config AssertsLogConfig#default_config}
  */
  readonly defaultConfig: boolean | cdktf.IResolvable;
  /**
  * Mapping of entity properties to log labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#entity_property_to_log_label_mapping AssertsLogConfig#entity_property_to_log_label_mapping}
  */
  readonly entityPropertyToLogLabelMapping?: { [key: string]: string };
  /**
  * Error label to filter logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#error_label AssertsLogConfig#error_label}
  */
  readonly errorLabel?: string;
  /**
  * Filter logs by span ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#filter_by_span_id AssertsLogConfig#filter_by_span_id}
  */
  readonly filterBySpanId?: boolean | cdktf.IResolvable;
  /**
  * Filter logs by trace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#filter_by_trace_id AssertsLogConfig#filter_by_trace_id}
  */
  readonly filterByTraceId?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#id AssertsLogConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the log configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#name AssertsLogConfig#name}
  */
  readonly name: string;
  /**
  * Priority of the log configuration. A lower number means a higher priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#priority AssertsLogConfig#priority}
  */
  readonly priority: number;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#match AssertsLogConfig#match}
  */
  readonly match?: AssertsLogConfigMatch[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#timeouts AssertsLogConfig#timeouts}
  */
  readonly timeouts?: AssertsLogConfigTimeouts;
}
export interface AssertsLogConfigMatch {
  /**
  * Operation to use for matching. One of: EQUALS, NOT_EQUALS, CONTAINS, DOES_NOT_CONTAIN, IS_NULL, IS_NOT_NULL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#op AssertsLogConfig#op}
  */
  readonly op: string;
  /**
  * Entity property to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#property AssertsLogConfig#property}
  */
  readonly property: string;
  /**
  * Values to match against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#values AssertsLogConfig#values}
  */
  readonly values: string[];
}

export function assertsLogConfigMatchToTerraform(struct?: AssertsLogConfigMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    property: cdktf.stringToTerraform(struct!.property),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function assertsLogConfigMatchToHclTerraform(struct?: AssertsLogConfigMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property: {
      value: cdktf.stringToHclTerraform(struct!.property),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssertsLogConfigMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssertsLogConfigMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._property !== undefined) {
      hasAnyValues = true;
      internalValueResult.property = this._property;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssertsLogConfigMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._property = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._property = value.property;
      this._values = value.values;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AssertsLogConfigMatchList extends cdktf.ComplexList {
  public internalValue? : AssertsLogConfigMatch[] | cdktf.IResolvable

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
  public get(index: number): AssertsLogConfigMatchOutputReference {
    return new AssertsLogConfigMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssertsLogConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#create AssertsLogConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#delete AssertsLogConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#read AssertsLogConfig#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#update AssertsLogConfig#update}
  */
  readonly update?: string;
}

export function assertsLogConfigTimeoutsToTerraform(struct?: AssertsLogConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function assertsLogConfigTimeoutsToHclTerraform(struct?: AssertsLogConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssertsLogConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssertsLogConfigTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssertsLogConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config grafana_asserts_log_config}
*/
export class AssertsLogConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana_asserts_log_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssertsLogConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssertsLogConfig to import
  * @param importFromId The id of the existing AssertsLogConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssertsLogConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana_asserts_log_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana/4.12.0/docs/resources/asserts_log_config grafana_asserts_log_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssertsLogConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AssertsLogConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana_asserts_log_config',
      terraformGeneratorMetadata: {
        providerName: 'grafana',
        providerVersion: '4.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataSourceUid = config.dataSourceUid;
    this._defaultConfig = config.defaultConfig;
    this._entityPropertyToLogLabelMapping = config.entityPropertyToLogLabelMapping;
    this._errorLabel = config.errorLabel;
    this._filterBySpanId = config.filterBySpanId;
    this._filterByTraceId = config.filterByTraceId;
    this._id = config.id;
    this._name = config.name;
    this._priority = config.priority;
    this._match.internalValue = config.match;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_source_uid - computed: false, optional: false, required: true
  private _dataSourceUid?: string; 
  public get dataSourceUid() {
    return this.getStringAttribute('data_source_uid');
  }
  public set dataSourceUid(value: string) {
    this._dataSourceUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceUidInput() {
    return this._dataSourceUid;
  }

  // default_config - computed: false, optional: false, required: true
  private _defaultConfig?: boolean | cdktf.IResolvable; 
  public get defaultConfig() {
    return this.getBooleanAttribute('default_config');
  }
  public set defaultConfig(value: boolean | cdktf.IResolvable) {
    this._defaultConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigInput() {
    return this._defaultConfig;
  }

  // entity_property_to_log_label_mapping - computed: false, optional: true, required: false
  private _entityPropertyToLogLabelMapping?: { [key: string]: string }; 
  public get entityPropertyToLogLabelMapping() {
    return this.getStringMapAttribute('entity_property_to_log_label_mapping');
  }
  public set entityPropertyToLogLabelMapping(value: { [key: string]: string }) {
    this._entityPropertyToLogLabelMapping = value;
  }
  public resetEntityPropertyToLogLabelMapping() {
    this._entityPropertyToLogLabelMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityPropertyToLogLabelMappingInput() {
    return this._entityPropertyToLogLabelMapping;
  }

  // error_label - computed: false, optional: true, required: false
  private _errorLabel?: string; 
  public get errorLabel() {
    return this.getStringAttribute('error_label');
  }
  public set errorLabel(value: string) {
    this._errorLabel = value;
  }
  public resetErrorLabel() {
    this._errorLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLabelInput() {
    return this._errorLabel;
  }

  // filter_by_span_id - computed: false, optional: true, required: false
  private _filterBySpanId?: boolean | cdktf.IResolvable; 
  public get filterBySpanId() {
    return this.getBooleanAttribute('filter_by_span_id');
  }
  public set filterBySpanId(value: boolean | cdktf.IResolvable) {
    this._filterBySpanId = value;
  }
  public resetFilterBySpanId() {
    this._filterBySpanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterBySpanIdInput() {
    return this._filterBySpanId;
  }

  // filter_by_trace_id - computed: false, optional: true, required: false
  private _filterByTraceId?: boolean | cdktf.IResolvable; 
  public get filterByTraceId() {
    return this.getBooleanAttribute('filter_by_trace_id');
  }
  public set filterByTraceId(value: boolean | cdktf.IResolvable) {
    this._filterByTraceId = value;
  }
  public resetFilterByTraceId() {
    this._filterByTraceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByTraceIdInput() {
    return this._filterByTraceId;
  }

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // match - computed: false, optional: true, required: false
  private _match = new AssertsLogConfigMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: AssertsLogConfigMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AssertsLogConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AssertsLogConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_source_uid: cdktf.stringToTerraform(this._dataSourceUid),
      default_config: cdktf.booleanToTerraform(this._defaultConfig),
      entity_property_to_log_label_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(this._entityPropertyToLogLabelMapping),
      error_label: cdktf.stringToTerraform(this._errorLabel),
      filter_by_span_id: cdktf.booleanToTerraform(this._filterBySpanId),
      filter_by_trace_id: cdktf.booleanToTerraform(this._filterByTraceId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      match: cdktf.listMapper(assertsLogConfigMatchToTerraform, true)(this._match.internalValue),
      timeouts: assertsLogConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_source_uid: {
        value: cdktf.stringToHclTerraform(this._dataSourceUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_config: {
        value: cdktf.booleanToHclTerraform(this._defaultConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entity_property_to_log_label_mapping: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._entityPropertyToLogLabelMapping),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      error_label: {
        value: cdktf.stringToHclTerraform(this._errorLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_by_span_id: {
        value: cdktf.booleanToHclTerraform(this._filterBySpanId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_by_trace_id: {
        value: cdktf.booleanToHclTerraform(this._filterByTraceId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match: {
        value: cdktf.listMapperHcl(assertsLogConfigMatchToHclTerraform, true)(this._match.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssertsLogConfigMatchList",
      },
      timeouts: {
        value: assertsLogConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AssertsLogConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
